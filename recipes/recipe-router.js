const express = require('express');

const Recipes = require('./recipe_model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error getting recipes"
        })
    })
})

router.get('/shopping-list', (req, res) => {
    Recipes.getShoppingList()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: 'There was a problem getting the shopping list.', err
        })
    })
})

module.exports = router;