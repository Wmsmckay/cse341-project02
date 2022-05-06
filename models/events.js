const array = require('@hapi/joi/lib/types/array');
const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  eventName: { type: String },
  participants: { type: array },
  location: { type: String },
  description: { type: String },
  host: { type: String }
});

module.exports = mongoose.model('Events', EventSchema);
