import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE_BACKGROUND_IMAGE } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // If a background image is provided, use it. Otherwise, default to the CSS grid class.
  const bgStyle = SITE_BACKGROUND_IMAGE ? {
      backgroundImage: `url(${SITE_BACKGROUND_IMAGE})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
  } : {};

  return (
    <div className="min-h-screen flex flex-col relative" style={bgStyle}>
      {/* Background Pattern Layer (Visible if no image, or as an overlay) */}
      <div className={`absolute inset-0 pointer-events-none -z-10 ${SITE_BACKGROUND_IMAGE ? 'bg-swiss-bg/90' : 'bg-swiss-bg bg-swiss-grid'}`}></div>
      
      {/* Noise Texture for that printed paper feel */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-40 bg-noise mix-blend-multiply"></div>

      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;