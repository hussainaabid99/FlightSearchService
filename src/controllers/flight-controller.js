const { FlightService } = require('../services');

async function createFlight(req, res) {
     try {
          const response = await FlightService.createFlight({
               airline: req.body.airline,
               flight_number: req.body.flight_number,
               dest_airport_id: req.body.dest_airport_id,
               dep_airport_id: req.body.dep_airport_id,
               departure: req.body.departure,
               arrival: req.body.arrival,
               dep_terminal: req.body.dep_terminal,
               dest_terminal: req.body.dest_terminal,
               logo_path: req.body.logo_path
          });
          return res
               .status(201)
               .json({
                    success: true,
                    message: 'Successfully created a flight',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while creating flight',
                    data: {},
                    error: error
               })
     }
}

async function fetchAllFlights(req, res) {
     try {
          const response = await FlightService.fetchAllFlights(req.body);
          return res
               .status(200)
               .json({
                    success: true,
                    message: 'Successfully fetched all flights',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while fetching flights',
                    data: {},
                    error: error
               })
     }
}

async function fetchFlight(req, res) {
     try {
          const response = await FlightService.fetchFlight(req.params.id);
          return res
               .status(200)
               .json({
                    success: true,
                    message: 'Successfully fetched flight',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while fetching flight',
                    data: {},
                    error: error
               })
     }
}

async function fetchFlights(req, res) {
     try {
          const response = await FlightService.fetchFlights(req.body);
          return res
               .status(200)
               .json({
                    success: true,
                    message: 'Successfully fetched flight',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while fetching flight',
                    data: {},
                    error: error
               })
     }
}

module.exports = {
     createFlight,
     fetchFlight,
     fetchAllFlights,
     fetchFlights
}
