const express = require('express');
const router = express.Router();

// Import the thought controller
const thoughtController = require('../../controllers/thought-control');



// Define routes for thoughts
router.get('/', thoughtController.getAllThoughts);
router.post('/', thoughtController.createThought);
router.get('/:id', thoughtController.getThoughtById);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);
router.post('/:id/reactions', thoughtController.addReaction);
router.delete('/:id/reactions/:reactionId', thoughtController.deleteReaction);


module.exports = router;
