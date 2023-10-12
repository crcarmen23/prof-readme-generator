const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({projectTitle, description, installation, usage, credits, license, tests, contributing})

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
    message: 'What is the title of your project?',
    name: 'projectTitle'
}, {
    type: 'input',
    message: 'Please write a short description explaining the what, why, and how of your project.',
    name: 'description'
}, {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
}, {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage'
}, {
    type: 'input',
    message: 'Who did you collaborate with on this project?',
    name: 'credits'
}, {
    type: 'input',
    message: 'What kind of License do you want your project to have?',
    name: 'license',
}, {
    type: 'input',
    message: 'What should the user know about contributing to the repo?',
    name: 'contributing'
}, {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests'
}
];


function generateMarkdown(data) {
    return `
# ${data.title}

## Description
    
${data.description}
    
## Table of Contents
       
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## Credits
    
${data.credits}
    
## License
    
${data.license}
    
## How to Contribute
    
Collaborated with ${data.contributing}.
    
## Tests

${data.tests}
  `;
  }

function init() {
inquirer.prompt(questions)
.then((data) => {
    const readmeContent = generateReadme(data);
    
    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}); }

init();
