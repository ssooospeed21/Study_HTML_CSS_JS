"use strict"
let arr = [];
function funcia() {
    let inputs = document.querySelectorAll("input");
    for (const input of inputs) {
        arr.push(input.value);
    }
    localStorage.setItem("arr", JSON.stringify(arr));
}

function loadValues() {
    let storedValues = JSON.parse(localStorage.getItem("arr"));
    if (storedValues) {
        let inputs = document.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = storedValues[i];
        }
    }
}

window.onload = loadValues;