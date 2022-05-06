const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    eventsAttended: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Users', UserSchema);