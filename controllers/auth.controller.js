const User = require('../models/user');

exports.register = async (req, res, next) =>  {

const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
        success: true,
        user
    })
    
  } catch (error) {
    res.status(500).json({
        success: false,
        error: error.message,
    })
  }
};

exports.login = (req, res, next) => {
    res.send("Login route");
};

exports.forget_password = (req, res, next) => {
    res.send("Forget Password route");
};

exports.reset_password = (req, res, next) => {
    res.send("Reset password route");
};



