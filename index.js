// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your Github username?',
    name: 'username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
}, {
    type: 'input',
    message: 'What is your projects name?',
    name: 'project'
}, {
    type: 'input',
    message: 'Please write a description for your project',
    name: 'Description'
}, {
    type: 'input',
    message: 'What kind of License do you want your project to have?',
    name: 'License'
}, {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'install'
}, {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test'
}, {
    type: 'input',
    message: 'What should the user know about the usage for this repo?',
    name: 'Usage'
}, {
    type: 'input',
    message: 'What should the user know about contributing to the repo?',
    name: 'Contributing'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
