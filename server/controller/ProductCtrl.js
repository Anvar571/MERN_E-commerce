const ProductModel = require("../models/ProductModel");

const createProduct = async (req, res, next) => {
  try {
    const newProducts = await ProductModel.create(req.body);
    res.json({ newProducts });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateProductOne = await ProductModel.findByIdAndUpdate(id, req.body);
    res.json({
      message: "Update product success",
      updateProductOne,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete(id);
    res.json({ message: "Product delete success" });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    let limit = parseInt(req.query.limit) || 5;
    let sort = req.query.sort || "price";
    let page = parseInt(req.query.page) || 1;
    let search = req.query.search || "";
    let category = req.query.category || "";

    let skip = (page - 1) * limit;
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const products = await ProductModel.find({
      title: { $regex: search, $options: "i" },
    })
      .where("category")
      .sort(sortBy)
      .skip(skip)
      .limit(limit);

    if (req.query.page) {
      const total = await ProductModel.countDocuments();
      if (skip >= total) return next({ message: "This page is not exist" });
    }

    const productAll = {
      page: page + 1,
      limit,
      products,
    };

    res.json({ message: "all products", productAll });
  } catch (error) {
    next(error);
  }
};

const getOnePRoduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productOne = await ProductModel.findById(id);
    res.json({ productOne });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getOnePRoduct,
};
