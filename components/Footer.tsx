import React from 'react';
import { BRAND_NAME, CONTACT_EMAIL, FOOTER_TAGLINE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-swiss-black text-swiss-bg py-12 md:py-16 mt-auto relative z-20 border-t-8 border-swiss-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl font-black tracking-tighter mb-3">{BRAND_NAME}</h2>
          <p className="text-sm md:text-base text-swiss-gray leading-relaxed font-medium">
            {FOOTER_TAGLINE}
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-base md:text-lg font-bold hover:text-swiss-red transition-colors mb-3">
            {CONTACT_EMAIL}
          </a>
          <p className="text-xs text-swiss-gray opacity-80">
            © {new Date().getFullYear()} Olagbajumo Education Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;