"use strict"
let obj = {a : 1, b : 2};
let simb = Symbol('huuuuh?');
obj[simb] = function() {
    let date = new Date();
    console.log(date.getDate(), '-', date.getMonth(), '-', date.getFullYear());
    console.log(date.getDay(), 'day of week');
    console.log(date.getHours(), ' hours');
    console.log(date.getMinutes(), ' minutes');
};
obj[simb]();
console.log(obj);
for (let ob in obj){
    console.log(ob);
}
