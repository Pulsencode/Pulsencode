
// Navbar Common
const navEl = document.querySelector('.navbar');
const navLinksEl = document.querySelectorAll('.navbar-nav .nav-link');


window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        navLinksEl.forEach(link => link.classList.add('black-link'));
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
        navLinksEl.forEach(link => link.classList.remove('black-link'));
    }
});

//Spinner 
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
});

//auto type
var typed = new Typed(".auto-type", {
    strings: ["Web Developers.", "Software Developers."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})