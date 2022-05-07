const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose').connect(
  process.env.MONGODB_URI,
  { UseNewUrlParser: true });
module.exports = mongoose;
