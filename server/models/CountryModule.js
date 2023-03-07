const mongoose = require('mongoose'); 

const countrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
}, {timestamps: true});

//Export the model
module.exports = mongoose.model('country', countrySchema);