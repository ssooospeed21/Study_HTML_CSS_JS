"use strict"
for (let i = 1; i < 12; i++) {
    localStorage.setItem(`${i}`, i);
}
let col = localStorage.length;
function locah() {
    if (col < 10){
        alert('количество записей в local storage: ' + col);
    } else {
        localStorage.clear();
        alert('количество записей в local storage достигло максимума, хранилище очищено.')
    }
}