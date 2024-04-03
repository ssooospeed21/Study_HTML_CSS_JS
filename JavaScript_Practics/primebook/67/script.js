"use strict"
let obj = {a: 1, b: 2, c: 3};

function* generateIterable() {
  let keys = Object.keys(this);
  for (let key of keys) {
    yield { key: key, val: this[key] };
  }
}

let objIterable = generateIterable(obj);

for (let item of objIterable) {
  console.log(item);
}