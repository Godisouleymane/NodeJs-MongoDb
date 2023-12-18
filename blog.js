const  mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    titre : {
        type : String,
        required: true,
        uppercase :  true,
        trim: true,
        minlength : 10,
        maxlength : 100,
      
    },
    contenu : String,
    estArchive: Boolean,
    nbreLecture : {
        type : Number,
        min  : 0,
    },
    categories : {
        type : [String],
        enum : ["decouverte", "voyage", "technologie"]
    },
    featuredBlog : mongoose.Types.ObjectId,
    auteur : {
        nom: String,
        adresse : String,
    },
    datePublie : {
        type: Date,
        default : Date.now()
    },
})

const model = mongoose.model('Blog', blogSchema);

module.exports = model;