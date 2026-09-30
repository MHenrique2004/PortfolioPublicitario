import React from 'react';

interface ContactSectionProps {
  onOpenBriefing: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBriefing }) => {
  return (
    <section className="w-full bg-black text-white py-16 px-5 md:px-10 flex flex-col gap-12" id="contato">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] uppercase tracking-widest">
          05 // CONEXÃO DIRETA &amp; DIÁRIAS
        </span>
        <h2 className="font-['Anton'] text-[46px] sm:text-[68px] md:text-[96px] uppercase tracking-tight text-white leading-none">
          VAMOS CRIAR{' '}
          <span className="font-['Playfair_Display'] text-[0.6em] italic font-normal lowercase tracking-normal text-neutral-400 align-baseline">
            juntos
          </span>
          ?
        </h2>
        <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#c9c6c5] max-w-2xl mt-2 leading-relaxed">
          Disponível para diárias de filmagem, direção de fotografia, edição remota e concepção de campanhas em todo o Nordeste e território nacional.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* WhatsApp Card */}
        <a
          href="https://wa.me/5581999529339"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1c1b1b] p-6 md:p-8 rounded-xl flex flex-col justify-between gap-6 group hover:bg-white hover:text-black transition-all duration-300 border border-neutral-800"
        >
          <div className="flex items-center justify-between">
            <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] group-hover:text-neutral-600 uppercase tracking-wider">
              [01 // WHATSAPP]
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#c9c6c5] group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              arrow_outward
            </span>
          </div>
          <div>
            <span className="font-['Playfair_Display'] text-[16px] italic text-[#c9c6c5] group-hover:text-neutral-600 block">
              Mensagem rápida
            </span>
            <p className="font-['Anton'] text-[24px] md:text-[28px] uppercase text-white group-hover:text-black mt-1">
              (81) 99952-9339
            </p>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:mhenriquesouza983@gmail.com"
          className="bg-[#1c1b1b] p-6 md:p-8 rounded-xl flex flex-col justify-between gap-6 group hover:bg-white hover:text-black transition-all duration-300 border border-neutral-800"
        >
          <div className="flex items-center justify-between">
            <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] group-hover:text-neutral-600 uppercase tracking-wider">
              [02 // CORREIO ELETRÔNICO]
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#c9c6c5] group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              arrow_outward
            </span>
          </div>
          <div>
            <span className="font-['Playfair_Display'] text-[16px] italic text-[#c9c6c5] group-hover:text-neutral-600 block">
              Orçamentos &amp; Decks
            </span>
            <p className="font-['Anton'] text-[20px] md:text-[24px] lowercase text-white group-hover:text-black mt-1 truncate">
              mhenriquesouza983@gmail.com
            </p>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/_.henrique2004"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1c1b1b] p-6 md:p-8 rounded-xl flex flex-col justify-between gap-6 group hover:bg-white hover:text-black transition-all duration-300 border border-neutral-800"
        >
          <div className="flex items-center justify-between">
            <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] group-hover:text-neutral-600 uppercase tracking-wider">
              [03 // REDE VISUAL]
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#c9c6c5] group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              arrow_outward
            </span>
          </div>
          <div>
            <span className="font-['Playfair_Display'] text-[16px] italic text-[#c9c6c5] group-hover:text-neutral-600 block">
              Diário de Set
            </span>
            <p className="font-['Anton'] text-[24px] md:text-[28px] lowercase text-white group-hover:text-black mt-1">
              @__.henrique2004
            </p>
          </div>
        </a>
      </div>

      {/* Final Direct CTA Bar */}
      <div className="w-full bg-white text-black p-6 md:p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-neutral-300">
        <div>
          <span className="font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase tracking-widest block">
            // AGENDA ABERTA PRIMEIRO SEMESTRE
          </span>
          <h3 className="font-['Anton'] text-[26px] md:text-[34px] uppercase text-black leading-tight mt-1">
            SOLICITAR DISPONIBILIDADE OU DIÁRIA TÉCNICA
          </h3>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={onOpenBriefing}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-['Inter'] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>CONSTRUIR BRIEFING TÉCNICO</span>
            <span className="material-symbols-outlined text-[16px]">tune</span>
          </button>

          <a
            href="https://wa.me/5581999529339?text=Olá%20Maurício,%20gostaria%20de%20consultar%20sua%20disponibilidade%20para%20uma%20produção."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 text-white font-['Inter'] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-emerald-700 transition-all shadow-md whitespace-nowrap"
          >
            <span>WHATSAPP DIRETO</span>
            <span className="material-symbols-outlined text-[16px]">send</span>
          </a>
        </div>
      </div>
    </section>
  );
};
