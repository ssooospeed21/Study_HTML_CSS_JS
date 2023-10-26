"use strict"
// задание 1
let step = {
    one: function (mass) {
        let sum = 0
        for (let i = 0; i < mass.length; i++) {
            sum += mass[i]
        }
        console.log(sum)
    },
    sqare: function (mass) {
        let sum = 0
        for (let i = 0; i < mass.length; i++) {
            sum += Math.pow(mass[i], 2)
        }
        console.log(sum)
    },
    cube: function (mass) {
        let sum = 0
        for (let i = 0; i < mass.length; i++) {
            sum += Math.pow(mass[i], 3)
        }
        console.log(sum)
    }
}
let mass = [1, 2, 3, 4]
step.cube(mass)
step.one(mass)
step.sqare(mass)

// задание 2

let num = 3

function func1(num) {
    return Math.pow(num, 2)
}

function func2(num) {
    return Math.pow(num, 3)
}

function ttest(num, func1, func2) {
    return func1(num) + func2(num);
}

console.log(ttest(num, func1, func2))

// задание 3

function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    num1 = 2;
    func();
}

test(1, 2);


// задание 4

function func(num1, num2) {
    function sqrt(num) {
        return Math.pow(num, 2)
    }

    function cube(num) {
        return Math.pow(num, 3)
    }

    console.log(sqrt(num1) + cube(num2))
}

func(2, 3)