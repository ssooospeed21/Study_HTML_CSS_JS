"use strict"
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
let obj = JSON.parse(json);
console.log(obj)
let sum = 0;
for (const [key,arr] of Object.entries(obj)) {
    for (const keyElement of arr) {
        sum += keyElement;
    }
}
console.log(sum);