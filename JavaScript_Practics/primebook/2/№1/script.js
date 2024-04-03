"use strict"
let button = document.getElementById('button');
let div = document.getElementById('div');

button.addEventListener('click', function() {
    div.style.width = '400px';
    div.style.height = '300px';
    div.style.backgroundColor = 'black'
})