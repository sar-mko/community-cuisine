const express = require('express')
const router = express.Router()
const searchController = require('../controllers/search') 
const { ensureAuth, ensureAuthCheck } = require('../middleware/auth')


router.get('/', ensureAuthCheck, searchController.getIndex)

router.get('/getRecipes', ensureAuthCheck,searchController.getRecipes)

router.get('/getRecipes/:id', ensureAuthCheck, searchController.getInfo)

router.post('/addRecipes', ensureAuthCheck, ensureAuth, searchController.addRecipes)



module.exports = router