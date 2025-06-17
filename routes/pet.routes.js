const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.post('/', petController.registerPet);

module.exports = router;
