"use strict"
let div = document.getElementById('elem');
let button = document.getElementById('button');


button.addEventListener('click', function () {
   document.createElement('div').textContent = 'font weight' + div.style.fontSize;
})