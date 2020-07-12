// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation requirements?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is this project used for?",
        name: "usage"
    },
    {
        type: "input",
        message: "List any contribution guidelines",
        name: "contributions"
    },
    {
        type: "input",
        message: "What type of license is used?",
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }


];

// function to write README file
function writeToFile(fileName, data) {
    let generate = generateMarkdown(data);
    fs.writeFile(fileName, generate, function() {
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", answers);
    })
}

// function call to initialize program
init();
