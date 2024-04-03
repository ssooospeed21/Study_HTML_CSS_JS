"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function () {
    if (elem.scrollTop > 0) {
        result.textContent = String(elem.scrollTop) + ' px по вертикали';
    } else {
        result.textContent = 'блок не прокручен';
    }
})