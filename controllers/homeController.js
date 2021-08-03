exports.getIndex = function (req, res) {
  res.render("index", {
    isIndex: true,
  });
};

exports.getAbout = function (req, res) {
  res.render("about", {
    isAbout: true,
  });
};
