import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    alexandria,
    threejs,
    asurion,
    kargoroo,
    acia,
    bluejayDB,
    python,
    cpp
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Developer",
        icon: web,
    },
    {
        title: "Web and Mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "IT Technical Support",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C",
        icon: cpp,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    }
];

const experiences = [
    {
        title: "IT Technical Support",
        company_name: "Asurion",
        icon: asurion,
        iconBg: "#FFFFFF",
        date: "Dec 2023 - Present",
        points : [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ]
    },
    {
        title: "Fullstack Developer",
        company_name: "Kargoroo",
        icon : kargoroo,
        iconBg: "#FFFFFF",
        date: "May 2022 - Dec 2023",
        points: [
            "Engineered a full-stack mobile application for a startup, leveraging React Native, Node.js, and MongoDB to optimize user experience and automate key business processes.",
            "Managed and collaborated with a remote development team in India, ensuring seamless communication, task execution, and project alignment.",
            "Managed cloud infrastructure on DigitalOcean, deploying applications and updates while utilizing Linux commands for performance and reliability.",
            "Developed Python web scraping scripts to extract and integrate valuable data into the database for analysis."
        ]
    },
    {
        title: "Support Technician",
        company_name: "Canadian Food Inspection Agency",
        icon : acia,
        iconBg: "#FFFFFF",
        date: "May 2021 - Sep 2021",
        points: [
            "Diagnose customer issues in-person or remotely, implement workarounds, and resolve underlying problems in order to limit customer impact and restore business services as quickly as possible; fully documenting all pertinent information throughout process lifecycle.",
            "Escalate requests and problems (as required) to internal colleagues, third-party partners or the team lead.",
            ]

    },
    {
        title: "Software Developer",
        company_name: "BlueJayDB",
        icon : bluejayDB,
        iconBg: "#FFFFFF",
        date: "May 2020 - Sep 2020",
        points: [
            "Developed a complete website using HTML, CSS, and JavaScript within 3 months,enhancing user engagement through a responsive design and Django frameworkintegration.",
            "Enhanced a Java-based data integration software by adding new functionalities andupdating existing features, improving user satisfaction.",
            "Executed unit testing on software components, enhancing code reliability andreducing bugs."
        ]
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Alexandria",
        description:
            "Digital library application using React Native and Expo, enabling users to manage and explore their book collections effortlessly. Implemented features such as metadata extraction from EPUB and PDF files to display book covers, titles, and authors. Focused on delivering a smooth and intuitive UI, ensuring optimal performance across mobile devices.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
        ],
        image: alexandria,
        source_code_link: "https://github.com/mocams/Alexandria",
    },
    /*{
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },*/
];

export { services, technologies, experiences, testimonials, projects };