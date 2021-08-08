const express = require("express");
const exphbs = require("express-handlebars");
const config = require("./scr/config");
const errorHandler = require("./scr/errors/errorHandler");
const cors = require("cors");
const { setUpRouter } = require("./scr/routers");
const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "scr/views");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

setUpRouter(app);
app.listen(config.app.port, () => {
  console.log("Server is start on port " + config.app.port);
})

app.use(errorHandler)
