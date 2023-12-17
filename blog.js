const  mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    titre : {
        type : String,
        required: true,
    },
    contenu : String,
    estArchive: Boolean,
    nbreLecture : Number,
    categories : [String],
    featuredBlog : mongoose.Types.ObjectId,
    auteur : {
        nom: String,
        adresse : String,
    },
    datePublie : Date,
})

const model = mongoose.model('Blog', blogSchema);

module.exports = model;