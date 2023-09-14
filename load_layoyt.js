const fetchAndInject = async (url, elementId) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const data = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = data;
        } else {
            throw new Error(`Element with ID '${elementId}' not found`);
        }
    } catch (error) {
        console.error(error);
    }
};

const loadContent = async () => {
    await fetchAndInject('/layout/footer.html', 'footer-placeholder');
    await fetchAndInject('/layout/navbar.html', 'navbar-placeholder');
};

window.addEventListener('DOMContentLoaded', loadContent);

var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "15px";
        } else {
            navbar.style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }
});
