const mongoose = require('mongoose');

const programme = new mongoose.Schema({
    Titre: String,
    descriptionProgramme: String,
    image : String,
});
module.exports = mongoose.model('Programme', programme);