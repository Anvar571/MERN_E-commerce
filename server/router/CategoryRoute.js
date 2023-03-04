const { createCategory, getAllCategory, getOneCategory, updateCategory, deleteCategory } = require("../controller/CategoryCtrl");
const authAdmin = require("../middleware/admin");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/create", authMiddleware, authAdmin, createCategory);
router.get("/all", getAllCategory);
router.get("/category/:id",  getOneCategory);
router.put("/update/:id", authMiddleware, authAdmin, updateCategory);
router.delete("/delete/:id", authMiddleware, authAdmin, deleteCategory);

module.exports = router