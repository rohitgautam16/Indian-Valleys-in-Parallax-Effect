document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.window.scrollY;
        const background = document.querySelector('.background');
        const foreground = document.querySelector('.foreground');
        const title = document.querySelector('.title');

        background.style.transform = `translateZ(-40px) scale(5) translateY(${scrolled * 0.1}px)`;
        foreground.style.transform = `translateZ(-20px) scale(3) translateY(${scrolled * 0.2}px)`;
        title.style.transform = `translateZ(-5px) scale(1.5) translateY(${scrolled * 0.3}px)`;
    });


    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        });

    // Navbar transparency effect based on home section visibility
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#home');

    const updateNavbarBackground = () => {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        if (homeSectionBottom > 0) {
            navbar.style.background = 'rgba(0, 0, 0, 0)';
            navbar.style.backdropFilter = 'none';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0)';
            navbar.style.backdropFilter = 'transparent';
        }
    };

    // Initial check
    updateNavbarBackground();
    
    // Update on scroll
    window.addEventListener('scroll', updateNavbarBackground);
});