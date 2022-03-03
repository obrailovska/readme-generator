// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
/*WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions*/

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "desc",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "instructions",
    message: "What are your project installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information",
  },
  {
    type: "input",
    name: "guide",
    message: "Contribution Guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Test Instructions",
  },
  {
    type: "list",
    name: "license",
    message: "What license your project use?",
    choices: ["MIT", "Apache", "BSD"],
  },
  {
    type: "input",
    name: "github",
    message: "Github Username",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (res) {
    console.log(res);
    writeToFile('README.md', generateMarkdown(res))
  });
}

// Function call to initialize app
init();
