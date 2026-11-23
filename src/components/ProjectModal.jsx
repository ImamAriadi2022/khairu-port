import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Award, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with Comic Halftone tint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window (Comic Page Frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-4 sm:border-5 border-black shadow-[10px_10px_0px_#000000] z-10"
        >
          {/* Sound Effect Floating Tag */}
          <div className="absolute -top-4 -left-3 bg-manga-yellow text-black font-comic text-2xl px-3 py-0.5 border-3 border-black rotate-[-6deg] shadow-[3px_3px_0px_#000] z-20 pointer-events-none">
            {project.soundEffect || 'BAM!'}
          </div>

          {/* Modal Header Panel */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b-4 border-black bg-manga-paperDark px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2.5">
              <span className="font-comic text-lg uppercase bg-black text-white px-2 py-0.5 tracking-wider">
                {project.arc}
              </span>
              <span className="font-mono text-xs font-bold text-gray-700 uppercase tracking-widest hidden sm:inline">
                STORY ARC DETAIL ARCHIVE
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 border-2 border-black bg-white hover:bg-manga-red hover:text-white transition-colors shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              aria-label="Tutup modal"
            >
              <X size={20} strokeWidth={3} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 space-y-6">
            {/* Title & Subtitle Banner */}
            <div className="border-b-3 border-black pb-4">
              <div className="inline-block bg-manga-red text-white text-[11px] font-mono font-bold px-2 py-0.5 mb-2 uppercase border border-black shadow-[2px_2px_0px_#000]">
                {project.badge}
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase leading-tight">
                {project.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-gray-600 mt-1 font-semibold">
                // {project.subtitle}
              </p>
            </div>

            {/* Synopsis / Story */}
            <div className="space-y-2">
              <h3 className="font-heading font-black text-sm uppercase text-black flex items-center gap-2">
                <Sparkles size={16} className="text-manga-red" />
                SINOPSIS CERITA & TUJUAN
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-800 leading-relaxed bg-[#FAFAF6] p-4 border-2 border-black">
                {project.modalContent?.synopsis || project.description}
              </p>
            </div>

            {/* Challenges & Solutions Comic Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Challenge Box */}
              <div className="border-3 border-black p-4 bg-white shadow-[4px_4px_0px_#000]">
                <div className="flex items-center gap-2 mb-2 text-manga-red">
                  <AlertCircle size={18} strokeWidth={2.5} />
                  <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                    TANTANGAN UTAMA
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.modalContent?.challenges}
                </p>
              </div>

              {/* Solution Box */}
              <div className="border-3 border-black p-4 bg-white shadow-[4px_4px_0px_#000]">
                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                  <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                    SOLUSI TEKNIS
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.modalContent?.solutions}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h3 className="font-heading font-black text-sm uppercase text-black">
                FITUR UTAMA (KEY WEAPONS)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.modalContent?.keyFeatures?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-manga-paper border border-black text-xs font-mono font-semibold"
                  >
                    <span className="bg-black text-white px-1.5 py-0.2 text-[10px] shrink-0 font-comic">
                      #{idx + 1}
                    </span>
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics Highlight */}
            {project.modalContent?.metrics && (
              <div className="p-3.5 bg-manga-yellow border-3 border-black flex items-center gap-3 shadow-[4px_4px_0px_#000]">
                <Award size={22} className="text-black shrink-0" />
                <div>
                  <span className="font-heading font-black text-xs uppercase text-black block">
                    ACHIEVEMENT & METRICS
                  </span>
                  <p className="font-mono text-xs font-bold text-black">
                    {project.modalContent.metrics}
                  </p>
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <span className="font-mono text-xs font-bold uppercase text-gray-500 block mb-2">
                TECHNOLOGY ARSENAL
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-black bg-white px-2.5 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t-3 border-black flex flex-wrap items-center justify-end gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-3 border-black bg-white px-5 py-2.5 font-comic text-base shadow-[4px_4px_0px_#000] hover:bg-manga-gray active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <Github size={18} />
                <span>SOURCE CODE</span>
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-3 border-black bg-black text-white px-6 py-2.5 font-comic text-base shadow-[4px_4px_0px_#E63946] hover:bg-manga-red active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <ExternalLink size={18} />
                <span>LAUNCH LIVE DEMO</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
