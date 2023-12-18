const mongoose = require('mongoose');

const etudiantDetail = mongoose.Schema({
    nom : {
        type : String,
        required : true,
        maxlength : 20,
        uppercase : true,
    },
    prenom: {
        type : String,
        required : true,
        uppercase : true,
        maxlength : 20,
    },
    age: {
        type: Number,
        min : 0,
    },
    classe : {
        type: String,
    }
});

const model = mongoose.model('DetailEtudiant', etudiantDetail);

module.exports = model;