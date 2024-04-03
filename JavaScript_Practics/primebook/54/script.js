"use strict"
let obj = {a : 1, b : 2};
let simb = Symbol('huuuuh?');
obj[simb] = 3;
console.log(obj);
for (let ob in obj){
    console.log(ob);
}