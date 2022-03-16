const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employeeSearch = data.employees.find((empNameFind) => {
    const verify = empNameFind.firstName === employeeName || empNameFind.lastName === employeeName;
    return verify;
  });
  return employeeSearch;
}

module.exports = getEmployeeByName;
