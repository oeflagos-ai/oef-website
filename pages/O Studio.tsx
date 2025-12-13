
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { BRAND_NAME, CONTACT_EMAIL } from '../constants';
import { X, ShoppingCart, Lock } from 'lucide-react';
import { Product, CartItem } from '../types';

const OStudio: React.FC = () => {
  // Animation States: 'init' | 'logo' | 'text-expand' | 'text-shrink' | 'button' | 'entered'
  const [animStage, setAnimStage] = useState<'init' | 'logo' | 'text-expand' | 'text-shrink' | 'button' | 'entered'>('init');
  const [activeTab, setActiveTab] = useState<'about' | 'shop'>('about');

  useEffect(() => {
    // Sequence
    setTimeout(() => setAnimStage('logo'), 500);
    setTimeout(() => setAnimStage('text-expand'), 2500);
    setTimeout(() => setAnimStage('text-shrink'), 5500);
    setTimeout(() => setAnimStage('button'), 7500);
  }, []);

  const handleEnter = () => {
    setAnimStage('entered');
  };

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

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // PRE-ENTRANCE VIEW
  if (animStage !== 'entered') {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
        <SEO title="O Studio" description="Olagbajumo Studio: An educational art studio in Lagos." />
        
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center h-screen">
            
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

            <h1 className={`text-3xl md:text-5xl lg:text-7xl font-mono font-bold text-white tracking-[0.2em] md:tracking-[0.5em] text-center absolute transition-all duration-[2000ms] ease-in-out ${
              animStage === 'text-expand' 
                ? 'opacity-100 tracking-[0.2em] md:tracking-[0.5em] blur-0' 
                : (animStage === 'logo' || animStage === 'init' ? 'opacity-0 blur-xl' : 'opacity-0 tracking-[0em]')
            }`}>
              OLAGBAJUMO STUDIO
            </h1>

            <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter absolute transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              animStage === 'text-shrink' || animStage === 'button'
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-150'
            }`}>
              O STUDIO
            </h1>

            <button 
              onClick={handleEnter}
              className={`mt-32 md:mt-48 px-12 py-4 border border-[#00FF41] text-[#00FF41] font-mono text-xl uppercase tracking-widest hover:bg-[#00FF41] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.8)] z-20 ${
                animStage === 'button' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
              }`}
            >
              Enter
            </button>
        </div>
      </div>
    );
  }

  // ENTERED VIEW
  return (
    <div className="min-h-screen bg-[#111] text-[#Eaeaea] font-mono selection:bg-[#00FF41] selection:text-black flex flex-col">
       <SEO title="O Studio" description="Olagbajumo Studio: Art, Design, and Systems Thinking." />
       
       <header className="fixed top-0 left-0 w-full z-40 border-b border-[#333] bg-[#111]/90 backdrop-blur-md">
         <div className="flex justify-between items-center h-16 px-4 md:px-8">
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
               <span className="font-bold tracking-widest text-lg">O STUDIO</span>
            </div>
            
            <a href="#/" className="p-2 hover:text-[#00FF41] transition-colors border border-transparent hover:border-[#00FF41]">
               <X />
            </a>
         </div>
         
         <div className="flex border-t border-[#333]">
            <button 
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-4 text-center uppercase tracking-widest text-sm font-bold border-r border-[#333] hover:bg-[#222] transition-colors relative ${activeTab === 'about' ? 'bg-white text-black' : 'text-[#888]'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('shop')}
              className={`flex-1 py-4 text-center uppercase tracking-widest text-sm font-bold hover:bg-[#222] transition-colors relative ${activeTab === 'shop' ? 'bg-[#00FF41] text-black' : 'text-[#888]'}`}
            >
              Shop
            </button>
         </div>
       </header>

       <main className="flex-grow pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
         
         {activeTab === 'about' && (
           <div className="animate-fade-in space-y-16">
              <div className="border border-[#333] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 p-2 border-r border-b border-[#333] text-[10px] uppercase text-[#666]">
                  System_ID: O_STUDIO_V1
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
                  <div className="md:col-span-4 border-r border-[#333] pr-8 hidden md:block">
                     <p className="text-xs uppercase tracking-widest text-[#666] mb-4">Core Focus</p>
                     <ul className="space-y-4 text-sm font-bold">
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00FF41]"></div> Images</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00FF41]"></div> Posters</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00FF41]"></div> Art</li>
                       <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#00FF41]"></div> Emerging Artist Advisory</li>
                     </ul>

                     <div className="mt-24">
                        <p className="text-xs uppercase tracking-widest text-[#666] mb-4">Established</p>
                        <p className="text-3xl font-black">2018</p>
                        <p className="text-sm text-[#666]">Lagos, Nigeria</p>
                     </div>
                  </div>

                  <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
                      Founded by Olafare Olagbaju in 2018, Olagbajumo Studio is an <span className="text-[#666]">(educational)</span> art studio established in the heart of Lagos.
                    </h2>
                    
                    <div className="space-y-6 text-base md:text-lg text-[#aaa] leading-relaxed">
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

              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#333] pt-4 text-[10px] uppercase tracking-widest text-[#444]">
                 <div>Archival Ref: 001-A</div>
                 <div>Status: Operational</div>
                 <div>Mode: Transdisciplinary</div>
                 <div className="text-right">OEF Network Node</div>
              </div>
           </div>
         )}

         {activeTab === 'shop' && (
           <div className="min-h-[50vh] flex flex-col items-center justify-center relative">
              <div className="text-center space-y-4 relative z-10 mix-blend-difference">
                 <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-[#00FF41] animate-[pulse_3s_ease-in-out_infinite] opacity-80">
                   COMING SOON
                 </h2>
                 <h3 className="text-3xl md:text-5xl font-bold text-white animate-[pulse_4s_ease-in-out_infinite_reverse]">
                   O STUDIO
                 </h3>
              </div>
              
              <div className="mt-12 p-4 border border-[#333] text-[#444] text-xs uppercase tracking-widest flex items-center gap-2">
                 <Lock size={12} /> Secure Payments via Paystack Integration Ready
              </div>
           </div>
         )}

       </main>
    </div>
  );
};

export default OStudio;
