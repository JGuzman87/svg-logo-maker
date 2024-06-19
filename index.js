const fs = require("fs");
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");


const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter 3 charachters"

    },
    {
        type: "input",
        name: "color",
        message: "Please choose text color"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose shape type",
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: "input",
        name: "shape color",
        message: "Please choose shape color"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile("./logo.svg", shapes({...responses}));
    })
}

init();