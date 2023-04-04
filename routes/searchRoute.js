const express = require('express');
const router = express.Router();
const {
  searchLetsbookDefaultHotelWithMinimumData,
  getAllReservationsAttempts,
  searchLetsbookUltraSpecific,
} = require('../controllers/searchController');

router.get('/', (req, res) => {
  return getAllReservationsAttempts(req, res);
});

router.post('/', (req, res) => {
  return searchLetsbookDefaultHotelWithMinimumData(req, res);
});

router.post('/ultraSpecific', (req, res) => {
  return searchLetsbookUltraSpecific(req, res);
});

module.exports = router;
