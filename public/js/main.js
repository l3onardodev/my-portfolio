const presentationScreen = document.querySelector(".presentation-screen");
const portfolioContainer = document.querySelector(".portfolio-container");
const headerNavContainer = document.querySelector(".header-menu-container");

document.addEventListener("scroll", function () {
    if (document.querySelector(".header-menu-container").getBoundingClientRect().y < -22) {
        document.querySelector(".scroll-top-icon-container").style.display = "flex";
    } else {
        document.querySelector(".scroll-top-icon-container").style.display = "none";
    }
});

setTimeout(function () {
    portfolioContainer.style.height = "100vh";
}, 100); //2300

setTimeout(function () {
    portfolioContainer.style.height = "auto";
}, 200); //3800

window.addEventListener("scroll", function () {
    console.log(headerNavContainer.offsetHeight);
    console.log(window.window.scrollY);
    console.log(document.body.clientHeight);
});
