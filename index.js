const mongoose = require('mongoose');
const Blog = require('./blog');

const connexionMongoDb =  async()=>{
    try {
        await mongoose.connect("mongodb://localhost/testMongoose");
        console.log('Connected successfully');

        // const result = await Blog.create(
        //     {
        //         titre : "mon titres 1",
        //         contenu : "Mon contenu",
        //         estArchive : "yes",
        //         nbreLecture : 3,
        //         categories : ["voyage", "decouverte"],
        //         featuredBlog : '657e26bccf91e18dead14214',
        //         auteur : {
        //             nom : 'Souleymane Sabiou',
        //             adresse : "Niamey",
        //         }
        //     }, 
        // )

        const result = await Blog.findById('657e26bccf91e18dead14214').populate("featuredBlog")
        console.log(result);
    } catch (error) {
        console.log('Connection failed', error);
    }
}

connexionMongoDb();
