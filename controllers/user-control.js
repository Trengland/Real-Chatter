const User = require('../models/user');

// Controller functions for handling user routes
const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },


  createUser: async (req, res) => {
    try {
      const { username } = req.body;

      // Create a new user
      const user = new User({ username });
      await user.save();

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("friends").populate("thoughts");
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  
  updateUser: async (req, res) => {
    try {
      const { username } = req.body;

      const user = await User.findByIdAndUpdate(
        req.params.id,
        { username },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },


  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  addFriend: async (req, res) => {
    try {
      const { friends } = req.body;

      const user = await User.findByIdAndUpdate(
        req.params.id,
        { friends },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: 'Friend not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add friend' });
    }
  },

  deleteFriend: async (req, res) => {
    try {
      const { friends } = req.body;

      const user = await User.findByIdAndDelete(
        req.params.id,
        { friends },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: 'Friend not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete friend' });
    }
  },


};

module.exports = userController;
