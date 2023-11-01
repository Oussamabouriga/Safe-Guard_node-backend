const mongoose = require('mongoose');


const ressourceProgramme= new mongoose.Schema({
    idProgrammme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Programme'
    },
    video: String,
    photo: String,
    description: String
});
module.exports = mongoose.model('RessourceProgramme', ressourceProgramme);