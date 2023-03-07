const BrandModule = require("../models/BrandModule");

const createBrand = async (req, res, next) => {
    try {
        const newBrand = await BrandModule.create(req.body);
        res.json({newBrand});
    } catch (error) {
        next(error)
    }
}

const getOneBrand = async (req, res, next) => {
    const {name} = req.params;

    try {
        const brandOne = await BrandModule.aggregate([
            {
                $match: {
                    name
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "name",
                    foreignField: "brand",
                    as: "brands",
                }
            },
            {
                $project: {
                    name: 1,
                    brands: 1
                }
            }
        ]);
        res.json(brandOne);
    } catch (error) {
        next(error);
    }
}

const getAllBrand = async (req, res, next) => {
    try {
        const allBrand = await BrandModule.find({});
        res.json({allBrand});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createBrand,
    getOneBrand,
    getAllBrand
}