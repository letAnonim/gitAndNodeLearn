const userController = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();
const photo = require("../middleware/photo");

userRouter.use(function (request, response, next) {
  if (request.body.name) {
    console.log(`name - ${requst.body.name}`);
  }
  next();
});
userRouter.get("/create", userController.getCreate);
userRouter.post("/profile", photo.single("photo"), userController.postProfile);
userRouter.get("/profile/:id", userController.getProfile);
userRouter.get("/authorization", userController.getAuthorization);
userRouter.post("/authorization", userController.postAuthorization);

module.exports = userRouter;
