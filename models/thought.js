const mongoose = require('mongoose');


// Define the thought schema
const thoughtSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reactions: [
    {
      type: String,
      enum: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
    },
  ],
});


// Create the thought model
const Thought = mongoose.model('Thought', thoughtSchema);


// Export the thought model
module.exports = Thought;