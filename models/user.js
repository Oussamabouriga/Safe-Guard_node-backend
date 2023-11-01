const mongoose = require('mongoose');

const user = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    latitudeDeUser: Number,
    longitudeDeUser: Number,
    numeroTel: String
});

module.exports = mongoose.model('User', user);