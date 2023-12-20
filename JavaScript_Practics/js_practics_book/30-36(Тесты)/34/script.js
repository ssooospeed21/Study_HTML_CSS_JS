"use strict"
// let inputs = document.querySelectorAll('#test input');
//
// for (let input of inputs) {
//     input.addEventListener('change', function() {
//         if (input.hasAttribute('data-right')) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         } else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     });
// }
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.checked) {
            if (input.hasAttribute('data-right')) {
                input.classList.remove('wrong');
                input.classList.add('right');
            } else {
                input.classList.remove('right');
                input.classList.add('wrong');
            }
        }
    }
});
