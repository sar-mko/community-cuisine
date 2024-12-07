const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/userRecipes') 
const { ensureAuth, ensureAuthCheck } = require('../middleware/auth')


router.get('/', ensureAuth, ensureAuthCheck, recipesController.getIndex)
router.delete('/deleteRecipe', recipesController.deleteRecipe)

module.exports = router