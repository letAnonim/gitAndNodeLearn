const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
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
    default: "AdminPhoto.jpg",
    required: false,
  },
  access: {
    type: Boolean,
    default: true,
  },
});

exports.Admin = mongoose.model("Admin", adminSchema);
