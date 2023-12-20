"use strict";
let links = document.querySelectorAll(".link a");

for (let link of links) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let tab = link.parentElement.parentElement;
        if (tab.classList.contains("active")) {
            tab.classList.remove("active");
        } else {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
        }
    });
}