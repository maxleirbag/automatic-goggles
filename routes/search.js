const express = require('express');
const router = express.Router();

// Route for getting all users
router.get('/', (req, res) => {
  res.send('Get all hotels');
});

module.exports = router;
