class Shapes {
    constructor() {
       this.color ='';
    }
    setColor(color) {
        this.color = (color);
    }
    renderText(text, textColor) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}

class Triangle extends Shapes{
    render(text, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="${this.color}" />
        ${this.renderText(text, textColor)}</svg>`
    }
        
    

}

class Circle extends Shapes{
    render(text, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" />
        ${this.renderText(text, textColor)}</svg>`
    }

}

class Square extends Shapes{
    render(text, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" x="10" y="10" fill="${this.color}" />
        ${this.renderText(text, textColor)}</svg>`
    }

}



module.exports = {Triangle, Circle, Square}