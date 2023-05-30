const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }
        );
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // update a user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            // .populate({
            //     path: 'friends',
            //     select: '-__v'
            // })
            // .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // delete a user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            // .populate({
            //     path: 'friends',
            //     select: '-__v'
            // })
            // .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }

                // remove user from friends lists
                User.updateMany(
                    { _id: { $in: dbUserData.friends } },
                    { $pull: { friends: params.id } }
                )
                .then(() => {
                    // remove user's thoughts
                    Thought.deleteMany({ username: dbUserData.username })
                    .then(() => {
                        res.json({ message: 'Successfully deleted user!' });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err);
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // add a friend to a user's friend list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // remove a friend from a user's friend list
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    }
};

module.exports = userController;
