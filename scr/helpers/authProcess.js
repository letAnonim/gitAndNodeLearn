const { User, Admin, AdminLord } = require("../db");

exports.authUser = async function (login, password) {
  let user;
  user = await User.findOne({ login: login, password: password }, function (err) {
    if (err) console.log(err);
  }).lean();
  if (!user) {
    user = await Admin.findOne({ login: login, password: password }, function (err) {
      if (err) console.log(err);
    }).lean();
    if (!user) {
      user = await AdminLord.findOne({ login: login, password: password }, function (err) {
        if (err) console.log(err);
      }).lean();
    }
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
