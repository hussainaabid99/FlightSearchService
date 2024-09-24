const { CityService } = require('../services');

async function createCity(req, res) {
     try {
          const response = await CityService.createCity({
               city_name: req.body.city_name,
               country: req.body.country
          })
          return res
               .status(201)
               .json({
                    success: true,
                    message: 'Successfully created a city',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while creating city',
                    data: {},
                    error: error
               })
     }
}

async function fetchAllCity(req, res) {
     try {
          const response = await CityService.fetchAllCity()
          return res
               .status(201)
               .json({
                    success: true,
                    message: 'Successfully fetched all cites',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while fetching cities',
                    data: {},
                    error: error
               })
     }
}

async function fetchCity(req, res) {
     try {
          const response = await CityService.fetchCity(req.params.id)
          return res
               .status(201)
               .json({
                    success: true,
                    message: 'Successfully fetched city',
                    data: response,
                    error: {}
               })
     } catch (error) {
          return res
               .status(500)
               .json({
                    success: false,
                    message: 'Something went wrong while fetching city',
                    data: {},
                    error: error
               })
     }
}

module.exports = { createCity, fetchCity, fetchAllCity };