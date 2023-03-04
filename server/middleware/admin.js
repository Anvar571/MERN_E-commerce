const Usermodel = require("../models/Usermodel")

const authAdmin = async(req, res, next) => {
    try {
        const user = await Usermodel.findOne({
            _id: req.user.id
        })

        if (user.role === 0) {
            next({message: "Admin is not exists"});
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authAdmin