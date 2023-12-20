"use strict"
let questions = [
    {
        text: 'вопрос 1?',
        right: 0,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 2?',
        right: 1,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 3?',
        right: 2,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
];

let testDiv = document.querySelector('#test');

// Создаем вопросы и варианты ответов
for (let i = 0; i < questions.length; i++) {
    let questionDiv = document.createElement('div');

    let questionP = document.createElement('p');
    questionP.textContent = questions[i].text;
    questionDiv.appendChild(questionP);

    for (let j = 0; j < questions[i].variants.length; j++) {
        let answerLabel = document.createElement('label');

        let answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'question' + i;
        if (j === questions[i].right) {
            answerInput.setAttribute('data-right', '');
        }
        answerLabel.appendChild(answerInput);

        let answerText = document.createTextNode(questions[i].variants[j]);
        answerLabel.appendChild(answerText);

        questionDiv.appendChild(answerLabel);
    }

    testDiv.appendChild(questionDiv);
}

let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.checked) {
            if (input.hasAttribute('data-right')) {
                input.classList.remove('wrong');
                input.classList.add('right');
            } else {
                input.classList.remove('right');
                input.classList.add('wrong');
            }
        }
    }
});
