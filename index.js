const mongoose = require('mongoose');
const Blog = require('./blog');

const connexionMongoDb = async () => {
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

        const blog = new Blog({
            titre: "Voyage vers Zinder",
            contenu: "Mon contenu 001",
            estArchive: "yes",
            nbreLecture: 3,
            categories: ["Voyage", "decouverte"],
            featuredBlog: '657e26bccf91e18dead14214',
            auteur: {
                nom: 'Souleymane Sabiou',
                adresse: "Niamey",
            }
        })

        const result = await blog.save()
        console.log(result.libelleLecture);
    } catch (error) {
        console.log('Connection failed', error);
    }
}

connexionMongoDb();