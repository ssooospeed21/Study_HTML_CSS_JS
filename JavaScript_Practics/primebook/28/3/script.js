"use strict"
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    window.scrollTo({
        top: elem.clientHeight,
        behavior: 'smooth'
    });
});

