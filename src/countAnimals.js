const { species } = require('../data/zoo_data');

function counting() {
  const countingAnimals = {};
  const animalFinal = species.map((animalFilter) => animalFilter);
  animalFinal.forEach(({ name, residents }) => {
    countingAnimals[name] = residents.length;
    return countingAnimals;
  });
  return countingAnimals;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return counting();
  }
  const { specie, sex } = animal;
  if (Object.keys(animal).includes('sex')) {
    const animalObj = species.find((spec) => spec.name.includes(specie));
    const howMany = [];
    animalObj.residents.forEach((eachAnimal) => howMany.push(eachAnimal.sex === sex));
    return howMany.filter((element) => element === true).length;
  }
  if (Object.keys(animal).includes('specie')) {
    const animalObj = species.find((spec) => spec.name.includes(specie));
    return animalObj.residents.length;
  }
}

console.log(countAnimals());
module.exports = countAnimals;
