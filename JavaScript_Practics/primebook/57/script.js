"use strict"
let obj1 = {a:1, b:2, c:3};
let obj2 = {a:1, b:2, c:3};
let obj3 = {a:1, b:2, c:3};
let sum = Symbol.for('sum');
function sum() {
  let res = 0;
  for(let ob of this){
    res += ob;
  }
  console.log(res);
}
obj1.sum = sum();
obj2.sum = sum();
obj3.sum = sum();