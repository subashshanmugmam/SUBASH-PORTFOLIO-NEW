const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#projects-details",
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

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Personal Projects" },
  { value: 50000, suffix: "+", label: "Lines of Code" },
  { value: 1, suffix: "+", label: "Years Of Industry Work Experience" },
  { value: 35, suffix: "%", label: "Performance Boost" },
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

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Subash demonstrates exceptional problem-solving skills and technical expertise in AI-driven solutions. His work on automation pipelines has significantly improved our operational efficiency.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Engineer at MR. INNOVATOR",
    date: "July 2025 - Present",
    responsibilities: [
      "Worked on idea generation tools using AI and prompt engineering for micro SaaS products.",
      "Built automation pipelines for collecting user insights from Reddit and LinkedIn.",
      "Reduced manual research time by 93%, enabling faster startup prototyping.",
    ],
  },
  {
    review: "Subash's contributions to open source projects show his commitment to quality code and optimization. His memory optimization improvements have made a significant impact.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Open Source Contributor",
    date: "May 2025 - Present",
    responsibilities: [
      "Contributed to bug fixes and optimization in DevOps scripts and data analysis tools.",
      "Improved runtime of a popular Python automation script by 35% through memory optimization.",
      "Collaborated with global developers to enhance code quality and performance.",
    ],
  },
  {
    review: "Subash's academic excellence combined with practical project experience makes him a valuable asset. His distributed systems knowledge and implementation skills are impressive.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "AI & Data Science Student at MKCE",
    date: "2023 - May 2027 (Expected)",
    responsibilities: [
      "Pursuing B.Tech in AI & Data Science with 8.2/10 CGPA (Till 4th Sem).",
      "Built Smart Log Aggregator handling 1M+ logs/day with 98.7% availability.",
      "Developed Network Performance Optimizer reducing latency by 27% in high-traffic scenarios.",
    ],
  },
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
    name: "MR. INNOVATOR Team",
    mentions: "@mrinnovator",
    review:
      "Subash's work on AI-driven automation tools has been exceptional. His ability to build complex pipelines and reduce manual work by over 90% showcases his technical expertise and innovative thinking.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Open Source Community",
    mentions: "@opensourcecommunity",
    review:
      "Subash's contributions to our projects have been invaluable. His 35% performance improvement on our Python automation script demonstrates his deep understanding of optimization and code quality.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Coding Contest Judge",
    mentions: "@kongucoding",
    review:
      "Subash's problem-solving skills are impressive. Ranking in top 50 out of 250 participants in the Kongu Engineering College Coding Contest shows his algorithmic thinking and competitive programming abilities.",
    imgPath: "/images/client2.png",
  },
  {
    name: "LeetCode Community",
    mentions: "@leetcode",
    review:
      "Consistently performing in the top 5% of monthly challenges, Subash demonstrates excellent problem-solving skills and dedication to continuous learning in data structures and algorithms.",
    imgPath: "/images/client5.png",
  },
  {
    name: "MSME Hackathon",
    mentions: "@msmehackathon",
    review:
      "Subash's AI-based resource optimizer using blockchain technology was innovative and well-executed. His shortlisting in MSME Hackathon 4.0 reflects his ability to create practical solutions for real-world problems.",
    imgPath: "/images/client4.png",
  },
  {
    name: "College Faculty",
    mentions: "@mkce",
    review:
      "Subash maintains an excellent academic record with 8.2/10 CGPA while actively working on complex projects. His balance of theoretical knowledge and practical implementation is commendable.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/subashshanmugam11/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};


