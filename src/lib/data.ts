import platziIcon from "../assets/education/platzi.svg";
import aprendeIcon from "../assets/education/buenos-aires-aprende.png";

export const personalInfo = {
  name: "Manuel Schaller",
  location: "Buenos Aires, Argentina",
  email: "mashisdev@gmail.com",
  github: "https://github.com/mashisdev",
  linkedin: "https://www.linkedin.com/in/manuel-schaller/",
  medium: "https://medium.com/@mashisdev",
};

export const education = [
  {
    institution: "Platzi",
    icon: platziIcon,
    location: "",
    period: "Jan - April 2025",
    courses: [
      {
        degree: "Backend con Java",
        achievements: [
          "Java SE",
          "Spring",
          "Spring Security",
          "Spring Data JPA",
        ],
      },
      {
        degree: "Seguridad Web & API",
        achievements: ["OAuth 2.0", "OpenID Connect", "OWASP Top 10"],
      },
    ],
  },
  {
    institution: "Agencia de Habilidades para el Futuro",
    icon: aprendeIcon,
    location: "",
    period: "Mar - Jul 2025",
    courses: [
      {
        degree: "Back-End Java",
        period: "Mar - Jul 2025",
        achievements: ["Java SE", "Spring Boot"],
      },
    ],
  },
];
export const skills = {
  programmingLanguages: ["Java", "Python", "TypeScript", "JavaScript"],
  frontendDevelopment: ["React", "Tailwind", "HTML", "CSS"],
  backendDevelopment: ["Spring", "Hibernate"],
  databaseAndStorage: ["MySQL", "MongoDB"],
  cloudAndDevOps: ["Git", "Docker"],
  security: ["Spring Security", "JWT"],
  testing: ["JUnit 5", "Mockito"],
};

export const projects = [
  {
    title: "🔒 Spring Security Templates",
    github: "https://github.com/mashisdev/spring-security-templates",
    description: [
      "A collection of production-ready <strong>Spring Security templates</strong> demonstrating various authentication strategies.",
      "Includes robust implementations for basic authentication with <strong>JWT, Role-Based Access Control (RBAC), OTP and OAuth 2.0</strong> integrations with GitHub and Google.",
      "Documentation with Swagger, logging with Slf4j, Global exception handling & Rate Limiter with Resilience4j.",
      "Test coverage with <strong>JUnit 5 and Mockito</strong> for repositories, services and controllers, ensuring reliability and maintainability.",
    ],
  },
  {
    title: "🛒 E-commerce Backend",
    github: "https://github.com/mashisdev/ecommerce-backend",
    description: [
      "Built a comprehensive backend API for an <strong>E-commerce platform</strong> using Spring Framework, featuring a robust business model with key components such as Product, Category, Brand, Address, and Order.",
      "Performs advanced search and pagination functionalities, allowing efficient and specific data retrieval from the database by using <strong>RequestParams</strong>.",
      "RBAC with UNVERIFIED_USER, USER and ADMIN roles. User verification is handled with an OTP sent via email.",
      "Documentation with Swagger, logging with Slf4j, Rate Limiter with Resilience4j.",
      "Optimized performance for public endpoints with a caching solution using <strong>Caffeine and Spring Cache</strong>.",
      "Implemented the <strong>PayPal API</strong> for payments.",
    ],
  },
];

export const workExperience = [
  {
    company: "Ministry of Foreign Trade and Tourism, Perú",
    position: "Software Development",
    period: "July 2025",
    achievements:
      "Developed Python scripts to automate the manipulation of transaction certificates stored in Excel spreadsheets, and created a user-friendly Graphical User Interface (GUI) using Tkinter to streamline user interaction with the certificate processing workflows.",
  },
];

// Not used items

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
