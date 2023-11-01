const mongoose = require('mongoose');

const favorite = new mongoose.Schema({
  iduser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  idRessourceProgramme: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RessourceProgramme', 
  }],
  videoFavorie: [{
    type: String, 
  }],
 
});

module.exports = mongoose.model('Favorite', favorite);

