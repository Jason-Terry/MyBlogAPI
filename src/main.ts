// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();
const port: number = 1313

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Server listening on port ' + port + ".");
});