"use strict"
let button = document.getElementById('button');
let div = document.getElementById('elem');

button.addEventListener('click', function() {
    div.style.cssText = 'width: 100px; height: 100px; margin: 10px auto; color: red;';
})