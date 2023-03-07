const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
    }
}, {timestamps: true});

//Export the model
module.exports = mongoose.model('coupon', couponSchema);