/* 
  --- VS CODE SETUP INSTRUCTIONS ---
  
  To run this project locally in VS Code:
  
  1. Initialize a new Vite project:
     npm create vite@latest saber-pitch -- --template react-ts
     cd saber-pitch
     
  2. Install the required dependencies:
     npm install recharts lucide-react framer-motion clsx tailwind-merge
     
  3. Ensure Tailwind CSS is configured (npx tailwindcss init -p).
  
  4. Copy this file content into src/App.tsx
*/

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SlideLayout } from './components/SlideLayout';
import { 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  Building2, 
  Users, 
  Wallet,
  Activity,
  Layers,
  Map,
  WifiOff,
  TrendingUp,
  Banknote,
  CheckCircle2,
  Handshake,
  Rocket,
  Clock,
  Flag,
  PlayCircle,
  Camera,
  ShieldCheck
} from 'lucide-react';

// --- Chart Data ---
const financialData = [
  { year: '2025', revenue: 0.5, label: 'Pilot' },
  { year: '2026', revenue: 2.2, label: 'Regional' },
  { year: '2027', revenue: 8.5, label: 'State' },
  { year: '2028', revenue: 24.0, label: 'National' },
];

const marketData = [
  { name: 'Infrastructure', value: 60, color: '#94a3b8' }, // Slate 400
  { name: 'Salaries', value: 30, color: '#cbd5e1' }, // Slate 300
  { name: 'M&E (The Gap)', value: 10, color: '#fbbf24' }, // Amber 400
];

const B2GGrowthData = [
  { name: 'Y1', users: 5000 },
  { name: 'Y2', users: 50000 },
  { name: 'Y3', users: 250000 },
  { name: 'Y4', users: 1000000 },
];

// --- Slides Components ---

const SlideTitle = () => (
  <div className="flex flex-col items-start justify-center h-full text-left pl-4 md:pl-12">
    <div className="flex-1 flex flex-col items-start justify-center w-full">
      {/* Saber Logo Tile - Reduced Size, Left Aligned */}
      <div className="w-24 h-24 md:w-28 md:h-28 bg-saber-logo-bg border-4 border-saber-logo-border rounded-sm relative flex items-center justify-center shadow-md mb-8">
         {/* 20% smaller elements */}
         <span className="absolute top-3 left-3 text-sm font-bold text-black leading-none font-sans">25</span>
         {/* Uniform SVG Infinity Symbol - Reduced */}
         <span className="absolute top-3 right-3 text-black leading-none">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/>
            </svg>
         </span>
         {/* Reduced Sa Text - Lowered position with pt-4 */}
         <span className="text-black font-bold text-4xl md:text-5xl pt-4 font-sans">Sa</span>
      </div>
      
      <div className="space-y-2 mb-8">
        {/* Tighter tracking for Apple vibe */}
        <h1 className="text-6xl md:text-8xl font-semibold text-saber-imperial tracking-tight font-sans">Saber</h1>
      </div>

      {/* Reduced font size for subtitle. Added mt-12 to move it 7% lower. */}
      <h2 className="text-lg md:text-2xl text-slate-500 font-normal max-w-xl mt-12 mb-4 font-sans leading-relaxed">
        Closing the Data Vacuum in African Education.
      </h2>

      {/* Updated Tagline Pill with Spacing - Changed mt-24 to mt-10 to move it higher (approx 10%) */}
      <div className="px-6 py-3 mt-10 bg-white border border-slate-200 text-saber-imperial rounded-full font-medium tracking-wide text-[9px] shadow-sm uppercase font-sans flex items-center gap-6">
        <span>B2G</span>
        <span className="text-slate-300">•</span>
        <span>Performance Intelligence</span>
        <span className="text-slate-300">•</span>
        <span>Digital Infrastructure</span>
      </div>
    </div>
  </div>
);

const SlideProblem = ({ image, onUpload }: { image: string | null, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="grid grid-cols-2 gap-8 h-full items-center">
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={onUpload} 
        accept="image/*" 
        className="hidden" 
      />

      <div className="flex flex-col justify-center h-full">
        <h3 className="text-[9px] font-bold text-saber-imperial mb-4 flex items-center gap-1.5 uppercase tracking-widest font-sans opacity-70">
          <Activity className="w-3 h-3" /> The Problem
        </h3>
        <p className="text-xl md:text-3xl leading-snug text-slate-800 font-medium mb-5 font-sans tracking-tight">
          Report cards have been the same for 200 years, and one-liners determine an individual's life path.
        </p>
      </div>

      {/* Interactive Black Box with Image Support */}
      {/* Updated layout to flex-col. If image exists, we justify-start to stack, otherwise center text. */}
      <div className={`h-full max-h-[320px] bg-black rounded-lg p-6 flex flex-col shadow-xl relative overflow-hidden group ${image ? 'justify-start' : 'justify-center'}`}>
          
          {/* Image Layer - Stacked Top if exists */}
          {image && (
            <div className="w-full h-1/2 shrink-0 mb-4 rounded-sm border border-white/10 overflow-hidden relative z-10 bg-zinc-900">
               <img src={image} alt="Problem Context" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content Layer */}
          {/* Added no-scrollbar utilities via Tailwind arbitrary variants */}
          <div className="relative z-10 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <h4 className="text-sm md:text-base font-bold text-red-500 mb-3 uppercase tracking-widest font-sans leading-tight whitespace-nowrap shadow-black drop-shadow-md">
              THE "BLACK BOX" OF DELIVERY
            </h4>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-white text-xs md:text-sm leading-relaxed font-sans font-light pl-2 drop-shadow-md">
                Without digital infrastructure, paper records of student performance can be misplaced, limiting education systems from measuring a child's intellectual growth.
              </li>
              <li className="text-white text-xs md:text-sm leading-relaxed font-sans font-light pl-2 drop-shadow-md">
                Education leaders will lack data points to conduct system transformation.
              </li>
            </ul>
          </div>

          {/* Upload Trigger - Z-30. Always on top. */}
           <button 
              onClick={handleCameraClick}
              className="absolute bottom-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all z-30 no-print opacity-0 group-hover:opacity-100 cursor-pointer"
              title={image ? "Change photo" : "Upload photo"}
            >
              <Camera className="w-4 h-4" />
            </button>
      </div>
    </div>
  );
};

const SlideSolution = () => (
  <div className="flex flex-col h-full justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {/* Card 1 */}
      <div className="aspect-square bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-saber-imperial"></div>
        <div className="flex items-center gap-3 mb-4 shrink-0">
          <Map className="w-7 h-7 text-saber-imperial" />
          <h3 className="text-xl font-bold text-saber-imperial uppercase tracking-wide font-sans mt-1">Saber</h3>
        </div>
        {/* Minimized font text-lg -> text-sm */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1 font-sans overflow-y-auto">
          Saber is an offline-first technology that transforms the traditional report card into an AI-driven performance intelligence tool that strengthens education systems with real-time data on student performance. It incorporates one-liners collected frequently from teachers, parents, and students, and at the end of an academic term creates a comprehensive report card.
        </p>
      </div>
      
      {/* Card 2 */}
      <div className="aspect-square bg-slate-50/50 p-6 rounded-xl border border-slate-100 flex flex-col hover:bg-white transition-colors duration-300">
        <div className="flex items-center gap-3 mb-4 shrink-0">
          <WifiOff className="w-7 h-7 text-saber-accent-offline" />
          <h3 className="text-xl font-bold text-saber-imperial uppercase tracking-wide font-sans mt-1">Offline-First App</h3>
        </div>
        {/* Minimized font text-lg -> text-sm */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 font-sans overflow-y-auto">
          Built for rural reality, the app uses offline sync to drive a behavioral loop where teachers must attend to log observations. This turns static logs into active engagement as parents input feedback and students add reflections.
        </p>
      </div>

      {/* Card 3 */}
      <div className="aspect-square bg-slate-50/50 p-6 rounded-xl border border-slate-100 flex flex-col hover:bg-white transition-colors duration-300">
        <div className="flex items-center gap-3 mb-4 shrink-0">
           <ShieldCheck className="w-7 h-7 text-slate-400" />
           <h3 className="text-xl font-bold text-saber-imperial uppercase tracking-wide font-sans mt-1">Global-Standard Credentials</h3>
        </div>
        {/* Minimized font text-lg -> text-sm */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 font-sans overflow-y-auto">
          We generate deep, portable report cards that translate across global systems. This standardized data innovation changes a student's life trajectory by validating their potential anywhere.
        </p>
      </div>
    </div>
  </div>
);

const SlideMarket = () => (
  // Removed negative top margin and changed alignment to center content on the slide
  <div className="grid grid-cols-2 gap-8 h-full items-center">
    {/* Left Column - Centered */}
    <div className="flex flex-col h-full justify-center">
      <h4 className="text-2xl font-bold text-saber-imperial mb-6 tracking-tight font-sans">Addressing the Blind Spot</h4>
      <ul className="list-disc pl-4 mb-6 space-y-4 font-sans text-slate-700 font-normal leading-relaxed text-sm">
        <li className="pl-1">Saber provides public and private school owners with an "Intelligence Layer" for understanding school health.</li>
        <li className="pl-1">It explicitly addresses African governments' needs to create and feed a unified, digital database for all teachers, students, and their households.</li>
        <li className="pl-1">Saber tracks learning journeys from classroom to career for improved outcomes, outsized impact, and data-driven policymaking.</li>
      </ul>
      <div className="mt-2">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50/50 border border-indigo-50">
          <div className="w-2 h-2 rounded-full bg-saber-accent-offline mt-2"></div>
          <div>
             <span className="block text-saber-imperial font-bold text-sm mb-1">Saber's Opportunity: The Intelligence Layer (M&E)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Centered */}
    <div className="h-full flex flex-col justify-center">
       <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xl">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">AI Investment Landscape</h4>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-md shrink-0">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h5 className="font-bold text-saber-imperial text-sm mb-1">Overall Investment</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Africa's total AI investment is around $2-3 billion annually (2025), representing only 1-1.5% of global spending.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-50 rounded-md shrink-0">
                <Banknote className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h5 className="font-bold text-saber-imperial text-sm mb-1">Africa AI Fund</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A significant commitment of $60 billion was announced for an Africa AI Fund, but concrete details on deployment remain to be seen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-emerald-50 rounded-md shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-bold text-saber-imperial text-sm mb-1">National Initiatives</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Individual government spending is modest; for example, Nigeria allocated $1.5 million for AI R&D, while countries like Ghana partner with the UAE on large tech hubs.
                </p>
              </div>
            </div>
          </div>
       </div>
    </div>
  </div>
);

const SlideProduct = () => (
  // Added justify-center to vertically align the entire content
  <div className="flex flex-col h-full justify-center">
    {/* Reduced gap from 8 to 6, text-lg to text-base, text-sm to text-xs, min-h reduced */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-2">
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center group">
        {/* Reduced size box (h-40 instead of flex-1) */}
        <div className="w-full h-40 bg-slate-50 rounded-xl mb-4 flex items-center justify-center border border-slate-100 relative overflow-hidden shadow-inner p-4 shrink-0">
           {/* VIEW DEMO Button replacing colored boxes */}
           <a href="https://www.youtube.com/watch?v=9NguUGXCGZA" target="_blank" rel="noopener noreferrer" className="w-full max-w-[180px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/30 group-hover:scale-105 transform duration-200">
              <PlayCircle className="w-4 h-4" /> View Demo
           </a>
        </div>
        {/* Increased text sizes */}
        <h4 className="font-semibold text-lg text-saber-imperial tracking-tight font-sans">Government Administrator Dashboard</h4>
        <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed font-sans px-2">
          State-wide aggregation. Visualize attendance and behavior trends in real-time on a single screen.
        </p>
      </div>

       {/* Feature 2 */}
       <div className="flex flex-col items-center text-center group">
        {/* Reduced size box (h-40) */}
        <div className="w-full h-40 bg-gradient-to-b from-indigo-900 to-blue-900 text-white rounded-xl mb-4 flex items-center justify-center shadow-xl shadow-blue-900/20 relative overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500 shrink-0">
           <Layers className="text-white/90 w-8 h-8 relative z-10" />
           <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-amber-400 text-black text-[8px] font-bold uppercase rounded-sm font-sans flex items-center gap-1">
             <WifiOff className="w-2.5 h-2.5" /> OFFLINE-FIRST
           </div>
        </div>
        {/* Increased text sizes */}
        <h4 className="font-semibold text-lg text-saber-imperial tracking-tight font-sans">Saber Mobile App</h4>
        <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed font-sans px-2">
          "Reviewer Mode" for Evaluators. Works without internet in rural zones, syncing automatically later.
        </p>
      </div>

       {/* Feature 3 */}
       <div className="flex flex-col items-center text-center group">
        {/* Reduced size box (h-40) */}
        <div className="w-full h-40 bg-white rounded-xl mb-4 flex items-center justify-center border border-slate-200 relative overflow-hidden shadow-sm shrink-0">
             <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                <span className="text-saber-imperial font-serif italic text-xl font-bold">A+</span>
             </div>
        </div>
        {/* Increased text sizes */}
        <h4 className="font-semibold text-lg text-saber-imperial tracking-tight font-sans">Formal Reporting</h4>
        <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed font-sans px-2">
          Automated generation of PDF report cards and behavioral logs for schools and parents.
        </p>
      </div>
    </div>
  </div>
);

const SlideBusinessModel = () => (
  <div className="h-full flex flex-col justify-between -mt-4">
    <div className="bg-indigo-50/50 border-l-2 border-indigo-200 p-4 rounded-r-lg mb-2 shrink-0">
      <h3 className="text-indigo-900 text-sm font-medium font-sans italic">
        "We prioritize stability and scale."
      </h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-stretch">
      {/* B2G */}
      <div className="bg-white rounded-xl p-6 shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden group flex flex-col h-full hover:border-blue-100 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <Building2 className="w-8 h-8 text-saber-imperial opacity-90" />
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[9px] font-bold uppercase tracking-widest rounded-sm">Market Anchor</span>
        </div>
        <h4 className="font-bold text-lg mb-2 text-saber-imperial tracking-tight font-sans">B2G (Government)</h4>
        {/* Increased font size 30% */}
        <p className="text-lg text-slate-500 mb-6 font-normal leading-relaxed flex-1 font-sans">
          Deploy across 500+ schools. We provide the data required to secure international funding.
        </p>
        <div className="mt-auto pt-4 border-t border-slate-50">
          <p className="font-semibold text-sm text-saber-imperial font-sans">Multi-year Contracts</p>
        </div>
      </div>

      {/* NGO */}
      <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 relative overflow-hidden flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <Globe className="w-8 h-8 text-saber-accent-offline" />
            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[9px] font-bold uppercase tracking-widest rounded-sm">Growth Catalyst</span>
        </div>
        <h4 className="font-bold text-lg mb-2 text-saber-imperial tracking-tight font-sans">NGO / Donors</h4>
        {/* Increased font size 30% */}
        <p className="text-lg text-slate-500 mb-6 font-normal leading-relaxed flex-1 font-sans">
          Fund literacy programs. Use Saber to monitor and verify outcomes instantly.
        </p>
        <div className="mt-auto pt-4 border-t border-slate-100">
          <p className="font-semibold text-sm text-saber-imperial font-sans">Grant Allocations</p>
        </div>
      </div>

      {/* Private */}
      <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 relative overflow-hidden flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <Wallet className="w-8 h-8 text-slate-400" />
            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold uppercase tracking-widest rounded-sm">Revenue Engine</span>
        </div>
        <h4 className="font-bold text-lg mb-2 text-saber-imperial tracking-tight font-sans">Private Networks</h4>
        {/* Increased font size 30% */}
        <p className="text-lg text-slate-500 mb-6 font-normal leading-relaxed flex-1 font-sans">
          Standardize reporting for school chains. A premium service for parents.
        </p>
        <div className="mt-auto pt-4 border-t border-slate-100">
          <p className="font-semibold text-sm text-saber-imperial font-sans">SaaS (Per Student)</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideTraction = () => (
  <div className="flex flex-col h-full justify-start pt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Column: Product & Pipeline */}
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col justify-center min-h-[140px]">
          <h4 className="text-saber-imperial font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" /> Product Readiness
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-base font-semibold text-slate-800">Prototype Validated</p>
              <p className="text-sm text-slate-500 leading-relaxed">Interactive demo with core user journeys defined.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-800">Developer Scoping Completed</p>
              <p className="text-sm text-slate-500 leading-relaxed">Enables predictable MVP build timeline.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex flex-col justify-center min-h-[140px]">
          <h4 className="text-saber-imperial font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-saber-imperial" /> Guaranteed Pipeline
          </h4>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-saber-imperial">60–100</div>
            <div className="text-sm text-slate-600 leading-relaxed">
              <span className="font-bold block">Students for Beta</span>
              via Olagbajumo Education Foundation (OEF) for rapid feedback loops.
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Early Industry Signals */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col -mt-12">
         <h4 className="text-saber-imperial font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <Handshake className="w-4 h-4 text-saber-accent-offline" /> Early Industry Interest
         </h4>
         <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-200">
               <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-100 border border-blue-300"></div>
               <h5 className="text-base font-bold text-saber-imperial mb-1">West African InsurTech Firm</h5>
               <p className="text-sm text-slate-500 leading-relaxed">
                 Keen to connect us with value-aligned funders.
               </p>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200">
               <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-amber-100 border border-amber-300"></div>
               <h5 className="text-base font-bold text-saber-imperial mb-1">Advisor at Africa Practice</h5>
               <p className="text-sm text-slate-500 leading-relaxed">
                 Informal feedback and strong interest in policy alignment, market positioning, and grant advisory.
               </p>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200">
               <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-100 border border-emerald-300"></div>
               <h5 className="text-base font-bold text-saber-imperial mb-1">Nordic Investor Network</h5>
               {/* Updated Text */}
               <p className="text-sm text-slate-500 leading-relaxed">
                 Business Partnership Officer conducting early-stage exploratory discussions for funding and collaborative innovation.
               </p>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const SlideMilestones = () => (
  <div className="flex flex-col h-full relative">
    <div className="grid grid-cols-4 gap-4 h-full pt-4 pb-20 relative z-10">
       {/* Phase 1 */}
       <div className="bg-white rounded-lg p-4 border-t-4 border-blue-900 shadow-sm flex flex-col h-full">
         <div className="mb-3">
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phase 1</span>
           <h4 className="text-xl font-bold text-saber-imperial">Product Completion</h4>
           <span className="text-sm text-blue-600 font-medium">0–3 Months</span>
         </div>
         <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Build MVP (core features only)
            </li>
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Launch onboarding
            </li>
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Internal Alpha: 20–30 OEF students
            </li>
         </ul>
       </div>

       {/* Phase 2 */}
       <div className="bg-white rounded-lg p-4 border-t-4 border-amber-400 shadow-sm flex flex-col h-full">
         <div className="mb-3">
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phase 2</span>
           <h4 className="text-xl font-bold text-saber-imperial">Pilot + Validation</h4>
           <span className="text-sm text-amber-600 font-medium">3–6 Months</span>
         </div>
         <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <Rocket className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Pilot with select schools
            </li>
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <Rocket className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Student-led UX/UI iteration
            </li>
            <li className="flex items-start gap-2 text-base text-slate-600 leading-tight">
               <Rocket className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Validate retention metrics
            </li>
         </ul>
       </div>

       {/* Phase 3 */}
       <div className="bg-slate-50/80 rounded-lg p-4 border-t-4 border-slate-300 flex flex-col h-full">
         <div className="mb-3">
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phase 3</span>
           <h4 className="text-xl font-bold text-saber-imperial">Growth Foundations</h4>
           <span className="text-sm text-slate-500 font-medium">6–12 Months</span>
         </div>
         <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Clock className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Release v2 features
            </li>
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Clock className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Compliance review
            </li>
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Clock className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Prep commercial deck & Seed round
            </li>
         </ul>
       </div>

       {/* Phase 4 */}
       <div className="bg-slate-50/80 rounded-lg p-4 border-t-4 border-slate-300 flex flex-col h-full">
         <div className="mb-3">
           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phase 4</span>
           <h4 className="text-xl font-bold text-saber-imperial">Scaling</h4>
           <span className="text-sm text-slate-500 font-medium">12–18 Months</span>
         </div>
         <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Flag className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Sign first commercial partnership
            </li>
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Flag className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> Expand user base
            </li>
            <li className="flex items-start gap-2 text-base text-slate-500 leading-tight">
               <Flag className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" /> West African regional expansion
            </li>
         </ul>
       </div>
    </div>
    
    {/* Key Takeaway at Bottom - Increased size and font */}
    <div className="absolute bottom-0 w-full text-center py-6 bg-indigo-50 rounded-md border border-indigo-100">
        <p className="text-saber-imperial font-semibold text-sm font-sans px-4">
           "Early funding accelerates MVP completion and school pilots, allowing us to produce validated outcomes required for government procurement."
        </p>
    </div>
  </div>
);

const SlideTeam = ({ userImage, onImageUpload }: { userImage: string | null, onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col h-full relative justify-center">
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={onImageUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Centered Founder Profile */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 flex-1 -mt-16 px-12">
          <div className="relative group">
            <div className="w-60 h-60 bg-slate-100 rounded-full overflow-hidden border-4 border-white shadow-xl shrink-0 relative">
              {/* 
                Loads userImage if available, falls back to Olafare.jpeg, then to Avatar.
              */}
              <img 
                src={userImage || "Olafare.jpeg"} 
                alt="Founder / CEO" 
                className="w-full h-full object-cover object-top" 
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Olafare+Olagbaju&background=0d9488&color=fff&size=256&font-size=0.33";
                }}
              />
            </div>
            
            {/* Upload Button Overlay - Restored */}
            <button 
              onClick={handleCameraClick}
              className="absolute bottom-2 right-2 p-3 bg-saber-imperial rounded-full text-white shadow-lg hover:bg-blue-800 transition-colors z-10 no-print"
              title="Upload your photo"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>

          <div className="text-left">
              <h3 className="text-4xl font-bold text-saber-imperial font-sans mb-1">Olafare Olagbaju</h3>
              <h4 className="font-bold text-xl text-slate-400 uppercase tracking-wide font-sans mb-2">Founder / CEO</h4>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6 font-sans">Systems Leader and Architect</p>
              <p className="text-slate-500 text-lg font-light font-sans leading-relaxed max-w-xl">
                8 years of experience in educational advising. Founder of Olagbajumo Education Foundation.
              </p>
          </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 w-full bg-indigo-50 py-4 px-6 rounded-t-lg border-t border-indigo-100 text-center">
        <p className="text-saber-imperial text-sm font-medium font-sans">
          Our team is growing and maintains relationships with systems leaders in global and African education.
        </p>
      </div>
    </div>
  );
};

const SlideFinancials = () => (
  <div className="h-full flex flex-col gap-6">
    {/* Added items-center and justify-center to align boxes similarly to Slide 4 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center justify-center">
      {/* Left Column: Forecast Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col overflow-hidden w-full">
        <h4 className="text-sm font-bold text-saber-imperial uppercase tracking-widest mb-6 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> African Nimble Burn Model
        </h4>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100">
              <tr>
                <th className="py-3 px-2">Period</th>
                <th className="py-3 px-2">Activity</th>
                <th className="py-3 px-2 text-right">Rev</th>
                <th className="py-3 px-2 text-right">Burn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-2 font-medium text-slate-700">Mo 3–6</td>
                <td className="py-3 px-2 text-slate-500">MVP + Soft Pilots</td>
                <td className="py-3 px-2 text-right text-slate-400">$0</td>
                <td className="py-3 px-2 text-right text-red-400">~$7k/mo</td>
              </tr>
              <tr className="bg-green-50/50">
                <td className="py-3 px-2 font-medium text-slate-700">Mo 6–9</td>
                <td className="py-3 px-2 text-green-700 font-semibold">Early Revenue (Paid Pilots)</td>
                <td className="py-3 px-2 text-right text-green-600 font-bold">$12k–25k</td>
                <td className="py-3 px-2 text-right text-red-400">~$8k/mo</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium text-slate-700">Mo 9–12</td>
                <td className="py-3 px-2 text-slate-500">NGO/Donor Programs</td>
                <td className="py-3 px-2 text-right text-saber-imperial">+$20k–40k</td>
                <td className="py-3 px-2 text-right text-red-400">~$9k/mo</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium text-slate-700">Mo 12–18</td>
                <td className="py-3 px-2 text-slate-500">Cluster Deals</td>
                <td className="py-3 px-2 text-right text-saber-imperial">+$75k–120k</td>
                <td className="py-3 px-2 text-right text-red-400">~$10k/mo</td>
              </tr>
              <tr className="bg-indigo-50/30">
                <td className="py-3 px-2 font-medium text-slate-700">Mo 18–24</td>
                <td className="py-3 px-2 text-slate-500">Regional Expansion</td>
                <td className="py-3 px-2 text-right text-green-600 font-bold">$150k+</td>
                <td className="py-3 px-2 text-right text-red-400">~$12k/mo</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="flex justify-between">
              <span>Total Revenue (24mo):</span>
              <span className="font-bold text-saber-imperial">$250k–$400k</span>
            </div>
             <div className="flex justify-between">
              <span>Runway:</span>
              <span className="font-bold text-slate-700">24–30 months ($400k raise)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Assumptions & Emphasis */}
      {/* Added -translate-y-[10%] to move this column up by 10% */}
      <div className="flex flex-col gap-6 w-full -translate-y-[10%]">
        <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-6 flex-1">
           <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Lean African Burn Structure</h4>
           <ul className="space-y-3">
             <li className="flex items-start gap-2 text-xs text-slate-600">
               <span className="w-1.5 h-1.5 rounded-full bg-saber-accent-offline mt-1.5 shrink-0"></span>
               <span><strong>Full-stack Engineer:</strong> $1.5k–$2.5k/mo</span>
             </li>
             <li className="flex items-start gap-2 text-xs text-slate-600">
               <span className="w-1.5 h-1.5 rounded-full bg-saber-accent-offline mt-1.5 shrink-0"></span>
               <span><strong>Design/Ops:</strong> $600–$1000/mo (Contract/Part-time)</span>
             </li>
             <li className="flex items-start gap-2 text-xs text-slate-600">
               <span className="w-1.5 h-1.5 rounded-full bg-saber-accent-offline mt-1.5 shrink-0"></span>
               <span><strong>Cloud/AI Infra:</strong> $500–$1.2k/mo (Scales with usage)</span>
             </li>
             <li className="flex items-start gap-2 text-xs text-slate-600">
               <span className="w-1.5 h-1.5 rounded-full bg-saber-accent-offline mt-1.5 shrink-0"></span>
               <span><strong>Total Early Burn:</strong> $6k–$9k/month</span>
             </li>
           </ul>
        </div>

        <div className="bg-saber-imperial text-white rounded-xl p-6 shadow-lg">
           <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Why This Wins</h4>
           <div className="space-y-4">
             <div className="border-l-2 border-amber-400 pl-3">
               <p className="text-xs font-bold text-amber-400 mb-0.5">Capital Efficiency.</p>
               <p className="text-[10px] text-white/80 leading-relaxed">Burn is only $6k–$9k/mo. $400k lasts 2+ years.</p>
             </div>
             <div className="border-l-2 border-amber-400 pl-3">
               <p className="text-xs font-bold text-amber-400 mb-0.5">Early Monetization.</p>
               <p className="text-[10px] text-white/80 leading-relaxed">Revenue starts Month 6–9 via institutional pilots.</p>
             </div>
             <div className="border-l-2 border-amber-400 pl-3">
               <p className="text-xs font-bold text-amber-400 mb-0.5">Real Advantage.</p>
               <p className="text-[10px] text-white/80 leading-relaxed">Low-cost testing ground with real institutional credibility.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideAsk = () => (
  <div className="flex flex-col h-full gap-4">
    {/* Header Section */}
    <div className="flex-none">
      <h3 className="text-3xl font-bold text-saber-imperial uppercase tracking-tight font-sans mb-2">$400,000 Ask</h3>
      {/* Changed to flex-col to stack items vertically */}
      <div className="flex flex-col gap-1 text-sm text-slate-500 font-light">
         <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-500" /> Runway: 24–30 Months</span>
         <span className="flex items-center gap-1"><Flag className="w-4 h-4 text-amber-500" /> Goal: Market Dominance in Year 3</span>
      </div>
    </div>

    {/* Main Grid - Updated to use items-center for vertical alignment like Slide 4 */}
    {/* Changed to md:grid-cols-2 to balance widths and ensure left box is wider than before */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-0 items-center justify-center">
       {/* Left Column: Strategy */}
       <div className="bg-indigo-50/50 rounded-xl p-6 border border-indigo-100 flex flex-col justify-between h-auto">
          <div>
            <h4 className="text-xs font-bold text-saber-imperial uppercase tracking-widest mb-4">Strategic Goals</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">Finalize and ship Saber MVP</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                 <span className="text-xs text-slate-700 font-medium">Launch 4–6 pilots (Month 6 Revenue)</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                 <span className="text-xs text-slate-700 font-medium">Secure NGO-funded program deals</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                 <span className="text-xs text-slate-700 font-medium">Expand to regional school clusters</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                 <span className="text-xs text-slate-700 font-medium">Use Saber within the Olagbajumo Education Foundation ecosystem</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-indigo-100">
             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Milestone Path</p>
             <div className="flex items-center gap-2 text-xs font-semibold text-saber-imperial">
                <span>MVP</span> <ChevronRight className="w-3 h-3 text-slate-300" />
                <span>Pilots</span> <ChevronRight className="w-3 h-3 text-slate-300" />
                <span>Revenue</span> <ChevronRight className="w-3 h-3 text-slate-300" />
                <span>Scale</span>
             </div>
          </div>
       </div>

       {/* Right Column: Use of Funds - Spans 2 cols */}
       {/* Removed md:col-span-2 to reduce width relative to the left column */}
       <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col overflow-y-auto h-auto -translate-y-[20%]">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Use of Funds Breakdown ($400k)</h4>
          
          <div className="space-y-6">
             {/* Item 1 */}
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-bold text-lg">40%</div>
               <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="text-sm font-bold text-saber-imperial">Product & Engineering</h5>
                    <span className="text-lg font-bold text-emerald-600">($160k)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                     Core engineer (24mo), contract design/tech support, optimized AI infra.
                  </p>
               </div>
             </div>

             {/* Item 2 */}
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 text-amber-600 font-bold text-lg">20%</div>
               <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="text-sm font-bold text-saber-imperial">Pilots & Evidence</h5>
                    <span className="text-lg font-bold text-emerald-600">($80k)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                     Implement 4–6 school pilots, stakeholder training, impact metrics generation.
                  </p>
               </div>
             </div>

             {/* Item 3 */}
             <div className="flex gap-4 items-start">
               <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 font-bold text-lg">20%</div>
               <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="text-sm font-bold text-saber-imperial">Revenue Generation</h5>
                    <span className="text-lg font-bold text-emerald-600">($80k)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                     Paid pilots, institutional licensing, NGO program readiness, cluster expansion.
                  </p>
               </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-start">
                   <div className="text-slate-400 font-bold text-sm shrink-0">10%</div>
                   <div>
                      <h5 className="text-xs font-bold text-saber-imperial">Founder & Admin</h5>
                      <span className="text-sm font-bold text-emerald-600">($40k)</span>
                      <p className="text-[10px] text-slate-400 mt-1">Modest stipend, ops costs.</p>
                   </div>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="text-slate-400 font-bold text-sm shrink-0">10%</div>
                   <div>
                      <h5 className="text-xs font-bold text-saber-imperial">Buffer</h5>
                      <span className="text-sm font-bold text-emerald-600">($40k)</span>
                      <p className="text-[10px] text-slate-400 mt-1">Cushion for delays/volatility.</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// --- Main App Component ---

const slides = [
  { id: 1, title: "", component: <SlideTitle />, isTitle: true },
  { id: 2, title: "The Problem", component: <SlideProblem image={null} onUpload={() => {}} /> },
  { id: 3, title: "The Solution: Not just an app. It's education's nervous system.", component: <SlideSolution /> },
  { id: 4, title: "Market Opportunity", component: <SlideMarket /> },
  { id: 5, title: "Product Ecosystem", component: <SlideProduct /> },
  { id: 6, title: "Business Model", component: <SlideBusinessModel /> },
  { id: 7, title: "Traction", component: <SlideTraction /> },
  { id: 8, title: "Future Milestones", component: <SlideMilestones /> },
  { id: 9, title: "The Team", component: <SlideTeam userImage={null} onImageUpload={() => {}} /> },
  { id: 10, title: "Financials", component: <SlideFinancials /> },
  { id: 11, title: "Use of Funds", component: <SlideAsk /> },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [problemImage, setProblemImage] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
    }
  };

  const handleProblemImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProblemImage(imageUrl);
    }
  };

  // Helper to get component for current slide
  const getCurrentComponent = () => {
    const slide = slides[currentSlide];
    if (slide.id === 9) {
      return <SlideTeam userImage={userImage} onImageUpload={handleImageUpload} />;
    }
    if (slide.id === 2) {
      return <SlideProblem image={problemImage} onUpload={handleProblemImageUpload} />;
    }
    return slide.component;
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-7xl aspect-video relative no-print">
        <SlideLayout 
          slideNumber={slides[currentSlide].id} 
          totalSlides={slides.length}
          title={slides[currentSlide].title}
          isTitleSlide={slides[currentSlide].isTitle}
        >
          {getCurrentComponent()}
        </SlideLayout>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-50">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-slate-200/50 text-slate-400 transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-slate-200/50 text-saber-imperial transition-colors disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}