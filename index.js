const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const path = require("path");
const homeRouter = require("./routers/homeRouter");
const userRouter = require("./routers/userRouter");

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
const PORT = process.env.PORT || 3000;

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use("/", homeRouter);
app.use("/user", userRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://illia:admin@cluster0.rkg3z.mongodb.net/UsersDatabase",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );

    app.listen(PORT, () => {
      console.log("Server has been started");
    });
  } catch (err) {
    console.log(err);
  }
}

start();
