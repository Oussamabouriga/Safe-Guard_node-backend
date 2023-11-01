const mongoose = require('mongoose');

const catastrophe = new mongoose.Schema({
    titre: String,
    description: String,
    date: Date,
    raduis: Number,
    magnitude: Number,
    latitudeDeCatastrophe: Number,
    longitudeDeCatastrophe: Number
});

module.exports = mongoose.model('Catastrophe', catastrophe);