"use strict"
let counter = localStorage.getItem('pageCounter');
if (!counter){
    counter = 0;
}
if (counter <=9){
    document.querySelector('#counter').textContent = counter;
    window.addEventListener('load', () =>{
        counter++;
        localStorage.setItem('pageCounter', counter);
        document.querySelector('#counter').textContent = counter;
    });
} else {
    localStorage.removeItem('pageCounter');
}