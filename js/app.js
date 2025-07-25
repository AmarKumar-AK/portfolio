document.addEventListener('DOMContentLoaded', () => {
  loadPortfolioData();
  initMobileMenu();
});

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

function loadPortfolioData() {
  // Load personal info
  // Note: profile-name is now handled by typing animation in animations.js
  document.getElementById('profile-title').textContent = portfolioData.personalInfo.title;
  document.getElementById('profile-bio').textContent = portfolioData.personalInfo.bio;
  document.getElementById('profile-image').src = portfolioData.personalInfo.photo;
  
  // Set contact elements if they exist in the DOM
  // These elements have been removed from home section but might be used elsewhere
  const emailElement = document.getElementById('email');
  if (emailElement) {
    emailElement.textContent = portfolioData.personalInfo.email;
    emailElement.href = `mailto:${portfolioData.personalInfo.email}`;
  }
  
  const phoneElement = document.getElementById('phone');
  if (phoneElement) {
    const phoneLink = document.createElement('a');
    phoneLink.textContent = portfolioData.personalInfo.phone;
    phoneLink.href = `tel:${portfolioData.personalInfo.phone}`;
    phoneElement.innerHTML = ''; // Clear text content
    phoneElement.appendChild(phoneLink);
  }
  
  const linkedinElement = document.getElementById('linkedin');
  if (linkedinElement) {
    linkedinElement.textContent = portfolioData.personalInfo.linkedin;
    linkedinElement.href = `https://${portfolioData.personalInfo.linkedin}`;
  }
  
  // Load contact section data
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) {
    contactEmail.textContent = portfolioData.personalInfo.email;
    contactEmail.parentElement.addEventListener('click', () => {
      window.location.href = `mailto:${portfolioData.personalInfo.email}`;
    });
  }
  
  const contactPhone = document.getElementById('contact-phone');
  if (contactPhone) {
    contactPhone.textContent = portfolioData.personalInfo.phone;
    contactPhone.parentElement.addEventListener('click', () => {
      window.location.href = `tel:${portfolioData.personalInfo.phone}`;
    });
  }
  
  const contactLinkedin = document.getElementById('contact-linkedin');
  if (contactLinkedin) {
    contactLinkedin.textContent = portfolioData.personalInfo.linkedin;
    contactLinkedin.parentElement.addEventListener('click', () => {
      window.open(`https://${portfolioData.personalInfo.linkedin}`, '_blank', 'noopener,noreferrer');
    });
  }

  // Load skills
  const skillsContainer = document.getElementById('skills-list');
  portfolioData.skills.forEach(skill => {
    const skillEl = document.createElement('div');
    skillEl.className = 'skill-pill';
    skillEl.textContent = skill;
    skillsContainer.appendChild(skillEl);
  });

  // Load certifications
  const certsContainer = document.getElementById('certifications-list');
  portfolioData.certifications.forEach(cert => {
    const certEl = document.createElement('li');
    const certLink = document.createElement('a');
    certLink.href = cert.link;
    certLink.textContent = cert.name;
    certLink.target = "_blank"; // Open in new tab
    certLink.rel = "noopener noreferrer"; // Security best practice
    certEl.appendChild(certLink);
    certsContainer.appendChild(certEl);
  });

  // Load experience
  const expContainer = document.getElementById('experience-container');
  portfolioData.experience.forEach(exp => {
    const expEl = document.createElement('div');
    expEl.className = 'experience-item';
    
    const companyHeader = document.createElement('h3');
    companyHeader.textContent = exp.company;
    expEl.appendChild(companyHeader);
    
    exp.roles.forEach(role => {
      const roleEl = document.createElement('div');
      roleEl.className = 'role';
      
      const titleEl = document.createElement('h4');
      titleEl.textContent = role.title;
      roleEl.appendChild(titleEl);
      
      const periodEl = document.createElement('p');
      periodEl.className = 'period';
      periodEl.textContent = role.period;
      roleEl.appendChild(periodEl);
      
      const locationEl = document.createElement('p');
      locationEl.className = 'location';
      locationEl.textContent = role.location;
      roleEl.appendChild(locationEl);
      
      if(role.description) {
        const descEl = document.createElement('p');
        descEl.className = 'description';
        descEl.textContent = role.description;
        roleEl.appendChild(descEl);
      }
      
      expEl.appendChild(roleEl);
    });
    
    expContainer.appendChild(expEl);
  });

  // Load education
  const eduContainer = document.getElementById('education-container');
  portfolioData.education.forEach(edu => {
    const eduEl = document.createElement('div');
    eduEl.className = 'education-item';
    
    const institutionEl = document.createElement('h3');
    institutionEl.textContent = edu.institution;
    eduEl.appendChild(institutionEl);
    
    const degreeEl = document.createElement('p');
    degreeEl.className = 'degree';
    degreeEl.textContent = edu.degree;
    eduEl.appendChild(degreeEl);
    
    const periodEl = document.createElement('p');
    periodEl.className = 'period';
    periodEl.textContent = edu.period;
    eduEl.appendChild(periodEl);
    
    eduContainer.appendChild(eduEl);
  });
}

// Footer has been removed
