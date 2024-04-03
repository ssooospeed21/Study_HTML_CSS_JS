"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    console.log(elem.scrollWidth);
    console.log(elem.scrollHeight);
})