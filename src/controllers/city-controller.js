const { response } = require('express');
const { CityService } = require('../services');

async function createCity(req, res) {
     try {
          const city = await CityService.createCity({
               city_name: req.body.city_name,
               country: req.body.country
          })
          return res
               .status(201)
               .json({
                    success: true,
                    message: 'Successfully created a city',
                    data: city,
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

module.exports = { createCity };