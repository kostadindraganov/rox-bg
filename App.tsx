import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ArrowRight, ShieldCheck } from 'lucide-react';

// Custom WhatsApp Icon Component for the button
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-rox-500/30 selection:text-rox-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Investment CTA Section */}
        <div id="invest" className="py-32 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-rox-900/10"></div>
          {/* Decorative gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rox-500/5 via-transparent to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rox-500/10 border border-rox-500/20 text-rox-400 text-sm font-semibold mb-6">
                <ShieldCheck size={16} />
                <span>Верифицирани Smart Contracts</span>
             </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Инвестирайте в <br />
              <span className="text-rox-400">Бъдещето на DeFi</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Станете част от Rox Protocol и се възползвайте от <strong>Flywheel Model</strong> за устойчив пасивен доход. 
              Свържете се с нашия екип директно за участие в Private Allocation рунда.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <a 
                href="https://wa.me/359988977388" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-xl font-bold transition-all flex items-center justify-center shadow-lg hover:shadow-[#25D366]/30 text-lg transform hover:-translate-y-1"
               >
                <WhatsAppIcon />
                <span className="ml-3">Свържи се в WhatsApp</span>
               </a>
               
               <a href="mailto:Roxprotocol@gmail.com" className="w-full sm:w-auto bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white px-8 py-5 rounded-xl font-bold transition-all flex items-center justify-center transform hover:-translate-y-1">
                 Email Контакт
                 <ArrowRight className="ml-2 h-5 w-5" />
               </a>
            </div>
            <p className="mt-8 text-sm text-slate-500 max-w-lg mx-auto">
                Всички транзакции са 100% On-Chain и верифицируеми. Няма скрити такси.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
         <a 
          href="https://wa.me/359988977388" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-all transform hover:scale-110"
          title="Свържи се в WhatsApp"
        >
          <WhatsAppIcon />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
            Инвестирай
          </span>
        </a>
      </div>

      <ChatWidget />
    </div>
  );
}

export default App;