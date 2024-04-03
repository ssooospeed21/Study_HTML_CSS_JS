"use strict"
let input = document.querySelector('#inp');

input.addEventListener('blur', function() {
    if (input.value.length <= 9) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
});
