const inquirer = require('inquirer');
const fs = require('fs');

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
    message: 'What is the name of the repository where you would like this README.md to be placed?',
    name: 'repository'
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

const generateReadme = ({projectTitle, description, installation, usage, credits, license, tests, contributing}) =>
 `
# <${projectTitle}>

## Description
    
${description}
    
## Table of Contents
       
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
## Credits
    
Collaborated with ${credits}.
    
## License
    
${license}
    
## How to Contribute
    
${contributing}
    
## Tests

${tests}

## Questions

If you have any additional questions, please refer to the my github profile at (https://github.com/${username}) or email me at ${email}. Thank you!
  `;

inquirer
.prompt(questions)
.then((data) => {
    const readmeContent = generateReadme(data);
    
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your README.md!')
  );
}); 

