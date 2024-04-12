"use strict"
let arr = [];
function funcia() {
    let inputs = document.querySelectorAll("input");
    for (const input of inputs) {
        arr.push(input.value);
    }
    localStorage.setItem("arr", JSON.stringify(arr));
}