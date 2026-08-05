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
      <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="/images/dr-randeep-rana.webp"
          alt="Dr. Randeep Rana - Gastroenterology Specialist Banner"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 opacity-65"
          loading="eager"
        />
        
        {/* Dark Vignette Overlay for Crisp White Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Hero Copy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24 text-white text-center lg:text-left">
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
              Consultant Gastroenterologist, Hepatologist & Pancreatologist at Max Smart Saket and Assistant Professor at GIPMER & MAMC, New Delhi.
            </motion.p>

          </div>
        </div>
      </div>

      {/* 3-Column Cleveland Clinic Cards Section (Positioned comfortably below Hero fold) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={card.href}
                  className="bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group p-6 sm:p-8 h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle top accent gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00843D] to-[#0078BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="space-y-4">
                    {/* Card Header Illustration Box */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-[#F4F7F9] text-[#0078BF] flex items-center justify-center font-bold group-hover:bg-[#00843D] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2.5 py-1 rounded-sm border border-[#00843D]/10">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-[#0078BF] group-hover:text-[#00843D] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0078BF] group-hover:text-[#00843D] transition-colors duration-300">
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
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
