// JavaScript to toggle the mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
