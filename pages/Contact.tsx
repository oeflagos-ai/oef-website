import React from 'react';
import { CONTACT_EMAIL, CONTACT_ADDRESS, SOCIAL_LINKS } from '../constants';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-swiss-bg">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Olagbajumo Education Foundation in Lagos, Nigeria."
      />
      <div className="max-w-5xl mx-auto px-4 w-full">
        
        <div className="border-l-4 border-swiss-red pl-8 md:pl-16 py-8">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-swiss-black">
            Drop us a line.
          </h1>
          
          <div className="space-y-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-swiss-gray mb-2">Email Us</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl md:text-3xl font-bold hover:text-swiss-red hover:underline decoration-4 underline-offset-8 transition-all">
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-swiss-gray mb-2">Visit Us</p>
              <p className="text-xl md:text-2xl font-medium max-w-md">
                {CONTACT_ADDRESS}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-swiss-gray mb-4">Social</p>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold border-b-2 border-transparent hover:border-swiss-black transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;