
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Partnerships from './pages/Partnerships';
import SaberDeck from './pages/SaberDeck';
import LunchAndLearn from './pages/LunchAndLearn';
import OStudio from './pages/O Studio';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  // Helper to ensure path always starts with /
  const getNormalizedPath = () => {
    let path = window.location.hash.slice(1);
    if (!path) return '/';
    return path.startsWith('/') ? path : `/${path}`;
  };

  // We keep track of the path we are currently DISPLAYING
  const [displayPath, setDisplayPath] = useState(getNormalizedPath());
  
  // We keep track of whether we are currently fading out
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = getNormalizedPath();
      
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
  let useLayout = true;

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
    case '/ostudio':
      Component = OStudio;
      useLayout = false; // O Studio has its own full-screen layout/theme
      break;
    case '/saber':
      Component = SaberDeck;
      useLayout = false; // The deck has its own layout structure
      break;
    case '/lunch-and-learn':
      Component = LunchAndLearn;
      useLayout = false; // The event flyer has its own layout structure
      break;
    case '/':
    default:
      Component = Home;
      break;
  }

  const Content = (
    <div 
      className={`transition-opacity duration-300 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Component />
    </div>
  );

  return (
    <HelmetProvider>
      {useLayout ? (
        <Layout>
          {Content}
        </Layout>
      ) : (
        Content
      )}
    </HelmetProvider>
  );
};

export default App;