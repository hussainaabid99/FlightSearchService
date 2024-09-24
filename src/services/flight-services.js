const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data) {
     try {
          const flight = await flightRepository.create(data);
          return flight;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchAllFlights() {
     try {
          const flight = await flightRepository.getAll();
          return flight;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchFlight(data) {
     try {
          const flight = await flightRepository.get(data);
          return flight;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchFlights(data) {
     try {
          const flights = await flightRepository.getFlightsWithFilters(data);
          return flights;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

module.exports = {
     createFlight,
     fetchFlight,
     fetchAllFlights,
     fetchFlights
}