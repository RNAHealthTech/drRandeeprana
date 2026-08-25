"use client";

import React from "react";
import Breadcrumbs, { BreadcrumbItem } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
  bgImage = "/images/drrandeep.webp",
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-r from-[#F0FDF4] via-[#F8FAFC] to-[#EDF7F6] text-[#1C2936] overflow-hidden border-b border-slate-200 flex items-center">
      {/* Background Image - Right-Side Constrained with Top Head Alignment */}
      {bgImage && (
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
          <img
            src={bgImage}
            alt="Dr. Randeep Rana Banner Background"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: "center top" }}
            loading="eager"
          />
          {/* Gradient Overlay: Soft Light on Left under text, Clear Photo on Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0FDF4] via-[#F0FDF4]/90 via-35% to-transparent" />
        </div>
      )}

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6CB29D]/10 rounded-md blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-4 text-left"
        >
          {/* Breadcrumbs */}
          <div className="text-slate-500">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-sm bg-[#00843D] text-white text-xs font-bold uppercase tracking-widest">
            {badge}
          </div>

          {/* Title - Playfair Serif */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#002C47] leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
