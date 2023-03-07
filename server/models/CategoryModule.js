const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim: true
    },
    description: {
        type: String,
    },
    images: [],
}, {timestamps: true});

//Export the model
module.exports = mongoose.model('category', CategorySchema);