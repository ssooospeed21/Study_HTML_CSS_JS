"use strict"
let button = document.querySelector('#button');
let elem3 = document.querySelector('#elem3');

window.addEventListener('scroll', function() {
    if (window.scrollY == 10372) {
        alert('you reached the end of the page!')
    } else {
        console.log(window.scrollY)
    }
});
