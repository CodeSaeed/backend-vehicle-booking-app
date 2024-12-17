const express = require('express');
const router = express.Router();
const { getVehicles, createBooking } = require('../controllers/vehicleController');

router.get('/', getVehicles);
router.post('/booking', createBooking);

module.exports = router;
