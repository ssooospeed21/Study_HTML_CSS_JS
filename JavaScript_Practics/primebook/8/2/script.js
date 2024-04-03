"use strict"
let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
let stylewidth = parseFloat(getComputedStyle(elem).width)
let styleheight = parseFloat(getComputedStyle(elem).height)
button.addEventListener('click', function () {
    elem.style.width = (stylewidth * 2) + 'px';
    elem.style.height = (styleheight * 2) + 'px';
})