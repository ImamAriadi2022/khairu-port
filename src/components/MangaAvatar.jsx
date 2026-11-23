import React from 'react';
import { motion } from 'framer-motion';

export default function MangaAvatar() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      {/* Outer Comic Decorative Layer */}
      <div className="absolute -inset-2 bg-black rotate-1 rounded-sm -z-10" />
      <div className="absolute -inset-1 bg-manga-yellow -rotate-1 rounded-sm -z-10 border-2 border-black" />

      {/* Main Panel Frame */}
      <div className="relative border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_#000000]">
        {/* Top Manga Header strip */}
        <div className="flex items-center justify-between bg-black text-white px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-manga-red animate-pulse" />
            FILE NO. #0199
          </span>
          <span className="bg-manga-red text-white px-1.5 py-0.2 text-[10px]">CHARACTER DATA</span>
        </div>

        {/* Speed Lines & Halftone Background Container */}
        <div className="relative h-80 sm:h-96 w-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
          {/* Radial Speed Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="speedlines" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <circle cx="200" cy="200" r="190" fill="none" stroke="#000" strokeWidth="0.5" />
              </pattern>
            </defs>
            {/* Speed line rays emanating from center */}
            {Array.from({ length: 36 }).map((_, i) => {
              const angle = (i * 360) / 36;
              const rad = (angle * Math.PI) / 180;
              const x2 = 200 + Math.cos(rad) * 260;
              const y2 = 200 + Math.sin(rad) * 260;
              return (
                <line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={x2}
                  y2={y2}
                  stroke="#0A0A0A"
                  strokeWidth={i % 2 === 0 ? "2" : "1"}
                  strokeDasharray="14 12"
                />
              );
            })}
          </svg>

          {/* Halftone Screentone overlay */}
          <div className="absolute inset-0 bg-halftone-pattern opacity-20 pointer-events-none" />

          {/* Stylized High-Contrast Manga Developer Avatar Illustration (SVG) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full drop-shadow-[4px_4px_0px_#000]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Back Hair & Shadow Silhouette */}
              <path
                d="M75 140 C60 110, 80 50, 150 45 C220 50, 240 110, 225 140 C235 155, 240 190, 225 210 L210 220 L90 220 L75 210 Z"
                fill="#0A0A0A"
              />
              
              {/* Neck & Shoulders / Jacket */}
              <path
                d="M125 190 L125 220 L95 240 L50 285 L250 285 L205 240 L175 220 L175 190 Z"
                fill="#0A0A0A"
              />
              {/* Jacket Collar / High Collar Shinobi Jacket */}
              <path
                d="M100 230 L150 260 L200 230 L190 280 L110 280 Z"
                fill="#FAFAFA"
                stroke="#0A0A0A"
                strokeWidth="5"
              />
              {/* Inner T-Shirt with Red Accent */}
              <polygon points="135,250 165,250 150,275" fill="#E63946" stroke="#0A0A0A" strokeWidth="3" />

              {/* Face Shape */}
              <path
                d="M100 135 C95 170, 120 215, 150 225 C180 215, 205 170, 200 135 C200 110, 100 110, 100 135 Z"
                fill="#FFFFFF"
                stroke="#0A0A0A"
                strokeWidth="5"
              />

              {/* Cheeks / Manga Hatch Shadows */}
              <line x1="110" y1="165" x2="120" y2="160" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="114" y1="170" x2="124" y2="165" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="180" y1="160" x2="190" y2="165" stroke="#0A0A0A" strokeWidth="2.5" />
              <line x1="176" y1="165" x2="186" y2="170" stroke="#0A0A0A" strokeWidth="2.5" />

              {/* Eyebrows (Determined Shonen Look) */}
              <path d="M105 130 L135 138" stroke="#0A0A0A" strokeWidth="5" strokeLinecap="round" />
              <path d="M195 130 L165 138" stroke="#0A0A0A" strokeWidth="5" strokeLinecap="round" />

              {/* Manga Eyes - High Contrast */}
              {/* Left Eye */}
              <path d="M110 145 Q125 140 135 147" stroke="#0A0A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
              <rect x="118" y="145" width="12" height="15" rx="3" fill="#0A0A0A" />
              <circle cx="121" cy="148" r="2.5" fill="#FFFFFF" />
              <path d="M114 162 Q125 165 132 161" stroke="#0A0A0A" strokeWidth="2" fill="none" />

              {/* Right Eye */}
              <path d="M190 145 Q175 140 165 147" stroke="#0A0A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
              <rect x="170" y="145" width="12" height="15" rx="3" fill="#0A0A0A" />
              <circle cx="173" cy="148" r="2.5" fill="#FFFFFF" />
              <path d="M186 162 Q175 165 168 161" stroke="#0A0A0A" strokeWidth="2" fill="none" />

              {/* Nose */}
              <path d="M148 165 L153 175 L146 177" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* Confident Smile */}
              <path d="M136 195 Q150 205 164 195" stroke="#0A0A0A" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M142 201 Q150 204 158 201" stroke="#0A0A0A" strokeWidth="2.5" fill="none" />

              {/* Spiky Anime Hair in Front */}
              {/* Bangs Left */}
              <path d="M90 120 Q110 80 130 115" fill="#0A0A0A" />
              <path d="M115 100 Q135 70 145 125" fill="#0A0A0A" />
              {/* Bangs Center */}
              <path d="M135 90 Q150 60 158 120" fill="#0A0A0A" />
              <path d="M152 95 Q168 75 168 125" fill="#0A0A0A" />
              {/* Bangs Right */}
              <path d="M165 100 Q190 75 205 120" fill="#0A0A0A" />
              <path d="M185 110 Q215 95 210 135" fill="#0A0A0A" />

              {/* Modern Tech Shinobi Headset / Studio Headphones */}
              <path d="M85 130 C85 80, 215 80, 215 130" stroke="#0A0A0A" strokeWidth="8" fill="none" />
              {/* Left Earcup */}
              <rect x="75" y="125" width="16" height="32" rx="6" fill="#E63946" stroke="#0A0A0A" strokeWidth="3.5" />
              {/* Right Earcup */}
              <rect x="209" y="125" width="16" height="32" rx="6" fill="#E63946" stroke="#0A0A0A" strokeWidth="3.5" />
            </svg>
          </motion.div>

          {/* Onomatopoeia Watermark in Background */}
          <div className="absolute right-2 bottom-6 font-comic text-4xl text-black font-black tracking-widest opacity-25 select-none pointer-events-none rotate-12">
            ドドドド
          </div>
          <div className="absolute left-2 top-8 font-comic text-2xl text-manga-red font-black tracking-widest opacity-40 select-none pointer-events-none -rotate-12">
            SHING!
          </div>
        </div>

        {/* Bottom Banner inside avatar frame */}
        <div className="border-t-4 border-black bg-manga-yellow px-4 py-2.5 flex items-center justify-between">
          <div className="font-heading font-black text-sm tracking-wide text-black uppercase">
            M. A. KHAIRU IVAN
          </div>
          <div className="font-mono text-[11px] font-bold bg-black text-white px-2 py-0.5 border border-black">
            READY TO CODE
          </div>
        </div>
      </div>

      {/* Floating Action Badge placed neatly at bottom-right */}
      <div className="absolute -bottom-3.5 -right-2 bg-manga-red text-white font-comic text-sm tracking-wider px-3 py-0.5 border-3 border-black shadow-[3px_3px_0px_#000000] rotate-2">
        LEVEL 88 DEV
      </div>
    </div>
  );
}
