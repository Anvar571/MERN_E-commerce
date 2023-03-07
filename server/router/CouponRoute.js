const { createCoupon } = require("../controller/CouponCtrl");

const router = require("express").Router();

router.post("/create", createCoupon);

module.exports = router;