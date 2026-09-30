import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types/portfolio';

interface ProjectShowcaseGridProps {
  projects: ProjectItem[];
  imageUrls?: Record<string, string>;
  onSelectProject: (project: ProjectItem) => void;
  onInspectImage: (url: string, title: string, meta: string) => void;
}

interface ProjectCardItemProps {
  project: ProjectItem;
  index: number;
  currentImg: string;
  onSelectProject: (project: ProjectItem) => void;
  onInspectImage: (url: string, title: string, meta: string) => void;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({
  project,
  index,
  currentImg,
  onSelectProject,
  onInspectImage
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col bg-[#161616] rounded-2xl overflow-hidden group shadow-xl border border-neutral-800/80 hover:border-neutral-600/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]"
    >
      {/* Image Container with Cinematic Depth */}
      <div className="relative h-64 overflow-hidden bg-neutral-950">
        <img
          src={currentImg}
          alt={project.title}
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105 cursor-pointer"
          onClick={() =>
            onInspectImage(
              currentImg,
              project.title,
              `${project.category} • ${project.badge} • [${project.duration}]`
            )
          }
        />
        {/* Multi-layer Cinematic Vignette & Depth Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-black/30 to-black/20 opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>

        {/* Timecode Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md font-mono text-[11px] text-white border border-white/15 shadow-sm z-10">
          [{project.duration}]
        </div>

        {/* Technical Badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] border border-white/15 shadow-sm z-10">
          {project.badge}
        </div>

        {/* Quick Action (Inspect Image) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInspectImage(
                currentImg,
                project.title,
                `${project.category} • ${project.badge}`
              );
            }}
            className="p-1.5 bg-black/85 hover:bg-black text-white rounded-md backdrop-blur-md border border-white/20 text-xs shadow-md transition-transform hover:scale-105"
            title="Visualizar em tela cheia"
          >
            <span className="material-symbols-outlined text-[15px]">fullscreen</span>
          </button>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-5 bg-gradient-to-b from-[#161616] to-[#121212]">
        <div>
          <span className="font-['Inter'] text-[11px] font-semibold text-amber-400/90 uppercase tracking-widest block">
            {project.category}
          </span>
          <h3 className="font-['Anton'] text-[26px] md:text-[30px] uppercase text-white mt-1.5 leading-tight group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-['Inter'] text-[14px] leading-relaxed text-[#a8a8a8] mt-2">
            {project.description}
          </p>
        </div>

        <div className="pt-3.5 border-t border-neutral-800/80 flex items-center justify-between font-['Inter'] text-xs text-white">
          <span className="font-semibold uppercase tracking-wider text-neutral-400">
            {project.role}
          </span>
          <button
            onClick={() => onSelectProject(project)}
            className="font-['Playfair_Display'] text-[15px] italic font-normal text-white hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
          >
            <span>Ver Estudo</span>
            <span className="text-sm group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectShowcaseGrid: React.FC<ProjectShowcaseGridProps> = ({
  projects,
  imageUrls = {},
  onSelectProject,
  onInspectImage
}) => {
  // Take top 3 showcase projects matching the original design
  const showcaseProjects = projects.slice(0, 3);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {showcaseProjects.map((project, index) => {
        const currentImg = imageUrls[project.imageKey] || project.stills[0];

        return (
          <ProjectCardItem
            key={project.id}
            project={project}
            index={index}
            currentImg={currentImg}
            onSelectProject={onSelectProject}
            onInspectImage={onInspectImage}
          />
        );
      })}
    </div>
  );
};
