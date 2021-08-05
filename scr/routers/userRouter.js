const userController = require("../controllers/userController");
const photo = require("../middleware/photo");

module.exports = function (app) {
  app.get("/user/create", userController.getCreate);//form input data
  app.post("/user/create", photo.single("photo"), userController.postProfile);//add user
  //app.put("/user/:id", photo.single("photo"));//change user
  app.get("/user/profile/:id", userController.getProfile);//get profile by query-string id

}

