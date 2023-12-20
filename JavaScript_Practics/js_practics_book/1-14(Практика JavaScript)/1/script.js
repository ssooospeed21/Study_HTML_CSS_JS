"use strict"

let GeometryFunctions = {
    Square: () => {
        let side = parseFloat(document.querySelectorAll('#squareSide').value);
        let area = side * side;
        let perimeter = 4 * side;
        document.querySelectorAll('#squareResult').innerText = `Площадь: ${area}, Периметр: ${perimeter}`;
    },

    Rectangle: () => {
        let length = parseFloat(document.querySelectorAll('#rectangleLength').value);
        let width = parseFloat(document.querySelectorAll('#rectangleWidth').value);
        let area = length * width;
        let perimeter = 2 * (length + width);
        document.querySelectorAll('#rectangleResult').innerText = `Площадь: ${area}, Периметр: ${perimeter}`;
    },

    Circle: () => {
        let radius = parseFloat(document.querySelectorAll('#circleRadius').value);
        let area = Math.PI * radius * radius;
        let circumference = 2 * Math.PI * radius;
        document.querySelectorAll('#circleResult').innerText = `Площадь: ${area}, Длина окружности: ${circumference}`;
    },

    Triangle: () => {
        let a = parseFloat(document.querySelectorAll('#triangleSideA').value);
        let b = parseFloat(document.querySelectorAll('#triangleSideB').value);
        let c = parseFloat(document.querySelectorAll('#triangleSideC').value);
        let perimeter = (a + b + c) / 2;
        let area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
        document.querySelectorAll('#triangleResult').innerText = `Площадь: ${area}`;
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GeometryFunctions;
}
