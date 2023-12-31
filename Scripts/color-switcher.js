// Page Color switcher
//Coded by DonQuaya
const colorSwitcherToggle = document.querySelector(".color-switcher-toggler");
colorSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".color-switcher").classList.toggle("open");
});

// hide style
//Coded by DonQuaya
window.addEventListener("scroll", () => {
    if (document.querySelector(".color-switcher").classList.contains("open")) {
        document.querySelector(".color-switcher").classList.remove("open");
    }
});

// Page Colors
//Coded by DonQuaya
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}


// light and dark mode
//Coded by DonQuaya
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});