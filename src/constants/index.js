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
    ruby,
    git,
    figma,
    rails,
    postgresql,
    microverse,
    tttr,
    eleganttex,
    hnh,
    milonai,
    toxscanai,
    threejs,
    onlycss3d,
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
      title: "Frontend Developer",
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
      name: "Ruby",
      icon: ruby,
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
      name: "Three JS",
      icon: threejs,
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
      name: "rails",
      icon: rails,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Tech To The Rescue",
      icon: tttr,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Developing and maintaining backend services using Ruby on Rails and related technologies.",
        "Implementing responsive, visually engaging designs with 3D elements, ensuring cross-browser compatibility.",
        "Collaborating with cross-functional teams, including designers, product managers, CEOs, and developers, to deliver high-quality products.",
        "Participating in code reviews and providing constructive feedback to peers",
      ],
    },
    {
      title: "Hackathon Winner",
      company_name: "Zero Hunger Hackathon",
      icon: tttr,
      iconBg: "#383E56",
      date: "May 22 - 24, 2024",
      points: [
        "Teamed up with developers from Bangladesh, Nigeria, and Kenya in a Tech To The Rescue and AWS hackathon to support a Ugandan NGO fighting hunger and food waste.",
        "Built a full-stack app with Ruby on Rails, and PostgreSQL to streamline food distribution.",
        "Added USSD functionality for accessibility in low/no-internet areas, boosting inclusivity.",
        "Won among 600 teams, delivering an innovative solution reviewed and praised by AWS engineers for its technical excellence and social impact.",
      ],
    },
    {
      title: "Mentor (Volunteer)",
      company_name: "Microverse",
      icon: microverse,
      iconBg: "#383E56",
      date: "June 2023 - February 2024",
      points: [
        "Mentored junior developers in Ruby, Rails, React, and JavaScript to sharpen their technical skills.",
        "Conducted code reviews, enhancing code quality by 20% through improved structure and practices.",
        "Supported mentees’ motivation and consistency to excel in a full-stack development program.",
        "Guided remote pair programming and GitHub workflows to teach effective collaboration techniques.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Elegant TEX",
      icon: eleganttex,
      iconBg: "#383E56",
      date: "February 2022 - March 2023",
      points: [
        "Developed and maintained WooCommerce website, optimizing functionality to drive user engagement and sales",
        "Increased monthly sales to 400k by implementing strategic SEO tactics for enhanced online visibility.",
        "Expanded product reach by 60% through visually appealing, SEO-optimized product descriptions and imagery.",
        "Collaborated with designers and product managers to refine web features, ensuring a seamless user experience.",
      ],
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
      name: "Haba Na Haba",
      description:
        "A internal web tool that streamlines food collection & distribution for an NGO fighting hunger and food waste, with USSD for low/no-internet access.",
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
      image: hnh,
      source_code_link: "https://github.com/",
    },
    {
      name: "MilonAI",
      description:
        "A dynamic AI chat app for seamless group collaboration. Users can share chat sessions enabling real-time, multi-user, transparent AI conversations with focused contexts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: milonai,
      source_code_link: "https://github.com/",
    },
    {
      name: "ToxScanAI",
      description:
        "A full-stack Web App that uses AI and OCR to analyze product ingredients from images to identify harmful compounds, explain risks, and provide usage recommendations.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
      ],
      image: toxscanai,
      source_code_link: "https://github.com/",
    },
    {
      name: "Only CSS 3D Animation",
      description:
        "A fun project showcasing the capabilities of CSS for creating intricate 3D animations without relying on JavaScript.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: onlycss3d,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };