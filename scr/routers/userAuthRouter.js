const authController = require("../controllers/authController")

module.exports = function (app) {

  app.get("/user/authorization", authController.getAuthorization);//auth form
  app.post("/user/authorization", authController.postAuthorization);//auth in db

}