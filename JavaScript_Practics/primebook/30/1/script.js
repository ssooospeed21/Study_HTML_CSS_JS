"use strict"
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#elem2');
button.addEventListener('click', function() {
    elem.scrollIntoView({
        behavior: 'smooth',
        block: "nearest",

    });
});

button.addEventListener('dblclick', function() {
    elem2.scrollIntoView({
        behavior: 'auto',
        block: "center",
    });
});
