const fetchAndInject = async (url, elementId) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);

        const data = await response.text();
        const element = document.getElementById(elementId);
        if (!element) throw new Error(`Element with ID '${elementId}' not found`);

        element.innerHTML = data;
    } catch (error) {
        console.error(error);
    }
};

const loadContent = async () => {
    await fetchAndInject('/layout/footer.html', 'footer-placeholder');
    await fetchAndInject('/layout/navbar.html', 'navbar-placeholder');

    const currentPath = window.location.pathname;
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
};

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.top = (prevScrollPos > currentScrollPos) ? "15px" : "-60px";
    prevScrollPos = currentScrollPos;
};

let prevScrollPos = window.scrollY;
window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', loadContent);
