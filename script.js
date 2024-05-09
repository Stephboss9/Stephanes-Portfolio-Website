let navBar = document.querySelector('.nav-links');


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        navBar.classList.add("nav-links-border-active");
    } else {
        if (navBar.classList.remove("nav-links-border-active"));
    }
});


function scrollFunction() {
    if (window.pageYOffset > 280) {
        navBar.classList.add(".nav-links-border-active");
    }
    else {
        navBar.classList.remove(".nav-links-border-active");
    }
}