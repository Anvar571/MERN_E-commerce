const routers = require("express").Router();

routers.use("/user", require("./UserRoute"));

routers.use("/category", require("./CategoryRoute"));

routers.use("/product", require("./ProductRoute"));

routers.use("/brand", require("./BrandRoute"));

routers.use("/country", require("./CountryRoute"));

routers.use("/coupon", require("./CouponRoute"));

module.exports = routers