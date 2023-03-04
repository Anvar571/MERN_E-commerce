const { 
    register, 
    refreshToken, 
    loginUser, 
    logout, 
    getUser
} = require("../controller/authCtrl");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/refreshtoken", refreshToken);

router.get("/me", authMiddleware, getUser);

module.exports = router