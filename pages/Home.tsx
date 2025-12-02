import React from 'react';
import { HOME_HERO_TEXT_1, HOME_HERO_TEXT_2, HOME_HERO_SUB } from '../constants';
import { ArrowRight, Users, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Home" 
        description="Olagbajumo Education Foundation - Modernising Learning, Together. Advancing education, research, and public engagement."
      />

      {/* Hero Section - Removed sky background to match other pages */}
      <section 
        className="min-h-[85vh] flex flex-col justify-center px-4 md:px-12 lg:px-24 border-b-4 border-swiss-black relative overflow-hidden"
      >
        <div className="max-w-7xl w-full relative z-10 pt-20 pb-20">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 drop-shadow-sm">
              <span className="block text-swiss-blue">
                {HOME_HERO_TEXT_1}
              </span>
              <span className="block text-swiss-black">
                {HOME_HERO_TEXT_2}
              </span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-16">
            <p className="text-lg md:text-2xl font-bold max-w-2xl leading-tight border-l-8 border-swiss-red pl-8 pr-4 py-6">
              {HOME_HERO_SUB}
            </p>
            
            <a 
              href="#/about"
              className="group flex items-center gap-4 text-base font-bold uppercase tracking-widest bg-swiss-black text-swiss-bg px-6 py-3 md:px-8 md:py-4 hover:bg-swiss-red transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Read our mission
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Marquee / Divider */}
      <div className="bg-swiss-red text-white py-4 overflow-hidden whitespace-nowrap border-b-4 border-swiss-black relative z-20">
        <div className="inline-flex animate-[slide_30s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
               <span className="text-xl font-black uppercase tracking-widest">Universal Access</span>
               <span className="w-3 h-3 bg-swiss-black rounded-full"></span>
               <span className="text-xl font-black uppercase tracking-widest">Community Driven</span>
               <span className="w-3 h-3 bg-swiss-black rounded-full"></span>
               <span className="text-xl font-black uppercase tracking-widest">Future Ready</span>
               <span className="w-3 h-3 bg-swiss-black rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Content Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-swiss-black bg-swiss-bg">
         {/* Card 1: Community */}
         <div className="p-10 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-swiss-black flex flex-col items-start hover:bg-white transition-colors duration-300">
           <div className="bg-swiss-red/10 p-3 rounded-full mb-6 text-swiss-red">
             <Users size={40} />
           </div>
           <h3 className="text-2xl font-black mb-4">Community</h3>
           <p className="text-base md:text-lg opacity-80 mb-6 leading-relaxed">
             Empowering local educators with the tools, training, and networks they need to transform their classrooms.
           </p>
        </div>

         {/* Card 2: Access */}
         <div className="p-10 md:p-12 flex flex-col items-start hover:bg-white transition-colors duration-300">
           <div className="bg-swiss-black/5 p-3 rounded-full mb-6 text-swiss-black">
             <Globe size={40} />
           </div>
           <h3 className="text-2xl font-black mb-4">Access</h3>
           <p className="text-base md:text-lg opacity-80 mb-6 leading-relaxed">
             Bridging the educational digital divide through offline-first technologies and our public learning archive.
           </p>
        </div>
      </section>

      {/* Visual Navigation Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[35vh]">
        <a href="#/projects" className="border-b-2 md:border-b-0 md:border-r-2 border-swiss-black p-10 md:p-12 flex flex-col justify-between bg-swiss-blue text-white group hover:bg-swiss-black transition-colors duration-500 relative overflow-hidden">
           <span className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-10 leading-none group-hover:scale-110 transition-transform duration-700">01</span>
          <h3 className="text-3xl font-black mb-4 relative z-10">PROJECTS</h3>
          <div className="mt-auto relative z-10 flex items-center justify-between">
             <p className="text-base md:text-lg opacity-90 font-medium">Learn about our initiatives.</p>
             <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
        <a href="#/contact" className="p-10 md:p-12 flex flex-col justify-between group hover:bg-swiss-red hover:text-white transition-colors duration-500 bg-swiss-bg relative overflow-hidden">
            <span className="absolute -bottom-10 -right-10 text-[12rem] font-black text-swiss-black opacity-5 group-hover:opacity-10 leading-none group-hover:scale-110 transition-transform duration-700">02</span>
           <h3 className="text-3xl font-black mb-4 relative z-10">JOIN US</h3>
           <div className="mt-auto relative z-10 flex items-center justify-between">
             <p className="text-base md:text-lg opacity-90 font-medium">Be part of the change.</p>
             <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
      </section>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;