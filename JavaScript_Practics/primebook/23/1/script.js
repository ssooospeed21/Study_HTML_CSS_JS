"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    console.log(window.innerWidth, window.innerHeight);
})