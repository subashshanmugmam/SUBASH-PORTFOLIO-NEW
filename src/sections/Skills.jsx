import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 85 },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 88 },
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        { name: "Machine Learning", level: 86 },
        { name: "Data Analysis", level: 88 },
        { name: "Python Libraries", level: 90 },
        { name: "R Programming", level: 82 },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "AWS EC2/S3", level: 78 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 85 },
      ]
    }
  ];

  useGSAP(() => {
    // Animate skill cards first
    gsap.fromTo(
      ".skills-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills-section",
          start: "top 70%",
        },
      }
    );

    // Animate skill bars with better coordination
    skillsData.forEach((category, categoryIndex) => {
      const cardSelector = `.skills-card:nth-child(${categoryIndex + 1})`;
      
      // Create timeline for each card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardSelector,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });
      
      // Animate all skill bars in this card with stagger
      category.skills.forEach((skill, skillIndex) => {
        const barSelector = `.skill-bar-${categoryIndex}-${skillIndex}`;
        const glowSelector = `.skill-bar-glow-${categoryIndex}-${skillIndex}`;
        
        tl.fromTo(
          [barSelector, glowSelector],
          {
            width: "0%",
            opacity: 0,
          },
          {
            width: `${skill.level}%`,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          skillIndex * 0.2 // Stagger delay for each skill in the card
        );
      });
    });
  });

  return (
    <section id="skills-section" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Skills & Expertise"
          sub="A comprehensive overview of my technical skills and proficiency levels, built through years of hands-on experience and continuous learning."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="skills-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white-50 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                      <div 
                        className={`skill-bar-${categoryIndex}-${skillIndex} absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}
                        style={{ width: "0%", opacity: 0 }}
                      />
                      
                      {/* Glow effect */}
                      <div 
                        className={`skill-bar-glow-${categoryIndex}-${skillIndex} absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm`}
                        style={{ width: "0%", opacity: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;