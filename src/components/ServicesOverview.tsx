"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function ServicesOverview() {
  const storyPanels = [
    {
      id: 1,
      title: "Endoscopic Ultrasound (EUS) & ERCP Suite",
      category: "Advanced Endoscopy",
      image: "/images/endoscopy-suite.png",
      description: "State-of-the-art EUS and ERCP towers with narrow-band imaging for non-surgical bile duct stone extraction and pancreatic cyst drainage.",
      linkText: "View Interventional Suite",
      icon: Activity,
    },
    {
      id: 2,
      title: "Non-Invasive FibroScan & Liver Clinic",
      category: "Hepatology Care",
      image: "/images/fibroscan-liver-care.png",
      description: "Quantitative stiffness & CAP fat scoring for early fatty liver reversal and evidence-based cirrhosis survival protocols.",
      linkText: "View Liver Diagnostics",
      icon: HeartPulse,
    },
    {
      id: 3,
      title: "Consultant-Led GI OPD & Diagnostics",
      category: "Clinical Care",
      image: "/images/doctor-consultation.png",
      description: "Comprehensive, consultant-led evaluation at Max Smart Superspeciality Hospital Saket and GIPMER / MAMC New Delhi.",
      linkText: "Schedule OPD Visit",
      icon: Stethoscope,
    },
  ];

  return (
    <section className="py-20 bg-[#F4F7F9] text-[#1C2936] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Cleveland Clinic Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-sm bg-[#00843D] text-white text-xs font-bold uppercase tracking-widest inline-block">
              Speciality Clinical Centers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2936] tracking-tight">
              World-Class Gastroenterology & Liver Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Ground-breaking interventional endoscopy suites and academic clinical excellence from AIIMS & PGIMER.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0078BF] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider rounded-sm px-6 py-3.5 transition-colors shadow-sm shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cleveland Clinic Story Panels (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyPanels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between border border-slate-200"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2936]/80 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 text-[#00843D] border border-slate-200 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#00843D]" />
                    <span>{panel.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#0078BF] group-hover:text-[#00843D] transition-colors">
                      {panel.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {panel.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#00843D] group-hover:text-[#0078BF] transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>{panel.linkText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cleveland Clinic "Not Sure Where To Go for Care?" Banner */}
        <div className="bg-white rounded-lg p-8 sm:p-10 border border-slate-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00843D]">
              <HelpCircle className="w-4 h-4" />
              <span>Not Sure Where To Start?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2936]">
              Get Personalized Triage & OPD Guidance
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Whether you need routine acidity treatment or advanced EUS/ERCP procedures, Dr. Randeep Rana&apos;s team is here to assist you.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-[#00843D] hover:bg-[#006EB6] text-white font-extrabold text-xs uppercase tracking-wider rounded-sm px-8 py-4 transition-colors shadow-md shrink-0 flex items-center gap-3"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
