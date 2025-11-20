import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      subtitle: "Skill Builder Certification",
      organization: "Amazon Web Services",
      year: "2025",
      type: "certification",
      icon: "🏆",
      description: "Developed Cloud Skills and Prepared for AWS Certifications by Hands-on Labs",
      color: "from-orange-500 to-red-500",
      link: "#"
    },
    {
      id: 2,
      title: "Python for Everybody and DSA",
      subtitle: "I & II Specialization",
      organization: "Coursera",
      year: "2024-2025",
      type: "certification",
      icon: "🐍",
      description: "Learning data structures and algorithms for efficient problem-solving and better understanding of real-world problems",
      color: "from-blue-500 to-indigo-500",
      link: "#"
    },
    {
      id: 3,
      title: "Top 50/250 Coding Contest",
      subtitle: "Kongu Engineering College",
      organization: "KEC",
      year: "2025",
      type: "achievement",
      icon: "🏅",
      description: "Demonstrated exceptional problem-solving skills and algorithmic thinking in competitive programming",
      color: "from-yellow-500 to-orange-500",
      link: "#"
    },
    {
      id: 4,
      title: "MSME Hackathon 4.0",
      subtitle: "Shortlisted Project",
      organization: "MSME",
      year: "2024",
      type: "achievement",
      icon: "🚀",
      description: "AI-based resource optimizer using blockchain technology - innovative solution for real-world problems",
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      id: 5,
      title: "Top 5% LeetCode Challenge",
      subtitle: "Monthly Challenge May 2025",
      organization: "LeetCode",
      year: "2025",
      type: "achievement",
      icon: "⭐",
      description: "Consistently performing in top percentiles showcasing excellent data structures and algorithms skills",
      color: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      id: 6,
      title: "Academic Excellence",
      subtitle: "8.2/10 CGPA",
      organization: "M Kumaraswamy College of Engineering",
      year: "2023-2027",
      type: "academic",
      icon: "🎓",
      description: "B.Tech in AI & Data Science with consistent high performance while working on complex projects",
      color: "from-cyan-500 to-blue-500",
      link: "#"
    }
  ];

  const nextSlide = () => {
    // Fade out current cards
    gsap.to(".achievement-card", {
      opacity: 0,
      x: -30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(achievements.length / 3));
        // Fade in new cards
        gsap.fromTo(
          ".achievement-card",
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", stagger: 0.1 }
        );
      }
    });
  };

  const prevSlide = () => {
    // Fade out current cards
    gsap.to(".achievement-card", {
      opacity: 0,
      x: 30,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(achievements.length / 3)) % Math.ceil(achievements.length / 3));
        // Fade in new cards
        gsap.fromTo(
          ".achievement-card",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", stagger: 0.1 }
        );
      }
    });
  };

  useGSAP(() => {
    // Simple fade-in animation for achievement cards
    gsap.fromTo(
      ".achievement-card",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#achievements-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Simple navigation buttons animation
    gsap.fromTo(
      ".nav-button",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#achievements-section",
          start: "top 70%",
        },
      }
    );
  });

  const getVisibleCards = () => {
    const startIndex = currentIndex * 3;
    return achievements.slice(startIndex, startIndex + 3);
  };

  return (
    <section id="achievements-section" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Achievements & Certifications"
          sub="🏆 Milestones that showcase my dedication to continuous learning and excellence"
        />
        
        <div className="relative mt-16">
          {/* Achievement Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] transition-all duration-300">
            {getVisibleCards().map((achievement, index) => (
              <div
                key={achievement.id}
                className="achievement-card group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.type.toUpperCase()}
                      </div>
                    </div>
                    
                    {/* Title and Organization */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-1">{achievement.subtitle}</p>
                    <p className="text-slate-300 text-sm mb-3">{achievement.organization}</p>
                    
                    {/* Year */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-400 text-sm font-medium">{achievement.year}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {achievement.description}
                    </p>
                    
                    {/* View Certificate Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25">
                      <span>View Certificate</span>
                      <span className="text-sm">↗</span>
                    </button>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          {achievements.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 z-10"
              >
                <span className="text-xl font-bold">‹</span>
              </button>
              
              <button
                onClick={nextSlide}
                className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 z-10"
              >
                <span className="text-xl font-bold">›</span>
              </button>
            </>
          )}
          
          {/* Pagination Dots */}
          {achievements.length > 3 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(achievements.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentIndex) {
                      // Fade out current cards
                      gsap.to(".achievement-card", {
                        opacity: 0,
                        y: 20,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => {
                          setCurrentIndex(index);
                          // Fade in new cards
                          gsap.fromTo(
                            ".achievement-card",
                            { opacity: 0, y: -20 },
                            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.1 }
                          );
                        }
                      });
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;