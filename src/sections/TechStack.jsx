import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense } from "react";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

// Loading component for tech cards
const TechCardLoader = () => (
  <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
    <div className="tech-card-animated-bg" />
    <div className="tech-card-content">
      <div className="tech-icon-wrapper flex items-center justify-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
      </div>
      <div className="padding-x w-full">
        <div className="h-4 bg-gray-600 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
      
      <div className="w-full h-full md:px-10 px-5 relative z-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {/* Loop through the techStackIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/30 group-hover:to-blue-500/20 transition-all duration-500 rounded-lg" />
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              {/* Shimmer effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              <div className="tech-card-content relative z-10">
                {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="tech-icon-wrapper group-hover:scale-110 transition-transform duration-300">
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-full">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-spin" />
                    </div>
                  }>
                    <TechIconCardExperience model={techStackIcon} />
                  </Suspense>
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p className="group-hover:text-white transition-colors duration-300">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* This is for the img part */}
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
