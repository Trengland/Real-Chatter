const mongoose = require('mongoose');


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/real-chatter', {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useCreateIndex: false,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the process with a failure code
  }
};


module.exports = connectDB;








