import React from 'react';
import { ProjectItem } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  currentImageUrl: string;
  onClose: () => void;
  onInspectImage: (url: string, title: string, meta: string) => void;
  onOpenBriefing: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  currentImageUrl,
  onClose,
  onInspectImage,
  onOpenBriefing
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 text-white w-full max-w-4xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-3">
            <span className="font-['Playfair_Display'] text-xl italic text-amber-400">
              ({project.year})
            </span>
            <div>
              <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-white">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-mono">
                {project.category} • [{project.duration}]
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Main Visual Display */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-black group max-h-[380px]">
            <img
              src={currentImageUrl}
              alt={project.title}
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
              onClick={() =>
                onInspectImage(
                  currentImageUrl,
                  project.title,
                  `${project.category} • ${project.badge}`
                )
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-neutral-300 border border-white/10">
                {project.badge}
              </span>
              <button
                onClick={() =>
                  onInspectImage(
                    currentImageUrl,
                    project.title,
                    `${project.category} • ${project.badge}`
                  )
                }
                className="px-3 py-1 bg-black/80 hover:bg-black text-white text-xs font-['Inter'] rounded backdrop-blur-md border border-white/20 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                <span>Ampliar Frame</span>
              </button>
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                EQUIPAMENTO &amp; ÓPTICA
              </span>
              <p className="text-sm font-semibold text-white">
                {project.equipment}
              </p>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                COLOR SCIENCE &amp; LUT
              </span>
              <p className="text-sm font-semibold text-white">
                {project.colorGrade}
              </p>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                CLIENTE &amp; PRODUÇÃO
              </span>
              <p className="text-sm font-semibold text-white">
                {project.client}
              </p>
            </div>
          </div>

          {/* Narrative & Directorial Approach */}
          <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 space-y-3">
            <h4 className="font-['Anton'] text-lg uppercase tracking-wider text-white">
              Decupagem &amp; Abordagem de Cena
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Condução de iluminação técnica com temperatura balanceada, decupagem de planos pensada para a fluidez da montagem e sincronização rítmica de cortes para maximizar o impacto visual do espectador.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-black/60 flex items-center justify-between">
          <span className="text-xs text-neutral-400 font-mono">
            FUNÇÃO: <strong className="text-white">{project.role}</strong>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold uppercase cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBriefing();
              }}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 cursor-pointer shadow"
            >
              Cotar Produção Semelhante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
