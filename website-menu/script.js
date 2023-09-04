function showProjectsMenu() {
    var projectsMenu = document.getElementById("projects-menu");

    var progettiLink = document.getElementById("progetti");
    var progettiLinkRect = progettiLink.getBoundingClientRect();

    projectsMenu.style.left = progettiLinkRect.left + "px";
    projectsMenu.style.top = progettiLinkRect.bottom + window.scrollY + "px";

    projectsMenu.style.visibility = "visible";
}

function hideProjectsMenu() {
    var projectsMenu = document.getElementById("projects-menu");

    projectsMenu.style.visibility = "hidden";
}