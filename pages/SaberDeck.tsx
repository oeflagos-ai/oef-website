
import React, { useState, useEffect } from 'react';
import { LOGO_SRC, BRAND_NAME, SABER_DECK_DATA } from '../constants';
import { ChevronLeft, ChevronRight, Play, TrendingUp, Users, ShieldCheck, Database, Layout, X } from 'lucide-react';
import SEO from '../components/SEO';

const SaberDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEmbed, setIsEmbed] = useState(false);

  const totalSlides = 11;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Check if we are running inside an iframe (e.g. Notion Embed)
    try {
      if (window.self !== window.top) {
        setIsEmbed(true);
      }
    } catch (e) {
      // If cross-origin restrictions block access to window.top, we are likely in an iframe
      setIsEmbed(true);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    // Slide 1: Title
    <div className="flex flex-col items-center text-center space-y-8">
      <img src={LOGO_SRC} alt="Saber Logo" className="w-32 h-32 md:w-48 md:h-48 mb-4 animate-pulse" />
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-swiss-black leading-none">
        Saber
      </h1>
      <div className="h-2 w-32 bg-swiss-red"></div>
      <h2 className="text-2xl md:text-4xl font-bold max-w-3xl">
        Closing the Data Vacuum in African Education.
      </h2>
      <div className="flex gap-4 md:gap-8 text-sm md:text-lg font-mono font-bold uppercase tracking-widest text-swiss-blue border-t border-b border-swiss-black py-4">
        <span>B2G</span>
        <span>•</span>
        <span>Performance Intelligence</span>
        <span>•</span>
        <span>Digital Infrastructure</span>
      </div>
    </div>,

    // Slide 2: The Problem
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-swiss-red">The Problem</h2>
        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
          Report cards have been the same for 200 years, and one-liners determine an individual's life path.
        </p>
      </div>
      <div className="bg-swiss-black text-swiss-bg p-8 md:p-12 relative shadow-[16px_16px_0px_0px_#E03C31]">
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 border-b border-swiss-bg/20 pb-4">The "Black Box" of Delivery</h3>
        <p className="mb-6 opacity-90 leading-relaxed">
          Without digital infrastructure, paper records of student performance can be misplaced, limiting education systems from measuring a child's intellectual growth.
        </p>
        <div className="flex items-start gap-4 p-4 bg-swiss-bg/10 rounded">
          <ShieldCheck className="shrink-0 text-swiss-red" />
          <p className="text-sm font-bold">Education leaders lack data points to conduct system transformation.</p>
        </div>
      </div>
    </div>,

    // Slide 3: The Solution
    <div className="space-y-12">
      <div className="border-l-8 border-swiss-blue pl-6">
        <h2 className="text-4xl md:text-6xl font-black mb-2">The Solution</h2>
        <p className="text-xl text-swiss-gray font-bold">Not just an app. It's education's nervous system.</p>
      </div>
      
      <p className="text-lg md:text-xl max-w-4xl leading-relaxed">
        Saber is an offline-first technology that transforms the traditional report card into an <span className="font-bold bg-swiss-blue/10 px-1">AI-driven performance intelligence tool</span>. It incorporates one-liners collected frequently from teachers, parents, and students to create comprehensive term-end reports.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-swiss-black p-6 bg-white hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
            <Database className="text-swiss-red" /> Offline-First App
          </h3>
          <p className="text-sm leading-relaxed">Built for rural reality. Uses offline sync to drive a behavioral loop where teachers must attend to log observations. Turns static logs into active engagement.</p>
        </div>
        <div className="border-2 border-swiss-black p-6 bg-white hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
            <Layout className="text-swiss-blue" /> Global-Standard Credentials
          </h3>
          <p className="text-sm leading-relaxed">We generate deep, portable report cards that translate across global systems. This standardized data innovation changes a student's life trajectory.</p>
        </div>
      </div>
    </div>,

    // Slide 4: Market Opportunity
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
      <div className="lg:col-span-7 flex flex-col justify-center">
         <h2 className="text-4xl md:text-5xl font-black mb-6">Market Opportunity</h2>
         <div className="bg-white p-6 border-l-4 border-swiss-black mb-8 shadow-sm">
           <h3 className="text-xl font-bold mb-2">Addressing the Blind Spot</h3>
           <p className="text-base mb-4">Saber provides public and private school owners with an "Intelligence Layer" for understanding school health.</p>
           <ul className="list-disc list-inside space-y-2 text-sm font-medium opacity-80">
             <li>Unified digital database for teachers, students, and households.</li>
             <li>Tracks learning journeys from classroom to career.</li>
             <li>Enables data-driven policymaking.</li>
           </ul>
         </div>
      </div>
      <div className="lg:col-span-5 bg-swiss-black text-white p-8 flex flex-col justify-center">
         <h3 className="text-2xl font-black text-swiss-blue mb-6">AI Investment Landscape</h3>
         
         <div className="space-y-6">
           <div>
             <div className="text-4xl font-bold mb-1">$2-3 Billion</div>
             <p className="text-xs uppercase tracking-widest opacity-70">Annual Africa AI Investment (1-1.5% Global)</p>
           </div>
           
           <div className="w-full h-px bg-white/20"></div>
           
           <div>
             <div className="text-4xl font-bold mb-1">$60 Billion</div>
             <p className="text-xs uppercase tracking-widest opacity-70">Committed to Africa AI Fund</p>
           </div>
           
           <div className="w-full h-px bg-white/20"></div>
           
           <div>
              <p className="text-sm leading-tight">National initiatives remain modest (e.g. Nigeria $1.5M for R&D), creating a massive opening for private-sector infrastructure.</p>
           </div>
         </div>
      </div>
    </div>,

    // Slide 5: Product Ecosystem
    <div className="text-center space-y-12">
      <h2 className="text-4xl md:text-6xl font-black">Product Ecosystem</h2>
      
      <div className="flex justify-center">
        <a 
          href="https://www.youtube.com/watch?v=9NguUGXCGZA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-swiss-red text-white px-8 py-4 text-xl font-bold uppercase tracking-widest hover:bg-swiss-black transition-colors shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Play size={24} fill="currentColor" /> View Demo
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
        <div className="p-6 border-2 border-swiss-black bg-white">
          <div className="h-12 w-12 bg-swiss-blue/10 rounded-full flex items-center justify-center mb-4 text-swiss-blue font-black">01</div>
          <h3 className="font-bold text-lg mb-2">Govt Dashboard</h3>
          <p className="text-sm">State-wide aggregation. Visualize attendance and behavior trends in real-time on a single screen.</p>
        </div>
        <div className="p-6 border-2 border-swiss-black bg-swiss-black text-white relative overflow-hidden">
          <div className="absolute top-2 right-2 text-[10px] font-bold bg-swiss-red px-2 py-1 uppercase">Offline-First</div>
          <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white font-black">02</div>
          <h3 className="font-bold text-lg mb-2">Mobile App</h3>
          <p className="text-sm opacity-90">"Reviewer Mode" for Evaluators. Works without internet in rural zones, syncing automatically later.</p>
        </div>
        <div className="p-6 border-2 border-swiss-black bg-white">
          <div className="h-12 w-12 bg-swiss-blue/10 rounded-full flex items-center justify-center mb-4 text-swiss-blue font-black">03</div>
          <h3 className="font-bold text-lg mb-2">Formal Reporting</h3>
          <p className="text-sm">Automated generation of PDF report cards and behavioral logs for schools and parents.</p>
        </div>
      </div>
    </div>,

    // Slide 6: Business Model
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-swiss-black pb-4">
        <h2 className="text-5xl font-black">Business Model</h2>
        <p className="text-xl italic font-serif text-swiss-gray">"We prioritize stability and scale."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-swiss-black">
        {/* Col 1 */}
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-swiss-black hover:bg-white transition-colors">
          <div className="text-xs font-bold uppercase text-swiss-red mb-2 tracking-widest">Market Anchor</div>
          <h3 className="text-3xl font-black mb-4">B2G</h3>
          <p className="text-sm font-bold mb-4">Government</p>
          <p className="text-sm mb-6 leading-relaxed">Deploy across 500+ schools. We provide the data required to secure international funding.</p>
          <div className="mt-auto inline-block bg-swiss-black text-white px-3 py-1 text-xs font-bold uppercase">Multi-year Contracts</div>
        </div>

        {/* Col 2 */}
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-swiss-black hover:bg-white transition-colors">
          <div className="text-xs font-bold uppercase text-swiss-blue mb-2 tracking-widest">Growth Catalyst</div>
          <h3 className="text-3xl font-black mb-4">NGO</h3>
          <p className="text-sm font-bold mb-4">Donors</p>
          <p className="text-sm mb-6 leading-relaxed">Fund literacy programs. Use Saber to monitor and verify outcomes instantly.</p>
          <div className="mt-auto inline-block bg-swiss-black text-white px-3 py-1 text-xs font-bold uppercase">Grant Allocations</div>
        </div>

        {/* Col 3 */}
        <div className="p-8 hover:bg-white transition-colors">
          <div className="text-xs font-bold uppercase text-swiss-gray mb-2 tracking-widest">Revenue Engine</div>
          <h3 className="text-3xl font-black mb-4">Private</h3>
          <p className="text-sm font-bold mb-4">Networks</p>
          <p className="text-sm mb-6 leading-relaxed">Standardize reporting for school chains. A premium service for parents.</p>
          <div className="mt-auto inline-block bg-swiss-black text-white px-3 py-1 text-xs font-bold uppercase">SaaS (Per Student)</div>
        </div>
      </div>
    </div>,

    // Slide 7: Traction
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
         <h2 className="text-5xl font-black mb-8">Traction</h2>
         
         <div className="space-y-6">
           <div className="bg-white p-6 shadow-sm border-l-4 border-swiss-blue">
             <h3 className="font-black text-lg mb-2 flex items-center gap-2"><TrendingUp size={20}/> Product Readiness</h3>
             <ul className="list-disc list-inside text-sm space-y-1">
               <li>Prototype Validated.</li>
               <li>Interactive demo with core user journeys defined.</li>
               <li>Developer Scoping Completed.</li>
               <li>Enables predictable MVP build timeline.</li>
             </ul>
           </div>

           <div className="bg-white p-6 shadow-sm border-l-4 border-swiss-red">
             <h3 className="font-black text-lg mb-2 flex items-center gap-2"><Users size={20}/> Guaranteed Pipeline</h3>
             <div className="text-4xl font-black mb-1">60-100</div>
             <p className="text-sm">Students for Betavia Olagbajumo Education Foundation (OEF) for rapid feedback loops.</p>
           </div>
         </div>
      </div>

      <div className="bg-swiss-gray/10 p-8 border-2 border-swiss-black/20">
        <h3 className="font-bold uppercase tracking-widest mb-6">Early Industry Interest</h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
             <div className="h-3 w-3 mt-1.5 rounded-full bg-swiss-black shrink-0"></div>
             <div>
               <h4 className="font-bold">West African InsurTech Firm</h4>
               <p className="text-sm opacity-80">Keen to connect us with value-aligned funders.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start">
             <div className="h-3 w-3 mt-1.5 rounded-full bg-swiss-black shrink-0"></div>
             <div>
               <h4 className="font-bold">Advisor at Africa Practice</h4>
               <p className="text-sm opacity-80">Informal feedback and strong interest in policy alignment, market positioning, and grant advisory.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start">
             <div className="h-3 w-3 mt-1.5 rounded-full bg-swiss-black shrink-0"></div>
             <div>
               <h4 className="font-bold">Nordic Investor Network</h4>
               <p className="text-sm opacity-80">Business Partnership Officer conducting early-stage exploratory discussions for funding and collaborative innovation.</p>
             </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: Future Milestones
    <div>
      <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Future Milestones</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-swiss-black/20 -z-10"></div>

        {[
          { 
            phase: "Phase 1", 
            title: "Product Completion", 
            time: "0-3 Months", 
            items: ["Build MVP (core features)", "Launch onboarding", "Internal Alpha: 20-30 OEF students"] 
          },
          { 
            phase: "Phase 2", 
            title: "Pilot + Validation", 
            time: "3-6 Months", 
            items: ["Pilot with select schools", "Student-led UX/UI iteration", "Validate retention metrics"] 
          },
          { 
            phase: "Phase 3", 
            title: "Growth Foundations", 
            time: "6-12 Months", 
            items: ["Release v2 features", "Compliance review", "Prep commercial deck & Seed round"] 
          },
          { 
            phase: "Phase 4", 
            title: "Scaling", 
            time: "12-18 Months", 
            items: ["Sign first commercial partnership", "Expand user base", "West African regional expansion"] 
          }
        ].map((item, i) => (
          <div key={i} className="bg-white border-2 border-swiss-black p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            <div className="text-xs font-bold uppercase text-swiss-blue tracking-widest mb-1">{item.time}</div>
            <div className="text-2xl font-black mb-1">{item.phase}</div>
            <div className="font-bold mb-4 text-sm uppercase text-swiss-gray">{item.title}</div>
            <ul className="text-sm space-y-2 list-disc list-inside opacity-80">
              {item.items.map((sub, j) => <li key={j}>{sub}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <p className="text-lg italic font-serif bg-swiss-red/10 p-4 border-l-4 border-swiss-red">
          "Early funding accelerates MVP completion and school pilots, allowing us to produce validated outcomes required for government procurement."
        </p>
      </div>
    </div>,

    // Slide 9: The Team
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-black mb-12">The Team</h2>
      <div className="max-w-xl bg-white border-2 border-swiss-black p-8 shadow-[12px_12px_0px_0px_rgba(17,17,17,1)]">
         <div className="w-32 h-32 mx-auto bg-swiss-gray/20 rounded-full mb-6 overflow-hidden border-2 border-swiss-black">
            {/* Placeholder for Headshot */}
            <img src="/Olafare.jpg" alt="Olafare Olagbaju" className="w-full h-full object-cover grayscale" />
         </div>
         <h3 className="text-2xl font-black mb-1">Olafare Olagbaju</h3>
         <p className="text-xs font-bold uppercase tracking-widest text-swiss-blue mb-4">Founder / CEO</p>
         <p className="text-sm font-bold mb-4">Systems Leader and Architect</p>
         <p className="text-base leading-relaxed mb-6">
           8 years of experience in educational advising. Founder of Olagbajumo Education Foundation.
         </p>
         <div className="w-16 h-1 bg-swiss-black mx-auto mb-6"></div>
         <p className="text-sm italic opacity-70">
           Our team is growing and maintains relationships with systems leaders in global and African education.
         </p>
      </div>
    </div>,

    // Slide 10: Financials (DYNAMIC FROM CONSTANTS)
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-black mb-6">Financials</h2>
        <h3 className="text-xl font-bold uppercase tracking-widest text-swiss-blue mb-4">African Nimble Burn Model</h3>
        
        <div className="overflow-x-auto border-2 border-swiss-black bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-swiss-black text-white uppercase font-bold text-xs tracking-wider">
              <tr>
                <th className="p-3">Period</th>
                <th className="p-3">Activity</th>
                <th className="p-3">Rev</th>
                <th className="p-3">Burn</th>
              </tr>
            </thead>
            <tbody className="font-mono divide-y divide-swiss-black/10">
              {SABER_DECK_DATA.financials.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-swiss-bg/50" : ""}>
                  <td className="p-3 font-bold">{row.period}</td>
                  <td className="p-3">{row.activity}</td>
                  <td className={`p-3 ${row.highlight ? "text-green-700" : "opacity-50"}`}>{row.rev}</td>
                  <td className="p-3">{row.burn}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-swiss-blue text-white font-bold">
              <tr>
                <td colSpan={2} className="p-3 uppercase">{SABER_DECK_DATA.financialTotals.label}</td>
                <td colSpan={2} className="p-3 text-right text-lg">{SABER_DECK_DATA.financialTotals.value}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-4 p-4 bg-swiss-black text-white text-center font-mono text-sm border-2 border-swiss-black">
          {SABER_DECK_DATA.financialTotals.runway}
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-6 border-2 border-swiss-black shadow-sm">
          <h3 className="font-bold uppercase tracking-widest text-swiss-red mb-4">Lean African Burn Structure</h3>
          <ul className="space-y-3 text-sm font-medium">
             {SABER_DECK_DATA.burnStructure.map((item, idx) => (
                <li key={idx} className={`flex justify-between ${idx !== SABER_DECK_DATA.burnStructure.length - 1 ? "border-b border-gray-100 pb-2" : ""}`}>
                  <span>{item.role}</span>
                  <span className="font-mono">{item.cost}</span>
                </li>
             ))}
          </ul>
          <div className="mt-4 pt-4 border-t-2 border-swiss-black font-bold text-right">
            {SABER_DECK_DATA.totalBurn}
          </div>
        </div>

        <div className="p-6 bg-swiss-blue text-white">
          <h3 className="font-black text-xl mb-4">Why This Wins</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <strong className="block text-swiss-red bg-white inline-block px-1 mb-1">Capital Efficiency</strong>
              Burn is only $6k–$9k/mo. $400k lasts 2+ years.
            </li>
            <li>
              <strong className="block text-swiss-red bg-white inline-block px-1 mb-1">Early Monetization</strong>
              Revenue starts Month 6–9 via institutional pilots.
            </li>
            <li>
              <strong className="block text-swiss-red bg-white inline-block px-1 mb-1">Real Advantage</strong>
              Low-cost testing ground with real institutional credibility.
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 11: Use of Funds (DYNAMIC FROM CONSTANTS)
    <div className="flex flex-col h-full justify-center">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-swiss-black pb-6">
         <div>
           <h2 className="text-6xl font-black mb-2">$400,000 Ask</h2>
           <p className="text-xl font-mono text-swiss-blue">Runway: 24–30 Months • Goal: Market Dominance in Year 3</p>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         {/* Visual Breakdown */}
         <div className="space-y-2">
            {/* Dynamic Bars */}
            {SABER_DECK_DATA.useOfFunds.slice(0, 3).map((item, idx) => (
                <div key={idx} className="w-full flex items-center group">
                   <div className={`w-[${item.pct}] ${item.colorClass} text-white p-4 font-bold text-xl flex flex-col justify-center h-24 transition-all group-hover:bg-swiss-red`} style={{ width: item.pct }}>
                     {item.pct}
                   </div>
                   <div className="pl-4">
                     <h4 className="font-black uppercase text-sm">{item.label} ({item.amount})</h4>
                     <p className="text-xs opacity-70">{item.desc}</p>
                   </div>
                </div>
            ))}
            
            {/* Split row for the last two smaller items */}
            <div className="w-full flex gap-2">
               {SABER_DECK_DATA.useOfFunds.slice(3).map((item, idx) => (
                  <div key={idx} className={`w-[${item.pct}] ${item.colorClass} text-white p-2 font-bold text-lg h-24 flex items-center justify-center`} style={{ width: item.pct }}>
                    {item.pct}
                  </div>
               ))}
               <div className="pl-4 flex flex-col justify-center">
                  {SABER_DECK_DATA.useOfFunds.slice(3).map((item, idx) => (
                      <p key={idx} className={`text-xs font-bold ${idx > 0 ? "opacity-50" : ""}`}>{item.label} ({item.amount})</p>
                  ))}
               </div>
            </div>
         </div>

         {/* Goals List */}
         <div className="bg-white border-2 border-swiss-black p-8 shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] h-fit">
           <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-swiss-red">Strategic Goals</h3>
           <ul className="space-y-4">
             {["Finalize and ship Saber MVP", "Launch 4–6 pilots (Month 6 Revenue)", "Secure NGO-funded program deals", "Expand to regional school clusters", "Use Saber within OEF ecosystem"].map((goal, i) => (
               <li key={i} className="flex items-start gap-3">
                 <div className="h-2 w-2 mt-2 bg-swiss-black rounded-full shrink-0"></div>
                 <span className="font-medium text-lg leading-tight">{goal}</span>
               </li>
             ))}
           </ul>
           
           <div className="mt-8 pt-8 border-t-2 border-swiss-black/10 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-swiss-gray">
             <span>MVP</span>
             <span>→</span>
             <span>Pilots</span>
             <span>→</span>
             <span>Revenue</span>
             <span>→</span>
             <span>Scale</span>
           </div>
         </div>
       </div>
    </div>
  ];

  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-swiss-bg">
      <SEO title="Saber Pitch Deck" description="Closing the Data Vacuum in African Education." />
      
      {/* Inlined SlideWrapper */}
      <div className="w-full h-full flex flex-col relative bg-swiss-bg bg-swiss-grid overflow-y-auto overflow-x-hidden">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start z-20 pointer-events-none">
          {/* Logo - Allow pointer events */}
          <a href="#/" className="flex items-center gap-2 pointer-events-auto group">
            <img src={LOGO_SRC} alt="Logo" className="h-8 w-8 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-bold text-xs tracking-widest uppercase group-hover:text-swiss-red transition-colors">{BRAND_NAME}</span>
          </a>

          <div className="flex flex-col items-end">
             {/* Close Button - Allow pointer events, hide if embedded */}
             {!isEmbed && (
               <a href="#/projects" className="pointer-events-auto mb-2 text-xs font-bold uppercase tracking-widest hover:text-swiss-red transition-colors flex items-center gap-1">
                 Close <X size={14} />
               </a>
             )}
             {/* Slide Number */}
             <div className="text-4xl md:text-6xl font-black text-swiss-black/5 font-display leading-none">
               {String(currentSlide + 1).padStart(2, '0')}
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20 relative z-10">
          <div className="max-w-7xl w-full">
            {slides[currentSlide]}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="fixed bottom-0 left-0 w-full bg-swiss-bg/90 backdrop-blur-sm border-t-2 border-swiss-black p-4 flex justify-between items-center z-30">
          <div className="flex items-center gap-4">
             <button onClick={prevSlide} className="p-2 hover:bg-swiss-red hover:text-white transition-colors border border-swiss-black rounded-full">
               <ChevronLeft size={24} />
             </button>
             <span className="font-mono font-bold text-sm">
               {currentSlide + 1} / {totalSlides}
             </span>
             <button onClick={nextSlide} className="p-2 hover:bg-swiss-red hover:text-white transition-colors border border-swiss-black rounded-full">
               <ChevronRight size={24} />
             </button>
          </div>
          <div className="hidden md:block text-xs font-bold uppercase tracking-widest text-swiss-gray">
            Use Arrow Keys to Navigate
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaberDeck;