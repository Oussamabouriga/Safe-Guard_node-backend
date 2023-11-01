const mongoose = require('mongoose');


const reclamation = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    titre: String,
    descriptionReclamation: String,
    dateDePrevention: Date,
    statut: String,
    image: String
});
module.exports = mongoose.model('Reclamation', reclamation);