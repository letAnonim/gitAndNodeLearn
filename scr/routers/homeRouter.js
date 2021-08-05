const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.get("/", homeController.getIndex);
  app.get("/about", homeController.getAbout);
}
