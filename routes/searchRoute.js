const express = require('express');
const router = express.Router();
const { searchLetsbookDefaultHotelWithMinimumData, getAllReservationsAttempts } = require('../controllers/searchController');

router.get('/', (req, res) => {
  return getAllReservationsAttempts(req, res);
});

router.post('/', (req, res) => {
  return searchLetsbookDefaultHotelWithMinimumData(req, res);
});

module.exports = router;
