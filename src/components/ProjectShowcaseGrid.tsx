import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types/portfolio';

interface ProjectShowcaseGridProps {
  projects: ProjectItem[];
  imageUrls?: Record<string, string>;
  onSelectProject: (project: ProjectItem) => void;
  onInspectImage: (url: string, title: string, meta: string) => void;
}

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
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col bg-[#1c1b1b] rounded-xl overflow-hidden group shadow-md border border-neutral-800 transition-all hover:border-neutral-700"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-neutral-950">
              <img
                src={currentImg}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() =>
                  onInspectImage(
                    currentImg,
                    project.title,
                    `${project.category} • ${project.badge} • [${project.duration}]`
                  )
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"></div>

              {/* Timecode Badge */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded font-mono text-[11px] text-white border border-white/10">
                [{project.duration}]
              </div>

              {/* Technical Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] border border-white/10">
                {project.badge}
              </div>

              {/* Quick Action (Inspect Image) */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInspectImage(
                      currentImg,
                      project.title,
                      `${project.category} • ${project.badge}`
                    );
                  }}
                  className="p-1.5 bg-black/80 hover:bg-black text-white rounded backdrop-blur-sm border border-white/20 text-xs shadow"
                  title="Visualizar em tela cheia"
                >
                  <span className="material-symbols-outlined text-[15px]">fullscreen</span>
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex flex-col justify-between flex-1 gap-5">
              <div>
                <span className="font-['Inter'] text-[11px] font-semibold text-[#c9c6c5] uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="font-['Anton'] text-[26px] md:text-[30px] uppercase text-white mt-1 leading-tight group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-['Inter'] text-[14px] leading-relaxed text-[#c9c6c5] mt-2">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between font-['Inter'] text-xs text-white">
                <span className="font-semibold uppercase tracking-wider text-neutral-400">
                  {project.role}
                </span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="font-['Playfair_Display'] text-[15px] italic font-normal text-white hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Ver Estudo</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
