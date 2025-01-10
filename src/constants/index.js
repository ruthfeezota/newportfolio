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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  johnhopkinsuniversity,
  wongdoody,
  infosys,
  perficient,
  freelance,
  carrent,
  bahasa,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link:"/about"
  },
  {
    id: "work",
    title: "Work",
    link:"/work"
  },
  {
    id: "contact",
    title: "Contact",
    link:"/contract"
  },
];

const services = [
  {
    title: "3D Developer",
    icon: web,
  },
  {
    title: "UX Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "UX Designer",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "WONGDOODY",
    icon: wongdoody,
    iconBg: "#383E56",
    date: "June 2017 - Jan 2018",
    points: [
      "Consulted with clients to understand goals and conduct user research.",
      "Developed personas, usage scenarios, and conduct usability testing.",
      "Assisted with content development.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2019",
    points: [
      "Designed wireframes, storyboards, sitemaps, and screen flows.",
      "Created product prototypes using design tools like Photoshop, InDesign, Figma, and Illustrator.",
      "Analyze user feedback and iterate to enhance user experience.",
      "Conducted competitor and customer analysis.",
    ],
  },
  {
    title: "UX Developer",
    company_name: "Perficient",
    icon: perficient,
    iconBg: "#383E56",
    date: "Jan 2019 - Feb 2022",
    points: [
      "Designed new components in Figma and Sketch.",
      "Coded in Angular, React & JavaScript/Typescript, HTML5/CSS to build user facing applications.",
      "Proficient in Drupal development.",
      "Built reusable/testable components in React.",
      "Unit Test, Jest and working closely with QA engineers.",
      "Mobile development experience (iOS/Android).",
      "Monitored UI Production exceptions.",
      "Code repository best practices; Git, GitHub.",
      "Used CSS/SCSS, Styled-components, Cascading Style Sheets (CSS) and Tailwind.",
      "Proficient with design tools like Figma, Adobe Creative Studio Suites, Sketch.",
    ],
  },
  {
    title: "UX Developer",
    company_name: "John Hopkins University",
    icon: johnhopkinsuniversity,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - June 2024",
    points: [
      "Build and implement top-notch user interfaces using React and Angular.",
      "Played an active role in quality assurance, documentation, and cross-team collaboration",
      "Designed and developed new design systems.",
      "Wrote efficient JavaScript code while also using HTML and CSS.",
      "Lead with product-analysis tasks and conduct performance tests.",
      "Collaborate with other cross-functional teams to ensure high-performance applications.",
      "Identified and troubleshooted issues with front end code.",
      "Made complex technical and design decisions for React JS projects.",
      "Developed application codes and unit tests in React and Rest Web Services.",
    ],
  },
  {
    title: "Junior 3D Designer and Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "June 2024 - Current",
    points: [
      "Unity Certified User Developer",
      "Develop interactive VR/3D experiences for clients using Unity and Unreal Engine.",
      "Create engaging 3D assets using Blender.",
      "Collaborate with clients on design and functionality to ensure project success.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ruth proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ruth does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ruth optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blazing Energy",
    description:
      "Dynamic 3D web platform using Three.js, Firebase, and Firebase Hosting. This platform enables interactive 3D experiences, powered by real-time data synchronization through Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://candropsproject1.web.app/",
  },
  {
    name: "Bahasa",
    description:
      "This project involves building a user-friendly website to promote a mobile app for Bahasa Indonesia translation. The website showcases the app, provides language learning resources.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bahasa,
    source_code_link: "/bahasa",
  },
  {
    name: "Can We Smoke",
    description:
      "This cannabis app helps users track their intoxication by recording its intensity. Users meticulously logging the onset, duration, and perceived intensity of intoxication periods.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://bulgetextapp.firebaseapp.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
