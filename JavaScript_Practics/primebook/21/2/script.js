"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    if (elem.scrollTop === elem.scrollHeight){
        alert('вы в конце')
    } else {
        alert('вы не в конце')
    }
})