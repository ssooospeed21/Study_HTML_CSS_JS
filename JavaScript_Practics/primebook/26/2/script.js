"use strict"
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
    let scrollHeight = elem.scrollHeight;
    let scrollTop = elem.scrollTop;
    let clientHeight = elem.clientHeight;
    let scrollBottom = scrollHeight - scrollTop - clientHeight;
    console.log(scrollBottom);
});


