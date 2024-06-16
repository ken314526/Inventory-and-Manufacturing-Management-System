module.exports = async function (req, res, next) {
  console.log(req.method, req.url, res.statusCode);
  next();
};
