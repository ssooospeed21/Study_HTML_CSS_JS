"use strict"
function *func() {
	for (let i = 1; i <= 3; i++) {
		yield i;
	}
}

let elems = func();

for (let elem of func()) {
	console.log(elem);
}
for (let elem of func()) {
	console.log(elem);
}