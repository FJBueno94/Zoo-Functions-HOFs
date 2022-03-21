const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entry = { child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
  return entry;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const { child, adult, senior } = data.prices;
  const childTotal = child * countEntrants(entrants).child;
  const adultTotal = adult * countEntrants(entrants).adult;
  const seniorTotal = senior * countEntrants(entrants).senior;
  return childTotal + adultTotal + seniorTotal;
}

console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
