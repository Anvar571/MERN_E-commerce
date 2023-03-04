const Usermodel = require("../models/Usermodel");
const { createHashPass, comparePass } = require("../module/bcrypt");
const { accesstoken, refreshtoken, checkToken } = require("../module/jwt");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await Usermodel.findOne({ email });
    if (user) return next({message: "This user already registered"});

    const hashPass = await createHashPass(password);

    const newUser = new Usermodel({
      name,
      email,
      password: hashPass,
    });

    await newUser.save();

    const access_token = await accesstoken({ id: newUser._id });
    const refresh_token = await refreshtoken({ id: newUser._id });

    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.json({
      message: "Register success",
      user: {
        newUser,
        access_token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    let rf_token = req.cookies.refreshtoken;

    if (!rf_token) return next({message: "Please register or login"});
    
    const check_Token = await checkToken(rf_token);

    if (!check_Token) return next({ message: "Token is exists" });

    const user = await Usermodel.findById(check_Token.id);

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async ( req, res, next)=>{
    try {
        const {email, password} = req.body;

        const user = await Usermodel.findOne({email})
        if (!user) return next({message: "This email is exists"});

        const checkpass = await comparePass(user.password, password);
        if (!checkpass) return next({message: "Password is in correct"});

        const refresh_token = await refreshtoken({id: user._id});
        const access_token = await accesstoken({id: user._id});

        res.cookie("refreshtoken",refresh_token, {
            httpOnly: true,
            maxAge: 72*60*60*1000
        } )

        res.json({
            message: "login successfully",
            user: {
                user,
                access_token
            }
        })
    } catch (error) {
        next(error);
    }
}

const logout = async (req ,res ,next)=> {
    try {
        res.clearCookie("refreshtoken");
        return res.json({message: "Logged out"})
    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    const {id} = req.user;
    try {
        const currUser = await Usermodel.findById(id).select("-password");
        res.json({currUser});
    } catch (error) {
        next(error)
    }
}

module.exports = {
  register,
  refreshToken,
  loginUser,
  logout,
  getUser
};
