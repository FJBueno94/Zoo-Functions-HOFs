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

module.exports = { calculateEntry, countEntrants };
