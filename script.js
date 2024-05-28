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

document.addEventListener('DOMContentLoaded', function () {
    const animatedParagraph = document.querySelector('.about-me-desc');
    const animatedTitles = document.querySelectorAll('.animated-title');
    const animatedWorkExperienceInfo = document.querySelectorAll('.animated-experience-info');
    const projectAnimation = document.querySelectorAll('.project-animation');

    const observerOptions = { threshold: 0.2 };
    const observerCallBack = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };
    observer = new IntersectionObserver(observerCallBack, observerOptions);
    observer.observe(animatedParagraph);
    animatedTitles.forEach(title => observer.observe(title));
    animatedWorkExperienceInfo.forEach(experienceInfo => observer.observe(experienceInfo));
    projectAnimation.forEach(project => observer.observe(project));
});
