const mongoose = require('mongoose');
const Etudiant = require('../moi/etudiants')


const connexionMongoDb = async()=> {
    try {
        await mongoose.connect("mongodb://localhost/myDatabase");
        console.log('Connexion reussie avec mongoDb');

        const user = await Etudiant.insertMany([
            {
                nom : "Souleymane",
                prenom: "Sabiou Godi",
                age : 20,
            },
            {
                nom : "Nueve",
                prenom: "Louis",
                age : 26,
            },
            {
                nom : "Godi",
                prenom: "Marvin",
                age : 34,
            },
            {
                nom : "Somane",
                prenom: "Musole",
                age : 51,
            },
        ])

        console.log(user);
       
    } catch (error) {
        console.log("Connexion Echouée", error);
    }
}

connexionMongoDb();