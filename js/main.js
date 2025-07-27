// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Load data from the configuration file
    populateBasicInfo();
    populateEducation();
    populateExperience();
    populateSkills();
    // Projects section has been removed
    populateCertifications();
    // Publications section has been removed
    populateLanguages();
    populateInterests();
    populateContact();
    
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
    // Don't set the text content for hero-title here, it will be handled by dynamic typing effect
    document.getElementById('hero-title').textContent = ''; // Start empty, dynamic typing will handle it
    document.getElementById('profile-summary').textContent = portfolioData.basics.summary;
    document.getElementById('profile-image').src = portfolioData.basics.profileImage;
    
    // Social links - hiding as requested
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.style.display = 'none';
    
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

// Projects section has been removed

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

// Populate contact section
function populateContact() {
    // Update contact information from data.js
    document.getElementById('contact-email').textContent = portfolioData.basics.email;
    document.getElementById('contact-email').href = `mailto:${portfolioData.basics.email}`;
    
    document.getElementById('contact-location').textContent = portfolioData.basics.location;
    
    // Find LinkedIn info from socialLinks
    const linkedInData = portfolioData.basics.socialLinks.find(link => link.platform === "LinkedIn");
    if (linkedInData) {
        document.getElementById('contact-linkedin').href = linkedInData.url;
    }
}
