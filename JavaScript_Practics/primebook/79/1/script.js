"use strict"
let json = '[1,2,3,4,5]';
let arr = JSON.parse(json);
console.log(arr)
let sum = 0;
for (const arrElement of arr) {
    sum += arrElement;
}
console.log(sum);