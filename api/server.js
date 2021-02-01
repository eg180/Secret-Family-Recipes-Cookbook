const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors')
    server.use(cors())
}

server.get('/api', (req, res) => {
    res.json({ message: 'API UP, BABY!'})
})

module.exports = server;

