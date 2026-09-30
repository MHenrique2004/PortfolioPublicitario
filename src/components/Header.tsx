import React from 'react';

interface HeaderProps {
  onOpenAboutModal: () => void;
  onOpenShowreel: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAboutModal,
  activeSection
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#f4f3f3]/95 backdrop-blur-md border-b border-[#c4c7c7]">
      <div className="h-16 w-full px-5 md:px-10 flex items-center justify-between">
        {/* Brand identity */}
        <a 
          href="#top" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
        >
          <span className="w-2.5 h-2.5 bg-black transition-transform group-hover:scale-125"></span>
          <span className="font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[#1a1c1c]">
            MAURÍCIO HENRIQUE <span className="text-[#747878]">//</span> PORTFÓLIO PUBLICITÁRIO
          </span>
        </a>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <nav className="flex items-center gap-1.5">
            <a
              href="#arquivo"
              className={`font-['Inter'] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full transition-colors duration-150 ${
                activeSection === 'arquivo'
                  ? 'bg-black text-white'
                  : 'border border-[#747878] text-[#1a1c1c] hover:bg-black hover:text-white'
              }`}
            >
              PROJETOS
            </a>
            <a
              href="#sobre"
              className={`font-['Inter'] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full transition-colors duration-150 ${
                activeSection === 'sobre'
                  ? 'bg-black text-white'
                  : 'border border-[#747878] text-[#1a1c1c] hover:bg-black hover:text-white'
              }`}
            >
              SOBRE
            </a>
            <a
              href="#contato"
              className={`font-['Inter'] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-full transition-colors duration-150 ${
                activeSection === 'contato'
                  ? 'bg-black text-white'
                  : 'border border-[#747878] text-[#1a1c1c] hover:bg-black hover:text-white'
              }`}
            >
              CONTATO
            </a>
          </nav>


          {/* Profile / Dossier Button */}
          <button
            onClick={onOpenAboutModal}
            className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-neutral-800 transition-transform hover:scale-105"
            aria-label="Perfil do Diretor"
            title="Dossiê do Diretor"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
