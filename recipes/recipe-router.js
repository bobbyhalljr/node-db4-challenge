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