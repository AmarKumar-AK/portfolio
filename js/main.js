// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Load data from the configuration file
    populateBasicInfo();
    populateEducation();
    populateExperience();
    populateSkills();
    populateProjects();
    populateCertifications();
    // Publications section has been removed
    populateLanguages();
    populateInterests();
    
    // Add 'reveal' class to dynamic elements
    addRevealClasses();
    
    // Initialize any interactive elements
    initializeScrollAnimation();
});

// Populate basic information
function populateBasicInfo() {
    // Update page title
    document.title = `${portfolioData.basics.name} - Portfolio`;
    
    // Hero section
    document.getElementById('hero-name').textContent = portfolioData.basics.name;
    document.getElementById('hero-title').textContent = portfolioData.basics.title;
    document.getElementById('profile-summary').textContent = portfolioData.basics.summary;
    document.getElementById('profile-image').src = portfolioData.basics.profileImage;
    
    // Contact info
    document.getElementById('profile-email').innerHTML = `<i class="fas fa-envelope"></i> ${portfolioData.basics.email}`;
    document.getElementById('profile-phone').innerHTML = `<i class="fas fa-phone"></i> ${portfolioData.basics.phone}`;
    document.getElementById('profile-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${portfolioData.basics.location}`;
    
    // Social links
    const socialLinksContainer = document.getElementById('social-links');
    portfolioData.basics.socialLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;
        socialLink.setAttribute('aria-label', link.platform);
        socialLinksContainer.appendChild(socialLink);
    });
    
    // Update footer name
    document.getElementById('footer-name').textContent = portfolioData.basics.name;
}

// Populate education section
function populateEducation() {
    const educationContainer = document.getElementById('education-container');
    
    portfolioData.education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item fade-in';
        
        const highlightsList = edu.highlights.map(highlight => `<li>${highlight}</li>`).join('');
        
        educationItem.innerHTML = `
            <h3>${edu.degree} in ${edu.field}</h3>
            <div class="education-date">${edu.startDate} - ${edu.endDate}</div>
            <p><strong>${edu.institution}</strong>${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</p>
            <div class="education-highlights">
                <ul>
                    ${highlightsList}
                </ul>
            </div>
        `;
        
        educationContainer.appendChild(educationItem);
    });
}

// Populate experience section
function populateExperience() {
    const experienceContainer = document.getElementById('experience-container');
    
    portfolioData.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item fade-in';
        
        const achievementsList = exp.achievements.map(achievement => `<li>${achievement}</li>`).join('');
        
        experienceItem.innerHTML = `
            <h3>${exp.position}</h3>
            <div class="experience-date">${exp.startDate} - ${exp.endDate} | ${exp.location}</div>
            <p class="experience-company">${exp.company}</p>
            <p>${exp.description}</p>
            <div class="experience-achievements">
                <ul>
                    ${achievementsList}
                </ul>
            </div>
        `;
        
        experienceContainer.appendChild(experienceItem);
    });
}

// Populate skills section
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    portfolioData.skills.forEach(skillCategory => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category fade-in';
        
        const skillItems = skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join('');
        
        categoryElement.innerHTML = `
            <h3>${skillCategory.category}</h3>
            <div class="skill-list">
                ${skillItems}
            </div>
        `;
        
        skillsContainer.appendChild(categoryElement);
    });
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        const techTags = project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('');
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${techTags}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Populate certifications section
function populateCertifications() {
    const certContainer = document.getElementById('certifications-container');
    
    if (portfolioData.certifications && portfolioData.certifications.length > 0) {
        document.getElementById('certifications-section').style.display = 'block';
        
        portfolioData.certifications.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.className = 'cert-item fade-in';
            
            certItem.innerHTML = `
                <h3>${cert.name}</h3>
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
                <p><strong>Date:</strong> ${cert.date}</p>
                ${cert.link ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer">View Certificate</a>` : ''}
            `;
            
            certContainer.appendChild(certItem);
        });
    }
}

// Publications section has been removed

// Populate languages section
function populateLanguages() {
    const languagesContainer = document.getElementById('languages-list');
    
    if (portfolioData.languages && portfolioData.languages.length > 0) {
        document.getElementById('languages-section').style.display = 'block';
        
        portfolioData.languages.forEach(language => {
            const langItem = document.createElement('div');
            langItem.className = 'language-item';
            
            langItem.innerHTML = `
                <span>${language.name}</span>
                <span>${language.proficiency}</span>
            `;
            
            languagesContainer.appendChild(langItem);
        });
    }
}

// Populate interests section
function populateInterests() {
    const interestsContainer = document.getElementById('interests-list');
    
    if (portfolioData.interests && portfolioData.interests.length > 0) {
        document.getElementById('interests-section').style.display = 'block';
        
        const interestsList = document.createElement('ul');
        
        portfolioData.interests.forEach(interest => {
            const interestItem = document.createElement('li');
            interestItem.textContent = interest;
            interestsList.appendChild(interestItem);
        });
        
        interestsContainer.appendChild(interestsList);
    }
}

// Add reveal classes to dynamically created elements
function addRevealClasses() {
    // Add reveal class to education items
    document.querySelectorAll('.education-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add reveal class to experience items
    document.querySelectorAll('.experience-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add reveal class to skill categories
    document.querySelectorAll('.skill-category').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add reveal class to project cards
    document.querySelectorAll('.project-card').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add reveal class to certification items
    document.querySelectorAll('.cert-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Initialize scroll animation
function initializeScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe both fade-in and reveal elements
    const fadeElements = document.querySelectorAll('.fade-in, .reveal');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(element);
    });
}
