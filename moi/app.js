const mongoose = require('mongoose');
const Etudiant = require('../moi/etudiants')


const connexionMongoDb = async()=> {
    try {
        await mongoose.connect("mongodb://localhost/myDatabase");
        console.log('Connexion reussie avec mongoDb');

        const user = await Etudiant.create(
            {
                nom : "Souleymane",
                prenom : "Sabiou Godi",
                age : 20,
                classe : "Terminale"
            }
        )
        console.log(user);
       
    } catch (error) {
        console.log("Connexion Echouée", error);
    }
}

connexionMongoDb();