const Recipe = require('../models/Recipe')

module.exports = {
    getIndex: async (req,res) => {
        try{
           

            const recipeItems = await Recipe.find({userId:req.user._id})
            // console.log(recipeItems)
            // const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeItems.recipeId}`)
            // const data = await response.json()
            console.log('fetched')
            // const recipeItems = await Recipe.find({recipe})
            // const  = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('userRecipes.ejs', {recipes: recipeItems})
        }catch(err){
            console.log(err)
        }
     },
     deleteRecipe: async (req, res)=>{
        console.log(req)
        console.log(req.body)
        // console.log(req.body.dataset)
        // console.log(req.body.dataset.doc)
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