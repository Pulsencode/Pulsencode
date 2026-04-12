// Navbar
const navEl = document.querySelector('.navbar');
const navLinksEl = document.querySelectorAll('.navbar-nav .nav-link');

if (navEl) {
    const alwaysSolid = navEl.dataset.navSolid === 'always';

    const setNavState = () => {
        const solid = alwaysSolid || window.scrollY >= 56;
        navEl.classList.toggle('navbar-scrolled', solid);
        navLinksEl.forEach((link) => link.classList.toggle('black-link', solid));
        navEl.classList.toggle('navbar-dark', !solid);
        navEl.classList.toggle('navbar-light', solid);
    };
    setNavState();
    window.addEventListener('scroll', setNavState);
}

// Preloader
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    if (!spinnerWrapperEl) return;
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
});

// Typed headline (home only)
const autoTypeEl = document.querySelector('.auto-type');
if (autoTypeEl && typeof Typed !== 'undefined') {
    new Typed('.auto-type', {
        strings: ['Web developers.', 'Software developers.'],
        typeSpeed: 90,
        backSpeed: 55,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });
}
