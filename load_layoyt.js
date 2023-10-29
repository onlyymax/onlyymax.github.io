$(document).ready(function () {
    // Carica la navbar.html nel tuo elemento con id "navbar"
    $('#navbar').load('layout/navbar.html');

    // Carica il footer.html nel tuo elemento con id "footer"
    $('#footer').load('layout/footer.html');
});

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector('nav');
    const halfPageHeight = window.innerHeight / 2;

    if (currentScrollPos > halfPageHeight) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "15px";
    }
};

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', handleScroll);
