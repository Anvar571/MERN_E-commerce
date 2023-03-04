const jwt = require("jsonwebtoken");

const createToken = async (payload) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: "2d"});
}

const accesstoken = async (payload) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: "2d"});
}

const refreshtoken = async (payload) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: "2d"});
}

const checkToken = async (token) => {
    return jwt.verify(token, process.env.SECRET_TOKEN);
}

module.exports = {
    createToken,
    checkToken,
    accesstoken,
    refreshtoken
}