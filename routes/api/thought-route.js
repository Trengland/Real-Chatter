const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
}
  = require('../../controllers/thought-control');

  router.route('/').get(getAllThoughts).post(createThought);
  router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);
  router.route('/:thoughtId/reactions').post(addReaction);
  router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);






module.exports = router;
// Route: GET /thoughts
// Description: Get all thoughts
// router.get('/', (req, res) => {
//   Thought.find({})
//     .then(dbThoughtData => res.json(dbThoughtData))
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: GET /thoughts/:id
// // Description: Get a specific thought by ID
// router.get('/:id', ({ params }, res) => {
//   Thought.findOne({ _id: params.id })
//     .then(dbThoughtData => {
//       if (!dbThoughtData) {
//         res.status(404).json({ error: 'Thought not found' });
//       } else {
//         res.json(dbThoughtData);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: POST /thoughts
// // Description: Create a new thought
// router.post('/', (req, res) => {
//   const { content, userId } = req.body;
//   Thought.create({ content, userId })
//     .then(dbThoughtData => res.status(201).json(dbThoughtData))
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: PUT /thoughts/:id
// // Description: Update a specific thought by ID
// router.put('/:id', (req, res) => {
//   const { content } = req.body;
//   Thought.findByIdAndUpdate(req.params.id, { content }, { new: true })
//     .then(dbThoughtData => {
//       if (!dbThoughtData) {
//         res.status(404).json({ error: 'Thought not found' });
//       } else {
//         res.json(dbThoughtData);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: DELETE /thoughts/:id
// // Description: Delete a specific thought by ID
// router.delete('/:id', (req, res) => {
//   Thought.findByIdAndDelete(req.params.id)
//     .then(dbThoughtData => {
//       if (!dbThoughtData) {
//         res.status(404).json({ error: 'Thought not found' });
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });


