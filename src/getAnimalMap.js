const data = require('../data/zoo_data');

const { species } = data;

const noParameter = () => {
  const obj = {};
  species.forEach((e) => {
    if (!obj[e.location]) {
      obj[e.location] = [];
    }
    obj[e.location].push(e.name);
  });
  return obj;
};

const includeName = (sex, sorted) => {
  const obj = {};
  species.forEach((e) => {
    if (!obj[e.location]) {
      obj[e.location] = [];
    }
    let residents1 = e.residents.map((e1) => e1.name);
    if (sorted) residents1.sort();
    if (sex) {
      residents1 = [];
      e.residents.filter((e2) => e2.sex === sex).map((e1) => {
        residents1.push(e1.name);
        return residents1;
      });
      if (sorted) residents1.sort();
    }
    obj[e.location].push({ [e.name]: residents1 });
  });
  return obj;
};

function getAnimalMap(options) {
  if (!options) return noParameter();
  const { includeNames, sex, sorted } = options;
  if (includeNames === true) return includeName(sex, sorted);
  return noParameter();
}

module.exports = getAnimalMap;
