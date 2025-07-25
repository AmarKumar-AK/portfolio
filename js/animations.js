// Animation functions
document.addEventListener('DOMContentLoaded', () => {
  // Initialize typing animation
  const typeWriter = () => {
    const text = portfolioData.personalInfo.name;
    const profileName = document.getElementById('profile-name');
    profileName.innerHTML = '';
    profileName.classList.add('typing-text');
    
    let i = 0;
    const speed = 100;
    
    function type() {
      if (i < text.length) {
        profileName.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Remove typing cursor by removing the typing-text class after a short delay
        setTimeout(() => {
          profileName.classList.remove('typing-text');
        }, 1000); // Wait one second after typing is complete before removing cursor
      }
    }
    
    type();
  };

  // Initialize scroll animation for sections
  const initIntersectionObserver = () => {
    const sections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  };

  // Initialize counters
  const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 100);
        } else {
          counter.innerText = target;
        }
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(entries[0].target);
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  };

  // Initialize certification progress
  const initCertProgress = () => {
    const certCounter = document.querySelector('.cert-counter');
    const progressFill = document.querySelector('.progress-fill');
    
    if (!certCounter || !progressFill) return;
    
    const updateProgress = () => {
      const target = +certCounter.getAttribute('data-count');
      const percentage = (target / 10) * 100; // Assuming 10 is max
      
      progressFill.style.background = `conic-gradient(var(--primary-color) ${percentage}%, #e9ecef 0%)`;
      
      let count = 0;
      const increment = Math.ceil(target / 50);
      
      const timer = setInterval(() => {
        count += increment;
        
        if (count >= target) {
          certCounter.textContent = target;
          clearInterval(timer);
        } else {
          certCounter.textContent = count;
        }
      }, 100);
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateProgress();
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.5 });
    
    observer.observe(certCounter);
  };

  // Add skill progress bars
  const addSkillProgressBars = () => {
    const skillsProgress = document.getElementById('skills-progress');
    
    if (!skillsProgress) return;
    
    // Define skill levels (out of 100)
    const skillLevels = {
      'React.js': 90,
      'Redux.js': 85,
      'Spring Boot': 80,
      'Java': 85,
      'JavaScript': 90,
      'HTML/CSS': 95
    };
    
    portfolioData.skills.forEach(skill => {
      const level = skillLevels[skill] || Math.floor(Math.random() * 30) + 70; // Default to 70-100 if not specified
      
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      
      const skillName = document.createElement('div');
      skillName.className = 'skill-name';
      
      const nameSpan = document.createElement('span');
      nameSpan.textContent = skill;
      
      const levelSpan = document.createElement('span');
      levelSpan.className = 'skill-level';
      levelSpan.textContent = `${level}%`;
      
      skillName.appendChild(nameSpan);
      skillName.appendChild(levelSpan);
      
      const progress = document.createElement('div');
      progress.className = 'skill-progress';
      
      const progressBar = document.createElement('div');
      progressBar.className = 'skill-progress-bar';
      progressBar.style.width = '0%';
      
      progress.appendChild(progressBar);
      
      skillItem.appendChild(skillName);
      skillItem.appendChild(progress);
      
      skillsProgress.appendChild(skillItem);
      
      // Animate progress bar when visible
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            progressBar.style.width = `${level}%`;
          }, 300);
          observer.unobserve(entries[0].target);
        }
      }, { threshold: 0.5 });
      
      observer.observe(skillItem);
    });
  };

  // Handle scroll down button
  const initScrollDown = () => {
    const scrollBtn = document.getElementById('scroll-down');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      });
    }
  };

  // Handle contact form submission (demo)
  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending - would be replaced with actual form submission
        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.backgroundColor = '#10b981'; // Success green color
          
          // Reset form
          form.reset();
          
          // Reset button after delay
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
          }, 3000);
        }, 1500);
      });
    }
  };

  // Initialize hover card shine effect
  const initCardShine = () => {
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        const cardShine = card.querySelector('.card-shine');
        if (cardShine) {
          cardShine.style.left = '-100%';
        }
      });
    });
  };

  // Call all initialization functions
  setTimeout(() => {
    typeWriter();
    initIntersectionObserver();
    initCounters();
    initCertProgress();
    addSkillProgressBars();
    initScrollDown();
    initContactForm();
    initCardShine();
  }, 500);
});
