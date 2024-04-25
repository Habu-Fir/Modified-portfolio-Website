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
  carrent,
  insa,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'Contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Website Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'FullStack Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Trainee in system software development',
    company_name: 'INSA',
    icon: insa,
    iconBg: '#383E56',
    date: 'March 2018 - April 2019',
    points: [
      'Learn system software development fundamentals including programming languages, system architecture, and development methodologies.',
      'Assist in coding, testing, and debugging system software components under the guidance of experienced developers.',
      'Participate in code reviews and contribute to documentation efforts to maintain clarity within the team.',
      'Gain proficiency in using development tools and technologies such as Git, IDEs, and debugging tools',
      'Develop problem-solving skills by tackling complex challenges and seeking guidance when necessary.',
    ],
  },
  {
    title: 'System Software Developmer',
    company_name: 'INSA',
    icon: insa,
    iconBg: '#E6DEDD',
    date: 'May 2019 - june 2020',
    points: [
      'Implemented Entity-Component-System (ECS) framework using QT C++ and Java to manage complex software architectures.',
      'Developed robust and modular components in C++ and Java to facilitate flexible entity behavior and interactions',
      'Designed and implemented entity systems for efficient management of game objects and simulation entities.',
      'Participated in code reviews and testing processes to ensure code quality, reliability, and maintainability.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer (Real-Time)',
    company_name: 'INSA',
    icon: insa,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developed a real-time web-based decision support system using React.js, Node.js, and MongoDB.',
      'Leveraged React.js to create dynamic and interactive user interfaces, enhancing user experience and engagement',
      'Utilized Node.js to build a scalable and efficient backend server, handling client requests and managing data flow',
      'Implemented MongoDB as the database solution, ensuring reliable storage and retrieval of real-time data.',
      'Integrated WebSocket or other real-time communication technologies to enable instant updates and collaboration among users.',
      'Designed and implemented RESTful APIs to facilitate communication between the frontend and backend components.',
    ],
  },
  {
    title: 'Full stack Developer(Decision Support system sub team leader)',
    company_name: 'INSA',
    icon: insa,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Contributed as a full-stack developer, working on both frontend and backend components of the software application.eveloping and maintaining web applications using React.js and other related technologies.',
      'Acted as a mentor and provided guidance to junior developers, fostering their growth and development within the team..',
      'UDesigned and implemented RESTful APIs for seamless communication between the frontend and backend systems.',
      'Developed an automated customer handling system for restaurants using React.js, Redux Toolkit, Next.js, and MongoDB.',
      'Implemented Redux Toolkit for state management, ensuring a centralized and predictable state container for the application.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Exceptional problem-solver and versatile full stack developer. Consistently delivers high-quality solutions with precision and innovation',
    name: 'Biruk Setotaw',
    designation: 'Division leader',
    company: 'INSA',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Habtamu consistently crafts portfolios that impress and inspire. His expertise shines through in every project he touches.',
    name: 'Ruel Assefa',
    designation: 'Software Developer ',
    company: 'INSA',
    // image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Working with Habtamu has been a delight! Their expertise in website development consistently exceeds expectations, delivering outstanding results every time.',
    name: 'Natnael Gashu',
    designation: 'System Software Developer',
    company: 'INSA',
    //image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Automated custmer handling system(Restaurant)',
    description:
      'Developed an automated restaurant customer handling system using React, Redux Toolkit, and Next.js for efficient management of orders, reservations, and customer interactions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Next js',
        color: 'green-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Clothing App',
    description:
      'Built a clothing app with React.js and Firebase, enabling seamless browsing, shopping, and checkout experiences. Leveraged Firebase for real-time database management and authentication, ensuring secure user interactions. Utilized React.js for dynamic UI components, enhancing the user interface and experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Portfolios',
    description:
      'Created multiple portfolios using HTML, CSS, JavaScript, and Tailwind CSS, showcasing creativity and technical proficiency. Employed Tailwind CSS for rapid UI development and responsive design, ensuring visually appealing and mobile-friendly portfolios. Leveraged JavaScript to enhance interactivity and user engagement, providing a seamless browsing experience.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'Java Script',
        color: 'blue-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];
const My_technologies = [
  {
    name: 'React',
    color: 'pink-text-gradient',
  },
  {
    name: 'Nodejs',
    color: 'green-text-gradient',
  },
  {
    name: 'expressjs',
    color: 'blue-text-gradient',
  },
  {
    name: 'Java',
    color: 'pink-text-gradient',
  },
  {
    name: ' Next js',
    color: 'blue-text-gradient',
  },
  {
    name: 'MongoDB',
    color: 'green-text-gradient',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  My_technologies,
};
