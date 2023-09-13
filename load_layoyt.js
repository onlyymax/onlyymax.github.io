const fetchAndInject = async (url, elementId) => {
    const response = await fetch(url);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
};

fetchAndInject('/layout/footer.html', 'footer-placeholder');
fetchAndInject('/layout/navbar.html', 'navbar-placeholder');