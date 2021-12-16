const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connection = require('./database/connection');

const { PORT, CORS } = process.env;

const app = express();
app.use(cors({ origin: CORS }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index.routes'));
app.listen(PORT, () => {
  console.info(`Server started on port: ${PORT}`);
});

// MongoDB
connection();