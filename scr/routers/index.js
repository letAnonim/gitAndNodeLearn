exports.setUpRouter = function(app) {
  try {
    require("./userAuthRouter")(app);
    require("./userRouter")(app);
    require("./homeRouter")(app);
  } catch (err) {
    console.log(err);
  }

}
