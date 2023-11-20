"use strict"
//485//
// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     elem.textContent = text;
// }
// setText('#elem1', 'text1');
// setText('#elem2', 'text2');

// function setAttr(selector, attrName, attrValue) {
//     let elem = document.querySelector(selector);
//     elem.setAttribute(attrName, attrValue);
// }
// setAttr('#elem1', 'class', 'myClass');
// setAttr('#elem2', 'class', 'myClass');

//486//
// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let elem of elems) {
//         elem.textContent += text;
//     }
// }
// appendText('.elem', 'Мой текст');

//487//
// forEach('.elem', function(elem) {
//     elem.textContent = elem.textContent + '!';
// });
//
// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let elem of elems) {
//         func(elem);
//     }
// }

//488//
// forEach('.elem', function(elem, index) {
//     elem.textContent = index + elem.textContent;
// });
//
// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let i = 0; i < elems.length; i++) {
//         func(elems[i], i);
//     }
// }

//489//
// function appendText(elem, text){
//     elem.textContent = elem.textContent + text;
// }
//
// let elem11 = document.getElementById('elem11');
// appendText(elem11, ' носков');
//
// let elem22 = document.getElementById('elem22');
// appendText(elem22, ' геля для душа');

// function appendText2(elem, text){
//     elem.textContent = elem.textContent + text;
// }
//
// let elems = document.querySelectorAll('.abzac');
//
// for (let elem of elems) {
//     appendText2(elem, '!');
// }

// function setValue(inputElem, text){
//     inputElem.value = text;
// }
//
// let input1 = document.querySelector('.input');
// setValue(input1, 'Привет, мир!');

//490//
// function appendText(elems, text) {
//     for (let elem490 of elems) {
//         elem490.textContent = elem490.textContent + text;
//     }
// }
// let elems = document.querySelectorAll('.elem490');
// appendText(elems, 'text');

// function appendElem(ulElem, text){
//     let li = document.createElement('li');
//     li.textContent = text;
//     ulElem.appendChild(li);
// }
//
// let ul1 = document.querySelector('#ul1');
// appendElem(ul1, 'Новый элемент списка');

// function appendElem2(ulElem, text){
//     let li = document.createElement('li');
//     li.textContent = text;
//     ulElem.appendChild(li);
// }
//
// let ul11 = document.querySelector('#ul11');
// let arr = ['gaga', 'gagagagaga', 'gegegegagaga'];
//
// for (let i = 0; i < arr.length; i++) {
//     appendElem2(ul11, arr[i]);
// }

//491//
// function createTable(rows, cols, parent) {
//     let table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     parent.appendChild(table);
// }
//
// let div = document.querySelector('#elememe');
// createTable(3, 4, div);

//492//
// function createTable(rows, cols) {
//     let table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = i * j;
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//
//     return table;
// }
//
// let div = document.querySelector('#elememes');
// let table = createTable(3, 4);
// table.style.color = 'red';
// div.appendChild(table);

// let div2 = document.querySelector('#elem');
// let table2 = createTable(3, 4);
// div2.appendChild(table2);

//493//
// function createTableByArr(arr) {
//     let table = document.createElement('table');
//
//     for (let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j]; // значение из массива
//             tr.appendChild(td);
//         }
//
//         table.appendChild(tr);
//     }
//
//     return table;
// }
//
// let div = document.querySelector('#elemot');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);

//497//
// ;(function (selector1, selector2, selector3, selector4) {
//     let inp1 = document.querySelector(selector1);
//     let inp2 = document.querySelector(selector2);
//     let inp3 = document.querySelector(selector3);
//     let btn = document.querySelector((selector4))
//     function sum() {
//         return +inp1.value + +inp2.value + +inp3.value
//     }
//     btn.addEventListener('click', function () {
//         console.log(sum())
//     })
// })('#inp1', '#inp2', '#inp3', '#btn');

//501//

// ;(function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
//
//     function func1() {
//         alert('функция модуля');
//     }
//     function func2() {
//         alert('функция модуля');
//     }
//     function func3() {
//         alert('функция модуля');
//     }
//     window.str1 = string1;
//     window.func1 = function1;
//     window.func2 = function2;
//     window.func3 = function3;
//
//
// })();



//502//
// ;(function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
//
//     function func1() {
//         alert('функция модуля');
//     }
//     function func2() {
//         alert('функция модуля');
//     }
//     function func3() {
//         alert('функция модуля');
//     }
//     function func4() {
//         alert('функция модуля');
//     }
//     function func5() {
//         alert('функция модуля');
//     }
//     window.module = {str1, str2, func1, func2, func3, func4, func5};
// })();

//503//
// ;(function () {
//     function avg1(arr) {
//         return sum(arr, 1) / arr.length;
//     }
//
//     function avg2(arr) {
//         return sum(arr, 2) / arr.length;
//     }
//
//     function avg3(arr) {
//         return sum(arr, 3) / arr.length;
//     }
//
//     function sum(arr, pow) {
//         let res = 0;
//
//         for (let elem of arr) {
//             res += elem ** pow;
//         }
//
//         return res;
//     }
//     window.arrMod = {avg1, avg2, avg3}
// })();