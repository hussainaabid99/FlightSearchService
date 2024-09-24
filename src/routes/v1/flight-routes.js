const express = require('express');

const { FlightController } = require('../../controllers');

const checkCities = require('../../middlewares/checkCities')

const router = express.Router();

router.post('/', FlightController.createFlight);
router.get('/', checkCities, (req, res) => {
     if (req.hasCities)
          FlightController.fetchFlights(req, res);
     else
          FlightController.fetchAllFlights(req, res);
}
)

module.exports = router