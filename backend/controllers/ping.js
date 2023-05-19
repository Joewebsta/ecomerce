const pingController = require('express').Router();

pingController.get("/", (req, res) => {
  res.status(200).send("pong");
});

module.exports = pingController;