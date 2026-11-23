import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-manga-paper text-manga-ink flex flex-col font-body selection:bg-manga-yellow selection:text-black">
      {/* Top Reading Progress Bar (Subtle Manga Action indicator) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black z-50 pointer-events-none" />

      {/* Main Comic Header Panel */}
      <Navbar />

      {/* Chapter 01: Hero / Cover Page */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Manga Chapter Final Footer Panel */}
      <Footer />
    </div>
  );
}
