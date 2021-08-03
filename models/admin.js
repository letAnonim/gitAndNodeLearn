const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const userModel = require("./user");
const extendSchema = require("mongoose-extend-schema");

const adminSchema = extendSchema(userModel.UserSchema, {
  access: {
    type: Boolean,
    default: true,
  },
});

exports.Admin = new model("Admin", adminSchema);
exports.AdminSchema = adminSchema;
