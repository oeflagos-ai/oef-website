import React from 'react';
import { motion } from 'framer-motion';

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
  title?: string;
  isTitleSlide?: boolean;
  printMode?: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, slideNumber, totalSlides, title, isTitleSlide, printMode = false }) => {
  // Use a standard div for print mode to avoid animation issues in PDF
  const Component = printMode ? 'div' : motion.div;
  
  const animationProps = printMode ? {} : {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <Component 
      {...animationProps}
      className={`w-full h-full flex flex-col p-8 md:p-12 pb-4 relative overflow-hidden bg-white text-saber-imperial rounded-sm border border-slate-200 ${isTitleSlide ? 'bg-gradient-to-br from-white via-slate-50 to-slate-100' : ''} ${printMode ? 'border-none shadow-none' : 'shadow-2xl'}`}
    >
      {/* Background Graphic - Hidden on title slide for clean look */}
      {!isTitleSlide && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-full -mr-10 -mt-10 pointer-events-none border-b border-l border-slate-100 z-0" />
      )}

      {/* Header - Only show if NOT title slide */}
      {!isTitleSlide ? (
        <div className="flex justify-between items-center mb-6 pb-4 z-20 border-b border-slate-100 shrink-0 relative">
          <div className="flex items-center gap-3">
            {/* Saber Logo Tile - Small Header Version - Clean 'Sa' only */}
            <div className="w-8 h-8 bg-saber-logo-bg border border-saber-logo-border rounded-[1px] relative flex items-center justify-center shadow-sm shrink-0">
               <span className="text-black font-bold text-lg font-sans pt-0.5">Sa</span>
            </div>
            <h1 className="text-base font-semibold tracking-tight text-saber-imperial font-sans">Saber</h1>
          </div>
          <div className="text-[10px] font-medium tracking-widest text-slate-400 uppercase font-sans flex items-center gap-4">
            <span>Confidential • For Review</span>
            <span>Slide {slideNumber} / {totalSlides}</span>
          </div>
        </div>
      ) : (
        /* Title Slide - Absolute positioned Confidential text */
        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20 text-[10px] font-medium tracking-widest text-slate-400 uppercase font-sans">
            Confidential • For Review
        </div>
      )}

      {/* Content - Z-Index 10 to stay above background */}
      <div className="flex-1 flex flex-col relative z-10 min-h-0">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold text-saber-imperial mb-6 tracking-tight shrink-0 font-sans">
            {title}
          </h2>
        )}
        <div className="font-sans font-light text-slate-700 h-full w-full flex flex-col">
          {children}
        </div>
      </div>

      {/* Footer - Minimalist - Pushed to bottom with mt-auto */}
      <div className="mt-auto pt-4 z-10 shrink-0">
        <div className="flex justify-between text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 font-sans">
           {/* Left empty as 'Confidential' moved to header/top-right */}
        </div>
      </div>
    </Component>
  );
};