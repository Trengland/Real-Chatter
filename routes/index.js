const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
res.send('Hello World!');
 });

 
module.exports = router;