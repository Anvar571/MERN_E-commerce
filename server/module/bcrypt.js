const bcrypt = require("bcrypt");

const createHashPass = async (password) => {
    return bcrypt.hash(password, 10);
}

const comparePass = async (hashPass, password) => {
    return bcrypt.compare(password, hashPass);
}

module.exports = {
    createHashPass,
    comparePass
}