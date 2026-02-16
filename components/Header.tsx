
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl italic shadow-lg shadow-blue-500/20">
            D
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">Dream Immigration</h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-blue-600 font-black">Bardoli • Gujarat</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-500 uppercase tracking-wider">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#demo-tools" className="hover:text-blue-600 transition-colors">Flights & Tracking</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Visas</a>
          <a href="#student" className="hover:text-blue-600 transition-colors">Student Visit</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex bg-slate-100 text-slate-800 text-xs font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition-all">
            Client Portal
          </button>
          <button className="bg-blue-600 text-white text-xs font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
