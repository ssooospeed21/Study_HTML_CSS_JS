"use strict";
let toggles = document.querySelectorAll(".toggle");

for (let toggle of toggles) {
    toggle.addEventListener("click", function(event) {
        event.preventDefault();
        let spoiler = toggle.parentElement.nextElementSibling;
        spoiler.classList.toggle("active");
    });
}
