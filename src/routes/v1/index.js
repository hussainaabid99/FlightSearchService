const express = require('express');

const cityRoutes = require('./city-routes');

const router = express.Router();

router.use('/city', cityRoutes);

module.exports = router;