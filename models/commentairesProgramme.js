const mongoose = require('mongoose');



const commentairesProgramme= new mongoose.Schema({
    textCommentaire: String,
    idProgrammme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Programme'
    }
});
module.exports = mongoose.model('CommentairesProgramme', commentairesProgramme);