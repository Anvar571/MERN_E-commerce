const { createBrand, getAllBrand, getOneBrand } = require("../controller/BrandCtrl");

const router = require("express").Router();

router.post("/create", createBrand);

router.get("/all", getAllBrand);

router.get("/:name", getOneBrand);

module.exports = router