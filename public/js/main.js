
// const delRecBtn = document.querySelectorAll('span.delR')


// Array.from(delRecBtn).forEach((el)=>{
//     el.addEventListener('click', deleteRecipe)
// })


// async function deleteRecipe(){
//     console.log('click')
//     const recipeId = this.parentNode.dataset.id
//     const recipeDocId = this.parentNode.dataset.docId
//     try{
//         const response = await fetch('userRecipes/deleteRecipe', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'recipeIdFromJSFile': recipeId,
//                 'mongoDocIdFromJS': recipeDocId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }