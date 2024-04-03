"use strict"
let time = localStorage.getItem('time');

if (!time) {
    let now = Date.now();
    localStorage.setItem('time', now);
} else {
    let time1 = +localStorage.getItem('time');
    let now = Date.now();
    console.log('time after: ', (now - time1)/60);
}