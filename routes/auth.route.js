const express = require("express");
const router = express.Router();

const { register, login, forget_password, reset_password } = require('../controllers/auth.controller');

//Define routes for authentication
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forget_password").post(forget_password);
router.route("/reset_password/:resetToken").put(reset_password);


module.exports = router;