const express = require('express');
const projectRouter = require('../router/projectRouter.js');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

// Page shows h2 when properly running
server.get('/', (req, res) => {
    res.send(`<h2>Server is responding.</h2>`);
});

module.exports = server;