// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.querySelector(".navbar-menu");

if (menuToggle && navbarMenu) {

    // Open / close mobile menu
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    const navLinks = navbarMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbarMenu.classList.remove("active");
        });
    });
}