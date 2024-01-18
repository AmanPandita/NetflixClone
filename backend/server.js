const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());



// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// User model (example)
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String // In a real application, passwords should be hashed
}));

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send('User not found');
  }

  // Compare the password (in a real app, compare hashed passwords)
  if (user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }

  res.send('Logged in successfully');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
