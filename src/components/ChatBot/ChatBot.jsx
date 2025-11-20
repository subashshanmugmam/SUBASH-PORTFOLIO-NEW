import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Subash's AI assistant. Ask me anything about his experience, skills, or projects!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Resume data for the AI assistant to reference
  const resumeData = {
    personal: {
      name: "Subash S",
      title: "AI Developer & Web Engineer",
      location: "Tamil Nadu, India",
      email: "subashs2573@gmail.com",
      linkedin: "https://www.linkedin.com/in/subashshanmugam11/",
      education: "B.Tech in AI & Data Science at MKCE (8.2/10 CGPA)"
    },
    experience: [
      {
        role: "Software Engineer",
        company: "MR. INNOVATOR",
        period: "July 2025 - Present",
        responsibilities: [
          "Worked on idea generation tools using AI and prompt engineering for micro SaaS products",
          "Built automation pipelines for collecting user insights from Reddit and LinkedIn",
          "Reduced manual research time by 93%, enabling faster startup prototyping"
        ]
      },
      {
        role: "Open Source Contributor",
        period: "May 2025 - Present",
        responsibilities: [
          "Contributed to bug fixes and optimization in DevOps scripts and data analysis tools",
          "Improved runtime of a popular Python automation script by 35% through memory optimization",
          "Collaborated with global developers to enhance code quality and performance"
        ]
      }
    ],
    skills: {
      programming: ["Java", "Python", "JavaScript", "C++"],
      frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Flask"],
      databases: ["MySQL", "MongoDB", "PostgreSQL"],
      aiDataScience: ["Machine Learning", "TensorFlow", "Data Analysis", "Python Libraries"],
      tools: ["Git & GitHub", "AWS EC2/S3", "Docker", "Linux"]
    },
    projects: [
      {
        name: "AI Help Bot",
        description: "Advanced chatbot powered by OpenAI providing 24/7 customer support with contextual understanding",
        technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Express.js"]
      },
      {
        name: "MSME Optimization Platform",
        description: "Comprehensive platform for small businesses to optimize operations and track performance metrics",
        technologies: ["Next.js", "PostgreSQL", "Python", "TensorFlow"]
      },
      {
        name: "Budget Calculator Pro",
        description: "AI-powered personal finance management tool with predictive budgeting capabilities",
        technologies: ["React", "TypeScript", "Chart.js", "Firebase"]
      },
      {
        name: "Retail POS System",
        description: "Modern point-of-sale system with inventory management and analytics",
        technologies: ["Vue.js", "Express.js", "MySQL", "Stripe"]
      },
      {
        name: "React Movie Search",
        description: "Entertainment discovery application with advanced search capabilities",
        technologies: ["React", "Redux", "TMDB API", "Tailwind CSS"]
      }
    ],
    achievements: [
      "8.2/10 CGPA in AI & Data Science",
      "Top 50 out of 250 participants in Kongu Engineering College Coding Contest",
      "Shortlisted in MSME Hackathon 4.0",
      "Top 5% performance in LeetCode monthly challenges",
      "93% reduction in manual research time through automation"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined Questions and Answers Database
  const qnaDatabase = {
    // General Information
    "who are you": "Hi! I'm Subash S, an AI Developer and Web Engineer from Tamil Nadu, India. I specialize in building innovative AI-powered applications and interactive web experiences.",
    "about you": "I'm Subash S, an AI Developer and Web Engineer passionate about creating cutting-edge technology solutions. I'm currently pursuing B.Tech in AI & Data Science at MKCE with an 8.2/10 CGPA and working as a Software Engineer at MR. INNOVATOR.",
    "tell me about yourself": "I'm Subash S, an AI Developer and Web Engineer with expertise in machine learning, web development, and automation. I love building innovative solutions that solve real-world problems using AI and modern web technologies.",
    
    // Education
    "education": "I'm currently pursuing B.Tech in AI & Data Science at MKCE ( M Kumarasamy College of Engineering) with a CGPA of 8.2/10. My studies focus on artificial intelligence, machine learning, and data science applications.",
    "college": "I study at MKCE (M Kumarasamy College of Engineering) where I'm pursuing B.Tech in AI & Data Science with a CGPA of 8.2/10.",
    "degree": "I'm pursuing a B.Tech degree in AI & Data Science at MKCE with a current CGPA of 8.2/10.",
    "study": "I'm studying B.Tech in AI & Data Science at MKCE with a strong academic record of 8.2/10 CGPA, focusing on artificial intelligence and data science technologies.",
    
    // Experience
    "experience": "I'm currently working as a Software Engineer at MR. INNOVATOR since July 2025, where I develop AI-powered idea generation tools and automation pipelines. I'm also an active Open Source Contributor, improving DevOps scripts and data analysis tools.",
    "work": "I work as a Software Engineer at MR. INNOVATOR, focusing on AI and prompt engineering for micro SaaS products. I've built automation pipelines that reduced manual research time by 93% and contributed to various open source projects.",
    "job": "I'm a Software Engineer at MR. INNOVATOR where I work on AI-powered tools and automation systems. I also contribute to open source projects, improving code performance and quality.",
    "current role": "I'm currently a Software Engineer at MR. INNOVATOR, working on innovative AI tools and automation pipelines for startup prototyping and user insight collection.",
    
    // Skills
    "skills": "My core skills include Java, Python, JavaScript, C++, React, Node.js, Machine Learning, TensorFlow, and various frameworks. I'm proficient in both frontend and backend development, AI/Data Science, and cloud technologies.",
    "programming": "I'm proficient in Java, Python, JavaScript, C++, and work with frameworks like React, Node.js, Express.js, Flask for both web development and AI applications.",
    "ai": "My AI expertise includes Machine Learning, TensorFlow, Data Analysis, Natural Language Processing, and working with Python libraries for data science applications.",
    "technologies": "I work with Java, Python, JavaScript, React, Node.js, Express.js, Flask, MySQL, MongoDB, TensorFlow, AWS, Docker, Git, and various AI/ML frameworks.",
    "frontend": "For frontend development, I use React, Next.js, HTML/CSS, Tailwind CSS, and Three.js to create interactive and responsive user interfaces.",
    "backend": "My backend skills include Node.js, Express.js, Flask, and database management with MySQL, MongoDB, and PostgreSQL.",
    
    // Projects
    "projects": "I've built several exciting projects including an AI Help Bot with OpenAI integration, MSME Optimization Platform, Budget Calculator Pro with AI predictions, Retail POS System, and this interactive 3D portfolio website.",
    "portfolio": "This portfolio is built with React, Three.js, Tailwind CSS, and Framer Motion. It features interactive 3D elements, smooth animations, and responsive design to showcase my work in an engaging way.",
    "ai help bot": "The AI Help Bot is an advanced chatbot powered by OpenAI that provides 24/7 customer support with contextual understanding. Built with React, Node.js, OpenAI API, MongoDB, and Express.js.",
    "msme": "The MSME Optimization Platform is a comprehensive solution for small businesses to optimize operations and track performance metrics. Built with Next.js, PostgreSQL, Python, and TensorFlow.",
    "budget": "Budget Calculator Pro is an AI-powered personal finance management tool with predictive budgeting capabilities. Built with React, TypeScript, Chart.js, and Firebase.",
    "pos": "The Retail POS System is a modern point-of-sale solution with inventory management and analytics. Built with Vue.js, Express.js, MySQL, and Stripe integration.",
    
    // Contact
    "contact": "You can reach me at subashs2573@gmail.com or connect with me on LinkedIn: https://www.linkedin.com/in/subashshanmugam11/. I'm always open to discussing new opportunities and collaborations!",
    "email": "My email address is subashs2573@gmail.com. Feel free to reach out for any opportunities or collaborations!",
    "linkedin": "You can find me on LinkedIn at: https://www.linkedin.com/in/subashshanmugam11/. Let's connect!",
    "location": "I'm based in Tamil Nadu, India.",
    "hire": "I'm open to new opportunities! You can reach me at subashs2573@gmail.com or LinkedIn: https://www.linkedin.com/in/subashshanmugam11/. I'm always excited to discuss interesting projects and collaborations.",
    
    // Achievements
    "achievements": "My key achievements include maintaining an 8.2/10 CGPA, ranking in top 50 out of 250 in Kongu Engineering College Coding Contest, shortlisted in MSME Hackathon 4.0, top 5% in LeetCode monthly challenges, and reducing manual research time by 93%.",
    "accomplishments": "I've achieved a 93% reduction in manual research time through automation, improved Python script performance by 35%, maintained top academic performance, and actively contribute to open source projects.",
    "awards": "I've been recognized in top 50 of Kongu Engineering College Coding Contest, shortlisted for MSME Hackathon 4.0, and consistently perform in top 5% of LeetCode monthly challenges."
  };

  // Function to find the best matching answer
  const findBestAnswer = (question) => {
    const lowercaseQuestion = question.toLowerCase().trim();
    
    // Direct matches for specific keywords
    for (const [key, answer] of Object.entries(qnaDatabase)) {
      if (lowercaseQuestion.includes(key)) {
        return answer;
      }
    }
    
    // Special cases for greetings
    if (lowercaseQuestion.includes('hello') || lowercaseQuestion.includes('hi') || lowercaseQuestion.includes('hey')) {
      return "Hello! I'm Subash S, an AI Developer and Web Engineer. What would you like to know about my experience, skills, projects, or education?";
    }
    
    if (lowercaseQuestion.includes('help') || lowercaseQuestion.includes('what can you')) {
      return "I'm here to help! You can ask me about:\n• My education and academic background\n• Work experience and current role\n• Technical skills and programming languages\n• Projects I've built\n• Achievements and accomplishments\n• How to contact me\n\nWhat interests you most?";
    }
    
    if (lowercaseQuestion.includes('thank') || lowercaseQuestion.includes('thanks')) {
      return "You're very welcome! Feel free to ask me anything else about my background, experience, or projects. Happy to help!";
    }
    
    // Default response for unmatched questions
    return "That's a great question! I'm Subash S, an AI Developer and Web Engineer. You can ask me about my experience, skills, projects, education, achievements, or how to contact me. What would you like to know specifically?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: findBestAnswer(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Cute AI Assistant Avatar */}
        <div className="relative">
          {/* Head */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative">
            {/* Eyes */}
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          {/* Antenna */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-2 bg-blue-300 rounded-full"></div>
            <div className="w-1 h-1 bg-cyan-300 rounded-full -mt-0.5 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-80 h-96 bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative">
                    {/* Cute AI Head */}
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative">
                      {/* Eyes */}
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Antenna */}
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                      <div className="w-0.5 h-1 bg-blue-300 rounded-full"></div>
                      <div className="w-0.5 h-0.5 bg-cyan-300 rounded-full -mt-0.5 animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Subash's AI Assistant</h3>
                    <p className="text-xs text-blue-100">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <div className="relative">
                          {/* Mini AI Head */}
                          <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                            {/* Tiny Eyes */}
                            <div className="flex space-x-0.5">
                              <div className="w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
                              <div className="w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`p-3 rounded-lg text-sm leading-relaxed ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-100'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center relative">
                      {/* Typing AI Head */}
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center relative">
                        {/* Eyes */}
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      {/* Mini Antenna */}
                      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                        <div className="w-0.5 h-1 bg-blue-300 rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-cyan-300 rounded-full -mt-0.5 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-800/50 border-t border-gray-700/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Subash's skills, experience..."
                  className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-lg px-3 py-2 text-sm border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
