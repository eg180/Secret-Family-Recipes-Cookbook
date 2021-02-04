const express = require('express');
const helmet = require('helmet');
// const cors = require('cors');

const usersRouter = require('./resources/users/users-router.js');
const recipesRouter = require('./resources/recipes/recipes-router.js');
const authRouter = require('./auth/auth-router.js');

const server = express();
server.use(express.json());
server.use(helmet());

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors());
    console.log('using cors')
}


server.use('/api/users', usersRouter);
server.use('/api/recipes', recipesRouter);
server.use('/api/auth', authRouter);

server.get('/api', (req, res) => {
    res.json({ message: 'API UP, BABY!'})
})

module.exports = server;

