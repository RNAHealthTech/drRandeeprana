"use client";

import React from "react";
import Breadcrumbs, { BreadcrumbItem } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 bg-[#002C47] text-white overflow-hidden border-b border-[#001D30]">
      {/* Decorative Subtle Dark Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6CB29D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          {/* Breadcrumbs */}
          <div className="text-slate-300">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 border border-[#6CB29D]/40 text-[#6CB29D] text-xs font-bold uppercase tracking-widest">
            {badge}
          </div>

          {/* Title - Playfair Serif */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
