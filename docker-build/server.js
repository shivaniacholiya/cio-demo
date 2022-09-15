'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// get the HOSTNAME of Pod
const hostname = process.env.HOSTNAME;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World ... This is CIO Training Class ...! ... Response from Host: ' + hostname);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
