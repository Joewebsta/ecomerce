const productsRouter = require('express').Router();
const { Client } = require('pg');

productsRouter.get("/", async (req, res) => {
  console.log('hello world!');

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

productsRouter.post("/", async (req, res) => {
  const client = new Client({ database: 'ecommerce' });

  try {
    await client.connect();

    const { name, price, category } = req.body;
    const query = "INSERT INTO products(name, price, category) VALUES($1, $2, $3) RETURNING *";
    const values = [name, price, category];

    const result = await client.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  } finally {
    client.end();
  }
});

productsRouter.delete("/:id", async (req, res) => {
  const client = new Client({ database: 'ecommerce' });

  try {
    await client.connect();
    const query = "DELETE FROM products WHERE id = $1";
    const values = [req.params.id];
    await client.query(query, values);

    res.sendStatus(204)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  } finally {
    client.end();
  }
});

module.exports = productsRouter