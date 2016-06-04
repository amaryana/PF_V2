var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  guide: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
