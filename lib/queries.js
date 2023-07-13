const pool = require("./connection");

// Function to get all departments from the database
function getAllDepartments() {
  return pool.promise().query("SELECT * FROM department");
}

// Function to get all roles from the database
function getAllRoles() {
  return pool.promise().query("SELECT * FROM role");
}

// Function to get all employees from the database
function getAllEmployees() {
  return pool.promise().query("SELECT * FROM employee");
}

// Function to add a new department to the database
function addDepartment(name) {
  return pool
    .promise()
    .query("INSERT INTO department (name) VALUES (?)", [name]);
}

// Function to add a new role to the database
function addRole(title, salary, departmentId) {
  return pool
    .promise()
    .query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [
      title,
      salary,
      departmentId,
    ]);
}

// Function to add a new employee to the database
function addEmployee(firstName, lastName, roleId, managerId) {
  return pool
    .promise()
    .query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [firstName, lastName, roleId, managerId]
    );
}

// Function to update an employee's role in the database
function updateEmployeeRole(employeeId, roleId) {
  return pool
    .promise()
    .query("UPDATE employee SET role_id = ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
