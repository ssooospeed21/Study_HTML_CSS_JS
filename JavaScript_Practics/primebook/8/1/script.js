"use strict"
let button = document.getElementById('button');
let div = document.getElementById('elem');
let style = getComputedStyle(div);
button.addEventListener('click', function() {
    alert('width: ' + style.width + ' height: ' + style.height)
})