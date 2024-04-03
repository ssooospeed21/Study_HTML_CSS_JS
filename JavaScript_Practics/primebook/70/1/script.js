"use strict"
let map = new Map();
map.set('1', 1);
map.set('2', 2);
map.set('3', 3);
map.set('4', 4);
let res = map.keys();
for (let elem of res){
  console.log(elem);
}
