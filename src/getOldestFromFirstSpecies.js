const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((idFind) => idFind.id === id);
  const { responsibleFor } = findEmployee;
  const findSpecie = species.find((specieFind) => specieFind.id === responsibleFor[0]);
  const findOlder = findSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(findOlder[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
