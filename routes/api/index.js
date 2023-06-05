const express = require('express');
const router = express.Router();

// Import the thought routes
const thoughtRoutes = require('./thought-route');

// Import the user routes
const userRoutes = require('./user-route');

// Mount the thought routes
router.use('/thoughts', thoughtRoutes);

// Mount the user routes
router.use('/users', userRoutes);


module.exports = router;