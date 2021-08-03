const ConstructorUser = require("../models/user");
const ConstructorAdmin = require("../models/admin");

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
  let userName = req.body.name;
  let userAge = req.body.age;
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  let userPhotoName;
  if (req.file) {
    userPhotoName = req.file.filename;
  } else {
    userPhotoName = "unknownUser.jpg";
  }

  if (userEmail === "admin@admin.admin" && userPassword === "admin") {
    var user = new ConstructorAdmin.Admin({
      name: userName,
      age: userAge,
      email: userEmail,
      login: userEmail,
      password: userPassword,
      photoName: "AdminPhoto.jpg",
    });
  } else {
    var user = new ConstructorUser.User({
      name: userName,
      age: userAge,
      email: userEmail,
      login: userEmail,
      password: userPassword,
      photoName: userPhotoName,
    });
  }
  try {
    user.save(function (err) {
      if (err) return console.log(err);
      res.render("index", {
        isIndex: true,
        title: "Index",
      });
    });
  } catch (err) {
    console.log(err);
  }
};

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
  let id;
  let _login = req.body.login;
  let _password = req.body.password;
  let user = await ConstructorUser.User.findOne({
    login: _login,
    password: _password,
  }).exec();

  if (!user) {
    let admin = await ConstructorAdmin.Admin.findOne({
      login: _login,
      password: _password,
    }).exec();

    if (!admin) {
      res.status(400);
    }
    id = admin._id;
    console.log(id);
    res.redirect(`profile/${id}`);
  }
  id = user._id;
  console.log(id);
  res.redirect(`profile/${id}`);
};

exports.getProfile = async function (res, req) {
  let id = req.params.id;
  let user = await ConstructorUser.User.findById(id);
  if (!user) {
    let admin = await ConstructorAdmin.User.findById(id);
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
