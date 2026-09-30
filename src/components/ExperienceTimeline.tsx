import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10 py-16 flex flex-col gap-10 bg-[#f4f3f3]">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase tracking-wider pb-3 border-b border-[#c4c7c7]"
      >
        <span>04 // PERCURSO EM AGÊNCIAS &amp; SET</span>
        <span className="font-mono">EXPERIÊNCIA PRÁTICA</span>
      </motion.div>

      {/* List */}
      <div className="flex flex-col gap-5">
        {EXPERIENCES.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#e2e2e2] p-6 md:p-8 rounded-xl shadow-sm flex flex-col md:flex-row justify-between gap-6 border border-[#c4c7c7] hover:border-black transition-colors"
          >
            {/* Left Box */}
            <div className="flex flex-col md:max-w-xs shrink-0">
              <span className="font-['Playfair_Display'] text-[18px] md:text-[20px] italic text-[#5e5e5e]">
                [{item.period}]
              </span>
              <h3 className="font-['Anton'] text-[28px] md:text-[32px] uppercase text-[#1a1c1c] leading-tight mt-1">
                {item.company}
              </h3>
              <span className="font-['Inter'] text-[11px] font-semibold text-[#5e5e5e] uppercase mt-1 tracking-wider">
                {item.location}
              </span>
            </div>

            {/* Right Box */}
            <div className="flex-1 md:max-w-xl flex flex-col justify-between gap-4">
              <div>
                <h4 className="font-['Anton'] text-[20px] md:text-[22px] uppercase text-[#1a1c1c]">
                  {item.role}
                </h4>
                <p className="font-['Inter'] text-[14px] md:text-[15px] leading-relaxed text-[#5e5e5e] mt-2">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 font-['Inter'] text-[11px] font-medium text-[#1a1c1c]">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-[#f4f3f3] rounded-full border border-[#c4c7c7] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
