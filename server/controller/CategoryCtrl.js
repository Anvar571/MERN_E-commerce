const CategoryModule = require("../models/CategoryModule");
const cloudinaryUpload = require("../utils/CloudImage");
const fs = require("fs");

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
        const oneCategory = await CategoryModule.aggregate([
            {
                $match:  {
                    _id: id
                }
            },
            {
                $lookup: {
                    from: "product",
                    localField: "name",
                    foreignField: "category",
                    as: "categorys"
                }
            }
        ]);
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

const uploadCategoryImage = async (req, res) => {
    const { id } = req.params;
    try {
        const uploader = (path) => cloudinaryUpload(path, "images");
        const urls = [];
        for (let file of req.files){
            const {path} = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path)
        }
        
        const findAndUpdate = await CategoryModule.findByIdAndUpdate(id, {
            images: urls.map(file => {
                return file
            }, {new: true})
        });
        
        res.json({findAndUpdate});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getOneCategory,
    uploadCategoryImage
}