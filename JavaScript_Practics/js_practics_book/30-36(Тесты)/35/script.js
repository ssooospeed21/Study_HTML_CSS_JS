"use strict"

let test = document.querySelectorAll('#test input[type="radio"]');
let answers = [0, 1, 2];

let button = document.getElementById('button');
button.addEventListener('click', function() {
    let questions = document.querySelectorAll('#test div');
    questions.forEach(function(question) {
        let radios = question.querySelectorAll('input[type="radio"]');
        let answered = false;
        radios.forEach(function(radio) {
            if (radio.checked) {
                answered = true;
            }
        });
        if (!answered) {
            alert('Ответьте на все вопросы, пожалуйста.');
            return;
        }

        radios.forEach(function(radio) {
            let parentLabel = radio.parentElement;
            parentLabel.classList.remove('right', 'wrong');
            if (radio.checked && radio.dataset.right !== undefined) {
                parentLabel.classList.add('right');
            } else if (radio.checked && radio.dataset.right === undefined) {
                parentLabel.classList.add('wrong');
            }
        });
    });
});

