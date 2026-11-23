import React from 'react';
import { motion } from 'framer-motion';

export default function MangaPanel({
  children,
  className = '',
  title,
  subtitle,
  badge,
  chapter,
  soundEffect,
  hasPattern = false,
  shadowType = 'manga-lg', // 'manga', 'manga-lg', 'manga-xl', 'manga-red', 'manga-yellow'
  hoverEffect = false,
  asMotion = true,
  delay = 0,
  onClick,
}) {
  const shadowClasses = {
    'manga-sm': 'shadow-[3px_3px_0px_#0A0A0A]',
    'manga': 'shadow-[5px_5px_0px_#0A0A0A]',
    'manga-lg': 'shadow-[7px_7px_0px_#0A0A0A]',
    'manga-xl': 'shadow-[11px_11px_0px_#0A0A0A]',
    'manga-red': 'shadow-[7px_7px_0px_#E63946]',
    'manga-yellow': 'shadow-[7px_7px_0px_#FFD166]',
  };

  const shadowClass = shadowClasses[shadowType] || shadowClasses['manga-lg'];
  const hoverClass = hoverEffect 
    ? 'transition-all duration-200 hover:-translate-y-1.5 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#0A0A0A]' 
    : '';

  const Component = asMotion ? motion.div : 'div';
  const motionProps = asMotion
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.35, delay, ease: [0.25, 1, 0.5, 1] },
      }
    : {};

  return (
    <Component
      {...motionProps}
      onClick={onClick}
      className={`relative border-4 border-black bg-white ${shadowClass} ${hoverClass} ${
        hasPattern ? 'bg-halftone-pattern' : ''
      } ${className}`}
    >
      {/* Sound Effect Badge (Onomatopoeia) */}
      {soundEffect && (
        <div className="absolute -top-4 -right-3 z-20 pointer-events-none select-none bg-manga-yellow text-black font-comic text-xl px-2.5 py-0.5 border-2 border-black rotate-6 shadow-[3px_3px_0px_#000]">
          {soundEffect}
        </div>
      )}

      {/* Chapter / Badge Header Strip */}
      {(title || chapter || badge) && (
        <div className="flex items-center justify-between border-b-4 border-black bg-[#F5F5F0] px-4 py-2 select-none">
          <div className="flex items-center gap-2">
            {chapter && (
              <span className="font-comic text-lg uppercase bg-black text-white px-2 py-0.5 tracking-wider">
                {chapter}
              </span>
            )}
            {title && (
              <span className="font-heading font-black text-sm uppercase tracking-wider text-black">
                {title}
              </span>
            )}
          </div>
          {badge && (
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-manga-red text-white px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10">{children}</div>

      {/* Panel Corner Accent Lines */}
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-black pointer-events-none opacity-40" />
      <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-black pointer-events-none opacity-40" />
    </Component>
  );
}
