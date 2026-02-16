
import React from 'react';
import FlightSearch from '../components/FlightSearch';
import VisaTracker from '../components/VisaTracker';

const Home: React.FC = () => {
  const services = [
    { title: 'Student Visas', icon: '🎓', desc: 'Expert guidance for top universities in USA, Australia, and UK.' },
    { title: 'PR & Immigration', icon: '🌍', desc: 'Step-by-step assistance for Permanent Residency in Canada & Australia.' },
    { title: 'Flight Bookings', icon: '✈️', desc: 'Exclusive deals on international flights for students and families.' },
    { title: 'IELTS/PTE Coaching', icon: '📚', desc: 'Specialized training modules to help you score 7+ bands.' },
  ];

  const countries = [
    { name: 'USA', img: 'https://picsum.photos/seed/usa/600/400', color: 'blue' },
    { name: 'Australia', img: 'https://picsum.photos/seed/australia/600/400', color: 'green' },
    { name: 'Canada', img: 'https://picsum.photos/seed/canada/600/400', color: 'red' },
    { name: 'UK', img: 'https://picsum.photos/seed/uk/600/400', color: 'indigo' },
  ];

  const universities = [
    { name: 'University of Toronto', country: 'Canada', ranking: '#1 in Canada', logo: '🇨🇦' },
    { name: 'Monash University', country: 'Australia', ranking: '#1 in Australia', logo: '🇦🇺' },
    { name: 'Arizona State University', country: 'USA', ranking: '#1 for Innovation', logo: '🇺🇸' },
    { name: 'University of Greenwich', country: 'UK', ranking: 'Top London Uni', logo: '🇬🇧' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          alt="Hero"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Bardoli's #1 Visa Consultant
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[0.9]">
              Dream Big.<br/>Go <span className="text-blue-500">Global.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              From student visas to flight bookings and post-landing support. Your entire journey managed by experts in Bardoli.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#demo-tools" className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Explore Demo Tools
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Interactive Tools */}
      <section id="demo-tools" className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <FlightSearch />
          <VisaTracker />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">Our Facilities</h2>
          <p className="text-slate-600 text-lg">Comprehensive support for every stage of your immigration journey.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all cursor-pointer">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Portal Demo */}
      <section id="student" className="bg-blue-600 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Student Visit & <br/>University Portal</h2>
              <p className="text-blue-100 text-xl mb-12 leading-relaxed">
                Discover world-class education. We partner with over 250+ universities to bring you the best career opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {universities.map((uni, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors">
                    <div className="text-3xl mb-4">{uni.logo}</div>
                    <h4 className="font-bold text-lg mb-1">{uni.name}</h4>
                    <p className="text-blue-200 text-sm">{uni.ranking}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-400 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050338692-7b835a07973f?auto=format&fit=crop&q=80&w=1000" 
                alt="Student Life" 
                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white/10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Popular Destinations</h2>
            <p className="text-slate-600 text-lg">We handle complex immigration laws so you can focus on your new beginning.</p>
          </div>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-8 py-4 rounded-2xl transition-all">
            Browse All Countries
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] h-[450px] shadow-2xl cursor-pointer">
              <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 block">Top Destination</span>
                <h3 className="text-3xl font-bold text-white mb-4">{c.name}</h3>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white font-bold">STUDY</span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white font-bold">WORK</span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white font-bold">PR</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="container mx-auto px-4 py-20 bg-slate-50 rounded-[4rem] text-center border border-slate-200">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 max-w-2xl mx-auto">Ready to start your journey from Bardoli to the world?</h2>
        <div className="flex justify-center gap-6">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
