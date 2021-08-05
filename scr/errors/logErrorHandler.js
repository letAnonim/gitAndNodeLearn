module.exports = function logErrors(err) {
  console.error(`ERROR CODE =>> ${err.statusCode}`);
  console.error(`ERROR =>> ${err}`);
};
