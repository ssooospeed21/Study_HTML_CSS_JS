"use strict"
let num = 23457859;
let a = [...String(num)].map(Number);
console.log(a);
let res = 0;
for (const number of a) {
    res += number;
}
console.log(res);