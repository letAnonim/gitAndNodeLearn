const { User, Admin, AdminLord } = require("../db");

exports.authUser = async function (login, password) {
  let user = User.findOne({}, function (err) {
    console.log(err);
  }).exec();
  if (!user) {
    let admin = Admin.findOne({}, function (err) {
      console.log(err);
    }).exec();
    if (!admin) {
      let adminLord = AdminLord.findOne({}, function (err) {
        console.log(err);
      }).exec();
      if (!adminLord) {
        console.log("User not find");
        return null;
      }
      return adminLord;
    }
    return admin;
  }
  return user;
}

exports.changeUserAuth = async function (id, login, password) {
  await User.findByIdAndUpdate(id, { login: login, password: password }, function (err) {
    if (err) console.log(err);
  });
}

exports.changeAdminAuth = async function (id, login, password) {
  await Admin.findByIdAndUpdate(id, { login: login, password: password }, function (err) {
    if (err) console.log(err);
  });
}
