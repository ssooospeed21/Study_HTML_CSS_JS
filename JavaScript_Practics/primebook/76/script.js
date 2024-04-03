"use strict"
let cells = document.querySelectorAll('td');

for (let [num, cell] of cells.entries()) {
    cell.textContent += ' ' + (num + 1);
}