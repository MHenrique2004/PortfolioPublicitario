import React, { useState, useEffect } from 'react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBriefing: () => void;
  heroImageUrl: string;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenBriefing,
  heroImageUrl
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15);
  const [resolution, setResolution] = useState<'4K' | '1080p'>('4K');
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="bg-neutral-950 border border-neutral-800 text-white w-full max-w-4xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-black/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            <div>
              <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-white">
                SHOWREEL
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                DIREÇÃO DE ARTE, CINEMATOGRAFIA &amp; EDIÇÃO RÍTMICA
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex-1 min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden group">
          <img
            src={heroImageUrl}
            alt="Showreel Preview"
            className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-20 h-20 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center transition-transform hover:scale-110 shadow-2xl cursor-pointer"
          >
            <span className="material-symbols-outlined text-[44px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Timecode overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded font-mono text-xs text-neutral-300 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>TC 00:01:24:18 / 00:03:30:00</span>
          </div>

          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-amber-400 border border-white/10">
              {resolution} MASTER
            </span>
          </div>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-3">
            {/* Timeline Bar */}
            <div
              className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress(Math.round((clickX / rect.width) * 100));
              }}
            >
              <div
                className="bg-amber-400 h-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] align-middle">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px] align-middle">
                    {audioEnabled ? 'volume_up' : 'volume_off'}
                  </span>
                  <span className="text-[11px]">{audioEnabled ? 'Áudio Ligado' : 'Mudo'}</span>
                </button>

                <span className="hidden sm:inline text-neutral-500">
                  CORTES: AU RUN • CANTATA • PEGADA DIGITAL
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setResolution(resolution === '4K' ? '1080p' : '4K')}
                  className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[10px] font-bold"
                >
                  {resolution}
                </button>
                <span className="text-neutral-400">{progress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* <p className="text-xs text-neutral-400 font-['Inter']">
            Material autoral captado com câmeras cinema, lentes anamórficas e colorização DaVinci Resolve.
          </p> */}

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBriefing();
              }}
              className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow"
            >
              Solicitar Orçamento de Reel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
