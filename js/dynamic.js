// Dynamic JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading animation
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        setTimeout(() => {
            loadingElement.classList.add('hide');
            setTimeout(() => {
                loadingElement.style.display = 'none';
            }, 500);
        }, 1500); // Show loading for 1.5 seconds
    }

    // Mobile styling is now handled by the dynamic title function
    // Our dynamic title works on both desktop and mobile

    // Initialize scroll reveal animation
    initScrollReveal();
    
    // Initialize scroll progress indicator
    initScrollIndicator();
    
    // Initialize skill progress bars
    initSkillProgressBars();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize tilt effect for certain elements
    initTiltEffect();

    // Initialize parallax effect for hero section
    initParallaxEffect();
});

// Scroll reveal animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
}

// Scroll progress indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            scrollIndicator.style.width = scrolled + '%';
        });
    }
}

// Skill progress bars
function initSkillProgressBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Add progress bars to skill items
    skillItems.forEach(item => {
        const container = document.createElement('div');
        container.className = 'skill-progress-container';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'skill-progress';
        
        // Set random progress between 70% and 95% for demo
        const progress = Math.floor(Math.random() * 25) + 70;
        progressBar.setAttribute('data-progress', progress + '%');
        
        container.appendChild(progressBar);
        item.appendChild(container);
    });
    
    // Animate progress bars when they come into view
    const animateProgressBars = () => {
        const skillContainers = document.querySelectorAll('.skill-progress-container');
        
        skillContainers.forEach(container => {
            const progressBar = container.querySelector('.skill-progress');
            const rect = container.getBoundingClientRect();
            
            if (rect.top < window.innerHeight) {
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress;
            }
        });
    };
    
    window.addEventListener('scroll', animateProgressBars);
    setTimeout(animateProgressBars, 1000); // Initial animation after a delay
}

// Theme toggle functionality
function initThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    if (toggle) {
        const moonIcon = toggle.querySelector('.fa-moon');
        const sunIcon = toggle.querySelector('.fa-sun');
        
        toggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark-theme');
            
            // Update icons
            if (htmlElement.classList.contains('dark-theme')) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
                localStorage.setItem('theme', 'dark');
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Check saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark-theme');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        }
    }
}

// Tilt effect for certifications and project cards
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.cert-item, .pub-item, .project-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (x - centerX) / centerX * 5;
            const tiltY = (y - centerY) / centerY * 5;
            
            element.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            hero.style.backgroundPosition = `0% ${50 + (scrolled * 0.05)}%, center`;
        });
    }
}

// Function to animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // ms
        const step = target / (duration / 16); // 60fps approx
        
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Experience years counter (disabled to remove years from hero section)
function addExperienceCounter() {
    // This function is now empty to remove the years of experience counter from the hero section
    // If you want to re-enable it in the future, restore the original implementation
    console.log("Experience counter has been disabled");
}

// Dynamic title typing effect
function initDynamicTitle() {
    const heroTitleElement = document.getElementById('hero-title');
    if (!heroTitleElement) return;
    
    // Array of titles to cycle through
    const titles = ["Software Engineer", "Problem Solver", "Learner"];
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let typingSpeed = 100; // milliseconds
    
    // We don't need to set a fixed width for the title element anymore
    // since we're using absolute positioning for the cursor
    
    function typeTitle() {
        const currentTitle = titles[currentIndex];
        
        if (isDeleting) {
            // When deleting text
            currentText = currentText.substring(0, currentText.length - 1);
            typingSpeed = 50; // Faster when deleting
        } else {
            // When typing text
            currentText = currentTitle.substring(0, currentText.length + 1);
            typingSpeed = 100; // Normal speed when typing
        }
        
        // Update the text content
        heroTitleElement.textContent = currentText;
        
        // Logic for switching between typing and deleting
        if (!isDeleting && currentText === currentTitle) {
            // Complete word is typed, wait before deleting
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end of typing
        } else if (isDeleting && currentText === '') {
            // Word is completely deleted, move to next word
            isDeleting = false;
            currentIndex = (currentIndex + 1) % titles.length;
            typingSpeed = 500; // Pause before typing new word
        }
        
        // Continue the animation loop
        setTimeout(typeTitle, typingSpeed);
    }
    
    // Start the animation
    typeTitle();
}

// Call this after portfolio data is loaded
window.addEventListener('load', () => {
    addExperienceCounter();
    initDynamicTitle();
});
