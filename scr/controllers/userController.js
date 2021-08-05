const ConstructorUser = require("../db/models/user");
const ConstructorAdmin = require("../db/models/admin");
const userProcess = require("../helpers/userProcess");
exports.getCreate = function (req, res) {
  res.render("create", {
    title: "Create user",
    isProfile: true,
  });
};

exports.postProfile = function (req, res) {
  if (!req.body) {
    res.statusCode(400);
  }
  for (let key in req.body) {
    console.log(`${key} - ${req.body[key]}`)
  }
  userProcess.addUser(req.body);
  res.redirect("/user/authorization");
};



exports.getProfile = function (res, req) {
  let id = req.params.id;
  let user = userProcess.getUser(id);
  if (!user) {
    let admin = userProcess.getAdmin(id);
    res.render("profile", {
      isProfile: true,
      title: "Profile admin",
      getInfo: "You admin-user ",
      name: admin.name,
      age: admin.age,
      email: admin.email,
      photoName: admin.photoName,
    });
  }
  res.render("profile", {
    isProfile: true,
    title: "Profile user",
    getInfo: "You simple user",
    name: user.name,
    age: user.age,
    email: user.email,
    photoName: user.photoName,
  });
};
