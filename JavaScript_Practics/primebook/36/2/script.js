"use strict"
let map = new Map();
let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let array3 = [true, false];
let obj1 = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd'};
let obj2 = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5};
let obj3 = {'t': true, 'f': false};
map.set(obj1, array1);
map.set(obj2, array2);
map.set(obj3, array3);

for (let [key, elem] of map){
    console.log(elem);
}