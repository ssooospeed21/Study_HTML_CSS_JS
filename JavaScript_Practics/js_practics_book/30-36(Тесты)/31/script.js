"use strict"

let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
];

let button = document.getElementById('button');
let inputs = document.querySelectorAll('#test input');

button.addEventListener('click', function() {
    let correct = true;

    inputs.forEach((input, index) => {
        if (input.value.trim().toLowerCase() !== answers[index]) {
            correct = false;
            return;
        }
    });

    if (correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуйте еще раз.');
    }
});