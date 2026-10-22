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
      badge: "AIIMS & DMCH Alumni",
      description: "Dr. Randeep Rana — MBBS, MD (Dr. RMLH), DM (Gastroenterology) & Advanced Endoscopist (AIIMS New Delhi).",
      linkText: "View Qualifications",
      href: "/about",
      iconBoxStyle:
        "bg-gradient-to-br from-[#EBF5F2] to-[#D5EDE6] text-[#00843D] border border-[#00843D]/25 group-hover:from-[#00843D] group-hover:to-[#005A29] group-hover:text-white",
      badgeStyle: "bg-[#EBF5F2] text-[#00843D] border border-[#00843D]/20",
      dotColor: "bg-[#00843D]",
    },
    {
      title: "OPD Location & Timings",
      icon: MapPin,
      badge: "Max Smart Saket",
      description: "Max Smart Super Speciality Hospital, Saket, New Delhi (Mon - Sat: 9.00 am - 6.00 pm).",
      linkText: "Get Directions",
      href: "/contact",
      iconBoxStyle:
        "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#0078BF] border border-[#0078BF]/25 group-hover:from-[#0078BF] group-hover:to-[#004E7C] group-hover:text-white",
      badgeStyle: "bg-[#EFF6FF] text-[#0078BF] border border-[#0078BF]/20",
      dotColor: "bg-[#0078BF]",
    },
    {
      title: "Book OPD Appointments",
      icon: Calendar,
      badge: "In-Person & Online",
      description: "Schedule prompt in-person consultation or medical guidance for gut, liver & pancreas care.",
      linkText: "Schedule Consultation",
      href: "#contact",
      iconBoxStyle:
        "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] text-[#059669] border border-[#059669]/25 group-hover:from-[#059669] group-hover:to-[#00843D] group-hover:text-white",
      badgeStyle: "bg-[#F0FDF4] text-[#059669] border border-[#059669]/20",
      dotColor: "bg-[#059669]",
    },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 bg-[#F4F7F9] text-[#1C2936] overflow-hidden">
      {/* Top Banner Hero Section - Light Clean Medical Theme */}
      <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] bg-gradient-to-r from-[#F0FDF4] via-[#F8FAFC] to-[#EDF7F6] border-b border-slate-200 flex items-center justify-center overflow-hidden">
        {/* Background Image - Right-Side Constrained with Top Head Alignment */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
          <img
            src="/images/drrandeep.webp"
            alt="Dr. Randeep Rana - AIIMS Trained Consultant Gastroenterologist Banner"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: "center top" }}
            loading="eager"
          />
          {/* Gradient Overlay: Soft Light on Left under text, Clear Photo on Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0FDF4] via-[#F0FDF4]/90 via-35% to-transparent" />
        </div>

        {/* Hero Copy */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-16 text-[#1C2936] text-center lg:text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#00843D] text-white text-xs font-bold uppercase tracking-widest"
            >
              <span>AIIMS-TRAINED CONSULTANT GASTROENTEROLOGIST</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight leading-[1.15]"
            >
              We&apos;re here when you need us &mdash; for every care in digestive health.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-xs sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Consultant Gastroenterologist, Hepatologist &amp; advanced endoscopist at Max Smart Saket and Ex-Assistant Professor at GP Pant (GIPMER), New Delhi.
            </motion.p>

            {/* Hero Responsive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book OPD Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919643163941"
                className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-[#002C47] border border-slate-300 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Call +91 96431 63941</span>
              </a>
            </motion.div>

            {/* Doctor Credentials & Registration Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="bg-white/70 backdrop-blur-sm sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60 shadow-sm sm:shadow-none">
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#00843D]">
                  DM (AIIMS)
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 uppercase tracking-wider mt-0.5">
                  Gastroenterology
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60 shadow-sm sm:shadow-none sm:border-x sm:border-slate-300/80 sm:px-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#002C47]">
                  DMC 82691
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 uppercase tracking-wider mt-0.5">
                  Medical Council Reg.
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60 shadow-sm sm:shadow-none">
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#0078BF]">
                  Max Smart
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 uppercase tracking-wider mt-0.5">
                  Consultant Saket
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3-Column Cleveland Clinic Cards Section */}
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
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={card.href}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#00843D]/40 transition-all duration-300 flex flex-col justify-between group p-6 sm:p-8 h-full cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Card Header Illustration Box & Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 shadow-2xs group-hover:scale-105 ${card.iconBoxStyle}`}>
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs ${card.badgeStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${card.dotColor}`} />
                        <span>{card.badge}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-[#002C47] group-hover:text-[#00843D] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00843D] group-hover:text-[#0078BF] transition-colors duration-300">
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
