"use strict"
let pElements = document.querySelectorAll('p');
let butt = document.querySelector('#button')
butt.addEventListener('click', function () {
    pElements.forEach((pElement) => {
        let check = Number(pElement.textContent);
        if (check % 2 === 0) {
            pElement.classList.add('success')
        } else {
            pElement.classList.add('error')
        }
    })
});