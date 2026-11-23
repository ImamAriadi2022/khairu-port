import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Stylized Comic Project Thumbnail Generator (High-contrast manga UI mockups)
  const renderComicMockup = (theme, soundEffect) => {
    return (
      <div className="relative w-full h-48 bg-[#F0EFEA] border-b-4 border-black overflow-hidden flex items-center justify-center select-none group-hover:bg-[#EAE8E0] transition-colors">
        {/* Halftone Screentone Pattern */}
        <div className="absolute inset-0 bg-halftone-pattern opacity-20 pointer-events-none" />

        {/* Diagonal speed lines */}
        <div className="absolute inset-0 bg-manga-hatch opacity-25 pointer-events-none" />

        {/* Mockup Frame Elements based on theme */}
        <div className="relative z-10 w-4/5 h-4/5 border-3 border-black bg-white shadow-[4px_4px_0px_#000] p-3 flex flex-col justify-between">
          {/* Mockup Window Header */}
          <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-black bg-manga-red" />
              <span className="w-2.5 h-2.5 rounded-full border border-black bg-manga-yellow" />
              <span className="w-2.5 h-2.5 rounded-full border border-black bg-black" />
            </div>
            <span className="font-mono text-[9px] font-black uppercase tracking-wider text-black">
              SYS://ARC_VIEW
            </span>
          </div>

          {/* Center Graphic Representation */}
          <div className="flex-1 flex items-center justify-center my-1 border border-dashed border-gray-400 bg-[#FAFAFA] relative overflow-hidden">
            <div className="text-center">
              <span className="font-comic text-2xl text-black block tracking-wider">
                {soundEffect}
              </span>
              <span className="font-mono text-[10px] text-gray-500 font-bold uppercase">
                COMIC PREVIEW
              </span>
            </div>

            {/* Comic Speed Line rays */}
            <div className="absolute -bottom-6 -right-6 font-comic text-3xl text-gray-200 select-none">
              ドド
            </div>
          </div>

          {/* Bottom Wireframe Lines */}
          <div className="flex items-center justify-between text-[9px] font-mono font-bold text-gray-500">
            <span>STATUS: COMPLETED</span>
            <span className="text-black font-black">CHAPTER READY</span>
          </div>
        </div>

        {/* Floating Sound Effect Tag */}
        <div className="absolute top-2 right-2 bg-manga-yellow text-black font-comic text-lg px-2 py-0.2 border-2 border-black shadow-[2px_2px_0px_#000] rotate-6 z-20">
          {soundEffect}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-comic text-xl bg-black text-white px-2 py-0.5 tracking-wider">
                CH. 03
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-manga-red">
                PORTFOLIO CHAPTERS
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-black tracking-tight">
              PROJECTS SHOWCASE (STORY ARCS)
            </h2>
          </div>
          <div className="font-body text-xs font-medium text-gray-600 max-w-xs text-right hidden sm:block">
            Klik panel mana saja untuk membaca sinopsis lengkap, tantangan teknis, dan solusi arsitektur.
          </div>
        </div>

        {/* Comic Panel Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="group border-4 border-black bg-white shadow-[8px_8px_0px_#0A0A0A] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#0A0A0A] transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Arc & Badge Header Strip */}
                <div className="flex items-center justify-between border-b-4 border-black bg-[#F5F5F0] px-4 py-2 select-none">
                  <div className="flex items-center gap-2">
                    <span className="font-comic text-lg uppercase bg-black text-white px-2.5 py-0.5 tracking-wider">
                      {project.arc}
                    </span>
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
                      {project.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-xs font-bold text-manga-red hover:underline flex items-center gap-1"
                  >
                    <span>READ ARCHIVE</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

                {/* Comic Mockup Header */}
                {renderComicMockup(project.imageTheme, project.soundEffect)}

                {/* Content Section */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-heading font-black text-xl sm:text-2xl text-black uppercase cursor-pointer hover:text-manga-red transition-colors leading-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 font-semibold mt-1">
                      // {project.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black bg-[#FAFAFA] px-2 py-0.5 text-[11px] font-mono font-bold text-black shadow-[2px_2px_0px_#000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Panel */}
              <div className="p-4 sm:p-5 pt-0 border-t-2 border-dashed border-gray-300 flex flex-wrap items-center justify-between gap-3 bg-white">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 font-comic text-sm uppercase px-3 py-1.5 border-2 border-black bg-manga-yellow text-black shadow-[3px_3px_0px_#000] hover:bg-manga-yellow/80 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <BookOpen size={16} />
                  <span>DETAIL ARC</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-comic text-sm px-3 py-1.5 border-2 border-black bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-manga-gray active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    title="Buka Repositori GitHub"
                  >
                    <Github size={15} />
                    <span>CODE</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-comic text-sm px-3.5 py-1.5 border-2 border-black bg-black text-white shadow-[3px_3px_0px_#E63946] hover:bg-manga-red active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    title="Buka Live Demo Web"
                  >
                    <ExternalLink size={15} />
                    <span>DEMO</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comic Page Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
