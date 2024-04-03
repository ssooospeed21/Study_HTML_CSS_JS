"use strict"
let button = document.getElementById('button');
let div = document.getElementById('elem');

button.addEventListener('click', function() {
    let width = parseInt(div.style.width);
    let height = parseInt(div.style.height);
    div.style.width = (width + 50) + 'px';
    div.style.height = (height + 50) + 'px';
})