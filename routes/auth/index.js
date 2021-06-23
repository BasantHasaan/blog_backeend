const router = require('express').Router();
const authController = require('../../controllers/auth/auth');

//  http://localhost:3200/api/auth/signin
router.post('/signin', authController.login);






module.exports = router;