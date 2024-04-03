"use strict"
let buttonhide = document.getElementById('buttonhide');
let buttonshow = document.getElementById('buttonshow');
let div = document.getElementById('elem');

buttonhide.addEventListener('click', function() {
    div.style.display = 'none';
})

buttonshow.addEventListener('click', function() {
    div.style.display = '';
})