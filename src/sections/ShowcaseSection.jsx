import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  const projects = [
    {
      title: "AI Help Bot - Intelligent Customer Support",
      description: "Advanced chatbot powered by OpenAI providing 24/7 customer support with contextual understanding and seamless integration.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB", "Express.js"],
      image: "/images/project1.png",
      featured: true,
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "MSME Optimization Platform",
      description: "Comprehensive platform for small businesses to optimize operations, track performance metrics, and improve efficiency.",
      tech: ["Next.js", "PostgreSQL", "Python", "TensorFlow"],
      image: "/images/project2.png",
      bg: "#FFEFDB",
    },
    {
      title: "Budget Calculator Pro",
      description: "AI-powered personal finance management tool with predictive budgeting capabilities and comprehensive analytics.",
      tech: ["React", "TypeScript", "Chart.js", "Firebase"],
      image: "/images/project3.png",
      bg: "#FFE7EB",
    },
    {
      title: "Retail POS System",
      description: "Modern point-of-sale system with inventory management, analytics, and multi-location support.",
      tech: ["Vue.js", "Express.js", "MySQL", "Stripe"],
      image: "/images/project1.png",
      bg: "#E7F5FF",
    },
    {
      title: "React Movie Search",
      description: "Entertainment discovery application with advanced search capabilities and personalized recommendations.",
      tech: ["React", "Redux", "TMDB API", "Tailwind CSS"],
      image: "/images/project2.png",
      bg: "#FFF7ED",
    },
  ];

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, project4Ref.current, project5Ref.current];

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
            <div className="text-content">
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl mb-4">
                {projects[0].description}
              </p>
              <div className="tech-stack mb-6">
                <h4 className="text-blue-400 text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions flex gap-4">
                <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Live Demo</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </button>
                <button className="group px-6 py-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:-translate-y-1">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                </button>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper" style={{backgroundColor: projects[1].bg}}>
                <img src={projects[1].image} alt={projects[1].title} />
              </div>
              <div className="project-info p-4">
                <h2 className="text-lg font-bold text-white mb-2">{projects[1].title}</h2>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{projects[1].description}</p>
                <div className="tech-stack mb-4">
                  <div className="flex flex-wrap gap-1">
                    {projects[1].tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-actions flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper" style={{backgroundColor: projects[2].bg}}>
                <img src={projects[2].image} alt={projects[2].title} />
              </div>
              <div className="project-info p-4">
                <h2 className="text-lg font-bold text-white mb-2">{projects[2].title}</h2>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{projects[2].description}</p>
                <div className="tech-stack mb-4">
                  <div className="flex flex-wrap gap-1">
                    {projects[2].tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-actions flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Projects Row */}
          <div className="project-list-wrapper overflow-hidden mt-8">
            <div className="project" ref={project4Ref}>
              <div className="image-wrapper" style={{backgroundColor: projects[3].bg}}>
                <img src={projects[3].image} alt={projects[3].title} />
              </div>
              <div className="project-info p-4">
                <h2 className="text-lg font-bold text-white mb-2">{projects[3].title}</h2>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{projects[3].description}</p>
                <div className="tech-stack mb-4">
                  <div className="flex flex-wrap gap-1">
                    {projects[3].tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-actions flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>

            <div className="project" ref={project5Ref}>
              <div className="image-wrapper" style={{backgroundColor: projects[4].bg}}>
                <img src={projects[4].image} alt={projects[4].title} />
              </div>
              <div className="project-info p-4">
                <h2 className="text-lg font-bold text-white mb-2">{projects[4].title}</h2>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{projects[4].description}</p>
                <div className="tech-stack mb-4">
                  <div className="flex flex-wrap gap-1">
                    {projects[4].tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-actions flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
