const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../../controllers/user-control');

// Define routes for users
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);
router.post('/:id/friends', userController.addFriend);
router.delete('/:id/friends', userController.deleteFriend);



module.exports = router;





// Route: GET /users
// Description: Get all users
// router.get('/users', (req, res) => {
//   User.find({})
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: POST /users
// // Description: Create a new user
// router.post('/users', (req, res) => {
//   const { username, email } = req.body;
//   User.create({ username, email })
//     .then(dbUserData => res.status(201).json(dbUserData))
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: GET /users/:id
// // Description: Get a specific user by ID
// router.get('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ error: 'User not found' });
//       } else {
//         res.json(dbUserData);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: PUT /users/:id
// // Description: Update a specific user by ID
// router.put('/users/:id', (req, res) => {
//   const { username, email } = req.body;
//   User.findByIdAndUpdate(req.params.id, { username, email }, { new: true })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ error: 'User not found' });
//       } else {
//         res.json(dbUserData);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// // Route: DELETE /users/:id
// // Description: Delete a specific user by ID
// router.delete('/users/:id', (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ error: 'User not found' });
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;
