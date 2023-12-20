"use strict";
let game = document.getElementById('game');
let hiddenCells = [];
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.classList.add('hidden');
        cell.addEventListener('click', function() {
            if (hiddenCells.includes(cell)) {
                cell.classList.remove('hidden');
                cell.classList.add('found');
                hiddenCells.splice(hiddenCells.indexOf(cell), 1);
                if (hiddenCells.length === 0) {
                    alert('Вы выиграли!');
                }
            }
        });
        row.appendChild(cell);
    }
    game.appendChild(row);
}
let cells = Array.from(game.getElementsByTagName('td'));
while (hiddenCells.length < 10) {
    let randomCell = cells[Math.floor(Math.random() * cells.length)];
    if (!hiddenCells.includes(randomCell)) {
        hiddenCells.push(randomCell);
    }
}