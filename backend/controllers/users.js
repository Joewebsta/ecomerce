const usersRouter = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/user')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

usersRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = usersRouter;