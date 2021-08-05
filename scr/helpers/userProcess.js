const { User, Admin, AdminLord } = require("../db");
const config = require("../config");

exports.getUsers = async function getUsers() {
  let users = await User.find();
  return users;
}

exports.getUser = async function getUser(id) {
  let user = await User.findById(id);
  if (user) {
    return user;
  } else {
    console.log("Error 400");
  }
}

exports.getAdmin = async function getAdmin(id) {
  let admin = await Admin.findById(id);
  if (admin) {
    return admin;
  } else {
    console.log("Error 400");
  }
}
exports.addUser = function (data) {

  if (!data.name || !data.age || !data.login || !data.email || !data.password) {
    return new Error("Status 400");
  } else {
    let user;
    if (data.login == config.admin.login && data.password == config.admin.password) {
      user = Admin({
        name: data.name,
        age: data.age,
        login: data.login,
        email: data.email,
        password: data.password,
        photoName: data.photoName,
      });
    } else if (data.login == config.adminLord.login && data.password == config.adminLord.login) {
      user = AdminLord({
        name: data.name,
        age: data.age,
        login: data.login,
        email: data.email,
        password: data.password,
        photoName: data.photoName,
      })
    } else {
      user = User({
        name: data.name,
        age: data.age,
        login: data.login,
        email: data.email,
        password: data.password,
        photoName: data.photoName,
      })
    }
    try {
      user.save(function (err) {
        if (err) return console.log(err);
        console.log("user save");
      });
    } catch (err) {
      console.log(err);
    }
  }
}

exports.removeUser = function (id) {
  if (!id) {
    console.log("Error 400");
  } else {
    User.findByIdAndDelete(id, function (err, user) {
      if (err) console.log(err);
    });
  }
}

exports.removeAdmin = function (id) {
  if (!id) {
    console.log("Error 400");
  } else {
    Admin.findByIdAndDelete(id, function (err) {
      if (err) console.log(err);
    });
  }
}

exports.changeUserInfo = function (id, data) {
  let updateData;
  for (let key in data) {
    if (key !== "password" || key !== "login") {
      updateData.key = data[key];
    }
  }
  User.findByIdAndUpdate(id, updateData, function (err) {
    if (err) console.log(err);
  })
}
exports.changeAdminInfo = function (id, data) {
  let updateData;
  for (let key in data) {
    if (key !== "password" || key !== "login", key !== "access") {
      updateData.key = data[key];
    }
  }
  Admin.findByIdAndUpdate(id, updateData, function (err) {
    if (err) console.log(err);
  })
}


