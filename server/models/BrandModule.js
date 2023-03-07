const mongoose = require('mongoose'); 

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
}, {timestamps: true});

//Export the model
module.exports = mongoose.model('brand', brandSchema);