"use strict"
let a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add(4);
for (let entry of a) {
  console.log(entry);
}