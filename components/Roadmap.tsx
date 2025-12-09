import React from 'react';
import { RoadmapItem } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    status: 'completed',
    items: ['Публикуване на Whitepaper', 'Private Sale Round', 'Сформиране на Core Team', 'Alpha Testnet Deployment'],
  },
  {
    phase: 'Phase 2',
    title: 'Launchpad',
    status: 'current',
    items: ['Public Testnet Live', 'Security Audit (CertiK)', 'Mainnet Launch', 'TGE & Exchange Listings'],
  },
  {
    phase: 'Phase 3',
    title: 'Ecosystem Growth',
    status: 'upcoming',
    items: ['Developer Grants Program', 'Mobile Wallet Release', 'Cross-chain Bridges', 'DAO Governance'],
  },
  {
    phase: 'Phase 4',
    title: 'Global Expansion',
    status: 'upcoming',
    items: ['Strategic Partnerships', 'Institutional Adoption', 'AI Smart Contracts Layer', 'Target: 200k+ TPS'],
  },
];

export const Roadmap: React.FC = () => {
  return (
    <div id="roadmap" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Roadmap</h2>
          <p className="mt-4 text-xl text-slate-400">Нашият стратегически план за развитие в DeFi пространството.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-800"></div>

          <div className="space-y-12 lg:space-y-24">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.phase} className={`relative flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} items-center lg:items-start`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-950 z-10 hidden lg:flex items-center justify-center bg-slate-800">
                     {item.status === 'completed'