"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    elem.scrollTop = 100;
    elem.scrollLeft = 50;
})