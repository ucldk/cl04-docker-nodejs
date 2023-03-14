'use strict';

const express = require('express');
const app = express();
const port = 1337;

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.HOSTNAME}`);
});

app.get('/healthcheck', (req, res) => {
  const randomHealthy = (Math.floor(Math.random() * 10) + 1) !== 1? true : false;
  return res.status(randomHealthy? 200 : 418).send(randomHealthy? 'Ok' : 'I\'m a teapot');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
