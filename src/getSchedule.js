const data = require('../data/zoo_data');

const { hours, species } = data;
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

// retorna array com o nome dos animais disponiveis naquele dia(callback de callback)
const animalDays = (dia) => {
  const verify = species.filter((animal) => {
    if (animal.availability.includes(dia)) {
      return animal.name;
    }
    return undefined;
  });
  return verify.map((element) => element.name);
};

// retorna objeto com informações de todos animais caso não tenha parametro ou seja parametro invalido
const noParameter = () => {
  const schedule = {
    Tuesday: { officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
      exhibition: animalDays('Tuesday') },
    Wednesday: { officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
      exhibition: animalDays('Wednesday') },
    Thursday: { officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
      exhibition: animalDays('Thursday') },
    Friday: { officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
      exhibition: animalDays('Friday') },
    Saturday: { officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
      exhibition: animalDays('Saturday') },
    Sunday: { officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
      exhibition: animalDays('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return schedule;
};

// retorna os animais disponiveis somente neste dia para parametro tipo dia
const findDay = (day) => {
  const schedule = {};
  if (day === 'Monday') {
    schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    schedule[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalDays(day) };
  }
  return schedule;
};

// retorna os dias de exibição do animal procurado
const animalSchedule = (animal) => {
  const schedule = species.find((animalfilter) => {
    if (animalfilter.name === animal) {
      return animalfilter;
    }
    return undefined;
  });
  return schedule.availability;
};

// função principal a ser chamada
function getSchedule(scheduleTarget) {
  const specieParameter = species.some((e) => e.name === scheduleTarget);
  const dayParameter = Object.keys(hours).includes(scheduleTarget) === true;
  if (dayParameter === true) {
    return findDay(scheduleTarget);
  } if (specieParameter === true) {
    return animalSchedule(scheduleTarget);
  }
  return noParameter();
}

console.log(getSchedule({}));

module.exports = getSchedule;
