"use strict"

//1//
document.querySelector('#elem1');
let peshka2 = document.querySelector('#elem2');

let peshka3 = document.querySelector('#elem3');

//2//

let abzac = document.querySelector("#block p");

let abzac2 = document.querySelector(".block p");

let wowo = document.querySelector(".www");

//3//

let butt = document.querySelector("#button1");
butt.addEventListener('click', function () {
    alert('1')
});

let butt2 = document.querySelector("#button2");
butt2.addEventListener('click', function () {
    alert('2')
});

let butt3 = document.querySelector("#button3");
butt3.addEventListener('click', function () {
    alert('3')
});

//4//

let butt4 = document.querySelector("#button11");
let butt5 = document.querySelector("#button22");

butt4.addEventListener('click', func1);
butt5.addEventListener('click', func2);

function func1() {
    alert(1);
}

function func2() {
    alert(2);
}


//5//

function func() {
    alert('message');
}

let but1 = document.querySelector("#elem11");
let but2 = document.querySelector("#elem22");
let but3 = document.querySelector("#elem33");
let but4 = document.querySelector("#elem44");
let but5 = document.querySelector("#elem55");
but1.addEventListener('click', func);
but2.addEventListener('click', func);
but3.addEventListener('click', func);
but4.addEventListener('click', func);
but5.addEventListener('click', func);

//6//

let emma = document.querySelector("#elem");
function func11() {
    alert('1');
}

function func22() {
    alert('2');
}

function func33() {
    alert('3');
}
emma.addEventListener('click', func11);
emma.addEventListener('click', func22);
emma.addEventListener('click', func33);

//7//

let emma2 = document.querySelector("#elem0");

emma2.addEventListener('click', func11);
emma2.addEventListener('dblclick', func22);
emma2.addEventListener('contextmenu', func33);

//8//

let toti = document.querySelector("#toti");
toti.addEventListener('click', function () {
    alert(toti.textContent);
});
toti.addEventListener('dblclick', function () {
    toti.textContent = 'Я запрещаю вам lorem ipsum'
});

//9//

let chisla1 = document.querySelector("#chisla1");
let chisla2 = document.querySelector("#chisla2");
let chislabut = document.querySelector("#chislabut");

let chisla1content = +chisla1.textContent;
let chisla2content = +chisla2.textContent;
chislabut.addEventListener('click', function () {
    alert(chisla1content + chisla2content);
})

//10//

let pshka1 = document.querySelector("#pshka1");
let pshka2 = document.querySelector("#pshka2");
let pshka3 = document.querySelector("#pshka3");
let sumofp = document.querySelector("#sumofp");
let sumofptrigger = document.querySelector("#sumofptrigger")

let pshka1content = +pshka1.textContent;
let pshka2content = +pshka2.textContent;
let pshka3content = +pshka3.textContent;
let sumofpcontent = 0;
sumofptrigger.addEventListener('dblclick', function () {
    sumofpcontent = pshka1content + pshka2content + pshka3content;
    sumofp.textContent = sumofpcontent;
})

//11//

let chislop1 = document.querySelector("#chislop1");
let chislop1trigger = document.querySelector("#chislop1trigger");
let chislop1content = +chislop1.textContent;

chislop1trigger.addEventListener('click', function () {
    chislop1content += 1;
    chislop1.textContent = chislop1content;
});

//12//

let stringpzn = document.querySelector("#stringpzn");
let stringpzntrigger = document.querySelector("#stringpzntrigger");
let stringpzncontent = stringpzn.textContent;

stringpzntrigger.addEventListener('click', function () {
    stringpzncontent += '!';
    stringpzn.textContent = stringpzncontent;
});

//13//

let htmlcode = document.querySelector("#htmlcode i");
let htmlcodereader = document.querySelector("#htmlcodereader");

htmlcodereader.addEventListener("click", function () {
    console.log(htmlcode.innerHTML);
});

htmlcodereader.addEventListener('dblclick', function () {
    htmlcode.innerHTML = '<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatem!</b>';
});

//14//

