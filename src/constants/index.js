const base = import.meta.env.BASE_URL;



const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

// const words = [
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
// ];

const words = [
  { text: "Ideas", imgPath: `${base}images/ideas.svg` },
  { text: "Concepts", imgPath: `${base}images/concepts.svg` },
  { text: "Designs", imgPath: `${base}images/designs.svg` },
  { text: "Code", imgPath: `${base}images/code.svg` },
  { text: "Ideas", imgPath: `${base}images/ideas.svg` },
  { text: "Concepts", imgPath: `${base}images/concepts.svg` },
  { text: "Designs", imgPath: `${base}images/designs.svg` },
  { text: "Code", imgPath: `${base}images/code.svg` },
];

const counterItems = [
  { value: 2.5, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    // imgPath: "/images/seo.png",
    imgPath: `${base}images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    // imgPath: "/images/chat.png",
    imgPath: `${base}images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    // imgPath: "/images/time.png",
    imgPath: `${base}images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const servicesList = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

// const techStackIcons = [
//   {
//     name: "React Developer",
//     modelPath: "/models/react_logo-transformed.glb",
//     scale: 1,
//     rotation: [0, 0, 0],
//   },

//   {
//     name: "Backend Developer",
//     modelPath: "/models/node-transformed.glb",
//     scale: 5,
//     rotation: [0, -Math.PI / 2, 0],
//   },
//   {
//     name: "Interactive Developing",
//     modelPath: "/models/three.js-transformed.glb",
//     scale: 0.05,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Project Managing",
//     modelPath: "/models/git-svg-transformed.glb",
//     scale: 0.05,
//     rotation: [0, -Math.PI / 4, 0],
//   },
//   {
//     name: "AWS EC2, Route 53 ",
//     modelPath: "/models/aws_logo.glb",
//     scale: 0.3,
//     rotation: [0, 0, 0],
//   },
// ];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${base}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: `${base}models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developing",
    modelPath: `${base}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Managing",
    modelPath: `${base}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "AWS EC2, Route 53 ",
    modelPath: `${base}models/aws_logo.glb`,
    scale: 0.4,
    rotation: [0, 0, 0],
    position: [0,-2, 0],

  },
];


const expCards = [
  {
    review: "Beffin brought creativity and technical expertise to the team, significantly improving our development performance. His work has been invaluable in delivering faster experiences.",
    // imgPath: "/images/exp1.png",
    // logoPath: "/images/logo1.png",

    // imgPath: "/img/metasoftFullLogo.svg",
    // logoPath: "/img/metasoftLogo.png",
    imgPath: `${base}img/metasoftFullLogo.webp`,
    logoPath: `${base}img/metasoftLogo.webp`,
    title: "Full STack Developer",
    date: "March 2023 - Present",
    responsibilities: [
      " Developed and maintained high-performance web applications using React.js and Redux, improving user experience scores by 30% and optimizing state management.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
      "Led end-to-end project planning and execution, delivering scalable solutions from concept to deployment.",
      "Integrated NFC and QR code technologies to enhance product functionality and enable seamless device interactions",
      "Mentored interns and junior developers, conducting code reviews and pair programming sessions — boosting team efficiency by 25% and improving code quality."
    ],
  },
  // {
  //   review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Abhinav v",
    mentions: "@abhinav",
    review:
      "I can’t say enough good things about Beffin. He was able to take complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    // imgPath: "/images/client1.png",
  },
  {
    name: "Boodhesh",
    mentions: "@boodhesh",
    review:
      "Collaborating with Beffin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout the project. Beffin is the ideal partner.",
    // imgPath: "/images/client2.png",
  },
  {
    name: "— Rahul Menezes",
    mentions: "@rahulmenezes",
    review:
      "Working with Beffin really helped me grow as a designer. He always took the time to explain the development side clearly and made sure I truly understood things. He is a great full-stack developer, patient, and a strong problem solver. He made a huge difference in our projects, truly a great teammate to have on any product team.",
    // imgPath: "/images/client3.png",
  },

  {
    name: "Aquin Devis",
    mentions: "@aquin",
    review:
      "Beffin was a pleasure to work with. He turned outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    // imgPath: "/images/client5.png",
  },
  {
    name: "Siby P S",
    mentions: "@siby",
    review:
      "Beffin expertise in web development is truly impressive. He delivered a robust and scalable solution for  e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    // imgPath: "/images/client4.png",
  },
  {
    name: "Roshan Remis",
    mentions: "@roshan",
    review:
      "Beffin was a pleasure to work with. He understood all requirements perfectly and delivered a website that exceeded all expectations. His skills in both frontend and backend dev are top-notch.",
    // imgPath: "/images/client6.png",
  },
];

// const socialImgs = [
//   {
//     name: "insta",
//     imgPath: "/images/insta.png",
//     link: "https://www.instagram.com/dark_amateur/?utm_source=qr"
//   },
//   {
//     name: "fb",
//     imgPath: "/images/fb.png",
//     link: "https://www.facebook.com/beffinyohannan"
//   },
//   {
//     name: "linkedin",
//     imgPath: "/images/linkedin.png",
//     link: "http://www.linkedin.com/in/beffin-yohannan"
//   },
// ];

const socialImgs = [
  {
    name: "insta",
    imgPath: `${base}images/insta.png`,
    link: "https://www.instagram.com/dark_amateur/?utm_source=qr"
  },
  {
    name: "fb",
    imgPath: `${base}images/fb.png`,
    link: "https://www.facebook.com/beffinyohannan"
  },
  {
    name: "linkedin",
    imgPath: `${base}images/linkedin.png`,
    link: "http://www.linkedin.com/in/beffin-yohannan"
  },
];

 // Project data with enhanced information
 const projectData = {
  zeeqr: {
      title: "ZEEQR - Digital Card Innovations",
      description: "Eco-friendly Smart NFC & QR Card Platform",
      fullDescription: "A comprehensive web application built with React.js, Zustand, Node.js, & TailwindCSS. ZEEQR revolutionizes digital networking by providing eco-friendly smart NFC and QR card solutions that eliminate the need for traditional paper business cards.",
      status: "Live",
      moreDetails: true,
      liveUrl: "https://zeeqr.com/",
      technologies: ["React.js", "Node.js","Express.js","MongoDB", "Zustand", "TailwindCSS","REST API","Google Oauth","Rapid API","Google Map API","Apple Wallet","Google Wallet"],
      features: ["NFC Integration", "QR Code Generation", "Contact Management", "Analytics Dashboard"],
      image: "/img/project01.webp",
      contributions:[
          "Implemented a digital card purchasing platform using React.js, Zustand, and Node.js, featuring a responsive UI and improving user flow efficiency by 35%.",
          "Launched NFC/QR-enabled products (business cards, review cards, table talkers) to enable contactless digital interactions and reduce paper usage by over 40%.",
          "Led cross-functional collaboration, user testing, and delivery within scope — aligning product design with customer needs and sustainability goals."
      ]

  },
  bharatAuction: {
      title: "Bharat Auction",
      description: "Online Bidding Platform",
      fullDescription: "A sophisticated online auction platform that enables users to participate in real-time bidding. Built with modern web technologies to ensure smooth and secure transactions.",
      status: "Completed",
      moreDetails: true,
      liveUrl: null,
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB","Express.js","Firebase Push Notification","REST API","Zustand"],
      features: ["Real-time Bidding", "User Authentication", "Payment Integration", "Auction Management"],
      image: "/img/auction.webp",
      contributions:[
          "Constructed a real-time online auction platform using React, Zustand, and Socket.IO, enabling live bidding with instant updates and Firebase push notifications.",
          "Created reusable and efficient components for flexible product types and user-friendly forms, reducing code duplication by 40% and simplifying future updates.",
          "Engineered a streamlined asset loading process, resulting in a 70% reduction in image bandwidth usage and a 25% boost in user satisfaction scores across all device types.",
          "Managed project timelines and budgets, delivering within scope and deadlines."
      ]
  },
  hostec: {
      title: "Hostec",
      description: "Client Survey and Reporting System",
      fullDescription: "A comprehensive client survey and reporting system designed to streamline feedback collection and generate detailed analytics reports for better business insights.",
      status: "In Progress",
      moreDetails: true,
      liveUrl: null,
      technologies: ["React.js", "Express.js", "MonfoDB","Express.js", "Chart.js"],
      features: ["Survey Builder", "Analytics Dashboard", "Report Generation", "Data Export"],
      image: "/img/survey.webp",
      contributions:[
          "Designed a role-specific survey platform using React and Zustand, featuring adaptable questionnaires and a configurable question bank to support flexible survey building.",
          "Programmed a graphical reporting system with point-based analysis and comparison against past surveys, enabling insightful performance tracking for clients.",
          "A well optimized report graphically and point tables  according to the point gained by the client in the survey, also we can compare report with previous."
      ]
  },
  meaInternational: {
      title: "MEA International",
      description: "Real Estate Platform",
      fullDescription: "A modern real estate platform that connects buyers, sellers, and agents. Features advanced search capabilities, property management tools, and integrated communication systems.",
      status: "In Progress",
      moreDetails: true,
      liveUrl: null,
      technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API"],
      features: ["Property Listings", "Advanced Search", "Agent Portal", "Virtual Tours"],
      image: "/img/realEstate.webp"
  },
  kannaraChurch: {
      title: "Kannara Church",
      description: "Community Website",
      fullDescription: "A community-focused website for Kannara Church that serves as a central hub for congregation members to stay connected, access resources, and participate in community events.",
      status: "Live",
      moreDetails: false,
      liveUrl: "https://www.kannarapalli.com/",
      technologies: ["React.js", "Node.js", "CMS", "TailwindCSS"],
      features: ["Event Management", "Member Directory", "Resource Library", "News Updates"],
      image: "/img/church-website.webp"
  },
  airchip: {
      title: "Airchip",
      description: "Ecommerce Website for Laptops",
      fullDescription: "A specialized ecommerce platform dedicated to laptop sales. Features comprehensive product catalogs, comparison tools, and streamlined checkout processes.",
      status: "Completed",
      moreDetails: false,
      liveUrl: null,
      technologies: ["React.js", "Node.js", "Stripe", "MongoDB"],
      features: ["Product Catalog", "Shopping Cart", "Payment Processing", "Order Tracking"],
      image: "/img/airchip.webp"
  },
  eventive: {
      title: "Eventive",
      description: "Event Management Social Platform",
      fullDescription: "A social media-inspired event management application that allows users to create, discover, and participate in events while building communities around shared interests.",
      status: "Completed",
      moreDetails: false,
      liveUrl: null,
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      features: ["Event Creation", "Social Features", "RSVP System", "Community Building"],
      image: "/img/eventive.webp"
  }
};

export {
  words,
  abilities,
  servicesList,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projectData
};
