"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    if (elem.scrollLeft > 0) {
        console.log('есть вертикальная прокрутка');
    } else {
        console.log('вертикальная прокрутка отсутсвует');
    }
})