const fs = require("fs");
const path = require("path");
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
        name: "textColor",
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
        name: "shapeColor",
        message: "Please choose shape color"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function createShape({shape, text, textColor, shapeColor}) {
    let shapeInstance;
    switch (shape) {
        case "Triangle": shapeInstance = new Triangle(); break;
        case "Circle": shapeInstance = new Circle(); break;
        case "Square": shapeInstance = new Square(); break;

        default: throw new Error("Invalid shape type");
        
    }
    shapeInstance.setColor(shapeColor);
    return shapeInstance.render(text, textColor);
}

function init() {
    inquirer.prompt(questions).then(responses => {
        const shapes = createShape(responses);
        writeToFile("./logo.svg", shapes);
    });
}

init();