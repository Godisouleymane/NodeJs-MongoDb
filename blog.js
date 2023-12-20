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
        enum : ["decouverte", "Voyage", "technologie"]
    },
    featuredBlog : {
        type : mongoose.Types.ObjectId,
        ref: "Blog",
    },
    auteur : {
        nom: String,
        adresse : String,
    },
    datePublie : {
        type: Date,
        default : Date.now()
    },
})

blogSchema.methods.findMemeCategorie = function () {
    return mongoose.model('Blog').find({
        categories : {$in : this.categories}
    })
}

blogSchema.statics.find2PremiersBlog = function (){
    return mongoose.model("Blog").find().limit(2);
}

blogSchema.query.findNPremierBlog = function(nbre) {
    return mongoose.model("Blog").find().limit(nbre);
}

blogSchema.virtual("libelleLecture").get(function(){
    return "Ce blog a deja  ete visualisé " + this.nbreLecture + " fois"
})


blogSchema.pre("save", function(next){
    console.log("Instruction avant enregistrement");
    next();
});

blogSchema.post("save", function(doc, next){
    console.log("Instruction apres enregistrement : \n", doc);
})

const model = mongoose.model('Blog', blogSchema);

module.exports = model;
