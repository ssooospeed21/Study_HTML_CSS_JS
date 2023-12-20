"use strict"
let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let clicks = 0;

let table = document.getElementById('field');
let clickCounter = document.getElementById('clicks');

function getNextColor(array, color) {
    let index = array.indexOf(color);
    return array[(index + 1) % array.length];
}

function checkWin() {
    let firstCellColor = table.rows[0].cells[0].style.backgroundColor;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(table.rows[i].cells[j].style.backgroundColor !== firstCellColor) {
                return false;
            }
        }
    }
    return true;
}

for(let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    for(let j = 0; j < cols; j++) {
        let cell = document.createElement('td');
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        cell.style.backgroundColor = randomColor;
        cell.addEventListener('click', function() {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = getNextColor(colors, currentColor);
            clicks++;
            clickCounter.textContent = 'Количество кликов: ' + clicks;
            if(checkWin()) {
                alert('Победа!');
            }
        });
        row.appendChild(cell);
    }
    table.appendChild(row);
}
