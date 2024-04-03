"use strict"
let cities = document.querySelectorAll('li');
let arr = [];
for (const citiesElement of cities) {
    arr.push(citiesElement.textContent);
}
let res = JSON.stringify(arr);
console.log(res);