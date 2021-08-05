const logErrors = require("./logErrorHandler");
module.exports = function errorHandler(err, req, res, next) {
  if (err.statusCode != 200 && err.statusCode != 400) {
    logErrors(err);
  }
  return res
    .statusCode(err.statusCode)
    .json({ visible: err.visible, message: err.message });
};

