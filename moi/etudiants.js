const mongoose = require('mongoose');

const etudiantDetail = mongoose.Schema({
    nom : String,
    prenom: String,
    age: Number,
});

const model = mongoose.model('DetailEtudiant', etudiantDetail);

module.exports = model;