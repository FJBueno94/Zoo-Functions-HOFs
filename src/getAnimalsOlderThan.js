const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSearch = data.species.filter((speciesNameFilter) => {
    const verification = speciesNameFilter.name === animal;
    return verification;
  });
  const verifyAge = animalSearch[0].residents.every((animalAgeFilter) => {
    const verification = animalAgeFilter.age > age;
    return verification;
  });
  if (verifyAge) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
