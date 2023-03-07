const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type:String,
        required:true,
    },
    images: {
        type: Object,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Number,
        default: 0  
    }
    
});

//Export the model
module.exports = mongoose.model('product', ProductSchema);