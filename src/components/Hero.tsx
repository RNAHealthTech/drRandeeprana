"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  UserCheck,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const featureCards = [
    {
      title: "Our Provider Profile",
      icon: UserCheck,
      badge: "15+ Years Exp",
      description: "Dr. Randeep Rana — DM Gastroenterology (AIIMS New Delhi) & PGIMER MD Alumni.",
      linkText: "View Qualifications",
      href: "/about",
      accentBg: "bg-[#EBF5F2]",
    },
    {
      title: "OPD Locations & Directions",
      icon: MapPin,
      badge: "Saket & GIPMER",
      description: "Max Smart Superspeciality Hospital Saket & GB Pant Institute (GIPMER) & MAMC, New Delhi.",
      linkText: "Get Locations",
      href: "/contact",
      accentBg: "bg-[#E8F4FA]",
    },
    {
      title: "Book OPD Appointments",
      icon: Calendar,
      badge: "In-Person & Virtual",
      description: "Get prompt in-person consultation or virtual medical guidance for gut & liver care.",
      linkText: "Schedule Consultation",
      href: "#contact",
      accentBg: "bg-[#EBF5F2]",
    },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 bg-[#F4F7F9] text-[#1C2936] overflow-hidden">
      
      {/* Top Banner Hero Background Image with Dark Vignette Overlay (Exact Cleveland Clinic Style) */}
      <div className="relative min-h-[460px] sm:min-h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="/images/dr-randeep-rana-v2.png"
          alt="Dr. Randeep Rana - Cleveland Clinic Healthcare Banner"
          className="w-full h-full object-cover object-top absolute inset-0 opacity-65 transform scale-105"
          loading="eager"
        />
        
        {/* Dark Vignette Overlay for Crisp White Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Hero Copy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 text-white text-center lg:text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#00843D] text-white text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AIIMS-Trained Consultant Gastroenterologist</span>
            </motion.div>

            {/* Headline (Exact Cleveland Clinic Wording) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]"
            >
              We&apos;re here when you need us &mdash; for every care in digestive health.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-base sm:text-lg font-light leading-relaxed"
            >
              Senior Consultant Gastroenterologist, Hepatologist & Pancreatologist at Max Smart Saket and Assistant Professor at GIPMER & MAMC, New Delhi.
            </motion.p>

          </div>
        </div>
      </div>

      {/* 3-Column Cleveland Clinic Cards Section (Overlapping Hero Fold) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 sm:-mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <Link
                  href={card.href}
                  className="bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group p-6 sm:p-8 h-full cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Card Header Illustration Box */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-[#F4F7F9] text-[#0078BF] flex items-center justify-center font-bold group-hover:bg-[#00843D] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2.5 py-1 rounded-sm">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-[#0078BF] group-hover:text-[#00843D] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0078BF] group-hover:text-[#00843D]">
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
