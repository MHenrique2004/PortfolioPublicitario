import React from 'react';

export const BroadcastMarquee: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-2 px-5 md:px-10 flex items-center justify-between overflow-hidden text-[11px] font-['Inter'] font-medium tracking-widest uppercase border-b border-neutral-800">
      <div className="flex items-center gap-4 whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="font-semibold text-red-400">REC [00:00:00:00]</span>
        </span>
        <span className="text-neutral-600">//</span>
        <span>ARQUIVO BRUTALISTA PUBLICITÁRIO</span>
        <span className="text-neutral-600">//</span>
        <span className="text-neutral-300">MARKETING &amp; AUDIOVISUAL</span>
      </div>

      <div className="hidden md:flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
        <span>DCI-4K • 24FPS</span>
        <span className="text-neutral-600">•</span>
        <span>RECIFE / BRASIL</span>
        <span className="text-neutral-600">•</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          STATUS: DISPONÍVEL P/ DIÁRIAS
        </span>
      </div>
    </div>
  );
};
