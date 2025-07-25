// Navigation Bar JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navbar functionality
    initNavbar();
});

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-link');
    
    // Handle navbar toggle for mobile
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        
        // Change toggle icon
        const icon = navbarToggle.querySelector('i');
        if (navbarMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Handle navbar scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Handle active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        // If near top of page, highlight Home
        if (window.scrollY < 100) {
            current = 'home';
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            
            if (href === current) {
                link.classList.add('active');
            }
            
            // Special case for certifications section which might be hidden
            if (current === 'certifications-section' && document.getElementById('certifications-section').style.display !== 'none') {
                if (href === 'certifications-section') {
                    link.classList.add('active');
                }
            }
        });
    });
    
    // Close menu on link click on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                navbarToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    });
}
