"use client";

import React from "react";
import Link from "next/link";
import { Phone, Sparkles, SquarePen } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#002C47] text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6CB29D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#6CB29D] text-xs font-bold uppercase tracking-widest border border-[#6CB29D]/30">
          <Sparkles className="w-4 h-4 text-[#6CB29D]" />
          <span>Max Smart Saket & GIPMER / MAMC, New Delhi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
          Take the First Step Towards <span className="text-[#6CB29D] italic">Digestive Wellness</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Consult Dr. Randeep Rana, MD, DM (Gastroenterology, AIIMS) for expert diagnosis and advanced endoscopic care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="bg-[#6CB29D] hover:bg-[#5BA897] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full py-3.5 pl-8 pr-3 transition-all duration-200 shadow-xl flex items-center justify-center gap-4 group w-full sm:w-auto"
          >
            <span>Book a Private Consultation</span>
            <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
              <SquarePen className="w-4 h-4" />
            </div>
          </Link>
          <a
            href="tel:+919876543210"
            className="bg-[#001D30] hover:bg-black text-white border border-white/20 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full py-3.5 px-8 transition-all duration-200 flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-[#6CB29D]" />
            <span>Call OPD Hotline (+91 98765 43210)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
