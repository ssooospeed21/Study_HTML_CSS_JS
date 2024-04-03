"use strict"
let inputs = document.querySelectorAll('input');

for (let [key, {id, value}] of inputs.entries()) {
    console.log(key+1, id, value);
}