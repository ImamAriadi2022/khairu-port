import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FolderGit2, Mail, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MangaAvatar from './MangaAvatar';
import SpeechBubble from './SpeechBubble';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Manga Action Background Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 opacity-30 select-none">
        <div className="absolute -top-12 left-6 font-comic text-7xl text-gray-200 select-none pointer-events-none rotate-3">
          CHAPTER 01
        </div>
        <div className="absolute bottom-20 right-8 font-comic text-8xl text-gray-200 select-none pointer-events-none -rotate-6">
          BANG!
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Manga Cover Top Banner / Edition Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border-4 border-black bg-white px-4 py-2 mb-6 shadow-[5px_5px_0px_#0A0A0A] flex flex-wrap items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 font-comic text-sm tracking-wider uppercase">
              SPECIAL ISSUE
            </span>
            <span className="font-mono text-xs font-bold text-gray-700">
              ORIGINAL DEVELOPER PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <span className="bg-manga-yellow px-2 py-0.5 border border-black text-black font-bold">
              STATUS: {personal.status}
            </span>
          </div>
        </motion.div>

        {/* Hero Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Manga Arc Badge & Japanese Subtitle */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-manga-red text-white font-mono text-xs font-black tracking-widest px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000] uppercase">
                <Terminal size={14} />
                {personal.role}
              </span>
              <span className="font-mono text-xs font-bold bg-[#EAEAEA] text-black px-2 py-1 border border-black">
                レベル 88 // {personal.level}
              </span>
            </div>

            {/* Main Name Heading with Comic Aesthetic */}
            <div className="relative">
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black leading-[1.05] tracking-tight uppercase">
                {personal.fullName.split(' ').slice(0, 3).join(' ')} <br />
                <span className="relative inline-block text-black bg-manga-yellow px-3 py-0.5 border-3 border-black shadow-[5px_5px_0px_#000] -rotate-1 mt-1">
                  {personal.fullName.split(' ').slice(3).join(' ')}
                </span>
              </h1>

              {/* Japanese Kanji Accent Background */}
              <div className="absolute -top-5 right-4 font-heading font-black text-6xl text-gray-200 -z-10 select-none opacity-60">
                伊万
              </div>
            </div>

            {/* Speech Bubble Tagline */}
            <div className="pt-2">
              <SpeechBubble tail="bottom-left" variant="normal" className="max-w-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl select-none" role="img" aria-label="speech">
                    💬
                  </span>
                  <div>
                    <p className="font-heading font-bold text-base sm:text-lg text-black leading-snug">
                      "{personal.speechBubble}"
                    </p>
                    <p className="font-body text-xs text-gray-600 mt-1 font-medium">
                      — {personal.shortName}, Web Developer & Interface Builder.
                    </p>
                  </div>
                </div>
              </SpeechBubble>
            </div>

            {/* Brief Narrative Lead */}
            <p className="font-body text-gray-800 text-sm sm:text-base leading-relaxed border-l-4 border-black pl-4 py-1">
              {personal.tagline}
            </p>

            {/* CTA Buttons with Manga Press Physics */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA: Lihat Project */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 border-3 border-black font-comic text-xl tracking-wider shadow-[6px_6px_0px_#E63946] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#E63946] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <FolderGit2 size={20} className="group-hover:rotate-12 transition-transform text-manga-yellow" />
                <span>LIHAT PROJECT</span>
                <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>

              {/* Secondary CTA: Hubungi Saya */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 border-3 border-black font-comic text-xl tracking-wider shadow-[6px_6px_0px_#0A0A0A] hover:bg-manga-yellow hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#0A0A0A] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <Mail size={20} />
                <span>HUBUNGI SAYA</span>
              </a>
            </div>

            {/* Fast Stats Snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-700">
              <span className="font-bold flex items-center gap-1">
                <Sparkles size={14} className="text-manga-red" />
                TECH STACK:
              </span>
              <span className="bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
                React
              </span>
              <span className="bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
                Tailwind CSS
              </span>
              <span className="bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
                Framer Motion
              </span>
              <span className="bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
                Modern Web
              </span>
            </div>
          </motion.div>

          {/* Right Column: Comic Avatar Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <MangaAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
