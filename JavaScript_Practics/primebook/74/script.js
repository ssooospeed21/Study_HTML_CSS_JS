"use strict"
let str = '12345';
let a = [];
for (let strElement of str) {
    a.push(+strElement);
}
console.log(a);
let res = 0;
for (const aElement of a) {
    res += aElement;
}
console.log(res);