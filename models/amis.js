const mongoose = require('mongoose');

const user = new mongoose.Schema({
    nomAmis: {
        type: String,
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
});

module.exports = mongoose.model('Amis', amis);