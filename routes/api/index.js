const router = require('express').Router();
const userRoutes = require('./api');
const thoughtRoutes = require('./api');

router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);

router.use((req, res) => {
    res.send('Hello World!');
}
);

module.exports = router;
