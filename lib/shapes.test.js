const {Triangle, Circle, Square} = require('./shapes');


describe('Shapes', () => {

    it('does it return a string for the corresponding SVG file with given shape and color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        const text = ("undefined");
        const textColor = ("undefined")
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>`)  
    });

});

describe('Shapes', () => {

    it('does it return a string for the corresponding SVG file with given shape and color', () => {
        const shape = new Circle();
        shape.setColor("green");
        const text = ("undefined");
        const textColor = ("undefined")
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>`)
    });
    
});

describe('Shapes', () => {

    it('does it return a string for the corresponding SVG file with given shape and color', () => {
        const shape = new Square();
        shape.setColor("green");
        const text = ('undefined');
        const textColor = ('undefined')
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" x="10" y="10" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>`)
    });
});






