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

    // Initialize typing animation for mobile
    const heroTitle = document.getElementById('hero-title');
    if (window.innerWidth <= 768) {
        heroTitle.classList.remove('typewriter');
        document.querySelector('.typewriter-text')?.classList.remove('typewriter-text');
    }

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

// Add experience years counter
function addExperienceCounter() {
    // Calculate years of experience based on portfolio data
    if (typeof portfolioData !== 'undefined' && portfolioData.experience && portfolioData.experience.length > 0) {
        // Find earliest start date
        let earliestDate = new Date();
        
        portfolioData.experience.forEach(exp => {
            const startDate = new Date(exp.startDate);
            if (startDate < earliestDate) {
                earliestDate = startDate;
            }
        });
        
        // Calculate years of experience
        const today = new Date();
        const yearsOfExperience = Math.floor((today - earliestDate) / (365 * 24 * 60 * 60 * 1000));
        
        // Add counter to profile summary
        const summaryContainer = document.querySelector('.summary');
        if (summaryContainer && yearsOfExperience > 0) {
            const experienceCounter = document.createElement('div');
            experienceCounter.className = 'experience-counter';
            experienceCounter.innerHTML = `
                <div class="counter-item">
                    <span class="counter" data-target="${yearsOfExperience}">0</span>
                    <span class="counter-label">Years of Experience</span>
                </div>
            `;
            
            summaryContainer.insertBefore(experienceCounter, summaryContainer.firstChild);
            animateCounters();
        }
    }
}

// Call this after portfolio data is loaded
window.addEventListener('load', () => {
    addExperienceCounter();
});
