require("dotenv").config();
const inquirer = require("inquirer");
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./lib/queries");
const { displayTable } = require("./lib/utils");

// Function to start the application
function startApp() {
  // Prompt the user with options
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      // Based on the user's choice, call the appropriate function
      switch (answer.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addNewDepartment();
          break;
        case "Add a role":
          addNewRole();
          break;
        case "Add an employee":
          addNewEmployee();
          break;
        case "Update an employee role":
          updateEmpRole();
          break;
        case "Exit":
          console.log("Goodbye!");
          process.exit(0);
      }
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      process.exit(1);
    });
}

// Function to view all departments
function viewAllDepartments() {
  getAllDepartments()
    .then(([rows]) => {
      displayTable(rows);
      startApp();
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to view all roles
function viewAllRoles() {
  getAllRoles()
    .then(([rows]) => {
      displayTable(rows);
      startApp();
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to view all employees
function viewAllEmployees() {
  getAllEmployees()
    .then(([rows]) => {
      displayTable(rows);
      startApp();
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to add a new department
function addNewDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the department:",
      },
    ])
    .then((answer) => {
      addDepartment(answer.name)
        .then(() => {
          console.log("Department added successfully!");
          startApp();
        })
        .catch((err) => {
          console.log("An error occurred:", err);
          startApp();
        });
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to add a new role
function addNewRole() {
  getAllDepartments()
    .then(([rows]) => {
      const departmentChoices = rows.map((department) => ({
        name: department.name,
        value: department.id,
      }));

      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "Enter the title of the role:",
          },
          {
            type: "input",
            name: "salary",
            message: "Enter the salary of the role:",
          },
          {
            type: "list",
            name: "departmentId",
            message: "Select the department of the role:",
            choices: departmentChoices,
          },
        ])
        .then((answer) => {
          addRole(answer.title, answer.salary, answer.departmentId)
            .then(() => {
              console.log("Role added successfully!");
              startApp();
            })
            .catch((err) => {
              console.log("An error occurred:", err);
              startApp();
            });
        })
        .catch((err) => {
          console.log("An error occurred:", err);
          startApp();
        });
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to add a new employee
function addNewEmployee() {
  getAllRoles()
    .then(([rows]) => {
      const roleChoices = rows.map((role) => ({
        name: role.title,
        value: role.id,
      }));

      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name:",
          },
          {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name:",
          },
          {
            type: "list",
            name: "roleId",
            message: "Select the employee's role:",
            choices: roleChoices,
          },
          {
            type: "input",
            name: "managerId",
            message: "Enter the employee's manager ID (if any):",
          },
        ])
        .then((answer) => {
          addEmployee(
            answer.firstName,
            answer.lastName,
            answer.roleId,
            answer.managerId
          )
            .then(() => {
              console.log("Employee added successfully!");
              startApp();
            })
            .catch((err) => {
              console.log("An error occurred:", err);
              startApp();
            });
        })
        .catch((err) => {
          console.log("An error occurred:", err);
          startApp();
        });
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Function to update an employee's role
function updateEmpRole() {
  getAllEmployees()
    .then(([rows]) => {
      const employeeChoices = rows.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));

      getAllRoles()
        .then(([roleRows]) => {
          const roleChoices = roleRows.map((role) => ({
            name: role.title,
            value: role.id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "employeeId",
                message: "Select the employee to update:",
                choices: employeeChoices,
              },
              {
                type: "list",
                name: "roleId",
                message: "Select the new role for the employee:",
                choices: roleChoices,
              },
            ])
            .then((answer) => {
              updateEmployeeRole(answer.employeeId, answer.roleId)
                .then(() => {
                  console.log("Employee role updated successfully!");
                  startApp();
                })
                .catch((err) => {
                  console.log("An error occurred:", err);
                  startApp();
                });
            })
            .catch((err) => {
              console.log("An error occurred:", err);
              startApp();
            });
        })
        .catch((err) => {
          console.log("An error occurred:", err);
          startApp();
        });
    })
    .catch((err) => {
      console.log("An error occurred:", err);
      startApp();
    });
}

// Start the application
startApp();
