"use strict"
// let inputs = document.querySelectorAll('#test input');
//
// for (let input of inputs) {
//     input.addEventListener('keypress', function(event) {
//         if (event.key == 'Enter') {
//             if (input.value === input.getAttribute('data-right')) {
//                 input.classList.remove('wrong');
//                 input.classList.add('right');
//             } else {
//                 input.classList.remove('right');
//                 input.classList.add('wrong');
//             }
//         }
//     });
// }
let inputs = document.querySelectorAll('#test input');
let checkButton = document.querySelector('#check');

checkButton.addEventListener('click', function() {
    for (let input of inputs) {
        if (input.value === input.getAttribute('data-right')) {
            input.classList.remove('wrong');
            input.classList.add('right');
        } else {
            input.classList.remove('right');
            input.classList.add('wrong');
        }
    }
});
