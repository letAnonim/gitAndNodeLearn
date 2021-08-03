const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120,
  },
  login: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  photoName: {
    type: String,
    required: false,
  },
});
exports.User = new model("User", userSchema);
exports.UserSchema = userSchema;
