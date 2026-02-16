
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
