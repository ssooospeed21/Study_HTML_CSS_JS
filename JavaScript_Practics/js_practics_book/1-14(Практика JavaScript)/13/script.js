"use strict";
let tabsContainers = document.querySelectorAll('#parent');

tabsContainers.forEach(tabsContainer => {
    let tabs = tabsContainer.querySelectorAll('.tab');
    let menuLinks = tabsContainer.querySelectorAll('.menu a');

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            menuLinks.forEach(menuLink => {
                menuLink.classList.remove('active');
            });

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            link.classList.add('active');
            tabs[index].classList.add('active');
        });
    });
});
