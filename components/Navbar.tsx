
import React, { useState, useEffect } from 'react';
import { BRAND_NAME, NAV_ITEMS, LOGO_SRC } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-swiss-bg/95 backdrop-blur-sm border-b-2 border-swiss-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
            <a href="#/" className="flex items-center gap-3 group">
              <img 
                src={LOGO_SRC} 
                alt="OEF Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:rotate-180 transition-transform duration-700 ease-in-out" 
              />
              <span className="text-base md:text-lg font-display font-black tracking-tighter hover:text-swiss-red transition-colors duration-300 max-w-[200px] md:max-w-none leading-none">
                {BRAND_NAME}
              </span>
            </a>
          </div>

          {/* Desktop Menu - Visible on Large screens (Laptops) */}
          <div className="hidden lg:flex space-x-6">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  className={`text-xs font-bold uppercase tracking-widest hover:text-swiss-red transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-swiss-red decoration-2 underline-offset-4' : 'text-swiss-black'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Visible on Medium/Small screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-swiss-black hover:text-swiss-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-swiss-bg border-b-2 border-swiss-black absolute w-full h-screen md:h-auto overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-6 text-xl md:text-2xl font-black uppercase tracking-tighter ${
                    isActive ? 'text-swiss-red' : 'text-swiss-black'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
