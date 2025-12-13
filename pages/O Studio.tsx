
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { LOGO_SRC, OSTUDIO_BG_IMAGE } from '../constants';
import { X, Lock } from 'lucide-react';

const OStudio: React.FC = () => {
  // Animation States for Intro
  // Sequence: logo -> text-show -> text-collapse -> text-grow -> button -> entered
  const [animStage, setAnimStage] = useState<'init' | 'logo' | 'text-show' | 'text-collapse' | 'text-grow' | 'button' | 'entered'>('init');
  
  // Intro Exit Transition State
  const [isIntroExiting, setIsIntroExiting] = useState(false);
  
  // Main Page Opacity State for smooth entry
  const [mainOpacity, setMainOpacity] = useState(0);

  // Tab State
  const [activeTab, setActiveTab] = useState<'about' | 'shop'>('about');
  
  // Content Transition State (for fading between tabs)
  const [isContentVisible, setIsContentVisible] = useState(true);
  
  // Shop Loop State
  const [showShopBrand, setShowShopBrand] = useState(true);

  // =========================================
  // INTRO ANIMATION SEQUENCE
  // =========================================
  useEffect(() => {
    // 1. Logo fades in (Pulse effect)
    const t1 = setTimeout(() => setAnimStage('logo'), 500);
    
    // 2. Logo fades out, Full Name (OLAGBAJUMO STUDIO) fades IN
    const t2 = setTimeout(() => setAnimStage('text-show'), 2500);

    // 3. Middle text collapses (LAGBAJUMO disappears)
    const t3 = setTimeout(() => setAnimStage('text-collapse'), 4500);

    // 4. Remaining text grows (O STUDIO scales up)
    const t4 = setTimeout(() => setAnimStage('text-grow'), 5500);

    // 5. Button appears
    const t5 = setTimeout(() => setAnimStage('button'), 6500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, []);

  // =========================================
  // MAIN PAGE ENTRY EFFECT
  // =========================================
  useEffect(() => {
    if (animStage === 'entered') {
      // Small delay to ensure DOM is ready, then fade in slowly
      const t = setTimeout(() => {
        setMainOpacity(1);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [animStage]);

  // =========================================
  // SHOP LOOP ANIMATION
  // =========================================
  useEffect(() => {
    if (activeTab === 'shop') {
      const interval = setInterval(() => {
        setShowShopBrand(prev => !prev);
      }, 3000); // Toggle every 3 seconds
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // =========================================
  // HANDLERS
  // =========================================
  const handleEnter = () => {
    // 1. Fade out the intro screen
    setIsIntroExiting(true);
    
    // 2. Wait for fade out (1s), then switch state to render main content
    setTimeout(() => {
      setAnimStage('entered');
    }, 1000);
  };

  const handleTabSwitch = (tab: 'about' | 'shop') => {
    if (tab === activeTab) return;
    setIsContentVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      if (tab === 'shop') setShowShopBrand(true); // Reset to start of loop
      setTimeout(() => setIsContentVisible(true), 50);
    }, 400);
  };

  // Shared Font Style for Extended Look
  const fontStyle = {
    fontFamily: '"Helvetica Neue Extended", "Helvetica Extended", "Helvetica", "Arial", sans-serif',
    fontStretch: 'expanded'
  };

  // =========================================
  // RENDER: INTRO
  // =========================================
  if (animStage !== 'entered') {
    return (
      <div 
        className={`fixed inset-0 bg-[#111] flex flex-col items-center justify-center z-50 overflow-hidden transition-opacity duration-1000 ease-in-out`}
        style={{ ...fontStyle, opacity: isIntroExiting ? 0 : 1 }}
      >
        <SEO title="O Studio" description="Olagbajumo Studio: An educational art studio in Lagos." image={OSTUDIO_BG_IMAGE} />
        
        <div className="relative w-full h-full flex items-center justify-center">
            
            {/* STAGE 1: LOGO (Filled White Circle) - Only visible in 'logo' stage */}
            <div className={`absolute transition-all duration-1000 ${
               animStage === 'logo' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
               <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.3)]"></div>
            </div>

            {/* STAGE 2-5: TEXT ANIMATION (Collapse & Grow) */}
            <div className={`absolute flex items-center justify-center transition-opacity duration-1000 ${
              (animStage === 'init' || animStage === 'logo') ? 'opacity-0' : 'opacity-100'
            }`}>
               <h1 
                  className={`flex items-center justify-center font-bold text-white whitespace-nowrap transition-transform duration-1000 ease-in-out origin-center ${
                    (animStage === 'text-grow' || animStage === 'button') ? 'scale-[2.5] md:scale-[3.5]' : 'scale-100'
                  }`}
               >
                  {/* Part 1: O */}
                  <span className="text-2xl md:text-4xl lg:text-5xl">O</span>
                  
                  {/* Part 2: LAGBAJUMO (Collapses) */}
                  {/* We treat 'LAGBAJUMO' as the collapsible part. */}
                  <span 
                    className={`overflow-hidden transition-all duration-1000 ease-in-out flex justify-center text-2xl md:text-4xl lg:text-5xl ${
                      (animStage === 'text-collapse' || animStage === 'text-grow' || animStage === 'button') 
                      ? 'max-w-0 opacity-0' 
                      : 'max-w-[400px] opacity-100'
                    }`}
                  >
                    LAGBAJUMO
                  </span>

                  {/* Part 3: STUDIO (Note: Includes non-breaking space if needed, or margin) */}
                  <span className="text-2xl md:text-4xl lg:text-5xl">&nbsp;STUDIO</span>
               </h1>
            </div>

            {/* STAGE 5: ENTER BUTTON */}
            <div className={`absolute w-full flex justify-center bottom-[28%] transition-all duration-1000 ${
               animStage === 'button' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <button 
                  onClick={handleEnter}
                  className="px-12 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-xl uppercase hover:bg-[#FFD700] hover:text-black transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_20px_#FFD700] hover:shadow-[0_0_50px_#FFD700]"
                >
                  Enter
                </button>
            </div>
        </div>
      </div>
    );
  }

  // =========================================
  // RENDER: MAIN PAGE
  // =========================================
  return (
    <div 
      className="min-h-screen bg-[#111] text-[#Eaeaea] flex flex-col relative overflow-hidden transition-opacity duration-[1500ms] ease-out" 
      style={{ ...fontStyle, opacity: mainOpacity }}
    >
       <SEO title="O Studio" description="Olagbajumo Studio: Art, Design, and Systems Thinking." image={OSTUDIO_BG_IMAGE} />
       
       {/* BLURRED BACKGROUND IMAGE */}
       <div className="absolute inset-0 z-0">
          <img 
            src={OSTUDIO_BG_IMAGE} 
            alt="Background" 
            className="w-full h-full object-cover blur-md opacity-60 scale-110" 
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
       </div>

       {/* HEADER */}
       <header className="fixed top-0 left-0 w-full z-40 border-b border-[#333] bg-white/95 backdrop-blur-sm">
         <div className="flex justify-between items-center h-20 px-4 md:px-8">
            <div className="flex items-center gap-4">
               {/* Header Logo: Filled circle within a bigger circle */}
               <div className="w-10 h-10 flex items-center justify-center relative">
                  {/* Outer Circle (Stroke) */}
                  <div className="absolute inset-0 border-[3px] border-black rounded-full"></div>
                  {/* Inner Circle (Filled) */}
                  <div className="w-4 h-4 bg-black rounded-full"></div>
               </div>
               
               {/* Text: Normal spacing */}
               <span className="text-lg text-black">O STUDIO</span>
            </div>
            
            <a href="#/" className="p-2 text-black hover:text-[#FFD700] transition-colors">
               <X />
            </a>
         </div>
         
         {/* Navigation Tabs */}
         <div className="flex border-t border-[#ccc]">
            <button 
              onClick={() => handleTabSwitch('about')}
              className={`flex-1 py-4 text-center uppercase text-sm border-r border-[#ccc] transition-colors relative text-black ${
                activeTab === 'about' ? 'bg-[#FFD700]' : 'bg-white hover:bg-[#E5E4E2]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleTabSwitch('shop')}
              className={`flex-1 py-4 text-center uppercase text-sm transition-colors relative text-black ${
                activeTab === 'shop' ? 'bg-[#FFD700]' : 'bg-white hover:bg-[#E5E4E2]'
              }`}
            >
              Shop
            </button>
         </div>
       </header>

       {/* CONTENT AREA */}
       <main className="flex-grow pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center min-h-screen relative z-10">
         
         <div className={`transition-opacity duration-1000 ease-in-out ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
           
           {/* ABOUT TAB */}
           {activeTab === 'about' && (
             <div className="space-y-16">
                <div className="border border-[#333] p-8 md:p-12 relative overflow-hidden bg-[#161616]/90 backdrop-blur-md">
                  <div className="absolute top-0 left-0 p-2 border-r border-b border-[#333] text-[10px] uppercase text-[#666] tracking-widest">
                    System_ID: O_STUDIO_V1
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8 items-center">
                    
                    {/* Left Column: Core Focus */}
                    <div className="md:col-span-5 border-r border-[#333] pr-8 hidden md:block h-full">
                       <p className="text-xs uppercase text-[#666] mb-8">Core Focus</p>
                       <ul className="space-y-6 text-2xl font-black text-white">
                         <li className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#FFD700] shadow-[0_0_10px_#FFD700]"></div> 
                            Images
                         </li>
                         <li className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#FFD700] shadow-[0_0_10px_#FFD700]"></div> 
                            Posters
                         </li>
                         <li className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#FFD700] shadow-[0_0_10px_#FFD700]"></div> 
                            Art
                         </li>
                         <li className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#FFD700] shadow-[0_0_10px_#FFD700]"></div> 
                            Emerging Artist Advisory
                         </li>
                       </ul>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="md:col-span-7">
                      <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-[0.9]">
                        Founded by Olafare Olagbaju in 2018, Olagbajumo Studio is an <span className="text-[#888] italic">(educational)</span> art studio established in the heart of Lagos.
                      </h2>
                      
                      <div className="space-y-6 text-lg md:text-xl text-[#ccc] leading-relaxed font-medium">
                        <p>
                          Composed of a team of one, the studio focuses mainly on images, posters, art, and emerging artist advisory, which are areas at the core of Olafare's intellectual path.
                        </p>
                        <p>
                          Through its transdisciplinary approach, O Studio integrates print, paint, and other art forms into its practice, considering these mediums as complementary. As a systems thinking machine, O Studio has developed significant expertise in design, evidenced by the artists and professionals the studio has worked with.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#333] pt-4 text-[10px] uppercase text-[#666]">
                   <div>Archival Ref: 001-A</div>
                   <div>Status: Operational</div>
                   <div>Mode: Transdisciplinary</div>
                   <div className="text-right">OEF Network Node</div>
                </div>
             </div>
           )}

           {/* SHOP TAB */}
           {activeTab === 'shop' && (
             <div className="min-h-[50vh] flex flex-col items-center justify-center relative w-full">
                
                <div className="relative z-10 w-full h-full flex items-center justify-center h-[300px]">
                   
                   {/* 1. O STUDIO: Fades In/Out */}
                   <h3 className={`text-4xl md:text-6xl font-black text-white absolute transition-opacity duration-1000 ${showShopBrand ? 'opacity-100' : 'opacity-0'}`}>
                     O STUDIO
                   </h3>

                   {/* 2. SOON COME: Fades In/Out */}
                   <h2 className={`text-5xl md:text-8xl lg:text-9xl font-black text-[#FFD700] text-center absolute leading-none transition-opacity duration-1000 ${!showShopBrand ? 'opacity-100' : 'opacity-0'}`}>
                     SOON COME
                   </h2>
                   
                </div>
                
                {/* Footer Message */}
                <div className={`mt-12 p-4 border border-[#333] bg-[#111]/50 backdrop-blur-md text-[#888] text-xs uppercase flex items-center gap-2 transition-opacity duration-1000 ${!showShopBrand ? 'opacity-100' : 'opacity-50'}`}>
                   <Lock size={12} className="text-[#FFD700]" /> Secure Payments via Paystack.
                </div>
             </div>
           )}
         
         </div>

       </main>
    </div>
  );
};

export default OStudio;
