import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  pacman,
  mealfinder,
  data,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "Video Editor & UI/UX Designer",
    icon: creator,
  },
  {
    title: "DevOps Learner",
    icon: web,
  },
];

const technologies = [
  {
    name: "Java",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Java Programming Intern",
    company_name: "GRRAS Solutions",
    icon: web,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Learned Core Java and Object-Oriented Programming concepts.",
      "Improved problem-solving through coding exercises and projects.",
      "Developed clean, maintainable code and software development skills.",
      "Applied Java skills in hands-on assignments and projects.",
    ],
  },
  {
    title: "Web Development & React",
    company_name: "Personal Projects",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Building responsive web applications using React.js and Tailwind CSS.",
      "Creating modern user interfaces and frontend projects.",
      "Developing a 3D portfolio website using React Three Fiber and Three.js.",
      "Learning advanced JavaScript and React development practices.",
    ],
  },
  {
    title: "DevOps & Cloud Learning",
    company_name: "Self Learning",
    icon: backend,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Learning Linux fundamentals and shell commands.",
      "Using Git and GitHub for version control and collaboration.",
      "Exploring AWS cloud services and deployment concepts.",
      "Learning Docker and CI/CD workflows for modern development.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Pac-Man Game",
    description:
      "Developed a Pac-Man style arcade game using Java and AWT/Swing with player controls, ghost movement, collision detection and scoring.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "awt",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
    ],
    image: pacman,
    source_code_link: "https://github.com/Ashvin-Shakya",
  },
  {
    name: "Meal Finder",
    description:
      "Built a meal search application using HTML, CSS and JavaScript with API integration.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mealfinder,
    source_code_link: "https://github.com/Ashvin-Shakya",
  },
  {
    name: "Data Analytics Portfolio",
    description:
      "Performed data cleaning, analysis and visualization using Python, SQL, Tableau and Power BI.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
    ],
    image: data,
    source_code_link: "https://github.com/Ashvin-Shakya",
  },
];

export { services, technologies, experiences, testimonials, projects };