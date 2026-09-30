import React from 'react';
import { SOFTWARE_STACK } from '../data/portfolioData';

export const TechnicalArsenal: React.FC = () => {
  const capabilities = [
    {
      title: 'VIDEOMAKING',
      subtitle: '4K / Câmera na mão',
      icon: 'videocam'
    },
    {
      title: 'FOTOGRAFIA',
      subtitle: 'Comercial & Ensaio',
      icon: 'photo_camera'
    },
    {
      title: 'EDIÇÃO DE VÍDEO',
      subtitle: 'Cortes Rítmicos & SFX',
      icon: 'movie_edit'
    },
    {
      title: 'ILUMINAÇÃO',
      subtitle: 'RGB & Luz Contínua',
      icon: 'wb_incandescent'
    },
    {
      title: 'DESIGN PUB',
      subtitle: 'Identidade & Peças',
      icon: 'brush'
    },
    {
      title: 'DIR. DE CENA',
      subtitle: 'Decupagem & Roteiro',
      icon: 'theaters'
    }
  ];

  return (
    <section className="w-full bg-[#e8e8e8] py-16 px-5 md:px-10 flex flex-col gap-10 border-y border-[#c4c7c7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2 border-b border-[#c4c7c7]">
        <div>
          <span className="font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase tracking-widest">
            03 // CAPACIDADES TÉCNICAS
          </span>
          <h2 className="font-['Anton'] text-[42px] md:text-[68px] uppercase text-black tracking-tight leading-none mt-1">
            ARSENAL OPERACIONAL
          </h2>
        </div>
        <p className="font-['Inter'] text-[14px] md:text-[15px] text-[#5e5e5e] max-w-md leading-relaxed">
          Domínio integrado de captação de campo, engenharia de áudio e ferramentas líderes de pós-produção da indústria visual.
        </p>
      </div>

      {/* 6 Capabilities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {capabilities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl flex flex-col justify-between shadow-sm min-h-[160px] border border-[#c4c7c7] hover:border-black transition-all group"
          >
            <span className="material-symbols-outlined text-[28px] text-black group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <div>
              <h4 className="font-['Anton'] text-[20px] uppercase text-[#1a1c1c] leading-tight group-hover:text-black">
                {item.title}
              </h4>
              <span className="font-['Inter'] text-[11px] font-medium text-[#5e5e5e] uppercase tracking-wider block mt-1">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Software Stack Matrix */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm flex flex-col gap-6 border border-[#c4c7c7]">
        <div className="flex items-center justify-between font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase tracking-wider pb-3 border-b border-[#c4c7c7]">
          <span>SOFTWARE &amp; WORKFLOW SUITE</span>
          <span className="font-mono">EXPERTISE MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOFTWARE_STACK.map((soft, idx) => (
            <div
              key={idx}
              className="bg-[#f4f3f3] p-4 rounded-lg flex items-center gap-4 border border-[#c4c7c7] hover:border-black transition-colors"
            >
              <div className="w-12 h-12 rounded bg-black text-white flex items-center justify-center font-['Anton'] text-[20px] shrink-0">
                {soft.icon ? (
                  <span className="material-symbols-outlined text-[24px]">
                    {soft.icon}
                  </span>
                ) : (
                  soft.abbr
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-['Anton'] text-[20px] uppercase text-[#1a1c1c] leading-none truncate">
                  {soft.name}
                </span>
                <span className="font-['Inter'] text-[10px] font-semibold text-[#5e5e5e] uppercase tracking-wider mt-1.5">
                  {soft.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
