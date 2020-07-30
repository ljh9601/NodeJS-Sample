const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: String,
  pw: String,
  name: String,
  age: String
});
module.exports = mongoose.model('User', userSchema);