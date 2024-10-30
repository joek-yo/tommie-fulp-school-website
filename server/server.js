// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Tommie Fulp School API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
