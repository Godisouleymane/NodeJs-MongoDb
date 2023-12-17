const mongoose = require('mongoose');
const Blog = require('./blog');

const connexionMongoDb =  async()=>{
    try {
        await mongoose.connect("mongodb://localhost/testMongoose");
        console.log('Connected successfully');

        const result = await Blog.create(
            {
                // titre : "Mon titre",
                contenu : "Mon contenu",
                estArchive : "yes",
                nbreLecture : 23,
                categories : ["voyage", "decouverte"],
                featuredBlog : '657e26bccf91e18dead14214',
                auteur : {
                    nom : 'Souleymane Sabiou',
                    adresse : "Niamey",
                }
            }, 
        )
        console.log(result);
    } catch (error) {
        console.log('Connection failed', error);
    }
}

connexionMongoDb();
