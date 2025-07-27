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
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/amar-kumar-0b25b0171", icon: "fab fa-linkedin" }
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
            position: "Associate Software development engineer 2",
            startDate: "May 2024",
            endDate: "Present",
            location: "India",
            description: "Working as an Associate Software Development Engineer 2 at Publicis Sapient, a global digital transformation company.",
            achievements: [
                "Developing and maintaining enterprise-level web applications",
                "Working with modern JavaScript frameworks and backend technologies",
                "Collaborating with cross-functional teams to deliver high-quality software solutions"
            ]
        },
        {
            company: "Publicis Sapient",
            position: "Associate Software Development Engineer 1",
            startDate: "April 2023",
            endDate: "April 2024",
            location: "India",
            description: "Worked as an Associate Software Development Engineer 1 at Publicis Sapient.",
            achievements: [
                "Developed and maintained web applications using React.js and Redux",
                "Implemented RESTful APIs using Spring Boot",
                "Collaborated using agile software development methodologies"
            ]
        },
        {
            company: "Publicis Sapient",
            position: "Trainee engineer",
            startDate: "June 2022",
            endDate: "March 2023",
            location: "India",
            description: "Started career at Publicis Sapient as a Trainee Engineer after graduation.",
            achievements: [
                "Underwent comprehensive training in full-stack development technologies",
                "Contributed to production code and gained hands-on experience",
                "Acquired proficiency in React.js, Redux, and Spring Boot frameworks"
            ]
        },
        {
            company: "Glabbr Technologies Private Limited",
            position: "Software Engineer",
            startDate: "June 2021",
            endDate: "December 2021",
            location: "Maharashtra, India",
            description: "Worked on microservice architecture and document management systems.",
            achievements: [
                "Developed a Document Management System microservice",
                "Wrote APIs for document operations including opening, copying, moving, and deleting",
                "Implemented backend functionalities for document handling and processing"
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

    // Projects Section removed

    // Certifications Section
    certifications: [
        {
            name: "Cloud Digital Leader",
            issuer: "Google",
            date: "2023",
            link: "#"
        },
        {
            name: "ADSE Java Full Stack",
            issuer: "Publicis Sapient",
            date: "2022",
            link: "#"
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "#"
        },
        {
            name: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "2022",
            link: "#"
        },
        {
            name: "SQL & PostgreSQL for Beginners: Become an SQL Expert",
            issuer: "Udemy",
            date: "2022",
            link: "#"
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
