import React from 'react';
import { ABOUT_SIDEBAR_TITLE, ABOUT_SIDEBAR_SUMMARY, ABOUT_SECTIONS, TEAM_MEMBERS, LOGO_SRC } from '../constants';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn about the Olagbajumo Education Foundation's mission to remove barriers to knowledge through study, projects, and refinement."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-20">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-28 bg-white/60 p-6 border-2 border-swiss-black shadow-[8px_8px_0px_0px_rgba(17,17,17,0.1)]">
              <div className="mb-6 w-full flex justify-start">
                 <img 
                   src={LOGO_SRC} 
                   alt="OEF Logo" 
                   className="w-full max-w-[120px] h-auto object-contain"
                 />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4 text-swiss-black">
                {ABOUT_SIDEBAR_TITLE}
              </h1>
              <p className="text-base leading-relaxed text-swiss-black/90 mb-6 border-l-4 border-swiss-red pl-4 font-medium">
                {ABOUT_SIDEBAR_SUMMARY}
              </p>
              
              <nav className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-widest text-swiss-gray">
                 <a href="#vision" className="hover:text-swiss-red hover:translate-x-2 transition-all block">Vision</a>
                 <a href="#approach" className="hover:text-swiss-red hover:translate-x-2 transition-all block">Approach</a>
                 <a href="#team" className="hover:text-swiss-red hover:translate-x-2 transition-all block">Team</a>
              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN (Content) */}
          <div className="md:col-span-8 lg:col-span-9 space-y-20">
            
            {/* Text Sections */}
            <div className="space-y-16">
              {ABOUT_SECTIONS.map((section, idx) => (
                <section key={idx} id={section.title.toLowerCase()} className="relative">
                  {/* Decorative line */}
                  <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-swiss-black/10 hidden md:block"></div>
                  
                  <h2 className="text-3xl font-black mb-6 flex items-baseline text-swiss-black">
                    <span className="text-swiss-blue mr-3 text-base font-bold align-top font-mono">0{idx + 1}.</span>
                    {section.title}
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed font-light text-swiss-black bg-white/50 p-6 -mx-6 rounded-lg backdrop-blur-sm">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Team Section */}
            <section id="team" className="border-t-4 border-swiss-black pt-12">
              <h2 className="text-3xl font-black mb-12 text-swiss-blue">THE TEAM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TEAM_MEMBERS.map((member, idx) => (
                  <div key={idx} className="group bg-white border-2 border-swiss-black p-4 shadow-[8px_8px_0px_0px_rgba(17,17,17,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                    <div className="aspect-[4/5] bg-swiss-gray/10 mb-4 overflow-hidden relative border border-swiss-black">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center bg-swiss-gray/20">
                             <span className="text-3xl font-black text-swiss-black/20">PHOTO</span>
                         </div>
                      )}
                      <div className="absolute inset-0 bg-swiss-blue/0 group-hover:bg-swiss-blue/10 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-xl font-black mb-1">{member.name}</h3>
                    <p className="text-xs font-bold text-swiss-red uppercase tracking-wider mb-2 border-b border-swiss-black/10 pb-2">{member.role}</p>
                    {member.almaMater && (
                      <p className="text-xs font-bold text-swiss-black/60 uppercase tracking-wider mb-3">{member.almaMater}</p>
                    )}
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;