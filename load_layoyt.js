const fetchAndInject = async (url, elementId) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);

    const data = await response.text();
    const element = document.getElementById(elementId);
    if (!element) throw new Error(`Element with ID '${elementId}' not found`);

    element.innerHTML = data;
};

const loadContent = async () => {
    await fetchAndInject('/layout/footer.html', 'footer-placeholder');
    await fetchAndInject('/layout/navbar.html', 'navbar-placeholder');
};

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector('nav');

    const halfPageHeight = window.innerHeight / 2;

    navbar.style.top = (currentScrollPos > halfPageHeight) ? "-60px" : "15px";

    prevScrollPos = currentScrollPos;
};

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', loadContent);