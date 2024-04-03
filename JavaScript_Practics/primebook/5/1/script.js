"use strict"
let buttonred = document.getElementById('buttonhide');
let buttonback = document.getElementById('buttonshow');
let div = document.getElementById('elem');

buttonred.addEventListener('click', function() {
    div.style.border = '1px solid red';
})

buttonback.addEventListener('click', function() {
    div.style.border = '1px solid blue';
})