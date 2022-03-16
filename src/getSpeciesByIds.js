const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  let animalSearch = [];
  if (!ids) {
    return animalSearch;
  }
  animalSearch = data.species.filter((speciesIdFilter) => {
    const verification = ids.some((id) => speciesIdFilter.id === id);
    return verification;
  });
  console.log(animalSearch);
  return animalSearch;
}

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
