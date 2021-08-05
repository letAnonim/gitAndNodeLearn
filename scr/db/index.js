const config = require("../config");
const mongoose = require("mongoose");
const optionsDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
}


mongoose.connect(config.mongoDb.urlDb, optionsDB).then(() => {
  console.log("DB is connected");
}).catch(err => {
  console.log(err);
});

let { User } = require("./models/user")
let { Admin } = require("./models/admin");
let { AdminLord } = require("./models/adminLord");
module.exports = {
  User,
  Admin,
  AdminLord,
}