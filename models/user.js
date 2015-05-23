/**
 * Created by Donald on 5/22/2015.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

var User = mongoose.model("User", userSchema);

module.exports = User;