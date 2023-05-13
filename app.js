const express = require("express");
const app = express();
const { Client } = require('pg');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));


app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/api/products", async (req, res) => {
  try {
    const client = new Client({ database: 'ecommerce'});
    client.connect();
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
    client.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving products' });
  }
});

module.exports = app;