const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGOD_URL);

module.exports = connection;
