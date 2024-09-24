const express = require('express');

const { AirportController } = require('../../controllers');

const router = express.Router();

router.post('/', AirportController.createAirport);
router.get('/', AirportController.fetchAllAirports);
router.get('/:id', AirportController.fetchAirport);

module.exports = router;