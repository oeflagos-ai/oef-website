
import React from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight, X, User } from 'lucide-react';
import { BRAND_NAME, LOGO_SRC, LUNCH_LEARN_CONFIG } from '../constants';
import SEO from '../components/SEO';

const LunchAndLearn: React.FC = () => {
  return (
    <div className="w-full min-h-[100dvh] bg-swiss-bg flex flex-col relative overflow-y-auto">
      <SEO 
        title={`Academy Lunch and Learn: ${LUNCH_LEARN_CONFIG.speakerName}`} 
        description={`Join us for our next Academy Lunch and Learn with ${LUNCH_LEARN_CONFIG.speakerName}: ${LUNCH_LEARN_CONFIG.title.replace('\n', ' ')} ${LUNCH_LEARN_CONFIG.subtitle}`}
      />

      {/* Navigation Header */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-30 pointer-events-none">
        <a href="#/" className="flex items-center gap-2 pointer-events-auto group">
          <img src={LOGO_SRC} alt="Logo" className="h-10 w-10 group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-bold text-xs tracking-widest uppercase group-hover:text-swiss-red transition-colors">{BRAND_NAME}</span>
        </a>
        <a href="#/projects" className="pointer-events-auto flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-swiss-red transition-colors bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-swiss-black/10">
          Close <X size={14} />
        </a>
      </div>

      {/* Main Grid Layout */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left: Visual & Key Info */}
        <div className="bg-swiss-red text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
           {/* Decorative Big Type */}
           <div className="absolute top-0 left-0 p-4 text-[20rem] font-black opacity-10 leading-none select-none pointer-events-none text-swiss-black">
             20
           </div>

           <div className="relative z-10 space-y-8">
             <div className="inline-block bg-swiss-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest mb-4">
               Upcoming Session
             </div>
             
             <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter whitespace-pre-line">
               {LUNCH_LEARN_CONFIG.title}
             </h1>
             
             <p className="text-xl md:text-2xl font-bold border-l-4 border-swiss-black pl-6 py-2">
               {LUNCH_LEARN_CONFIG.subtitle}
             </p>

             <div className="pt-8 space-y-6">
                <div className="flex items-center gap-4 text-lg font-bold">
                   <Calendar className="text-swiss-black" />
                   <span>{LUNCH_LEARN_CONFIG.date}</span>
                </div>
                <div className="flex items-center gap-4 text-lg font-bold">
                   <Clock className="text-swiss-black" />
                   <span>{LUNCH_LEARN_CONFIG.time}</span>
                </div>
                <div className="flex items-center gap-4 text-lg font-bold">
                   <MapPin className="text-swiss-black" />
                   <span>{LUNCH_LEARN_CONFIG.location}</span>
                </div>
             </div>

             <div className="pt-12">
               <a 
                 href={LUNCH_LEARN_CONFIG.rsvpLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 bg-white text-swiss-red px-8 py-4 text-lg font-black uppercase tracking-widest hover:bg-swiss-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(17,17,17,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
               >
                 RSVP Now <ArrowUpRight />
               </a>
             </div>
           </div>
        </div>

        {/* Right: Speaker & Context */}
        <div className="bg-swiss-bg p-8 md:p-16 lg:p-24 flex flex-col justify-center border-l-0 lg:border-l-4 border-swiss-black relative">
           
           <div className="max-w-xl mx-auto">
             <div className="mb-12">
               <h2 className="text-xs font-bold uppercase tracking-widest text-swiss-gray mb-6 flex items-center gap-2">
                 <User size={16} /> Guest Speaker
               </h2>
               <div className="flex items-end gap-6 mb-6">
                 {/* Placeholder for Speaker Image - using initials */}
                 <div className="w-24 h-24 bg-swiss-black text-white flex items-center justify-center font-black text-3xl">
                   {LUNCH_LEARN_CONFIG.speakerInitials}
                 </div>
                 <div>
                   <h3 className="text-3xl font-black">{LUNCH_LEARN_CONFIG.speakerName}</h3>
                   <p className="text-swiss-blue font-bold uppercase text-xs tracking-wider mt-1">
                     {LUNCH_LEARN_CONFIG.speakerRole}
                   </p>
                 </div>
               </div>
               
               <p className="text-base md:text-lg leading-relaxed font-medium text-swiss-black/80 mb-6">
                 {LUNCH_LEARN_CONFIG.speakerBioMain}
               </p>
               
               <p className="text-sm md:text-base leading-relaxed text-swiss-black/70">
                 {LUNCH_LEARN_CONFIG.speakerBioSub}
               </p>
             </div>

             <div className="border-t-4 border-swiss-black/10 pt-12">
               <h3 className="font-black text-xl mb-4">About the Session</h3>
               <p className="text-sm md:text-base leading-relaxed mb-6">
                 {LUNCH_LEARN_CONFIG.sessionContext}
               </p>
               <p className="text-xs font-mono uppercase tracking-widest text-swiss-blue">
                 Hosted by Abigail Academy
               </p>
             </div>
           </div>
           
           {/* Background Grid Pattern */}
           <div className="absolute inset-0 bg-swiss-grid opacity-30 pointer-events-none z-0"></div>
        </div>

      </div>
    </div>
  );
};

export default LunchAndLearn;
