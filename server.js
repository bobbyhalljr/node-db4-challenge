const express = require('express');

const db = require('./data/db-config');
const RecipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter)

server.get('/', (req, res) => {
    res.send(`<h1>You are connected to the server!!</h1>`)
})

module.exports = server;

