import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Instagram, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contactInfo, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending with snappy comic feedback & mailto trigger
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      // Optional mailto link fallback
      const subject = encodeURIComponent(`Inquiry dari ${formData.name} via Manga Portfolio`);
      const body = encodeURIComponent(`Halo Ivan,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
      window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
    }, 700);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-[#FAFAFA] scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Manga Final Panel Header ("TO BE CONTINUED...") */}
        <div className="mb-12 border-4 border-black bg-black text-white p-4 sm:p-6 shadow-[8px_8px_0px_#E63946] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-comic text-4xl sm:text-5xl text-manga-yellow tracking-wider animate-pulse">
              TO BE CONTINUED...
            </span>
          </div>
          <div className="text-right">
            <span className="font-heading font-black text-sm uppercase tracking-widest text-white block">
              FINAL PANEL // BABAK KOLABORASI
            </span>
            <span className="font-mono text-xs text-gray-300">
              NEXT CHAPTER: "BUILDING THE FUTURE TOGETHER"
            </span>
          </div>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inquiries & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-4 border-black bg-white p-6 shadow-[7px_7px_0px_#0A0A0A] space-y-5">
              <div className="border-b-3 border-black pb-3">
                <span className="font-mono text-xs font-bold text-manga-red uppercase">
                  CH. 04 // CONTACT
                </span>
                <h3 className="font-heading font-black text-2xl uppercase text-black leading-tight">
                  LET'S COLLABORATE!
                </h3>
                <p className="font-body text-xs text-gray-600 mt-1">
                  Punya ide proyek, tawaran pekerjaan, atau ingin bertukar pikiran seputar web development? Jangan ragu untuk menghubungi saya!
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-2.5 border-2 border-black bg-[#FAFAFA] hover:bg-manga-yellow transition-colors shadow-[2px_2px_0px_#000]"
                >
                  <div className="w-8 h-8 border border-black bg-black text-white flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">
                      EMAIL ADDRESS
                    </span>
                    <span className="font-bold text-black">{contactInfo.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2.5 border-2 border-black bg-[#FAFAFA] shadow-[2px_2px_0px_#000]">
                  <div className="w-8 h-8 border border-black bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">
                      BASE LOCATION
                    </span>
                    <span className="font-bold text-black">{contactInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 border-2 border-black bg-[#FAFAFA] shadow-[2px_2px_0px_#000]">
                  <div className="w-8 h-8 border border-black bg-black text-white flex items-center justify-center shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">
                      RESPONSE TIME
                    </span>
                    <span className="font-bold text-black">{contactInfo.availableHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links Comic Grid */}
              <div className="pt-2">
                <span className="font-mono text-xs font-bold uppercase text-gray-500 block mb-2">
                  SOCIAL MEDIA TRANSMITTER:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <Github size={20} />
                    <span className="font-comic text-xs mt-1">GITHUB</span>
                  </a>

                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 border-2 border-black bg-white hover:bg-[#0077B5] hover:text-white transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <Linkedin size={20} />
                    <span className="font-comic text-xs mt-1">LINKEDIN</span>
                  </a>

                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 border-2 border-black bg-white hover:bg-[#E1306C] hover:text-white transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <Instagram size={20} />
                    <span className="font-comic text-xs mt-1">INSTAGRAM</span>
                  </a>
                </div>
              </div>

              {/* Comic Ending Quote Bubble */}
              <div className="p-3 border-2 border-black bg-manga-yellow shadow-[3px_3px_0px_#000]">
                <p className="font-heading font-black text-xs text-black italic text-center">
                  {contactInfo.closingQuote}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Static Comic Styled Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#0A0A0A]">
              {/* Form Sound Effect Ribbon */}
              <div className="absolute -top-3 -right-2 bg-manga-red text-white font-comic text-lg px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] rotate-3 pointer-events-none">
                SEND TRANSMISSION!
              </div>

              <div className="mb-6">
                <span className="font-comic text-lg bg-black text-white px-2 py-0.5 tracking-wider">
                  TRANSMISSION FORM
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-black uppercase mt-1">
                  KIRIM PESAN LANGSUNG
                </h3>
                <p className="font-mono text-xs text-gray-500 mt-0.5 font-semibold">
                  Formulir ini siap menghubungkan pesan Anda langsung ke inbox pengembang.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border-3 border-black bg-emerald-50 p-6 text-center space-y-3 shadow-[4px_4px_0px_#000]"
                >
                  <div className="w-14 h-14 border-3 border-black bg-emerald-500 text-white rounded-full mx-auto flex items-center justify-center font-comic text-2xl shadow-[3px_3px_0px_#000]">
                    ✓
                  </div>
                  <h4 className="font-heading font-black text-xl text-black uppercase">
                    PESAN BERHASIL DISIAPKAN!
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-gray-700 max-w-md mx-auto">
                    Terima kasih, <strong>{formData.name}</strong>! Email client Anda akan terbuka untuk konfirmasi pengiriman akhir ke <strong>{contactInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="inline-block mt-2 font-comic text-sm border-2 border-black bg-white px-4 py-1.5 shadow-[2px_2px_0px_#000] hover:bg-manga-yellow active:translate-x-0.5 active:translate-y-0.5"
                  >
                    KIRIM PESAN LAIN
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-heading font-black text-xs uppercase text-black mb-1.5 flex items-center justify-between">
                      <span>NAMA LENGKAP / PENGIRIM *</span>
                      <span className="font-mono text-[10px] text-gray-500 font-normal">REQUIRED</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactInfo.formPlaceholder.name}
                      className="w-full border-3 border-black p-3 text-sm font-mono bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#E63946] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-black text-xs uppercase text-black mb-1.5 flex items-center justify-between">
                      <span>ALAMAT EMAIL *</span>
                      <span className="font-mono text-[10px] text-gray-500 font-normal">REPLY TARGET</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactInfo.formPlaceholder.email}
                      className="w-full border-3 border-black p-3 text-sm font-mono bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#E63946] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-black text-xs uppercase text-black mb-1.5 flex items-center justify-between">
                      <span>ISI PESAN / TENTANG PROYEK *</span>
                      <span className="font-mono text-[10px] text-gray-500 font-normal">DETAILS</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contactInfo.formPlaceholder.message}
                      className="w-full border-3 border-black p-3 text-sm font-body bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_#E63946] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full border-4 border-black bg-black text-white py-3.5 font-comic text-xl uppercase tracking-wider shadow-[6px_6px_0px_#E63946] hover:bg-manga-red hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>{submitting ? 'MEMPROSES TRANSMISI...' : 'KIRIM TRANSMISI SEKARANG!'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
