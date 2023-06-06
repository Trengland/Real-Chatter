const { formatTimestamp } = require('../utils/moment');
const Thought = require('../models/thought');
// const User = require('../models/user');


const thoughtController = {
// Get a single thought
getThoughtById : async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    const formattedTimestamp = formatTimestamp(thought.timestamp);
    res.json({ thought, formattedTimestamp });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
},


// Get all thoughts
getAllThoughts : async (req, res) => {
  try {
    const thought = await Thought.find(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    const formattedTimestamp = formatTimestamp(thought.timestamp);
    res.json({ thought, formattedTimestamp });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
},


// Create a new thought
createThought: async (req, res) => {
  try {
    const thought = await Thought.create( req.body );
    res.json({ message: 'Thought created successfully' });
    // await thought.save();

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
},



// Update a thought
updateThought : async (req, res) => {
  try {
    const { content } = req.body;

    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    thought.content = content;
    await thought.save();

    res.json({ thought });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
},


// Delete a thought
deleteThought : async (req, res) => {
  try {
    const thought = await Thought.findOneAndRemove(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
},


// Add a reaction
addReaction : async (req, res) => {
  try {
    // const { reactionBody } = req.body;

    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { reactions : req.body } },
      { new: true }
 );
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json({ thought });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
},


// Delete a reaction
deleteReaction : async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions : req.params.reactionId } },
      { new: true }
 );
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server error' });
  }
}
};


module.exports = thoughtController;