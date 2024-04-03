"use strict"
let button = document.getElementById('button');
let div = document.getElementById('elem');

button.addEventListener('click', function() {
    alert(div.style.border);
})