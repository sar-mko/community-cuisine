const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/userRecipes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')


router.get('/', ensureAuth, recipesController.getIndex)
router.delete('/deleteRecipe', recipesController.deleteRecipe)

module.exports = router