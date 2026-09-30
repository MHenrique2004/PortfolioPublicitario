import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f4f3f3] border-t border-[#c4c7c7] py-8">
      <div className="w-full px-5 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-['Inter'] text-[11px] font-medium uppercase text-[#5e5e5e]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1a1c1c]">LOC //</span>
          <span className="font-mono">RECIFE, PE — BRASIL [08°03′14″S 34°52′52″W]</span>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 hover:text-[#1a1c1c] transition-colors cursor-pointer"
          >
            <span className="font-['Playfair_Display'] text-[15px] italic font-normal normal-case">
              Voltar ao topo
            </span>
            <span className="material-symbols-outlined text-[#1a1c1c] text-[16px] group-hover:-translate-y-0.5 transition-transform">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
