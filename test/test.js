var supertest = require('supertest');
var should = require('should');

// This agent refers to PORT where program is runninng.
var server = supertest.agent('http://localhost:8080');

// UNIT test begin
describe('Test',function() {

    it('should add a user',function(done) {
        server
        .post('/user/add')
        .send({user : 'matt', email : 'mateusweb@gmail.com'})
        .expect('Content-type',/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    });

    it('should list users, no more than 3',function(done) {
        server
        .get('/user/list/page/1')
        .expect('Content-type',/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            let size = res.body.users.length < 4
            size.should.equal(true);
            done();
        });
    });

    it('should trigger an error for no email submited',function(done) {
        server
        .post('/user/add')
        .send({user : 'matt'})
        .expect('Content-type',/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(404);
            done();
        });
    });

    it('should trigger an error for no user submited',function(done) {
        server
        .post('/user/add')
        .send({email : 'mateusweb@gmail.com'})
        .expect('Content-type',/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(404);
            done();
        });
    });

});
