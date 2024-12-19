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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    date: "Feb 2022 - Present",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
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
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
