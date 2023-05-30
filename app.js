const express = require('express');
const mongoose = require('mongoose');

// Create the Express app
const app = express();
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
