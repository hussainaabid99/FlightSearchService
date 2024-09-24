const express = require('express');

const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

const router = express.Router();

router.use('/city', cityRoutes);
router.use('/airport', airportRoutes);

module.exports = router;