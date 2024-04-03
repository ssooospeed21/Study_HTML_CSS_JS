"use strict"
for (let i = 0; i < 10; i++) {
    localStorage.setItem(`${i}`, i);
}
function huh() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let res = localStorage.getItem(key);
        console.log(res);
    }
}