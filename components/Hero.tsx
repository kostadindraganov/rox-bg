import React from 'react';
import { Lock, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rox-600/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-rox-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-rox-300 tracking-wide uppercase">Отворено Частно Предлагане</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight max-w-5xl">
          Новият Стандарт за <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rox-400 via-rox-200 to-neon-purple">
            Устойчив On-Chain Доход
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          ROX Protocol предоставя <strong>30.9% реална месечна доходност</strong> чрез автоматизиран 
          <span className="text-white font-medium"> Rate Limiter</span> механизъм и 
          <span className="text-white font-medium"> Black Hole</span> токеномика. 
          Сигурност, гарантирана от Smart Contracts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <a 
             href="https://wa.me/359988977388" 
             target="_blank" 
             rel="noreferrer"
             className="group bg-[#25D366] hover:bg-[#1ebc51] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/20 flex items-center justify-center min-w-[250px]"
          >
            <WhatsAppIcon />
            Инвестирай Сега
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
           {/* Metric 1 */}
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-rox-500/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-rox-900/30 rounded-lg mb-4 mx-auto text-rox-400">
                <TrendingUp size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">30.9%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Реална Месечна Доходност</p>
           </div>

           {/* Metric 2 */}
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-rox-500/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-rox-900/30 rounded-lg mb-4 mx-auto text-rox-400">
                <ShieldCheck size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">Rate Limiter</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Защита на Активите</p>
           </div>

           {/* Metric 3 */}
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-rox-500/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-rox-900/30 rounded-lg mb-4 mx-auto text-rox-400">
                <PieChart size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">21M / 18M</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Общо / Заключено Предлагане</p>
           </div>

           {/* Metric 4 */}
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-rox-500/30 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-rox-900/30 rounded-lg mb-4 mx-auto text-rox-400">
                <Lock size={24} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">On-Chain Прозрачност</p>
           </div>
        </div>
      </div>
    </div>
  );
};