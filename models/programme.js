const mongoose = require('mongoose');

const programme = new mongoose.Schema({
    Titre: String,
    descriptionProgramme: String
});
module.exports = mongoose.model('Programme', programme);