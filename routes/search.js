const express = require('express')
const router = express.Router()
const searchController = require('../controllers/search') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', searchController.getIndex)

router.get('/getRecipes',searchController.getRecipes)

router.get('/getRecipes/:id', searchController.getInfo)

router.post('/addRecipes', ensureAuth, searchController.addRecipes)



module.exports = router