const CountryModule = require("../models/CountryModule");

const createCoupon = async (req, res, next) => {
    try {
        const coupon  = await CountryModule.create(req.body);
        res.json({coupon});
    } catch (error) {
        next(error);
    }
}

module.exports= {
    createCoupon
}