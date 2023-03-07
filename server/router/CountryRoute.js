const { createCountry, getAllCountry, getOneCountry } = require("../controller/CountryCtrl");

const router = require("express").Router();

router.post("/create", createCountry);

router.get("/all", getAllCountry);

router.get("/:country", getOneCountry);

module.exports = router;