const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {
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
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  photoName: {
    type: String,
    required: false,
    default: "unknownUser.jpg"
  },
});
exports.User = mongoose.model("User", userSchema);

