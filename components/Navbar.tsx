import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Globe, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Tokenomics', href: '#features' },
  { label: 'Whitepaper', href: '#docs' },
];

const languages = [
  { code: 'BG', label: 'Български', flag: '🇧🇬' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'CN', label: '中文', flag: '🇨🇳' },
  { code: 'RU', label: 'Русский', flag: '🇷🇺' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
  { code: 'PT', label: 'Português', flag: '🇵🇹' },
  { code: 'JP', label: '日本語', flag: '🇯🇵' },
  { code: 'KR', label: '한국어', flag: '🇰🇷' },
  { code: 'TR', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'AR', label: 'العربية', flag: '🇸🇦' },
  { code: 'HI', label: 'हिन्दी', flag: '🇮🇳' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rox-400 to-neon-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <Rocket className="h-6 w-6 text-rox-400" />
                </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              ROX <span className="text-rox-400">PROTOCOL</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:text-rox-300 transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Language Switcher - Right Corner */}
            <div className="relative ml-4">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all border border-slate-700/50 bg-slate-900/50"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{currentLang.code}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-80 overflow-y-auto custom-scrollbar">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white flex items-center space-x-3 border-b border-slate-800 last:border-0"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-gradient-to-r from-rox-600 to-rox-500 hover:from-rox-500 hover:to-rox-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-lg shadow-rox-500/20 border border-rox-400/20">
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white block px-3 py-3 rounded-lg text-base font-medium hover:bg-slate-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <div className="border-t border-slate-800 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 mb-4">
                    <span className="text-slate-400 text-sm">Language</span>
                </div>
                <div className="grid grid-cols-4 gap-2 px-3 mb-4">
                    {languages.map(l => (
                            <button 
                                key={l.code} 
                                onClick={() => { setCurrentLang(l); setIsOpen(false); }} 
                                className={`p-2 text-xs rounded border ${currentLang.code === l.code ? 'bg-rox-600 text-white border-rox-500' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
                            >
                                {l.code}
                            </button>
                    ))}
                </div>
                 <button className="w-full bg-rox-600 hover:bg-rox-500 text-white px-5 py-3 rounded-lg font-bold shadow-lg">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};