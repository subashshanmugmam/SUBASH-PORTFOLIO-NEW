import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";

const Technologies = () => {
  // Technologies already covered in Skills & Expertise:
  // Programming Languages: Java, Python, JavaScript, C++
  // Frontend: React/Next.js, HTML/CSS, Tailwind CSS, JavaScript
  // AI & Data Science: Machine Learning, Data Analysis, Python Libraries, R Programming
  // Tools: Git & GitHub, AWS EC2/S3, Docker, Linux
  
  const technologies = [
    "Node.js", "Express.js", "Flask", "MySQL", "MongoDB", "PostgreSQL", 
    "TensorFlow", "Pandas", "NumPy", "Apache Kafka", "n8n", "Webhooks", 
    "APIs", "NLP", "AI", "Distributed Systems", "TCP/IP", "Wireshark",
    "TypeScript", "Three.js", "GSAP", "Firebase", "Redis", "GraphQL",
    "FastAPI", "Vue.js", "Angular", "Stripe", "OpenAI", "Prisma"
  ];

  useGSAP(() => {
    // Animate technology pills
    gsap.fromTo(
      ".tech-pill",
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: "#technologies-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section id="technologies-section" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technologies I Work With"
          sub="🚀 My Technical Arsenal for Building Modern Solutions"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className="tech-pill px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-full text-white-50 font-medium text-sm md:text-base hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;