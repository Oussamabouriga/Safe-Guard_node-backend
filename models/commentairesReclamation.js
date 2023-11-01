const mongoose = require('mongoose');


const commentairesReclamation = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    idReclamation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reclamation'
    },
    descriptionCommentaire: String
});
module.exports = mongoose.model('CommentairesReclamation', commentairesReclamation);