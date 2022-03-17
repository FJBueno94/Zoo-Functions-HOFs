const { employees } = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.some((employeesFind) =>
    employeesFind.managers.some((managerFind) => managerFind === id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((worker) => worker.managers.includes(managerId))
    .map((worker) => {
      const { firstName, lastName } = worker;
      const fullName = `${firstName} ${lastName}`;
      return fullName;
    });
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
