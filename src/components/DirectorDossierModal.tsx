import React from 'react';

interface DirectorDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  portraitUrl: string;
  onOpenBriefing: () => void;
}

export const DirectorDossierModal: React.FC<DirectorDossierModalProps> = ({
  isOpen,
  onClose,
  portraitUrl,
  onOpenBriefing
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 text-white w-full max-w-xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-white"></span>
            <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-white">
              Dossiê // Maurício Henrique
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-neutral-300 text-sm leading-relaxed">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-neutral-700 shrink-0">
              <img
                src={portraitUrl}
                alt="Maurício Henrique"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <div>
              <h4 className="font-['Anton'] text-2xl uppercase text-white leading-none">
                MAURÍCIO HENRIQUE
              </h4>
              <p className="text-xs text-amber-400 font-mono uppercase tracking-wider mt-1">
                Filmmaker • Diretor de Cena • Fotógrafo • Storyteller • Editor
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Recife, PE • Disponível para viagens e diárias nacionais
              </p>
            </div>
          </div>

          <div className="p-4 bg-black/80 rounded-xl border border-neutral-800 space-y-2">
            <span className="text-[11px] font-['Playfair_Display'] italic text-neutral-400 block">
              Manifesto Editorial:
            </span>
            <p className="font-['Playfair_Display'] text-base italic text-white leading-snug">
              “A publicidade consistente não nasce no improviso; ela se sustenta em diretrizes sólidas e sensibilidade na lente.”
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <strong className="text-white uppercase font-['Inter'] tracking-wider block">
              Contato Direto para Contratações:
            </strong>
            <ul className="space-y-1.5 font-mono text-neutral-400">
              <li>• WhatsApp: (81) 99952-9339</li>
              <li>• E-mail: mhenriquesouza983@gmail.com</li>
              <li>• Instagram: @__.henrique2004</li>
              <li>• Base de Operação: Recife / PE [08°03′S 34°52′W]</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-black/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-neutral-400 hover:text-white"
          >
            Fechar
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBriefing();
            }}
            className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow cursor-pointer"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};
