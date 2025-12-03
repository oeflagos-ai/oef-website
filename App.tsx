
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Partnerships from './pages/Partnerships';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      // Default to '/' if hash is empty (e.g. initial load or #)
      const path = window.location.hash.slice(1) || '/';
      setCurrentPath(path);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let Component;
  switch (currentPath) {
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
        <Component />
      </Layout>
    </HelmetProvider>
  );
};

export default App;