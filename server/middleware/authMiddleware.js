const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token) return next({message: "Invalid Authentication"});

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err) return next({message: "Invalid Authentication"});

            req.user = user;
            next();
        });

    } catch (error) {
        next(error)
    }
}

module.exports = {
    authMiddleware
}