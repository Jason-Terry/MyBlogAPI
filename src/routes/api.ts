// api.ts
import express = require('express');
const ROUTER = express.Router();

ROUTER.get('/', (req, res) => {
    res.send('From API route.')
})


module.exports = ROUTER;