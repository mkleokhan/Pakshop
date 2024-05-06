const express = require('express');
const router = express.Router();
const [home, register,login, userController] = require('./controlllers/auht-contollers');
const [signupSchema] = require('./validator/auth-validator');
const validate = require("./middlewares/validate-middleware");
const authMiddleware = require('./middlewares/auth-middleware')




router.route("/").get(home)
router.route("/register").post(validate(signupSchema), register)
router.route('/login').post(login)
router.route('/user').get(authMiddleware, userController)




module.exports = router;