const { CityRepository } = require('../repositories');

const cityRepository = new CityRepository();

async function createCity(data) {
     try {
          const city = await cityRepository.create(data);
          return city;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchAllCity() {
     try {
          const city = await cityRepository.getAll()
          return city;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }
}

async function fetchCity(data) {
     try {
          const city = await cityRepository.get(data)
          return city;
     } catch (error) {
          console.log("Something went wrong in service layer");
          throw error;
     }

}


module.exports = {
     createCity,
     fetchCity,
     fetchAllCity
}