const express = require('express');

const { CityController } = require('../../controllers');

const router = express.Router();

router.post('/', CityController.createCity);
router.get('/', CityController.fetchAllCity);
router.get('/:id', CityController.fetchCity);

module.exports = router;