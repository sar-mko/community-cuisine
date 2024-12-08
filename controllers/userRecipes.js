const Recipe = require('../models/Recipe')

module.exports = {
    getIndex: async (req,res) => {
        try{
            const recipeItems = await Recipe.find({userId:req.user._id})
            console.log('fetched')
             res.render('userRecipes.ejs', {recipes: recipeItems})
        }catch(err){
            console.log(err)
        }
     },
     deleteRecipe: async (req, res)=>{
        try{
            await Recipe.findOneAndDelete({_id:req.body.recipeDocId})
            console.log('Deleted recipe')
         
            res.redirect('/userRecipes')
        }catch(err){
            console.log(err)
        }
    } 
 }
 // need to also save recipe photo and name into database?
 /// or make request on the get index page ..