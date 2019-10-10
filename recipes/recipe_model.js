const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('ingredients')
    .join('recipe_ingredients as ri', 'recipe_id', '=', 'ri.recipe_id')
    .select('ingredients', 'quantities')
}