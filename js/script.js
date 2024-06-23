// Ensure the page scrolls to the top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Back to top functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const disabledLinks = document.querySelectorAll('.disabled-link');
    disabledLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });
});
