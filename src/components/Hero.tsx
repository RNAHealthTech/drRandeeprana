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
      description: "Dr. Randeep Rana — MBBS, MD (Dr. RMLH), DM & Advanced GI Endoscopy Fellow (AIIMS New Delhi).",
      linkText: "View Qualifications",
      href: "/about",
      accentBg: "bg-[#EBF5F2]",
    },
    {
      title: "OPD Location & Timings",
      icon: MapPin,
      badge: "Max Smart Saket",
      description: "Max Smart Super Speciality Hospital, Saket, New Delhi (Mon - Sat: 9.00 am - 6.00 pm).",
      linkText: "Get Directions",
      href: "/contact",
      accentBg: "bg-[#E8F4FA]",
    },
    {
      title: "Book OPD Appointments",
      icon: Calendar,
      badge: "In-Person & Online",
      description: "Schedule prompt in-person consultation or medical guidance for gut, liver & pancreas care.",
      linkText: "Schedule Consultation",
      href: "#contact",
      accentBg: "bg-[#EBF5F2]",
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
              Consultant Gastroenterologist, Hepatologist &amp; Pancreatologist at Max Smart Saket and Assistant Professor at GIPMER &amp; MAMC, New Delhi.
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
                  className="bg-white rounded-md border border-slate-200 transition-all duration-300 flex flex-col justify-between group p-6 sm:p-8 h-full cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Card Header Illustration Box */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-[#F4F7F9] text-[#0078BF] flex items-center justify-center font-bold group-hover:bg-[#00843D] group-hover:text-white transition-colors duration-300">
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
