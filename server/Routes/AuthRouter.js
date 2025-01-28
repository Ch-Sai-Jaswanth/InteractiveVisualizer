const { signup, login } = require('../Controllers/AuthController');
const router = require('express').Router();
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;