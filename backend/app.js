const express = require("express");
const app = express();
const { Client } = require('pg');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/api/products", async (req, res) => {
  const client = new Client({ database: 'ecommerce' });

  try {
    await client.connect();

    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving products' });
  } finally {
    client.end();
  }
});

app.post("/api/products", async (req, res) => {
  const client = new Client({ database: 'ecommerce' });

  try {
    await client.connect();

    const { name, price, category } = req.body;
    const query = "INSERT INTO products(name, price, category) VALUES($1, $2, $3)";
    const values = [name, price, category];

    await client.query(query, values);

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  } finally {
    client.end();
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const client = new Client({ database: 'ecommerce' });

  try {
    await client.connect();
    const query = "DELETE FROM products WHERE id = $1";
    const values = [req.params.id];
    await client.query(query, values);

    res.status(204)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  } finally {
    client.end();
  }
});

module.exports = app;