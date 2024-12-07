const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuthCheck } = require('../middleware/auth')

router.get('/', ensureAuthCheck, homeController.getIndex)
router.get('/login', ensureAuthCheck, authController.getLogin)
router.post('/login', ensureAuthCheck, authController.postLogin)
router.get('/logout', ensureAuthCheck, authController.logout)
router.get('/signup', ensureAuthCheck, authController.getSignup)
router.post('/signup', ensureAuthCheck, authController.postSignup)

module.exports = router