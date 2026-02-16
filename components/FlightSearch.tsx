
import React, { useState } from 'react';

const FlightSearch: React.FC = () => {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setResults(false);
    setTimeout(() => {
      setSearching(false);
      setResults(true);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span>✈️</span> Flight Booking Portal
      </h3>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">From</label>
          <input type="text" placeholder="Mumbai (BOM)" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Surat (STV)" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">To</label>
          <input type="text" placeholder="London (LHR)" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Toronto (YYZ)" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Date</label>
          <input type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="2024-09-15" />
        </div>
        <div className="flex items-end">
          <button type="submit" className="w-full bg-blue-600 text-white font-bold p-3 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            {searching ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : 'Search Flights'}
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between p-4 border border-blue-100 bg-blue-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg font-bold text-blue-600">Air Canada</div>
              <div>
                <div className="font-bold text-slate-800">14:20 - 22:45</div>
                <div className="text-xs text-slate-500">1 stop (LHR) • 16h 25m</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-slate-800">₹84,200</div>
              <button className="text-xs font-bold text-blue-600 uppercase tracking-wider">Book Now</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-slate-100 bg-white rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 p-2 rounded-lg font-bold text-slate-600">Qatar Airways</div>
              <div>
                <div className="font-bold text-slate-800">03:10 - 18:30</div>
                <div className="text-xs text-slate-500">1 stop (DOH) • 15h 20m</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-slate-800">₹91,500</div>
              <button className="text-xs font-bold text-blue-600 uppercase tracking-wider">Book Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
