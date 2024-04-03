"use strict"
let input = document.querySelector('#inp');
input.addEventListener('blur', function() {
    if (input.value.length <= 10) {
        input.dataset.type = 'success';
    } else if (input.value.length >= 10 && input.value <=20) {
        input.dataset.type = 'warning';
    } else {
        input.dataset.type = 'error';
    }
});
