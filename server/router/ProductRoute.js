const { getOnePRoduct, createProduct, getAllProduct } = require("../controller/ProductCtrl");
const authAdmin = require("../middleware/admin");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/products")
    .get(getAllProduct)
    .post(authMiddleware, authAdmin, createProduct)

router.route("/products/:id")
    .get(getOnePRoduct)
    .delete()
    .put()

module.exports = router