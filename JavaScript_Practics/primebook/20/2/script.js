"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    elem.scrollTop = elem.scrollTop + 50;
})