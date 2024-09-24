
const { Flight, Airport, City } = require('../models');
const CrudRepository = require('./crud-repository');

class FlightRepository extends CrudRepository {
     constructor() {
          super(Flight);
     }

     #createFilter(data) {
          let filter = {};
          if (data.dep_airport_id) {
               filter.dep_airport_id = data.dep_airport_id;
          }
          if (data.dest_airport_id) {
               filter.dest_airport_id = data.dest_airport_id;
          }
          if (data.cityId) {
               filter[Op.and] = [
                    { '$departureAirport.City.id$': data.dep_city_id },
                    { '$destinationAirport.City.id$': data.dest_city_id }
               ]
          }
          return filter;
     }

     async getFlightsWithFilters(data) {
          try {
               const filter = this.#createFilter(data);
               const flights = await Flight.findAll({
                    include: [
                         {
                              model: Airport,
                              as: 'departureAirport',
                              include: {
                                   model: City,
                                   required: true,
                                   where: { id: data.dep_city_id }
                              }
                         },
                         {
                              model: Airport,
                              as: 'destinationAirport',
                              include: {
                                   model: City,
                                   required: true,
                                   where: { id: data.dest_city_id }
                              }
                         }
                    ],
                    where: filter
               });

               const filteredFlights = flights.filter(flight => {
                    console.log(flight.departure);
                    return flight.departureAirport !== null && flight.destinationAirport !== null;
               })

               return filteredFlights;


          } catch (error) {
               console.log("Something went wrong in repository layer");
               throw error;
          }
     }
}

module.exports = FlightRepository;