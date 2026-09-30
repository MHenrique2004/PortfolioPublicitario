import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';

interface EditorialProjectsIndexProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const EditorialProjectsIndex: React.FC<EditorialProjectsIndexProps> = ({
  projects,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');

  const categories = [
    'TODOS',
    'ESPORTIVO',
    'ESPETÁCULO',
    'INTIMISTA',
    'COMERCIAIS',
    'DOCUMENTÁRIO'
  ];

  const filteredProjects = projects.filter((item) => {
    if (selectedCategory === 'TODOS') return true;
    return item.category.toUpperCase().includes(selectedCategory);
  });

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Header and Filter */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2 border-b border-neutral-800">
        <div>
          <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] uppercase tracking-widest">
            01 // ARQUIVO EDITORIAL
          </span>
          <h2 className="font-['Anton'] text-[42px] md:text-[68px] uppercase tracking-tight text-white leading-none mt-2">
            PROJETOS SELECIONADOS
          </h2>
        </div>
        <p className="font-['Inter'] text-[14px] md:text-[15px] text-[#c9c6c5] max-w-md leading-relaxed">
          Títulos produzidos entre 2023 e 2026 para clientes diretos, corporações médicas, eventos esportivos e narrativas autorais.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-['Inter'] uppercase tracking-wider text-neutral-400 mr-2">
          Filtrar por:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-[11px] font-['Inter'] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-white text-black shadow-sm'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gigantic Project Index Wall */}
      <div className="w-full flex flex-col divide-y divide-neutral-900 border-y border-neutral-900">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col md:flex-row md:items-baseline justify-between py-5 px-3 md:px-5 hover:bg-[#1c1b1b] rounded-lg transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-baseline gap-3 md:gap-6 flex-wrap">
              <span className="font-['Playfair_Display'] text-[18px] md:text-[24px] italic text-[#c9c6c5] group-hover:text-amber-400 transition-colors">
                ({project.year})
              </span>
              <span className="font-['Anton'] text-[28px] sm:text-[36px] md:text-[52px] lg:text-[62px] uppercase tracking-tight text-white group-hover:text-white transition-colors leading-none">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-4 font-['Inter'] text-[11px] font-medium text-[#c9c6c5] mt-2 md:mt-0">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span className="hidden md:inline font-mono">[{project.duration}]</span>
              <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
