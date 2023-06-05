const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');

// Import the API routes
const apiRoutes = require('./routes/api');


// Create an instance of Express app
const app = express();


// Set up JSON parsing for request bodies
app.use(express.json());


//Connect to DB
connectDB();


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/real-chatter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });


// Mount the API routes
app.use('/api', apiRoutes);


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});