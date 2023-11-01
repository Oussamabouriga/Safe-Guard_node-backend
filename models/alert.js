const mongoose = require('mongoose');

const alert = new mongoose.Schema({
    type: String,
    description: String,
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Alerts', alert);