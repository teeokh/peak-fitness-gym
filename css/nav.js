
// Toggle navigation open 

const navbarMenu = document.querySelector("#cs-nav #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function () {
    navbarMenu.classList.toggle("open");
    console.log('Clicked')
});