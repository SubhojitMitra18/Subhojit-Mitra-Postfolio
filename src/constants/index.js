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
    jobit,
    tripguide,
    threejs,
    rcrs,
    edureka,
    intro,
    login,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Adjunct Faculty",
      company_name: "Edureka",
      icon: edureka,
      iconBg: "#383E56",
      date: "March 2023 - present",
      points: [
        "Teaching C,C++,Java, JavaScript, React, Node, Angular",
        "Co-ordinating with other faculties to generate new teaching techniques",
        "Helping to build projects of my students",
        "Setting Question Papers for the students",
      ],
    },
    
    {
      title: "Programming Faculty",
      company_name: "Introduction",
      icon: intro,
      iconBg: "#383E56",
      date: "Oct 2023 - present",
      points: [
        "Teaching Programming to kids of class 1-10",
        "Writing Contents for books and notes about computer sceince for student services",
        "Teaching relatively advance coding to students of class XI and XII",
        "Co-ordinating with my other higher faculties for better teaching",
      ],
    },
    {
      title: "Academic Content Writer",
      company_name: "Royal Content Research Services",
      icon: rcrs,
      iconBg: "#E6DEDD",
      date: "April 2022 - June 2022",
      points: [
        "Creating Content about academic topics",
        "Deadline Based Job Providing",
        "Co-ordination with my team to achieve team effort and team working",
        "Participating in works that are incomplete and needed to be completed",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is a great learner and knows so much things about programming and new technologies",
      name: "Rupa Saha",
      designation: "Assistant Professor",
      company: "JIS group",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Subhojit does.",
      name: "Sandip Roy",
      designation: "Branch Head",
      company: "Edureka",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Subhojit optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Anita Ma'am",
      designation: "Placement Head",
      company: "Introduction",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bill",
      description:
        "A Full Fledged Desktop App that helps users to give proper interface to run a billing system for a company.",
      tags: [
        {
          name: "AWT/Swing",
          color: "blue-text-gradient",
        },
        {
          name: "JDBC",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SubhojitMitra18/billing-sys",
    },
    {
      name: "Blog",
      description:
        "Blogging site that helps users to register and login with proper backend support and also posting liking various posts",
      tags: [
        {
          name: "JSP & Servlet",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax & Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "JDBC_MySQl",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SubhojitMitra18/Tech-Blog",
    },
    {
      name: "Gaming Page",
      description:
        "A gaming site consisting of two games with backed support and it also contains static pages parts",
      tags: [
        {
          name: "MongoDb",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS/Express",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SubhojitMitra18/Gaming-site",
    },
    {
      name: "Login System",
      description:
        "A small Project to deploy python flask as a backend and making a full fledge login/signup/profile system",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: login,
      source_code_link: "https://github.com/SubhojitMitra18/Signup-Login-Python",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };