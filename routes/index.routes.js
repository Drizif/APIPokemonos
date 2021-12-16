const express = require('express');
const app = express();

app.use('/api',
  require('./trainer.routes'),
)

module.exports = app;