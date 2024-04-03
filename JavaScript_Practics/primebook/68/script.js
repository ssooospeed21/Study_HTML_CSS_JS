"use strict"
let obj = {a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]:function *() {
    let keys = Object.keys(this);
  for (let key of keys) {
    yield { key: key, val: this[key] };
  }}};

for (let item of objIterable) {
  console.log(item);
}
