
import React from 'react';
import { PARTNERSHIPS_MARQUEE_TEXT } from '../constants';
import SEO from '../components/SEO';

const Partnerships: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center bg-swiss-bg overflow-hidden relative">
      <SEO 
        title="Partnerships" 
        description="Partnerships and collaborative opportunities with Olagbajumo Education Foundation will be announced shortly."
      />
      
      {/* Marquee Container */}
      <div className="whitespace-nowrap overflow-hidden py-12">
        <div className="inline-block animate-marquee">
          {/* We repeat the text multiple times to ensure no gaps on wide screens */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-5xl md:text-8xl font-black tracking-tighter text-swiss-black mx-8 md:mx-16 align-middle leading-tight">
              {PARTNERSHIPS_MARQUEE_TEXT} •
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partnerships;