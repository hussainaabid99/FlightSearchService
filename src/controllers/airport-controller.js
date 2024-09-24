const { AirportService } = require('../services');

async function createAirport(req, res) {
     try {
          const response = await AirportService.createAirport({
               airport_name: req.body.airport_name,
               airport_code: req.body.airport_code,
               address: req.body.address,
               city_id: req.body.city_id
          })
          return res
               .status(201)
               .json({
                    success: 'true',
                    message: 'Sucessfully created airport',
                    data: response,
                    error: {}
               })

     } catch (error) {
          return res
               .status(500)
               .json({
                    success: 'false',
                    message: 'Something went wrong while creating airport',
                    data: {},
                    error: error
               })
     }
}

async function fetchAllAirports(req, res) {
     try {
          const response = await AirportService.fetchAllAirports()
          return res
               .status(200)
               .json({
                    success: 'true',
                    message: 'Sucessfully fethced all airports',
                    data: response,
                    error: {}
               })

     } catch (error) {
          return res
               .status(500)
               .json({
                    success: 'false',
                    message: 'Something went wrong while fetching airports',
                    data: {},
                    error: error
               })
     }
}

async function fetchAirport(req, res) {
     try {
          const response = await AirportService.fetchAirport(req.params.id)
          return res
               .status(200)
               .json({
                    success: 'true',
                    message: 'Sucessfully fetched airport',
                    data: response,
                    error: {}
               })

     } catch (error) {
          return res
               .status(500)
               .json({
                    success: 'false',
                    message: 'Something went wrong while fetching airport',
                    data: {},
                    error: error
               })
     }
}

module.exports = {
     createAirport,
     fetchAirport,
     fetchAllAirports
}