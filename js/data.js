// Portfolio Data Configuration File
// Based on Amar Kumar's resume

const portfolioData = {
    // Basic Information
    basics: {
        name: "Amar Kumar",
        title: "Software Engineer",
        email: "9801amarkumar@gmail.com",
        phone: "9110129748",
        location: "Bengaluru, India",
        profileImage: "images/Amar_Kumar2.png",
        summary: "Experienced Full Stack Developer at Publicis Sapient, specializing in React.js, Redux.js, and Spring Boot. Skilled in building robust web applications and microservices. AWS Certified Cloud Practitioner with a strong background in software engineering.",
        socialLinks: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/amar-kumar-0b25b0171", icon: "fab fa-linkedin" },
            { platform: "Twitter", url: "https://x.com/AmarkrArya", icon: "fab fa-twitter" },
            { platform: "Instagram", url: "https://instagram.com/_kumar_amar_", icon: "fab fa-instagram" },
            { platform: "GitHub", url: "https://github.com/AmarKumar-AK", icon: "fab fa-github" },
            { platform: "Discord", url: "https://discord.com/brainteasers0029", icon: "fab fa-discord" }
        ]
    },

    // Education Section
    education: [
        {
            institution: "Indian Institute of Information Technology Design & Manufacturing Kancheepuram",
            degree: "Bachelor & Master of Technology (Dual Degree)",
            field: "Computer Engineering",
            startDate: "2017",
            endDate: "2022",
            gpa: "",
            highlights: [
                "5-year degree program in Computer Engineering",
                "Developed strong foundation in software development and engineering principles",
                "Studied full-stack development technologies and methodologies"
            ]
        },
        {
            institution: "Gaya College, Gaya",
            degree: "12th Grade (Senior Secondary)",
            field: "Physics, Chemistry, Mathematics (PCM)",
            startDate: "2015",
            endDate: "2017",
            gpa: "",
            highlights: [
                "Completed 12th grade with a focus on PCM subjects",
                "Built a strong foundation in science and mathematics"
            ]
        }
        // Add more education entries as needed
    ],

    // Work Experience Section
    experience: [
        {
            company: "Publicis Sapient",
            location: "Bengaluru, India",
            companyDescription: "A global digital transformation company focused on creating digital business solutions.",
            roles: [
                {
                    position: "Associate Software Development Engineer 2",
                    startDate: "May 2024",
                    endDate: "Present",
                    description: "Working as an Associate Software Development Engineer 2.",
                    achievements: [
                        "Developing and maintaining enterprise-level web applications",
                        "Working with modern JavaScript frameworks and backend technologies",
                        "Collaborating with cross-functional teams to deliver high-quality software solutions"
                    ]
                },
                {
                    position: "Associate Software Development Engineer 1",
                    startDate: "April 2023",
                    endDate: "April 2024",
                    description: "Worked as an Associate Software Development Engineer 1.",
                    achievements: [
                        "Developed and maintained web applications using React.js and Redux",
                        "Implemented RESTful APIs using Spring Boot",
                        "Collaborated using agile software development methodologies"
                    ]
                },
                {
                    position: "Trainee Engineer",
                    startDate: "June 2022",
                    endDate: "March 2023",
                    description: "Started career as a Trainee Engineer after graduation.",
                    achievements: [
                        "Underwent comprehensive training in full-stack development technologies",
                        "Contributed to production code and gained hands-on experience",
                        "Acquired proficiency in React.js, Redux, and Spring Boot frameworks"
                    ]
                }
            ]
        },
        {
            company: "Glabbr Technologies Private Limited",
            location: "Remote",
            companyDescription: "A technology company specializing in microservice architecture and document management systems.",
            roles: [
                {
                    position: "Software Engineer",
                    startDate: "June 2021",
                    endDate: "December 2021",
                    description: "Worked on microservice architecture and document management systems.",
                    achievements: [
                        "Developed a Document Management System microservice",
                        "Wrote APIs for document operations including opening, copying, moving, and deleting",
                        "Implemented backend functionalities for document handling and processing"
                    ]
                }
            ]
        }
        // Add more experience entries as needed
    ],

    // Skills Section
    skills: [
        {
            category: "Programming Languages",
            items: ["C++", "Python", "Java", "JavaScript", "C"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React.js", "Redux.js", "Spring Boot", "Node.js", "Bootstrap"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "GCP", "Git", "Terraform", "Github Action"]
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MySQL", "MongoDB"]
        }
        // Add more skill categories as needed
    ],

    // Projects Section
    projects: [
        {
            name: "Personal Portfolio Website",
            description: "A responsive portfolio website built with HTML, CSS, and JavaScript to showcase skills, projects, and professional experience.",
            image: "images/project11.jpg",
            url: "https://github.com/AmarKumar-AK/portfolio",
            startDate: "January 2025",
            endDate: "Present"
        },
        {
            name: "E-commerce Web Application",
            description: "Full-stack e-commerce platform with product catalog, shopping cart, and secure payment integration using React and Node.js. ",
            image: "images/project2.webp",
            url: "https://github.com/AmarKumar-AK/ecommerce-app",
            startDate: "August 2024",
            endDate: "December 2024"
        },
        {
            name: "Task Management System",
            description: "A comprehensive task management application with user authentication, task assignment, and progress tracking functionality.",
            image: "images/project3.jpeg",
            startDate: "March 2024",
            endDate: "July 2024",
            url: "https://github.com/AmarKumar-AK/task-manager"
        }
    ],

    // Certifications Section
    certifications: [
        {
            name: "Cloud Digital Leader",
            issuer: "Google",
            date: "2023",
            link: "https://www.credential.net/f9b496e0-d60c-4752-bff8-4dc5f4204e72?key=ab7511f66f934274693dfcc8df934e9cd3f5b44003f29afdd6c224f36b616926"
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "https://www.credly.com/badges/0a1dc51a-1d08-45ce-9492-13207824c459/linked_in_profile"
        },
        {
            name: "ADSE Java Full Stack",
            issuer: "Publicis Sapient",
            date: "2022",
            link: "https://drive.google.com/file/d/1YNV19wGb45wTvuB2QmTKeHyN7L9JpRQU"
        },
        {
            name: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "2022",
            link: "https://drive.google.com/file/d/1NtoSpP5-fJ-M9ABQmxir6Q5g1TnTMABX"
        },
        {
            name: "SQL & PostgreSQL for Beginners: Become an SQL Expert",
            issuer: "Udemy",
            date: "2022",
            link: "https://www.udemy.com/certificate/UC-b8c1b1de-c088-4778-adac-f19fd9eb60bf"
        }
        // Add more certification entries as needed
    ],

    // Publications section has been removed

    // Languages Section (if applicable)
    languages: [
        { name: "English", proficiency: "Professional" },
        { name: "Hindi", proficiency: "Native" }
        // Add more language entries as needed
    ],

    // Interests Section
    interests: [
        "Cloud Architecture and Serverless Computing",
        "Web Application Development",
        "Software Engineering Best Practices",
        "Microservice Architecture"
    ]
};
