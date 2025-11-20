import { lazy, Suspense, useEffect } from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Technologies from "./sections/Technologies";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import ChatBot from "./components/ChatBot/ChatBot";
import ErrorBoundary from "./components/ErrorBoundary";
import { preloadModels } from "./utils/modelPreloader";
import { validateEnvironment } from "./utils/environment";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

import Logger from "./utils/logger";

const App = () => {
  // Preload 3D models on app startup
  useEffect(() => {
    const initializeModels = async () => {
      try {
        Logger.log('Starting model preload...');
        await preloadModels();
        Logger.log('Model preload completed successfully');
      } catch (error) {
        Logger.warn('Model preload failed:', error);
      }
    };

    // Validate environment variables
    const isEnvValid = validateEnvironment();
    if (!isEnvValid && import.meta.env.DEV) {
      Logger.warn('Some environment variables are missing. Email functionality may not work.');
    }

    initializeModels();
  }, []);

  return (
    <ErrorBoundary fallbackMessage="Portfolio failed to load. Please refresh the page.">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallbackMessage="Hero section failed to load.">
          <Hero />
        </ErrorBoundary>
      </Suspense>
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallbackMessage="Experience section failed to load.">
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary fallbackMessage="Tech stack failed to load.">
          <TechStack />
        </ErrorBoundary>
        <Skills />
        <Technologies />
        <Achievements />
        <Testimonials />
        <ErrorBoundary fallbackMessage="Contact form failed to load.">
          <Contact />
        </ErrorBoundary>
      </Suspense>
      <Footer />
      <Suspense fallback={<div className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>}>
        <ChatBot />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
