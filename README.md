# Professional Portfolio Website

This is a modern, responsive portfolio website built with HTML, CSS, and JavaScript. The website is designed to showcase your professional experience, skills, projects, education, and other achievements.

## Features

- Modern and sleek design
- Fully responsive layout that works on all devices
- Configurable data file for easy updates
- Sections for:
  - Profile/About
  - Education
  - Work Experience
  - Skills
  - Projects
  - Certifications
  - Publications
  - Languages
  - Interests
- Smooth animations
- Social media integration

## How to Use

1. **Update the data.js file**:

   - Navigate to `js/data.js`
   - Replace the placeholder data with your personal information
   - All content on the website is generated from this file

2. **Replace Images**:

   - Replace `images/profile.jpg` with your own profile picture
   - Replace `images/hero-bg.jpg` with a background image for the hero section
   - Add project images to the `images` folder and update their paths in the data.js file

3. **Customize Colors** (optional):

   - Open `css/styles.css`
   - Modify the CSS variables in the `:root` selector to change the color scheme:
     ```css
     :root {
       --primary-color: #0563bb;
       --secondary-color: #3498db;
       --dark-color: #2c3e50;
       --light-color: #ecf0f1;
       /* ... */
     }
     ```

4. **Test Your Website**:
   - Open `index.html` in a web browser to preview your website
   - Test the website on different devices to ensure responsiveness

## Data Configuration Guide

The `data.js` file contains a JavaScript object called `portfolioData` with the following sections:

### Basic Information

```javascript
basics: {
    name: "Your Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    phone: "+1 (234) 567-8901",
    location: "City, State, Country",
    profileImage: "images/profile.jpg",
    summary: "Your professional summary...",
    socialLinks: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "fab fa-linkedin" },
        // ...
    ]
}
```

### Education

```javascript
education: [
  {
    institution: "University Name",
    degree: "Degree Name",
    field: "Field of Study",
    startDate: "Aug 2015",
    endDate: "May 2019",
    gpa: "3.8/4.0",
    highlights: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  // Add more education entries as needed
];
```

### Work Experience

```javascript
experience: [
  {
    company: "Company Name",
    position: "Job Title",
    startDate: "Jun 2019",
    endDate: "Present",
    location: "City, State",
    description: "Brief description of your role",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
  // Add more experience entries as needed
];
```

### Skills

```javascript
skills: [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "Java", "C++", "SQL"],
  },
  // Add more skill categories as needed
];
```

### Projects

```javascript
projects: [
  {
    name: "Project Name",
    description: "Brief description of the project",
    technologies: ["JavaScript", "React", "Node.js"],
    link: "https://project-link.com",
    image: "images/project1.jpg",
  },
  // Add more project entries as needed
];
```

### Optional Sections

You can also add certifications, publications, languages, and interests in a similar format. If any of these sections are empty or not included in the data.js file, they will not be displayed on the website.

## Browser Compatibility

This website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers

## License

Feel free to use this template for your personal portfolio.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
