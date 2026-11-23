import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-black bg-white px-4 sm:px-6 py-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Stamp & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-black bg-manga-red flex items-center justify-center font-comic text-white text-lg font-black shadow-[2px_2px_0px_#000]">
            {personal.stampText}
          </div>
          <div>
            <div className="font-heading font-black text-sm text-black uppercase tracking-tight flex items-center gap-1.5">
              <span>{personal.fullName}</span>
              <span className="font-mono text-[10px] bg-black text-white px-1.5 py-0.2">
                REV. 2026
              </span>
            </div>
            <p className="font-mono text-xs text-gray-500">
              Built with React, Vite, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>

        {/* Center Manga Edition Note */}
        <div className="text-center font-mono text-xs text-gray-600">
          <span className="font-comic text-sm tracking-wide text-black block">
            MANGA PORTFOLIO EDITION — SHONEN WEB ARC
          </span>
          <span>Designed with high-contrast comic panel aesthetics</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 border-3 border-black bg-manga-yellow px-4 py-2 font-comic text-base tracking-wider shadow-[4px_4px_0px_#000] hover:bg-black hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          aria-label="Kembali ke atas halaman"
        >
          <span>PAGE TOP</span>
          <ArrowUp size={16} strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}
