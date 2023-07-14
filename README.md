# Employee Database Manager

The goal of this project was to build a command line application to create and manage an employee database. It has been built to meet the requirements of the project so that when the app is started the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. Once the user selects from that menu the app will use the appropriate function and either display date in a table or lead to the next prompt if needed for that function. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Sources](#sources)

## Installation

To use the Employee Database Manager, please follow these steps:

1. Clone the GitHub repository to your local machine.
2. Navigate to the project's root directory.
3. Run `npm install` to install the necessary dependencies.
4. Create a MySQL database and update the database credentials in the `.env` file.
5. Run the database schema and seed the initial data using the provided SQL files.
6. Start the application by running `node index.js`.

## Usage

Once the application is running, you will be presented with a menu of options to choose from. The available options include:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Simply select the desired option by using the arrow keys and pressing Enter. Follow the prompts to provide the necessary information for adding or updating data.


## Demo of App

A walkthrough video demonstrating the functionality of the Employee Database Manager can be found at [link-to-video](https://drive.google.com/file/d/1acvZexrfIQnR0_I4n0vZGVio78kDfPym/view?usp=sharing).

Screenshot of deployed application: ![Screenshot](./assets/Screen%20Shot%202023-07-13%20at%209.53.26%20PM.png)

## Technologies

The Employee Database Manager is built with the following technologies:

- Node.js
- Inquirer.js
- MySQL

## Contributing

Contributions are welcome! If you find any issues or would like to suggest enhancements, please submit an issue or pull request to the GitHub repository.

## License

None.

## Sources

I used the documentation for inquirer frequnetly when setting up the prompts: https://www.npmjs.com/package/inquirer

Same with the mysql2 documentation: https://www.npmjs.com/package/mysql2

I referred to the bootcamps activities for this module to copy some of the boilerplate code. 
