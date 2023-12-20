"use strict";
let game = document.getElementById('game');
let timerElement = document.getElementById('timer');
let hiddenCells = [];
let timer;

function startGame() {
    game.innerHTML = '';
    hiddenCells = [];
    if (timer) {
        clearInterval(timer);
    }

    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('td');
            cell.classList.add('hidden');
            cell.addEventListener('click', function() {
                if (hiddenCells.includes(cell)) {
                    cell.classList.remove('hidden');
                    cell.classList.add('found');
                    hiddenCells.splice(hiddenCells.indexOf(cell), 1);
                    if (hiddenCells.length === 0) {
                        clearInterval(timer);
                        alert('Вы выиграли!');
                    }
                }
            });
            row.appendChild(cell);
        }
        game.appendChild(row);
    }

    let cells = Array.from(game.getElementsByTagName('td'));
    while (hiddenCells.length < 5) {
        let randomCell = cells[Math.floor(Math.random() * cells.length)];
        if (!hiddenCells.includes(randomCell)) {
            hiddenCells.push(randomCell);
        }
    }

    // Начать таймер
    let timeLeft = 60;
    timerElement.textContent = 'Оставшееся время: ' + timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = 'Оставшееся время: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Время вышло! Вы проиграли.');
        }
    }, 1000);
}