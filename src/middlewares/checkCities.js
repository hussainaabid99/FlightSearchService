function checkCities(req, res, next) {
     if (req.body.dep_city_id && req.body.dest_city_id) {
          req.hasCities = true;
     }
     else {
          req.hasCities = false;
     }
     next();
}

module.exports = checkCities;

