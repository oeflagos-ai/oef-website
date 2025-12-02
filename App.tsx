import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
    case '/contact':
      Component = Contact;
      break;
    case '/':
    default:
      Component = Home;
      break;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default App;