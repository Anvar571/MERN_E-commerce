const CategoryModule = require("../models/CategoryModule")

const createCategory = async (req, res,next) => {
    try {
        const cat = await CategoryModule.create(req.body);
        res.json({
            message: "admin add category",
            cat
        })
    } catch (error) {
        next(error)
    }
}

const getAllCategory = async(req, res, next) =>{
    try {
        const allCategory = await CategoryModule.find({});
        res.json({allCategory});
    } catch (error) {
        next(error)
    }
}

const getOneCategory = async(req, res, next) =>{
    const {id} = req.params;
    try {
        const oneCategory = await CategoryModule.findById(id);
        res.json({oneCategory});
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async(req, res, next) =>{
    const {id} = req.params;
    try {
        await CategoryModule.findByIdAndDelete(id);
        res.json({
            message: "delete success"
        })
    } catch (error) {
        next(error)
    }
}

const updateCategory = async(req, res, next) =>{
    const {id} = req.params;
    try {
        const update = await CategoryModule.findByIdAndUpdate(id, req.body);
        res.json({update});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getOneCategory
}