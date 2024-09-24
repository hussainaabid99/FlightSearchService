const { AirportRepository } = require('../repositories');

const airportRepository = new AirportRepository();

async function createAirport(data) {
     try {
          const airport = await airportRepository.create(data);
          return airport;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchAllAirports() {
     try {
          const airport = await airportRepository.getAll();
          return airport;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchAirport(data) {
     try {
          const airport = await airportRepository.get(data);
          return airport;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

module.exports = {
     createAirport,
     fetchAirport,
     fetchAllAirports
}
