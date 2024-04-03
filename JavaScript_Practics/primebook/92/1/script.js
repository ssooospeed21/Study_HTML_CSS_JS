"use strict"
for (let i = 0; i < 10; i++) {
    localStorage.setItem(`${i}`, i);
}

function huh() {
    let key = Object.keys(localStorage);
    console.log(key);

}