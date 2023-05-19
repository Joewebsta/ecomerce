const express = require("express");
const app = express();
const productsRouter = require('./controllers/products');
const usersRouter = require('./controllers/users');
const pingRouter = require('./controllers/ping');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()

app.use(express.json());
app.use(express.static('dist'));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/ping', pingRouter);

module.exports = app;