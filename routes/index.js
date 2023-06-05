const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Real Chatter API');
});

module.exports = router;
