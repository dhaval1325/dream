
import React, { useState } from 'react';

const VisaTracker: React.FC = () => {
  const [passport, setPassport] = useState('');
  const [status, setStatus] = useState<null | 'tracking' | 'done'>(null);

  const handleTrack = () => {
    if (!passport) return;
    setStatus('tracking');
    setTimeout(() => setStatus('done'), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>📑</span> Real-time Visa Tracker
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Enter Passport Number" 
          className="flex-1 p-4 bg-slate-800 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
        />
        <button 
          onClick={handleTrack}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all"
        >
          Track Now
        </button>
      </div>

      {status === 'tracking' && (
        <div className="flex flex-col items-center py-10 gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-slate-400 animate-pulse">Accessing Embassy Database...</p>
        </div>
      )}

      {status === 'done' && (
        <div className="space-y-8 animate-in fade-in duration-700">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Application ID</p>
              <p className="text-lg font-mono">DI-BARDOLI-88291</p>
            </div>
            <div className="bg-green-500/10 text-green-500 px-4 py-1 rounded-full text-xs font-bold border border-green-500/20">
              IN PROGRESS
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800"></div>
            <div className="space-y-8">
              <div className="relative flex gap-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-slate-900">✓</div>
                <div>
                  <h4 className="font-bold">Documents Verified</h4>
                  <p className="text-sm text-slate-400">Completed on Aug 12, 2024</p>
                </div>
              </div>
              <div className="relative flex gap-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 border-4 border-slate-900 animate-pulse"></div>
                <div>
                  <h4 className="font-bold">Embassy Review</h4>
                  <p className="text-sm text-slate-400">Current Stage - Estimated 5-7 days</p>
                </div>
              </div>
              <div className="relative flex gap-6 opacity-30">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center z-10 border-4 border-slate-900"></div>
                <div>
                  <h4 className="font-bold text-slate-500">Visa Stamping</h4>
                  <p className="text-sm">Final Stage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaTracker;
