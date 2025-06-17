const Pet = require('../models/pet.model');

const createPet = async (petData) => {
  const pet = new Pet(petData);
  return await pet.save();
};

module.exports = {
  createPet
};
