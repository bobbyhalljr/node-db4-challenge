const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    //getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('ingredients')
    .select('name as Ingredient', 'quantity')
}

