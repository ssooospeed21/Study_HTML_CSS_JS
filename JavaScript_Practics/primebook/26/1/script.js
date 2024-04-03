"use strict"
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    let scrollTop = elem.scrollTop;
    console.log(String(scrollTop));
});

