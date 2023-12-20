"use strict"
let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
    'ответ 4',
];
let questions = [
    'вопрос 1?',
    'вопрос 2?',
    'вопрос 3?',
    'вопрос 4?',
];

let testDiv = document.querySelector('#test');
let button = document.querySelector('#button');

for (let i = 0; i < questions.length; i++) {
    let questionP = document.createElement('p');
    questionP.textContent = questions[i];
    testDiv.appendChild(questionP);

    let answerInput = document.createElement('input');
    answerInput.setAttribute('data-right', answers[i]);
    testDiv.appendChild(answerInput);
}

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.value === input.getAttribute('data-right')) {
            input.classList.remove('wrong');
            input.classList.add('right');
        } else {
            input.classList.remove('right');
            input.classList.add('wrong');
        }
    }
});
