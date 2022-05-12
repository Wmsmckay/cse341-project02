const mongoose = require('mongoose');

const authUserSchema = new mongoose.Schema({
  googleId: {
    type: String
  },
  displayName: {
    type: String
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AuthUsers', authUserSchema);
