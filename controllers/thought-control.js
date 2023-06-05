const { formatTimestamp } = require('../utils/moment');
const Thought = require('../models/thought');
const User = require('../models/user');

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
createThought : async (req, res) => {
  try {
    const { content } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const thought = new Thought({ content, author: User });
    await thought.save();

    res.status(201).json({ thought });
  } catch (error) {
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
    res.status(500).json({ error: 'Server error' });
  }
},


// Delete a thought
deleteThought : async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    await thought.remove();

    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
} 


module.exports = thoughtController;