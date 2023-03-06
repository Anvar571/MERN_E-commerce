const routers = require("express").Router();

routers.use("/user", require("./UserRoute"));

routers.use("/category", require("./CategoryRoute"));

routers.use("/upload", require("./upload"));

module.exports = routers