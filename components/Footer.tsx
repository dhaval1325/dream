
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <h2 className="text-xl font-bold text-white">Dream Immigration</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner in Bardoli for all things immigration. We make international relocation simple and stress-free.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                f
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                in
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                X
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Study in USA</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Study in Australia</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Canada PR Express Entry</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Flight Booking Portal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Visitor Visas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Work Permits</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">PTE Academic Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Post-Landing Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Bardoli Office</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span>📍</span>
                <span>102, Dream Plaza, Station Road, Bardoli, Gujarat 394601</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <span>contact@dreamimmigration.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© 2024 Dream Immigration Bardoli. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
