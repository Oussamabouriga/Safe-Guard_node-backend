const mongoose = require('mongoose');


const trajetSecurise = new mongoose.Schema({
    iduser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    latitudeDeZoneDanger: Number,
    longitudeDeZoneDanger: Number
});
module.exports = mongoose.model('trajetSecurise', trajetSecurise);