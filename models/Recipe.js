const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  recipeImg: {
    type: String,
    required: true,
  },
  recipeName: {
    type: String,
    required: true,
  },
  recipeType: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)
