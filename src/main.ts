// src/main.ts
// mongodb+srv://User:IrDxlO8uO4T6sPzo@cluster0-rpvs1.azure.mongodb.net/BlogDB?retryWrites=true
import express = require('express');
import bodyParser = require('body-parser');

// const declarations
const SERVER: express.Application = express();
const PORT: number = 1313;
const API: express.Router = require('./routes/api'); 


SERVER.use(bodyParser.json());

// Routes
SERVER.use('/api', API);


SERVER.get('/', function (req, res) {
  res.send('Hello World!');
});

SERVER.listen(PORT, function () {
  console.log('Server listening on port ' + PORT + ".");
});