const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: {
    type: String,
    required: 'user is required'
  },
  email: {
    type: String,
    required: 'email is required'
  },
  insertDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
