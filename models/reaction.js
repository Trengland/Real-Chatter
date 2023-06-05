const { Schema, model } = require('mongoose');


// Define the thought schema
const reactionSchema = new Schema({
  reactionBody: {
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
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    },
});



// Export the thought model
module.exports = reactionSchema;