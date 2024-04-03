"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    elem.style.height = elem.scrollHeight + 'px';
    elem.style.width = elem.scrollWidth + 'px';
})