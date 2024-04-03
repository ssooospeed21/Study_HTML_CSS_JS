"use strict"
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    window.scrollBy({
        top: -300,
        behavior: 'smooth'
    });
});