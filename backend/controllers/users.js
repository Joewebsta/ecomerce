const usersRouter = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/user')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving users' });
  }
});

usersRouter.post("/", async (req, res) => {
  const { first_name, last_name, age, city } = req.body;

  const newUser = new User({
    first_name,
    last_name,
    age,
    city
  });

  try {
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating a user' });
  }
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    res.sendStatus(204);
    console.log('User deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
});

module.exports = usersRouter;