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
  let user = await authProcess.authUser(_login, _password);
  res.redirect(`/user/profile/${user._id}`);
};
