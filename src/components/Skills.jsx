import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Code2, 
  Palette, 
  Sparkles, 
  Layout, 
  FileCode, 
  Server, 
  GitBranch, 
  Zap, 
  Network, 
  Layers, 
  Database,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  // Icon mapping
  const renderIcon = (iconName) => {
    const props = { size: 24, strokeWidth: 2.2, className: "text-black" };
    switch (iconName) {
      case 'Atom': return <Atom {...props} className="text-cyan-600 animate-spin-slow" />;
      case 'Code2': return <Code2 {...props} className="text-amber-600" />;
      case 'Palette': return <Palette {...props} className="text-teal-600" />;
      case 'Sparkles': return <Sparkles {...props} className="text-manga-red" />;
      case 'Layout': return <Layout {...props} className="text-blue-600" />;
      case 'FileCode': return <FileCode {...props} className="text-blue-700" />;
      case 'Server': return <Server {...props} className="text-emerald-700" />;
      case 'GitBranch': return <GitBranch {...props} className="text-orange-600" />;
      case 'Zap': return <Zap {...props} className="text-manga-yellow fill-manga-yellow text-black" />;
      case 'Network': return <Network {...props} className="text-purple-600" />;
      case 'Layers': return <Layers {...props} className="text-pink-600" />;
      case 'Database': return <Database {...props} className="text-indigo-600" />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 bg-[#F4F4EE] border-y-4 border-black scroll-mt-20 relative">
      {/* Background Screentone Pattern */}
      <div className="absolute inset-0 bg-halftone-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-comic text-xl bg-black text-white px-2 py-0.5 tracking-wider">
                CH. 02
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-manga-red">
                ARSENAL & JUTSU
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-black tracking-tight">
              ABILITY & EQUIPMENT (TECH STACK)
            </h2>
          </div>
          <div className="font-mono text-xs font-bold bg-white border-2 border-black px-3 py-1 shadow-[3px_3px_0px_#000]">
            TOTAL ABILITIES: 12 CARDS
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.categoryName} className="space-y-6">
              {/* Category Ribbon */}
              <div className="flex items-center gap-3">
                <span className="font-comic text-2xl uppercase bg-black text-white px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#E63946]">
                  {cat.categoryName}
                </span>
                <span className="font-mono text-xs font-bold uppercase bg-manga-yellow border-2 border-black px-2 py-0.5">
                  {cat.categoryBadge}
                </span>
                <div className="hidden sm:block flex-1 h-1 bg-black" />
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    className="group relative border-4 border-black bg-white p-4 shadow-[6px_6px_0px_#0A0A0A] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#0A0A0A] transition-all cursor-pointer select-none"
                  >
                    {/* Top Corner Notch */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-black" />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-white" />

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-12 h-12 border-3 border-black bg-[#F8F8F2] flex items-center justify-center shadow-[3px_3px_0px_#000] group-hover:rotate-6 group-hover:bg-manga-yellow transition-all">
                        {renderIcon(skill.icon)}
                      </div>
                      <span className="font-mono text-[11px] font-bold uppercase px-2 py-0.5 border border-black bg-black text-white group-hover:bg-manga-red transition-colors">
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-lg text-black group-hover:text-manga-red transition-colors">
                      {skill.name}
                    </h3>

                    <p className="font-body text-xs text-gray-700 mt-1 line-clamp-2 leading-relaxed">
                      {skill.desc}
                    </p>

                    {/* Card Bottom Comic Action Line */}
                    <div className="mt-4 pt-2 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-[11px] font-mono text-gray-500 font-semibold">
                      <span>EQUIPPED</span>
                      <span className="text-black group-hover:text-manga-red font-bold">READY &#9654;</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Fun Fact */}
        <div className="mt-12 border-3 border-black bg-white p-4 shadow-[5px_5px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-comic text-2xl text-manga-red bg-manga-yellow px-2 py-0.5 border-2 border-black rotate-2">
              NOTE!
            </span>
            <p className="font-body text-xs sm:text-sm text-gray-800">
              Selalu haus mempelajari teknologi baru sesuai kebutuhan arsitektur produk dan performa proyek.
            </p>
          </div>
          <span className="font-mono text-xs font-bold uppercase text-black bg-manga-gray px-2 py-1 border border-black shrink-0">
            CONTINUOUS GROWTH
          </span>
        </div>
      </div>
    </section>
  );
}
