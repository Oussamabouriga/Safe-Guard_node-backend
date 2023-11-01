const mongoose = require('mongoose');


const notification = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    typeNotification: String,
    idReclamation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reclamation'
    },
    date: Date
});
module.exports = mongoose.model('Notification', notification);