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
      "A collection of production-ready Spring Security templates demonstrating various authentication strategies.",
      "Includes robust implementations for basic authentication with JWT, Role-Based Access Control (RBAC), OTP and OAuth 2.0 integrations with GitHub and Google.",
      "Documentation with Swagger, logging with Slf4j, Global exception handling for error management & Rate Limiter with Resilience4j.",
      "Test coverage with JUnit 5 and Mockito for repositories, services and controllers, ensuring reliability and maintainability.",
    ],
  },
  {
    title: "🛒 E-commerce Backend",
    github: "https://github.com/mashisdev/ecommerce-backend",
    description: [
      "A comprehensive backend API for an e-commerce platform built with Spring Framework.",
      "Implements a robust domain model with entities like UserProduct, Category, Brand, Address and Order, showcasing relationships and business logic.",
      "Performs advanced search and pagination functionalities, allowing efficient and specific data retrieval from the database.",
      "Role-Based Access Control (RBAC) with UNVERIFIED_USER, USER and ADMIN roles. User verification with OTP send by email.",
      "Documentation with Swagger, logging with Slf4j, Rate Limiter with Resilience4j.",
    ],
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

export const workExperience = [
  {
    company: "Chatbyte GmbH",
    location: "Remote",
    position: "Software Engineer",
    period: "Mar 2024 - Present",
    achievements: [
      "Designed and implemented business logic for AWS Lambdas using the Serverless Framework, forming the backbone of the application's functionality and ensuring seamless backend operations.",
      "Built a comprehensive admin panel for managing content, user data, and analytics.",
      "Contributed to the development and integration of a scalable CMS for managing blog content and other platform data.",
      "Reduced database costs by introducing materialized views, optimizing query performance and resource usage.",
      "Drove the integration of a custom affiliate marketing system, enabling seamless tracking and reporting of referrals and user activities.",
      "Integrated Text-to-Speech (TTS) services for enhanced user experiences, optimizing both frontend and backend systems.",
      "Collaborated with cross-functional teams to deliver high-quality features, actively reviewing pull requests to ensure code quality, adherence to standards, and efficient implementation.",
    ],
  },
];
