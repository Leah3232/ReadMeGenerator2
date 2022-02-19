// these are the packages for the applicatio to run //
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// this is the function to initialize the app & the array of questions for the user //
init();

function init() {

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name?"
        },
        {
            type: "input",
            name: "username",
            message: "What's your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What's your e-mail?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your Project?"
        },
        {
            type: "list",
            name: "license",
            message: "Which licenses will be used for this project?",
            choices: ["MIT", "GPLv3", "None" ]
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation steps?"
        },
        {
            type: "input",
            name: "usage",
            message: "Why use this project?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Who has contributed to the project?"
        },
        {
            type: "input",
            name: "build",
            message: "What languages were used?"
        },
        {
            type: "input",
            name: "sites",
            message: "Enter any sites that helped make this program:"
        },
        {
            type: "input",
            name: "tests",
            message: "What tests were done?"
        }
    ])
    .then((responses) => {
        console.log(responses);
        writeToFile("./utils/README.md", generateMarkdown(responses));
    });
}

// this is the function to write README file //
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if(error) throw error;
        console.log("File being made");
    });
};


