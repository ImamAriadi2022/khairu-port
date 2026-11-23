import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3 pb-2 transition-all">
      <nav
        className={`max-w-6xl mx-auto border-4 border-black bg-white transition-all duration-200 ${
          scrolled ? 'shadow-[6px_6px_0px_#0A0A0A]' : 'shadow-[4px_4px_0px_#0A0A0A]'
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5">
          {/* Manga Hanko / Japanese Stamp Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 select-none focus:outline-none"
            aria-label="Kembali ke atas"
          >
            {/* Square Red Stamp */}
            <div className="relative w-10 h-10 border-2 border-black bg-manga-red flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:rotate-3 transition-transform">
              <span className="font-comic text-white text-xl tracking-tighter font-black">
                {portfolioData.personal.stampText}
              </span>
              <span className="absolute -bottom-1 -right-1 text-[9px] font-mono bg-black text-white px-1 leading-none font-bold">
                印
              </span>
            </div>

            {/* Title / Name Branding */}
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm tracking-tight text-black group-hover:text-manga-red transition-colors flex items-center gap-1.5">
                KHAIRU IVAN
                <span className="hidden sm:inline-block font-mono text-[10px] bg-black text-white px-1.5 py-0.2 uppercase">
                  VOL. 01
                </span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-gray-600 tracking-wider">
                WEB DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.chapter}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 font-heading text-sm font-bold border-2 transition-all ${
                    isActive
                      ? 'bg-black text-white border-black shadow-[3px_3px_0px_#E63946] -translate-y-0.5'
                      : 'bg-white text-black border-transparent hover:border-black hover:bg-manga-paperDark hover:shadow-[3px_3px_0px_#0A0A0A]'
                  }`}
                >
                  <span className="text-manga-red text-xs font-mono mr-1.5">
                    {item.chapter}
                  </span>
                  {item.name}
                </a>
              );
            })}

            {/* Quick Status Pill */}
            <div className="ml-2 flex items-center gap-1.5 bg-[#F0F0EA] border-2 border-black px-2.5 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5" />
              <span className="text-[11px] text-black">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center gap-1 bg-[#F0F0EA] border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>DEV</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 border-2 border-black bg-manga-yellow text-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Comic Panel style) */}
        {isOpen && (
          <div className="md:hidden border-t-4 border-black bg-white p-4 space-y-2">
            <div className="font-comic text-xs uppercase text-gray-500 tracking-widest pb-1 border-b border-gray-200 flex justify-between items-center">
              <span>TABLE OF CONTENTS // 目次</span>
              <span className="text-manga-red font-mono font-bold">ISSUE #01</span>
            </div>
            {portfolioData.navigation.map((item) => (
              <a
                key={item.chapter}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 border-2 border-black bg-manga-paper hover:bg-manga-yellow shadow-[3px_3px_0px_#000] font-heading font-black text-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-black text-white px-2 py-0.5 font-comic text-xs">
                    {item.chapter}
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-600">GO &rarr;</span>
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center py-2.5 border-3 border-black bg-manga-red text-white font-comic text-base tracking-wider shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                LET'S TALK / HUBUNGI SAYA!
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
