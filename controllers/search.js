const Recipe = require('../models/Recipe')

module.exports = {
    getIndex :  async (req,res) => {
     try {
         const response = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
         const data = await response.json()
         res.render('search.ejs', {data:data})
     }
     catch (err){
         console.log(err)
     }
       
     },
 
     getRecipes : async (req,res) => {
         const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase()
         const type = req.query.recipe !== '' ? capitalize(req.query.recipe) : 'empty'
         try {
             const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
             const data = await response.json()

                if(!data.meals) {
                return res.redirect('back')  
            }
                if(data.meals) {
                res.render('results.ejs', {data: data , category:type})
            }
         }
         catch (err) {
             console.log(err)
             res.redirect('/search.ejs')
         }       
     },

     getInfo : async (req,res) => {
        const id = req.params.id
        try {
            const response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await response.json()
            
            res.render('recipeDes.ejs', {data:data})
        }
        catch (err) {
            console.log(err)
        }
  },

  addRecipes : async (req,res) => {
    const id = req.body.recipeId
    const user = req.user._id 
    try{
        const recipeCheck = await Recipe.find({userId:req.user._id , recipeId:req.body.recipeId}).lean()
        if(!recipeCheck.length) {
          
            await Recipe.create({recipeId: id, userId: user, recipeName: req.body.recipeName , recipeImg: req.body.recipeImg , recipeType: req.body.recipeType})
            console.log('recipe has been added!')
            res.redirect('/userRecipes')
        }

        if(recipeCheck.length){
            console.log('already in docs')
            res.redirect('/userRecipes')
        }
 
    }catch(err){
        console.log(err)
    
    }
}
 
}
 