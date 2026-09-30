import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  heroImageUrl: string;
  onOpenBriefing: () => void;
  onOpenShowreel: () => void;
  onInspectImage: (url: string, title: string, meta: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImageUrl,
  onOpenBriefing,
  onOpenShowreel,
  onInspectImage
}) => {
  return (
    <section className="w-full px-5 md:px-10 py-10 md:py-12 flex flex-col gap-10 relative">
      {/* Top Header Row with Headline and Disciplines Box */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 min-w-0"
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8e8e8] text-[#1a1c1c] mb-4 font-['Inter'] text-[11px] font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span>MANIFIESTO VISUAL 2024/2025</span>
          </div> */}

          <h1 className="font-['Anton'] text-[46px] sm:text-[68px] md:text-[96px] lg:text-[110px] uppercase text-black tracking-tight leading-[0.92] max-w-4xl">
            ESTRATÉGIAS QUE GANHAM{' '}
            <span className="font-['Playfair_Display'] text-[0.670em] italic font-bold lowercase tracking-normal text-[#1a1c1c] align-baseline inline-block px-1">
              corpo
            </span>{' '}
            COM PRECISÃO{' '}
            <span className="font-['Playfair_Display'] text-[0.670em] italic font-bold lowercase tracking-normal text-[#1a1c1c] align-baseline inline-block px-1">
              visual
            </span>
          </h1>
        </motion.div>

        {/* Disciplines Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-96 flex flex-col justify-between gap-4 bg-[#e2e2e2] p-5 rounded-lg border border-[#c4c7c7] shadow-sm"
        >
          <div className="flex items-center justify-between font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] pb-1 uppercase tracking-wider border-b border-[#c4c7c7]">
            <span>// DISCIPLINAS</span>
            <span>MAURÍCIO HENRIQUE</span>
          </div>
          <p className="font-['Inter'] text-[14px] md:text-[15px] leading-relaxed text-[#1a1c1c]">
            Direção criativa multidisciplinar.
            Domínio do ciclo completo de produção: planeamento de comunicação, 
            direção de arte, captação fotográfica e finalização em vídeo.
            Um único olhar a conduzir a narrativa do início ao fim.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={onOpenBriefing}
              className="px-4 py-2 bg-black text-white font-['Inter'] text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-wider shadow-sm cursor-pointer"
            >
              INICIAR PROJETO
            </button>
          </div>
        </motion.div>
      </div>

      {/* Editorial Stills Banner Hero */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Main Banner Still */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 bg-[#181818] rounded-2xl overflow-hidden relative shadow-2xl min-h-[380px] md:min-h-[480px] flex items-end group border border-neutral-800 hover:border-neutral-700 transition-colors duration-500"
        >
          <img
            src={heroImageUrl}
            alt="Maurício Henrique - Filmmaker em ação com equipamento cinematográfico"
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105 cursor-pointer"
            onClick={() =>
              onInspectImage(
                heroImageUrl,
                '[GESTÃO CRIATIVA // DIR. CENA]',
                'DCI-4K 24FPS • Shutter 1/48 • F/1.8 • Primes Cinema'
              )
            }
          />
          {/* Depth Gradient & Vignette Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 opacity-90 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] pointer-events-none"></div>

          {/* Top Quick Action to inspect image */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() =>
                onInspectImage(
                  heroImageUrl,
                  '[GESTÃO CRIATIVA // DIR. CENA]',
                  'DCI-4K 24FPS • Shutter 1/48 • F/1.8 • Primes Cinema'
                )
              }
              className="p-1.5 bg-black/80 hover:bg-black text-white rounded-md backdrop-blur-md border border-white/20 shadow-md transition-transform hover:scale-105"
              title="Visualizar em tela cheia"
            >
              <span className="material-symbols-outlined text-[16px]">fullscreen</span>
            </button>
          </div>

          {/* Bottom Overlay Content */}
          <div className="relative z-10 p-5 md:p-8 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <span className="font-['Inter'] text-[11px] font-semibold tracking-widest text-[#c9c6c5] uppercase">
                [GESTÃO CRIATIVA // DIR. CENA]
              </span>
              <p className="font-['Playfair_Display'] text-[20px] md:text-[24px] italic leading-snug mt-2 text-[#f9f9f9]">
                "A publicidade consistente não nasce no improviso; 
                ela se sustenta em diretrizes 
                sólidas e sensibilidade na lente."
              </p>
            </div>
            <div className="flex items-center gap-2 font-['Inter'] text-[11px] font-medium text-[#c9c6c5] bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>SHUTTER 1/48 • F/1.8</span>
            </div>
          </div>
        </motion.div>

        {/* Technical Metric Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col justify-between gap-6 bg-black text-white p-6 md:p-8 rounded-xl shadow-md border border-neutral-800"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[11px] font-['Inter'] font-semibold text-[#c9c6c5] uppercase tracking-wider">
              <span>[METRIC 01]</span>
              <span>RECIFE // BR</span>
            </div>
            <h2 className="font-['Anton'] text-[38px] md:text-[44px] uppercase text-white tracking-tight leading-none mt-2">
              MÉTODO &amp; NARRATIVA
            </h2>
            <p className="font-['Inter'] text-[14px] md:text-[15px] text-[#c9c6c5] mt-2 leading-relaxed">
              Integração de planeamento, design e audiovisual sem dispersão. 
              Do conceito visual à entrega final com rigor estético e consistência técnica.
              Prática visual orientada pelo detalhe. Produção independente com foco em 
              consistência estética, iluminação analítica e identidade sólida.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-['Inter'] text-xs pt-4 border-t border-neutral-800">
            <div className="flex justify-between items-center py-2.5 bg-[#1c1b1b] px-3.5 rounded border border-neutral-800">
              <span className="text-[#858383] uppercase tracking-wider">PRODUÇÕES ENTREGUES</span>
              <span className="text-white font-bold font-mono text-sm">+10 PROJETOS</span>
            </div>
            <div className="flex justify-between items-center py-2.5 bg-[#1c1b1b] px-3.5 rounded border border-neutral-800">
              <span className="text-[#858383] uppercase tracking-wider">ESCOPO COMPLETO</span>
              <span className="text-white font-bold font-mono text-sm">DA ESTRATÉGIA AO CORTE</span>
            </div>
            <div className="flex justify-between items-center py-2.5 bg-[#1c1b1b] px-3.5 rounded border border-neutral-800">
              <span className="text-[#858383] uppercase tracking-wider">WORKFLOW DIGITAL</span>
              <span className="text-white font-bold font-mono text-sm">DO CONCEITO À PÓS-PRODUÇÃO 4K</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker Strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="w-full bg-[#e2e2e2] py-2.5 px-4 rounded-lg flex items-center justify-between overflow-x-auto no-scrollbar font-['Inter'] text-[11px] font-semibold tracking-widest uppercase text-[#5e5e5e] border border-[#c4c7c7]"
      >
        <span className="whitespace-nowrap">COBERTURA DE EVENTOS</span>
        <span className="px-2">—</span>
        <span className="whitespace-nowrap">ENSAIOS FOTOGRÁFICOS</span>
        <span className="px-2">—</span>
        <span className="whitespace-nowrap">PRODUÇÃO AUDIOVISUAL</span>
        <span className="px-2">—</span>
        <span className="whitespace-nowrap">FILMMAKING</span>
        <span className="px-2">—</span>
        <span className="whitespace-nowrap">PLANEJAMENTO DE MARKETING</span>
        <span className="px-2">—</span>
        <span className="whitespace-nowrap">EDIÇÃO de vídeo</span>
      </motion.div>
    </section>
  );
};
