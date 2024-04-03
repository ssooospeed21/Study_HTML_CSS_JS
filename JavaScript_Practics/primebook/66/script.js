"use strict"
function *func(obj) {
	for (let elem of obj) {
		console.log(elem[key,el]); // ['a', 1], ['b', 2], ['c', 3]
	}
}
let iter = func({a: 1, b: 2, c: 3});
console.log(iter);