const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// Define the thought schema
const thoughtSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]
});


// Create the thought model
const Thought = model('Thought', thoughtSchema);


// Export the thought model
module.exports = Thought;
