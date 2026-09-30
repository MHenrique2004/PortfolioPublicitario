import React from 'react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  metadata: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  metadata
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex flex-col gap-4"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between text-white px-2">
          <div>
            <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-white">
              {title}
            </h3>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              {metadata}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Fechar tela cheia"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Image Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center max-h-[82vh]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[82vh] object-contain filter grayscale contrast-125"
          />
        </div>
      </div>
    </div>
  );
};
