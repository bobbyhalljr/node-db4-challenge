const express = require('express');

const db = require('./data/db-config');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>You are connected to the server!!</h1>`)
})

module.exports = server;

