const { User, Admin, AdminLord } = require("../db");
const authProcess = require("../helpers/authProcess");

exports.getAuthorization = function (req, res) {
  res.render("authorization", {
    title: "authorization",
    isAuthorization: true,
  });
};

exports.postAuthorization = async function (req, res) {
  if (!req.body) {
    res.status(400);
  }
  let _login = req.body.login;
  let _password = req.body.password
  let user;
  user = User.findOne({ login: _login, password: _password }, function (err) {
    if (err) console.log(err);
  });
  if (!user) {
    user = Admin.findOne({ login: _login, password: _password }, function (err) {
      if (err) console.log(err);
    });
    if (!user) {
      user = AdminLord.findOne({ login: _login, password: _password }, function (err) {
        if (err) console.log(err);
      });
    }
  }
  res.redirect(`/user/profile/${user._id}`);
};
