"use strict"
let ai = 1
/* 1 */

function sumOfElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const array = [1, 2, 3, 4, 5, 32874, 333, 675678, 555];
const result = sumOfElements(array);
console.log(result);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 2 */

function findDelitel(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

const num = 12;
const delit = findDelitel(num);
console.log(delit);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 3 */

function stringToCharArray(inputString) {
    return inputString.split('');
}

const string = "Пример строки ляляля";
const symbol = stringToCharArray(string);
console.log(symbol);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 4 */

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

const strrr = "Раком дед";
const rev_str = reverseString(strrr);
console.log(rev_str);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 5 */

function capitalizeFirstLetter(inputString) {
    if (inputString.length === 0) {
        return inputString;
    }

    const firstLetter = inputString.charAt(0).toUpperCase();
    const restOfString = inputString.slice(1);

    return firstLetter + restOfString;
}

const strring = "привет, мир!";
const str_with_upper = capitalizeFirstLetter(strring);
console.log(str_with_upper);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 6 */

function capitalizeWords(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}

const stroing = "шла аня лесом обходила море";
const str_with_upper_words = capitalizeWords(stroing);
console.log(str_with_upper_words);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 7 */

function fillArrayWithNumbers(n) {
    const resultArray = [];
    for (let i = 1; i <= n; i++) {
        resultArray.push(i);
    }
    return resultArray;
}

const numba = 55;
const massivee = fillArrayWithNumbers(numba);
console.log(massivee);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 8 */

function sumOfDigits(number) {
    const digits = String(number).split('');
    const ssum = digits.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue, 10);
    }, 0);
    return ssum;
}

const nummam = 12345;
const summa = sumOfDigits(nummam);
console.log(summa);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 9 */

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const yeaa = 2024;
if (isLeapYear(yeaa)) {
    console.log(`${yeaa} - високосный год`);
} else {
    console.log(`${yeaa} - не високосный год`);
}

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 10 */

function secondsToDays(seconds) {
    const secondsInADay = 24 * 60 * 60;
    const days = seconds / secondsInADay;
    return days;
}

const secund = 1000000;
const sutok = secondsToDays(secund);
console.log(`${secund} секунд = ${sutok} суток`);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 11 */

function getRandomElementFromArray(array) {
    if (array.length === 0) {
        return undefined; // Если массив пустой, вернем undefined
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const my_massive = [1, 2, 3, 4, 5, "papapepe", "456", null];
const randomeelement = getRandomElementFromArray(my_massive);
console.log(randomeelement);

console.log("_____________ Следующее задание:", ai+=1, "_____________")

/* 12 */

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const nuam = 17;
if (isPrime(nuam)) {
    console.log(`${nuam} - простое число`);
} else {
    console.log(`${nuam} - не простое число`);
}
