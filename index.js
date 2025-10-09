document.addEventListener("DOMContentLoaded", () => {
    var hamburger = document.getElementById("hamburger");
    var menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    })
})