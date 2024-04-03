"use strict"
for (let i = 1; i <= 10; i++) {
    localStorage.setItem('key ' + i, String(i));
}
let button = document.querySelector('#sum');
button.addEventListener('dblclick', function () {
    let sumarr = [];
    for (let i = 1; i <= 10; i++) {
        sumarr.push(localStorage.getItem(`key ${i}`));
    }
    console.log(sumarr);
    let res = 0;
    for (const elem of sumarr) {
        res += +elem;
    }
    console.log(res);
});