const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/ts-challenge',
    { useNewUrlParser: true }
  )
  .then( () => console.log('Database Connected') )
  .catch( err => console.log(err) );

const User = require('./models/User');

// Set Express to use EJS
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );
app.use(bodyParser.urlencoded({ extended: false }));

app.get( '/', ( req, res ) => {
    res.json({'version': 1.0})
});

app.get('/user/list/page/:page', (req, res) => {
    const pageSize = 3
    const page = req.params.page-1;

    User.find()
        .limit( pageSize )
        .skip( pageSize*page )
        .then( users => res.json({ users }) )
        .catch( err => res.status(404).json({ status: 'Users not found' }) );
});

app.post('/user/add', (req, res) => {

    const newUser = new User({
        user: req.body.user,
        email: req.body.email
    });

    newUser.save()
           .then( user => res.json({ status: 'success' }) )
           .catch( err => res.status(404).json({ status: err } ))

});

app.post('/user/search', ( req, res ) => {
    const crit = new RegExp(req.body.user);
    const user = req.body.user === '' || req.body.user === undefined ? {} : {$or: [{ user: crit },{ email: crit }]};

    User.find( user )
        .then( users => res.json({ users }) )
        .catch( err => res.status(404).json({ result: 'Users not found' }) );
});

app.all( '/sample', ( req, res ) => {
    const crit = new RegExp(req.body.search);
    const search = req.body.search === '' || req.body.search === undefined ? {} : {$or: [{ user: crit },{ email: crit }]};

    User.find( search )
        .then( users => res.render('index', { users }) )
        .catch( err => res.status(404).json({ result: 'Users not found' }) );
});

app.listen( port, () => {
    console.log( `running at http://localhost:${ port }` );
});
