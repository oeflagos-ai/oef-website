
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { BRAND_NAME, CONTACT_EMAIL } from '../constants';
import { X, Lock } from 'lucide-react';
import { Product, CartItem } from '../types';

const OStudio: React.FC = () => {
  // Animation States
  const [animStage, setAnimStage] = useState<'init' | 'logo' | 'text-expand' | 'text-shrink' | 'button' | 'entered'>('init');
  const [activeTab, setActiveTab] = useState<'about' | 'shop'>('about');
  
  // Content Transition State (for fading between tabs)
  const [isContentVisible, setIsContentVisible] = useState(true);
  
  // Shop Specific Animation State
  const [shopStage, setShopStage] = useState<'brand' | 'transition' | 'message'>('brand');

  // Trigger Entrance Animation Sequence on Mount
  useEffect(() => {
    // Stage 1: Logo fades in
    setTimeout(() => setAnimStage('logo'), 500);
    
    // Stage 2: Logo morphs to Text "OLAGBAJUMO STUDIO"
    setTimeout(() => setAnimStage('text-expand'), 2500);

    // Stage 3: Text shrinks to "O STUDIO"
    setTimeout(() => setAnimStage('text-shrink'), 5500);

    // Stage 4: Button Appears
    setTimeout(() => setAnimStage('button'), 7500);
  }, []);

  const handleEnter = () => {
    setAnimStage('entered');
  };

  const handleTabSwitch = (tab: 'about' | 'shop') => {
    if (tab === activeTab) return;
    
    // 1. Fade out current content
    setIsContentVisible(false);

    // 2. Wait for fade out, then switch tab and reset shop animation if needed
    setTimeout(() => {
      setActiveTab(tab);
      
      if (tab === 'shop') {
        // Reset Shop Animation Sequence
        setShopStage('brand');
        setTimeout(() => setShopStage('transition'), 2000); // Start fade out of brand
        setTimeout(() => setShopStage('message'), 3000);    // Start fade in of message
      }

      // 3. Fade in new content
      setTimeout(() => setIsContentVisible(true), 50);
    }, 400); // Duration of the css transition
  };

  // =========================================
  // SHOP BACKEND LOGIC (Preserved)
  // =========================================
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // =========================================
  // RENDER
  // =========================================

  // PRE-ENTRANCE VIEW
  if (animStage !== 'entered') {
    return (
      <div className="fixed inset-0 bg-[#111] flex flex-col items-center justify-center z-50 overflow-hidden font-sans">
        <SEO title="O Studio" description="Olagbajumo Studio: An educational art studio in Lagos." />
        
        <div className="relative w-full max-w-7xl flex flex-col items-center justify-center h-screen px-4">
            
            {/* STAGE 1: LOGO */}
            <div className={`transition-all duration-1000 absolute ${
               animStage === 'text-expand' || animStage === 'text-shrink' || animStage === 'button' 
               ? 'opacity-0 scale-50' 
               : (animStage === 'logo' ? 'opacity-100 scale-100' : 'opacity-0 scale-90')
            }`}>
               <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="8" className="animate-[spin_10s_linear_infinite]" />
                  <circle cx="50" cy="50" r="20" fill="white" className="animate-pulse" />
               </svg>
            </div>

            {/* STAGE 2: EXPANDED TEXT */}
            <h1 className={`text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-[0.2em] md:tracking-[0.5em] text-center absolute transition-all duration-[2000ms] ease-in-out ${
              animStage === 'text-expand' 
                ? 'opacity-100 tracking-[0.2em] md:tracking-[0.5em] blur-0' 
                : (animStage === 'logo' || animStage === 'init' ? 'opacity-0 blur-xl' : 'opacity-0 tracking-[0em]')
            }`}>
              OLAGBAJUMO STUDIO
            </h1>

            {/* STAGE 3 & 4: SHRUNK TEXT */}
            {/* Made bigger as requested */}
            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter absolute transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              animStage === 'text-shrink' || animStage === 'button'
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-150'
            }`}>
              O STUDIO
            </h1>

            {/* STAGE 4: GLOWING BUTTON */}
            {/* Increased spacing (mt) and updated color to Golden Yellow #FFD700 */}
            <button 
              onClick={handleEnter}
              className={`mt-48 md:mt-64 px-12 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-xl uppercase tracking-widest hover:bg-[#FFD700] hover:text-black transition-all duration-500 z-20 animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_20px_#FFD700] hover:shadow-[0_0_50px_#FFD700] ${
                animStage === 'button' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
              }`}
            >
              Enter
            </button>
        </div>
      </div>
    );
  }

  // ENTERED VIEW (Main Page)
  return (
    <div className="min-h-screen bg-[#111] text-[#Eaeaea] font-sans selection:bg-[#FFD700] selection:text-black flex flex-col">
       <SEO title="O Studio" description="Olagbajumo Studio: Art, Design, and Systems Thinking." />
       
       {/* HEADER */}
       <header className="fixed top-0 left-0 w-full z-40 border-b border-[#333] bg-[#111]/90 backdrop-blur-md">
         <div className="flex justify-between items-center h-20 px-4 md:px-8">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
               <span className="font-bold tracking-widest text-lg">O STUDIO</span>
            </div>
            
            <a href="#/" className="p-2 hover:text-[#FFD700] transition-colors border border-transparent hover:border-[#FFD700]">
               <X />
            </a>
         </div>
         
         {/* Navigation Tabs */}
         <div className="flex border-t border-[#333]">
            <button 
              onClick={() => handleTabSwitch('about')}
              className={`flex-1 py-4 text-center uppercase tracking-widest text-sm font-bold border-r border-[#333] hover:bg-[#222] transition-colors relative ${activeTab === 'about' ? 'bg-white text-black' : 'text-[#888]'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleTabSwitch('shop')}
              className={`flex-1 py-4 text-center uppercase tracking-widest text-sm font-bold hover:bg-[#222] transition-colors relative ${activeTab === 'shop' ? 'bg-[#FFD700] text-black' : 'text-[#888]'}`}
            >
              Shop
            </button>
         </div>
       </header>

       {/* CONTENT AREA */}
       {/* Centered Vertically */}
       <main className="flex-grow pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center min-h-screen">
         
         <div className={`transition-opacity duration-500 ease-in-out ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
           
           {/* ABOUT TAB */}
           {activeTab === 'about' && (
             <div className="space-y-16">
                <div className="border border-[#333] p-8 md:p-12 relative overflow-hidden bg-[#161616]">
                  <div className="absolute top-0 left-0 p-2 border-r border-b border-[#333] text-[10px] uppercase text-[#666] tracking-widest">
                    System_ID: O_STUDIO_V1
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8 items-center">
                    
                    {/* Left Column: Core Focus */}
                    <div className="md:col-span-5 border-r border-[#333] pr-8 hidden md:block h-full">
                       <p className="text-xs uppercase tracking-widest text-[#666] mb-8">Core Focus</p>
                       <ul className="space-y-6 text-2xl font-black tracking-tight text-white">
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
                       
                       {/* Established section removed as requested */}
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="md:col-span-7">
                      <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-[0.9] tracking-tight">
                        Founded by Olafare Olagbaju in 2018, Olagbajumo Studio is an <span className="text-[#666] italic">(educational)</span> art studio established in the heart of Lagos.
                      </h2>
                      
                      <div className="space-y-6 text-lg md:text-xl text-[#aaa] leading-relaxed font-medium">
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

                {/* Decorative "Archive" Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#333] pt-4 text-[10px] uppercase tracking-widest text-[#444]">
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
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   
                   {/* 1. O STUDIO: Fades OUT */}
                   <h3 className={`text-4xl md:text-6xl font-black text-white absolute transition-opacity duration-1000 ${shopStage === 'brand' ? 'opacity-100' : 'opacity-0'}`}>
                     O STUDIO
                   </h3>

                   {/* 2. COMING SOON: Fades IN */}
                   <h2 className={`text-5xl md:text-8xl lg:text-9xl font-black text-[#FFD700] text-center transition-opacity duration-1000 absolute leading-none ${shopStage === 'message' ? 'opacity-100' : 'opacity-0'}`}>
                     COMING SOON
                   </h2>
                   
                </div>
                
                {/* Footer Message (Always visible after transition or fade in with it) */}
                <div className={`mt-32 p-4 border border-[#333] text-[#666] text-xs uppercase tracking-widest flex items-center gap-2 transition-opacity duration-1000 delay-500 ${shopStage === 'message' ? 'opacity-100' : 'opacity-0'}`}>
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
