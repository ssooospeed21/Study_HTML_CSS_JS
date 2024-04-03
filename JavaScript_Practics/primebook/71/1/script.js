"use strict"
let a = new Map();
a.set('1', 1);
a.set('2', 2);
a.set('3', 3);
a.set('4', 4);
for (let [key, entry] of a) {
  console.log('key', key);
  console.log(entry);
}