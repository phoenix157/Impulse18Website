var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    // unique: true,
    required: true,
    trim: true
  },
  mobile:{
      type: String,
      required: true
  },
  college:{
      type: String,
      required:true
  },
  github:{
      type:String,
      required:true
  
  },
  teamname:{
    type:String,
    required: false
  }


});


var User = mongoose.model('maithacks', UserSchema);
module.exports = User;

