"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck2,
  HeartHandshake,
  Cpu,
  Sparkles,
  ShieldCheck,
  Check,
  SquarePen,
} from "lucide-react";

export default function WhyChoose() {
  const pillars = [
    {
      icon: FileCheck2,
      title: "Evidence-Based Medical Protocol",
      description: "Treatment plans rooted in international clinical guidelines (ACG, BSG, ISG) guaranteeing proven diagnostic accuracy and optimal medical outcomes.",
    },
    {
      icon: HeartHandshake,
      title: "Patient-First & Compassionate Care",
      description: "Dedicated time spent listening to each patient, explaining disease pathology in simple language, and minimizing patient anxiety before procedures.",
    },
    {
      icon: Cpu,
      title: "State-of-the-Art Endoscopy Suite",
      description: "Utilizing high-definition narrow-band imaging (NBI) endoscopes and CO2 insufflation at Max Smart Saket for painless, high-precision GI procedures.",
    },
    {
      icon: Sparkles,
      title: "Advanced Non-Surgical Procedures",
      description: "Pioneering minimally invasive endoscopic interventions that eliminate the need for open abdominal surgery for polyps, stones, and strictures.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted AIIMS Super-Specialty Alumni",
      description: "Trained at AIIMS New Delhi, India's premier apex medical institute, delivering world-renowned expertise and diagnostic integrity.",
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-white relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            The Standard of Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Why Choose <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Dr. Randeep Rana?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Delivering global standard gastroenterology care with clinical precision, advanced technology, and genuine human empathy.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-[#F4F7F9] border border-[#DDE6ED] p-8 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#6CB29D]/50 transition-all duration-300 relative group"
              >
                <div className="h-12 w-12 rounded-full bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center mb-6 group-hover:bg-[#6CB29D] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#002C47] mb-3 group-hover:text-[#6CB29D] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  {pillar.description}
                </p>
                <div className="flex items-center text-xs font-semibold text-[#6CB29D]">
                  <Check className="w-4 h-4 mr-1.5" /> Clinical Excellence
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Max Smart & GIPMER Trust Banner */}
        <div className="mt-16 bg-[#002C47] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          {/* Realistic Hospital Background Photo */}
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            <img
              src="/images/hospital-facility.png"
              alt="Max Smart Saket and GIPMER MAMC Delhi Facility"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#002C47] via-[#002C47]/90 to-transparent pointer-events-none z-0" />

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-white/10 border border-[#6CB29D]/30 text-xs font-bold uppercase tracking-widest text-[#6CB29D]">
              Consultant Gastroenterology
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Max Smart Superspeciality Hospital, Saket, New Delhi
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Ex-Assistant Professor at GIPMER & Ex-Associate Consultant at Sir Ganga Ram Hospital (ILGPS). Offering state-of-the-art diagnostic evaluations and advanced therapeutic endoscopic interventions.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 bg-[#6CB29D] hover:bg-[#5BA897] text-white font-extrabold text-xs uppercase tracking-wider rounded-full py-3.5 pl-6 pr-2 transition-all shadow-lg flex items-center gap-3 shrink-0 group"
          >
            <span>Schedule OPD Visit</span>
            <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
              <SquarePen className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
