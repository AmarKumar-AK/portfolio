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
  document.getElementById('location-text').textContent = portfolioData.personalInfo.location;
  document.getElementById('profile-image').src = portfolioData.personalInfo.photo;
  document.getElementById('email').textContent = portfolioData.personalInfo.email;
  document.getElementById('email').href = `mailto:${portfolioData.personalInfo.email}`;
  document.getElementById('phone').textContent = portfolioData.personalInfo.phone;
  document.getElementById('linkedin').textContent = portfolioData.personalInfo.linkedin;
  document.getElementById('linkedin').href = `https://${portfolioData.personalInfo.linkedin}`;
  
  // Load contact section data
  document.getElementById('contact-email').textContent = portfolioData.personalInfo.email;
  document.getElementById('contact-phone').textContent = portfolioData.personalInfo.phone;
  document.getElementById('contact-linkedin').textContent = portfolioData.personalInfo.linkedin;

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
    certEl.textContent = cert;
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
