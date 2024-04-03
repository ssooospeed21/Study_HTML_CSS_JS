"use strict"
function date() {
    let inp = document.querySelector('#birth');
    localStorage.setItem('dateofbirth', inp.value);
}

let datenow = new Date();
if (String(datenow.getDate()) === localStorage.getItem('dateofbirth')){
    alert('красава!');
} else {
    console.log('neeeeet');
}