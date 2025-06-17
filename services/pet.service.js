const petRepository = require('../repository/pet.repository');

const registerPet = async (petData) => {
  return await petRepository.createPet(petData);
};

module.exports = {
  registerPet
};
