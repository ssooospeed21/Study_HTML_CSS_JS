"use strict"

let questionsObj = {
    'Вопрос 1?': 'ответ 1',
    'Вопрос 2?': 'ответ 2',
    'Вопрос 3?': 'ответ 3',
};

let test = document.getElementById('test');
let button = document.getElementById('button');

button.addEventListener('click', function() {
    let correct = true;

    for (let question in questionsObj) {
        let input = test.querySelector(`input[data-question="${question}"]`);
        if (input.value.trim().toLowerCase() !== questionsObj[question]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуйте еще раз.');
    }
});


// Или второй вариант

/*let questionsArr = [
    {
        text: 'вопрос 1?',
        right: 'ответ 1',
    },
    {
        text: 'вопрос 2?',
        right: 'ответ 2',
    },
    {
        text: 'вопрос 3?',
        right: 'ответ 3',
    },
];

let test = document.getElementById('test');
let button = document.getElementById('button');

button.addEventListener('click', function() {
    let correct = true;

    questionsArr.forEach((question) => {
        let input = test.querySelector(`input[data-question="${question.text}"]`);
        if (input.value.trim().toLowerCase() !== question.right) {
            correct = false;
            return;
        }
    });

    if (correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуйте еще раз.');
    }
});*/

