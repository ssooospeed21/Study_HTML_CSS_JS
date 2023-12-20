"use strict";
let timerElement = document.getElementById('timer');
let textElement = document.getElementById('text');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let predictions = [
    {text: 'Предсказание 1', type: 'good'},
    {text: 'Предсказание 2', type: 'bad'},
];

let timer;

startButton.addEventListener('click', function() {
    startButton.classList.remove('active');
    stopButton.classList.add('active');
    timer = setInterval(function() {
        timerElement.textContent = Math.floor(Math.random() * predictions.length) + 1;
    }, 100);
});

stopButton.addEventListener('click', function() {
    clearInterval(timer);
    let prediction = predictions[timerElement.textContent - 1];
    textElement.textContent = prediction.text;
    textElement.classList.add(prediction.type);
    startButton.style.display = 'none';
    stopButton.style.display = 'none';
});
