import React from 'react';
import { Rocket, Twitter, Github, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 relative overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rox-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5 pr-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
                <Rocket className="h-6 w-6 text-rox-500" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">ROX PROTOCOL</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm text-justify">
              Rox Protocol е иновативна блокчейн екосистема, създадена да предоставя реален, стабилен и автоматизиран доход чрез прозрачни механизми, базирани изцяло on-chain. Ние предлагаме устойчив модел на ликвидност чрез Rate Limiter технологията.
            </p>
            
            <div className="space-y-4">
                 <div className="flex items-center space-x-3 text-rox-400 group cursor-pointer">
                    <div className="p-2 bg-slate-900 rounded-full border border-slate-800 group-hover:border-rox-500 transition-colors">
                        <Mail className="h-4 w-4" />
                    </div>
                    <a href="mailto:Roxprotocol@gmail.com" className="text-slate-300 group-hover:text-white transition-colors font-medium">Roxprotocol@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3 text-rox-400 group cursor-pointer">
                    <div className="p-2 bg-slate-900 rounded-full border border-slate-800 group-hover:border-rox-500 transition-colors">
                        <Phone className="h-4 w-4" />
                    </div>
                    <a href="https://wa.me/359988977388" target="_blank" rel="noreferrer" className="text-slate-300 group-hover:text-white transition-colors font-medium">+359 98 897 7388 (WhatsApp)</a>
                </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h3 className="text-white font-bold mb-6 tracking-wide text-xs uppercase text-rox-500">Продукт</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Yield Mechanics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Tokenomics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Rate Limiter</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-wide text-xs uppercase text-rox-500">Документи</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Audit Report</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Smart Contracts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
             <h3 className="text-white font-bold mb-6 tracking-wide text-xs uppercase text-rox-500">Socials</h3>
             <div className="flex space-x-4">
                <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
                    <Github className="h-5 w-5" />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-slate-600 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rox Protocol. All rights reserved.
            <br />
            Предоставената информация не е финансов съвет. Моля, направете собствено проучване.
          </p>
        </div>
      </div>
    </footer>
  );
};