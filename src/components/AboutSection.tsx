import React from 'react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  portraitImageUrl: string;
  onInspectImage: (url: string, title: string, meta: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portraitImageUrl,
  onInspectImage
}) => {
  return (
    <section className="w-full px-5 md:px-10 py-16 flex flex-col gap-10 bg-[#f4f3f3]" id="sobre">
      {/* Top Section Tag & Coordinates */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase tracking-wider pb-3 border-b border-[#c4c7c7]"
      >
        <span>02 // AUTORIA &amp; RIGOR TÉCNICO</span>
        <span className="font-mono">RECIFE, PE [08°03′S 34°52′W]</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Specs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          <div className="relative bg-[#e2e2e2] rounded-xl overflow-hidden shadow-sm aspect-[4/5] border border-[#c4c7c7] group">
            <img
              src={portraitImageUrl}
              alt="Maurício Henrique em estúdio com câmera de cinema"
              className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
              onClick={() =>
                onInspectImage(
                  portraitImageUrl,
                  'Retrato de Autoria // Maurício Henrique',
                  'Recife, PE • Direção de Arte & Videomaking'
                )
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Quick Action to inspect image */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button
                onClick={() =>
                  onInspectImage(
                    portraitImageUrl,
                    'Retrato de Autoria // Maurício Henrique',
                    'Recife, PE • Direção de Arte & Videomaking'
                  )
                }
                className="p-1.5 bg-black/80 hover:bg-black text-white rounded backdrop-blur-sm border border-white/20 shadow"
                title="Visualizar em tela cheia"
              >
                <span className="material-symbols-outlined text-[15px]">fullscreen</span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] uppercase tracking-wider">
                DIREÇÃO DE ARTE // VIDEOMAKER
              </span>
              <p className="font-['Anton'] text-[32px] md:text-[38px] uppercase text-white leading-tight mt-1">
                MAURÍCIO HENRIQUE
              </p>
            </div>
          </div>

          {/* Quick Technical Bio Specs */}
          <div className="bg-[#e2e2e2] p-5 rounded-lg flex flex-col gap-2.5 font-['Inter'] text-xs text-[#5e5e5e] border border-[#c4c7c7]">
            <div className="flex justify-between items-center pb-2 border-b border-[#c4c7c7]">
              <span className="font-semibold text-[#1a1c1c] uppercase">LOCALIZAÇÃO:</span>
              <span className="text-[#1a1c1c] font-medium">RECIFE, PERNAMBUCO</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-[#c4c7c7]">
              <span className="font-semibold text-[#1a1c1c] uppercase">EXPERIÊNCIA:</span>
              <span className="text-[#1a1c1c] font-medium">+3 ANOS EM SET E AGÊNCIA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#1a1c1c] uppercase">FOCO:</span>
              <span className="text-[#1a1c1c] font-medium">PUBLICIDADE, REELS &amp; DOCS</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Degrees */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <span className="font-['Playfair_Display'] text-[20px] md:text-[24px] italic text-[#5e5e5e]">
              Da ideia inicial à edição final..
            </span>
            <h2 className="font-['Anton'] text-[40px] md:text-[60px] uppercase text-black tracking-tight leading-[0.95]">
              IMAGENS QUE PRENDEM A ATENÇÃO E FUNCIONAM.
            </h2>
            <p className="font-['Inter'] text-[16px] md:text-[17px] leading-relaxed text-[#444748] mt-2">
              Trabalho com foco em fotografia, vídeo e marketing aqui em Pernambuco. Cuido de tudo sozinho: levo a câmara para o local, gravo, oriento quem está à frente da lente e faço a edição completa das fotos e dos vídeos.   O meu trabalho junta o cuidado com a 
              iluminação e o enquadramento ao ritmo certo para as redes sociais. 
              Seja na cobertura de um evento, num ensaio ou na rotina de uma empresa, 
              o objetivo é entregar um material limpo, bonito e que traga resultados. 
            </p>
            <p className="font-['Inter'] text-[15px] leading-relaxed text-[#5e5e5e]">
              Do roteiro e decupagem técnica de planos ao Lightroom e Edição, conduzo cada produção como um ecossistema visual fechado, garantindo coerência estética de ponta a ponta.
            </p>
          </div>

          {/* Academic Credentials */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#c4c7c7]">
            <span className="font-['Inter'] text-xs text-[#1a1c1c] uppercase tracking-widest font-bold">
              // FORMAÇÃO ACADÉMICA
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#e2e2e2] p-5 rounded-xl border border-[#c4c7c7] shadow-sm flex flex-col justify-between gap-4">
                <div>
                  <span className="font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase">
                    2025 — 2028 | EM CURSO
                  </span>
                  <h4 className="font-['Anton'] text-[24px] uppercase text-[#1a1c1c] leading-tight mt-1">
                    PUBLICIDADE E PROPAGANDA
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#5e5e5e] mt-2 leading-relaxed">
                    Centro Universitário Internacional UNINTER. Estudo como construir a 
                    presença de marcas no digital, planear 
                    conteúdos para redes sociais e criar materiais visuais que chamam 
                    a atenção do público certo.
                  </p>
                </div>
                <span className="font-['Playfair_Display'] text-sm italic text-[#5e5e5e] pt-2 border-t border-[#c4c7c7]">
                  Bacharelado em Publicidade e Propaganda
                </span>
              </div>

              <div className="bg-[#e2e2e2] p-5 rounded-xl border border-[#c4c7c7] shadow-sm flex flex-col justify-between gap-4">
                <div>
                  <span className="font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase">
                    2022 — 2024 | CONCLUÍDO
                  </span>
                  <h4 className="font-['Anton'] text-[24px] uppercase text-[#1a1c1c] leading-tight mt-1">
                    ANÁLISE E DESENV. DE SISTEMAS
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#5e5e5e] mt-2 leading-relaxed">
                    Centro Universitário Brasileiro UNIBRA. Base prática de tecnologia, 
                    programação e lógica de sistemas. 
                    Me ajuda a entender métricas de plataformas digitais, organizar 
                    processos de trabalho e criar fluxos sem perder tempo.
                  </p>
                </div>
                <span className="font-['Playfair_Display'] text-sm italic text-[#5e5e5e] pt-2 border-t border-[#c4c7c7]">
                  Graduação Tecnológica
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
