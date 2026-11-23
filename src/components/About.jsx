import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Award, 
  Coffee, 
  CheckCircle, 
  Cpu, 
  Target, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MangaPanel from './MangaPanel';

export default function About() {
  const { personal, characterStats } = portfolioData;

  const statIcons = [
    <Award size={18} className="text-manga-red" />,
    <ShieldCheck size={18} className="text-black" />,
    <Target size={18} className="text-manga-red" />,
    <Coffee size={18} className="text-amber-700" />,
    <Cpu size={18} className="text-black" />,
    <CheckCircle size={18} className="text-emerald-700" />,
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Chapter Title Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-comic text-xl bg-black text-white px-2 py-0.5 tracking-wider">
                CH. 01
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-manga-red">
                PROFILE ARCHIVE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-black tracking-tight">
              CHARACTER PROFILE SHEET
            </h2>
          </div>
          <div className="font-comic text-xl text-gray-500 tracking-wider">
            FILE_ID: M.A.K.A.I // #001
          </div>
        </div>

        {/* Character Sheet Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dossier Card & Personal Vitals (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <MangaPanel
              chapter="VOL. 1"
              title="IDENTITAS KARAKTER"
              badge="VERIFIED"
              shadowType="manga-lg"
              className="p-5"
            >
              <div className="space-y-4">
                {/* Stamp & Name Header */}
                <div className="flex items-start justify-between border-b-3 border-black pb-3">
                  <div>
                    <span className="font-mono text-xs text-gray-500 font-bold uppercase block">
                      FULL REGISTRATION NAME
                    </span>
                    <h3 className="font-heading font-black text-xl text-black leading-tight">
                      {personal.fullName}
                    </h3>
                    <p className="font-mono text-xs text-manga-red font-bold">
                      ALIAS: "{personal.shortName}" / CODE DEVELOPER
                    </p>
                  </div>
                  {/* Hanko Stamp */}
                  <div className="border-3 border-manga-red p-1 text-center bg-white shadow-[2px_2px_0px_#E63946] rotate-3">
                    <span className="block font-comic text-manga-red font-black text-sm leading-none">
                      {personal.kanjiStamp}
                    </span>
                    <span className="text-[9px] font-mono font-black text-black">PASS</span>
                  </div>
                </div>

                {/* Key Vitals Info List */}
                <div className="space-y-2.5 text-sm font-mono">
                  <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-1.5">
                    <span className="flex items-center gap-2 text-gray-600 font-bold">
                      <User size={15} /> ROLE
                    </span>
                    <span className="font-bold text-black bg-manga-yellow px-1.5 py-0.5 border border-black">
                      {personal.role}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-1.5">
                    <span className="flex items-center gap-2 text-gray-600 font-bold">
                      <MapPin size={15} /> LOCATION
                    </span>
                    <span className="font-bold text-black">{personal.location}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-1.5">
                    <span className="flex items-center gap-2 text-gray-600 font-bold">
                      <Briefcase size={15} /> STATUS
                    </span>
                    <span className="font-bold text-emerald-800 bg-emerald-100 border border-emerald-500 px-1.5 py-0.5 text-xs">
                      {personal.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-1.5">
                    <span className="flex items-center gap-2 text-gray-600 font-bold">
                      <Flame size={15} /> POWER RANK
                    </span>
                    <span className="font-bold text-manga-red">{personal.level}</span>
                  </div>
                </div>

                {/* Character Motto Box */}
                <div className="bg-[#F6F6F2] border-2 border-black p-3 relative mt-2">
                  <span className="absolute -top-2.5 left-3 bg-black text-white text-[10px] font-mono px-1 font-bold">
                    SHINOBI MOTTO
                  </span>
                  <p className="font-mono text-xs italic text-gray-800 text-center pt-1 font-semibold">
                    {personal.motto}
                  </p>
                </div>
              </div>
            </MangaPanel>

            {/* Screentone Decorative Box */}
            <div className="border-3 border-black bg-white p-4 shadow-[5px_5px_0px_#000] relative overflow-hidden">
              <div className="absolute inset-0 bg-halftone-pattern opacity-15 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="font-comic text-base tracking-wide text-black block">
                    MANGA VOL. 01 SPECIAL INTERVIEW
                  </span>
                  <p className="font-body text-xs text-gray-600">
                    "Fokus pada kepuasan pengguna akhir dan kualitas baris kode."
                  </p>
                </div>
                <span className="font-comic text-2xl text-manga-red rotate-6 border-2 border-black px-2 py-0.5 bg-manga-yellow">
                  BAM!
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Character Stats Sheet (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Narrative Panel */}
            <MangaPanel
              title="BIOGRAFI & FILOSOFI PENGEMBANGAN"
              badge="STORY LOG"
              soundEffect="CODE!"
              shadowType="manga-lg"
              className="p-6"
            >
              <div className="prose text-gray-800 space-y-4">
                <p className="font-body text-sm sm:text-base leading-relaxed">
                  {personal.bio}
                </p>
                <p className="font-body text-sm sm:text-base leading-relaxed">
                  Bagi saya, web development bukan hanya sekadar merangkai tag atau menulis fungsi; melainkan sebuah proses bercerita di mana setiap transisi animasi, responsivitas elemen, dan kecepatan waktu muat menjadi bab cerita yang dirasakan langsung oleh pengguna.
                </p>
                <div className="p-3 border-2 border-black bg-manga-paperDark flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-black bg-manga-yellow flex items-center justify-center font-comic text-xl font-black shrink-0">
                    !
                  </div>
                  <p className="font-mono text-xs text-black font-semibold">
                    Siap berkontribusi dalam proyek skala kecil hingga besar, baik kolaborasi tim maupun perintisan produk dari nol.
                  </p>
                </div>
              </div>
            </MangaPanel>

            {/* Fun Stats Grid (Manga Databook Attributes) */}
            <div className="border-4 border-black bg-white shadow-[6px_6px_0px_#000] p-5">
              <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-comic text-lg bg-black text-white px-2 py-0.5">
                    STATS
                  </span>
                  <h4 className="font-heading font-black text-base uppercase text-black">
                    ABILITY PARAMETERS (PARAMETER KEMAMPUAN)
                  </h4>
                </div>
                <span className="font-mono text-[11px] font-bold text-gray-500">MAX LVL</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {characterStats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="border-2 border-black p-3 bg-white shadow-[3px_3px_0px_#000] flex items-center justify-between hover:bg-manga-yellow/15 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 border-2 border-black bg-[#F2F2EC] flex items-center justify-center shrink-0">
                        {statIcons[idx % statIcons.length]}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-xs text-black uppercase">
                          {stat.label}
                        </div>
                        <div className="font-mono text-xs text-gray-600 font-semibold">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                    <span className="font-comic text-lg text-manga-red bg-black px-2 py-0.5 border border-black shadow-[1px_1px_0px_#E63946]">
                      {stat.rank}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
