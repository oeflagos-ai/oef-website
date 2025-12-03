import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Partnerships from './pages/Partnerships';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  // We keep track of the path we are currently DISPLAYING
  const [displayPath, setDisplayPath] = useState(window.location.hash.slice(1) || '/');
  
  // We keep track of whether we are currently fading out
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      
      // If the path is the same (e.g. clicking the same link), do nothing
      if (newPath === displayPath) return;

      // 1. Start Fade Out
      setIsFading(true);

      // 2. Wait for the fade-out animation to finish (300ms)
      setTimeout(() => {
        // 3. Switch the content to the new page
        setDisplayPath(newPath);
        
        // 4. Scroll to top so the new page starts at the beginning
        window.scrollTo(0, 0);

        // 5. Start Fade In (Small delay to ensure DOM is ready)
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 300); // This must match the duration-300 in the className below
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [displayPath]);

  // Determine which component to render based on the displayPath
  let Component;
  switch (displayPath) {
    case '/about':
      Component = About;
      break;
    case '/projects':
      Component = Projects;
      break;
    case '/partnerships':
      Component = Partnerships;
      break;
    case '/contact':
      Component = Contact;
      break;
    case '/':
    default:
      Component = Home;
      break;
  }

  return (
    <HelmetProvider>
      <Layout>
        {/* 
            The wrapper div handles the transition.
            - transition-opacity: tells CSS to animate opacity changes
            - duration-300: takes 300ms
            - ease-in-out: smooth acceleration/deceleration
            - opacity-0 vs opacity-100: the visible states
        */}
        <div 
          className={`transition-opacity duration-300 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Component />
        </div>
      </Layout>
    </HelmetProvider>
  );
};

export default App;