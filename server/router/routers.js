const routers = require("express").Router();

routers.use("/user", require("./UserRoute"));

routers.use("/category", require("./CategoryRoute"));

routers.use("/product", require("./ProductRoute"));

module.exports = routers