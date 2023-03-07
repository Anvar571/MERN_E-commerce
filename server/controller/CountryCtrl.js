const CountryModule = require("../models/CountryModule")

const createCountry = async (req, res, next) => {
    try {
        const newCountry = await CountryModule.create(req.body);
        res.json({newCountry});
    } catch (error) {
        next(error)
    }
}

const getOneCountry = async (req, res, next) => {
    const {country} = req.params;
    try {
        const countryOne = await CountryModule.aggregate([
            {
                $match:  {
                    name: country
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "name",
                    foreignField: "country",
                    as: "countrys"
                }
            },
            {
                $project: {
                    name: 1,
                    countrys: 1
                }
            }
        ]);
        res.json(countryOne);
    } catch (error) {
        next(error);
    }
}

const getAllCountry = async (req, res, next) => {
    try {
        const allCountry = await CountryModule.find();
        res.json({allCountry});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCountry,
    getAllCountry,
    getOneCountry
}