"use strict"
let mass = [1, 2, 3];
let simb = Symbol();
mass[simb] = function () {
  let sum = 0;
  for (let elem in this){
      sum += this[elem];
  }
};

let res = mass[simb]();
console.log(res);
console.log(mass);