"use strict"
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

button.addEventListener('click', function () {
    console.log(scrollHeight);
})