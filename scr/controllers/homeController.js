exports.getIndex = function (req, res) {
  res.render("index", {
    isIndex: true,
    title: "Home",
  });
};

exports.getAbout = function (req, res) {
  res.render("about", {
    isAbout: true,
    title: "About",
  });
};
