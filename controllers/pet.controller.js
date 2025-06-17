const petService = require('../services/pet.service');

const registerPet = async (req, res) => {
  try {
    const pet = await petService.registerPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerPet
};
