const mongoose = require('mongoose');
const Blog = require('./blog');

const connexionMongoDb =  async()=>{
    try {
        await mongoose.connect("mongodb://localhost/testMongoose");
        console.log('Connected successfully');

        const result = await Blog.insertMany([
            {
                titre : "Mon titre",
                contenu : "Mon contenu",
            }, 
            {
                titre : "Mon  2",
                contenu : "Mon contenu 2",
            }, 
          
        ])
        console.log(result);
    } catch (error) {
        console.log('Connection failed', error);
    }
}

connexionMongoDb()