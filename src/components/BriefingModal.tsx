import React, { useState } from 'react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('Campanha Comercial / Social Reels');
  const [diarias, setDiarias] = useState('1 a 2 Diárias');
  const [format, setFormat] = useState('Vertical 9:16 + Horizontal 16:9');
  const [location, setLocation] = useState('Recife / Região Metropolitana');
  const [clientName, setClientName] = useState('');
  const [description, setDescription] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatedMessage = `Olá Maurício! Gostaria de consultar sua disponibilidade para uma produção audiovisual:
• Tipo de Projeto: ${projectType}
• Diárias Estimadas: ${diarias}
• Formato de Entrega: ${format}
• Localização: ${location}
${clientName ? `• Solicitante/Marca: ${clientName}` : ''}
${description ? `• Detalhes do Projeto: ${description}` : ''}

Vi seu portfólio brutalista e gostaria de alinhar orçamento e datas!`;

  const whatsappUrl = `https://wa.me/5581999529339?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const copyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 text-white w-full max-w-2xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-amber-400 text-[22px]">
              tune
            </span>
            <div>
              <h3 className="font-['Anton'] text-xl uppercase tracking-wider text-white">
                Construtor de Briefing &amp; Diária Técnica
              </h3>
              <p className="text-xs text-neutral-400 font-['Inter']">
                Configure os detalhes da sua demanda para envio direto ao WhatsApp de Maurício
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

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs font-['Inter']">
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
              Tipo de Produção
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
            >
              <option value="Campanha Comercial / Social Reels">Campanha Comercial / Social Reels</option>
              <option value="Desporto & Cobertura de Evento de Corrida">Desporto &amp; Cobertura de Evento de Corrida</option>
              <option value="Espetáculo / Iluminação Cênica & Multicâmera">Espetáculo / Iluminação Cênica &amp; Multicâmera</option>
              <option value="Documentário Institucional / Saúde Infantil">Documentário Institucional / Saúde Infantil</option>
              <option value="Direção de Arte & Consultoria Visual">Direção de Arte &amp; Consultoria Visual</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
                Estimativa de Diárias
              </label>
              <select
                value={diarias}
                onChange={(e) => setDiarias(e.target.value)}
                className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
              >
                <option value="1 Diária de Captação">1 Diária de Captação</option>
                <option value="1 a 2 Diárias">1 a 2 Diárias</option>
                <option value="3 a 5 Diárias Completas">3 a 5 Diárias Completas</option>
                <option value="Acompanhamento Mensal / Retainer">Acompanhamento Mensal / Retainer</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
                Formato de Entrega
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
              >
                <option value="Vertical 9:16 (Reels/TikTok/Shorts)">Vertical 9:16 (Reels/TikTok/Shorts)</option>
                <option value="Horizontal 16:9 (Cinema/YouTube/TV)">Horizontal 16:9 (Cinema/YouTube/TV)</option>
                <option value="Vertical 9:16 + Horizontal 16:9">Ambos (9:16 + 16:9)</option>
                <option value="Master RAW 4K + Cortes Redes">Master RAW 4K + Cortes Redes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
                Localização / Set
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ex: Recife, Olinda, Interior de PE, Outro Estado"
                className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
                Seu Nome ou Marca
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Agência XYZ / João Silva"
                className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block mb-1.5">
              Observações ou Detalhes Específicos
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Necessidade de iluminação contínua para gravação noturna, captação de depoimentos e entrega em 48h."
              className="w-full bg-black border border-neutral-750 focus:border-amber-400 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
            />
          </div>

          {/* Message Preview */}
          <div className="bg-black/90 p-3.5 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">
                Prévia da Mensagem Formatada
              </span>
              <button
                onClick={copyMessage}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed">
              {generatedMessage}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-black/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold uppercase cursor-pointer"
          >
            Cancelar
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-['Inter'] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors"
          >
            <span>Enviar Diretamente no WhatsApp</span>
            <span className="material-symbols-outlined text-[16px]">send</span>
          </a>
        </div>
      </div>
    </div>
  );
};
