import React from 'react';
import { ShieldCheck, TrendingUp, Lock, RefreshCw, BarChart3, Database } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: '30.9% Real Monthly Yield',
    description: 'Доходност, генерирана от реален пазарен оборот и такси, изчислена след всички удръжки. За разлика от типичните DeFi проекти, тук доходът не идва от инфлация ("печатане" на токени), а от устойчива икономическа активност.',
    icon: TrendingUp,
  },
  {
    title: 'Rate Limiter Fund',
    description: 'Сърцето на протокола. Този механизъм управлява ликвидността автоматично, елиминира пазарната волатилност и компенсира пазара във всеки цикъл. Rate Limiter гарантира стабилен растеж на цената без резки спадове.',
    icon: ShieldCheck,
  },
  {
    title: 'Black Hole Scarcity',
    description: 'От общо 21 милиона ROX токена, 18 милиона са перманентно заключени в "Black Hole" адрес. Това създава абсолютен дефицит (Scarcity), превръщайки ROX в истински цифров актив с огромен потенциал за покачване на стойността.',
    icon: Lock,
  },
  {
    title: '100% On-Chain Transparency',
    description: 'Няма скрити транзакции, няма оф-чейн манипулации. Всяко движение на средствата, всеки начислен дивидент и всяка операция на Rate Limiter фонда са публично видими и верифицируеми в блокчейна. Code is Law.',
    icon: Database,
  },
  {
    title: 'Flywheel Growth Model',
    description: 'Системата е самозадвижваща се (Self-driven). Колкото повече ликвидност постъпва в Market-Making енджина, толкова по-голям е генерираният доход, който обратно подхранва ликвидността и повишава цената.',
    icon: RefreshCw,
  },
  {
    title: 'Automated Market Maker',
    description: 'Ликвидността не зависи от нови инвеститори (Ponzi схема), а от автоматизиран Market-Making алгоритъм, който изпълнява стратегии за арбитраж и осигуряване на ликвидност денонощно, без човешка намеса.',
    icon: BarChart3,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rox-900/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-rox-400 uppercase tracking-[0.2em] mb-4">Механизъм на Протокола</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Сигурност, Прозрачност и <br/> <span className="text-rox-400">Автоматизиран Доход</span>
          </p>
          <p className="mt-4 max-w-4xl text-lg text-slate-400 mx-auto leading-relaxed">
            Rox Protocol елиминира догадките. Всяка стъпка е on-chain, а ликвидността е заключена и управлявана от Rate Limiter алгоритъм, гарантиращ устойчивост на инвестицията.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rox-600 to-rox-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900/90 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center justify-center w-14 h-14 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-rox-500 transition-all duration-300 shadow-xl">
                        <feature.icon className="h-7 w-7 text-rox-500 group-hover:text-rox-400 transition-colors" />
                      </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rox-400 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm flex-grow text-justify">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};