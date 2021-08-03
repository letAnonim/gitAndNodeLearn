const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/homeController");

homeRouter.get("/", homeController.getIndex);
homeRouter.get("/about", homeController.getAbout);

module.exports = homeRouter;
