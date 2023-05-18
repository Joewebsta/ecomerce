const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  city: String
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User