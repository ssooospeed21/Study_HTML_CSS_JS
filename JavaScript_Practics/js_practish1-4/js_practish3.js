"use strict"

//numero 1//

function test() {
    let num = 0;
    return function () {
        console.log(num);
        num++;
    }
}

//numero 2//

function test2() {
    let num = 10;
    return function () {
        console.log(num);
        num = num - 1;
    }
}

//numero 3//

function test3() {
    let num = 10;
    return function () {
        if (num === 0) {
            console.log(num);
            num = num - 1;
        } else {
            console.log("Отсчёт окончен.");
        }
    }
}

(function () {
    return function () {
        return function () {
            console.log('!');
        }
    }
})()()();

//numero 4//

(function (num1) {
    return function (num2) {
        console.log(num1 + num2);
    }
})(1)(2);

//numero 5//

(function (num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }
})(1)(2)(3);

//numero 6//

let count = (function () {
    let num = 1;
    return function () {
        console.log(num);
        num++;
    }
})
count();
count();
count();
count();
count();

//numero 7//

let arr = [1, 2, 3, 4, 5];

function fuc(arr) {
    console.log(arr.shift(), arr);
    if (arr.length !== 0) {
        fuc(arr);
    }
}

fuc(arr)

//numero 8//

function fuct(obj) {
    for (let i in obj) {
        if (typeof obj[i] == 'object') {
            fuct(obj[i]);
        } else {
            console.log(obj[i])
        }
    }
}

fuct({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

//numero 9//

let arrcmp = [];

function recursiveFlatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            recursiveFlatten(arr[i]);
        } else {
            arrcmp.push(arr[i]);
        }
    }
}

recursiveFlatten([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(arrcmp)