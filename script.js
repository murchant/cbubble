
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Responsive navigation menu toggle for mobile devices
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.classList.add('menu-toggle');
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
    