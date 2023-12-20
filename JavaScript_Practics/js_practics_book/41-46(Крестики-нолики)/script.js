"use strict"
function start(cells) {
    let i = 0;

    for (let cell of cells) {
        cell.addEventListener('click', function() {
            if (this.textContent === '') {
                this.textContent = i % 2 === 0 ? 'X' : 'O';
                if (isVictory(cells)) {
                    alert(this.textContent + ' - Победитель!');
                } else if (i == 8) {
                    alert('ничья');
                }

                i++;
            }
        });
    }
}

function isVictory(cells) {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let combination of combinations) {
        if (
            cells[combination[0]].textContent == cells[combination[1]].textContent &&
            cells[combination[1]].textContent == cells[combination[2]].textContent &&
            cells[combination[0]].textContent != ''
        ) {
            return true;
        }
    }

    return false;
}

let cells = document.querySelectorAll('#field td');
start(cells);
