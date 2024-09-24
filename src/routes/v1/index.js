const express = require('express');

const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/city', cityRoutes);
router.use('/airport', airportRoutes);
router.use('/flight', flightRoutes);

module.exports = router;