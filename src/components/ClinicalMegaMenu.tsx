"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  Flame,
  Layers,
  Camera,
  ShieldCheck,
  Sparkles,
  Droplet,
  Compass,
  ExternalLink,
  X,
  ArrowRight,
  UserCheck,
  CalendarCheck,
  Search,
} from "lucide-react";
import {
  MegaMenuSection,
  ClinicalCategory,
  ClinicalItem,
} from "@/data/clinicalData";

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse,
  Stethoscope,
  Activity,
  Flame,
  Layers,
  Camera,
  ShieldCheck,
  Sparkles,
  Droplet,
  Compass,
};

interface ClinicalMegaMenuProps {
  section: MegaMenuSection;
  isOpen: boolean;
  onClose: () => void;
}

export default function ClinicalMegaMenu({
  section,
  isOpen,
  onClose,
}: ClinicalMegaMenuProps) {
  if (!isOpen) return null;

  const colSpanClass =
    section.columns.length === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed inset-x-0 top-[72px] sm:top-[104px] z-40 px-4 sm:px-6 lg:px-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden ring-1 ring-slate-900/5 transition-all">
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47]">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">
                  {section.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid Columns */}
            <div className={`grid ${colSpanClass} gap-4 sm:gap-6 p-6 sm:p-8 bg-[#F8FAFC]/50 max-h-[70vh] overflow-y-auto`}>
              {section.columns.map((col, idx) => {
                const IconComponent = ICON_MAP[col.iconName] || Stethoscope;
                return (
                  <div
                    key={col.title}
                    className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:border-[#6CB29D]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Column Header */}
                      <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${col.iconBg}`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <h4 className="text-sm font-bold text-[#002C47]">
                            {col.title}
                          </h4>
                        </div>
                        <Link
                          href={`/services#${section.id}`}
                          onClick={onClose}
                          className="text-slate-400 hover:text-[#0078BF] transition-colors"
                          title={`View ${col.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Items List */}
                      <ul className="space-y-3.5">
                        {col.items.map((item) => (
                          <li key={item.name} className="group/item">
                            <Link
                              href={`/services#${section.id}`}
                              onClick={onClose}
                              className="block"
                            >
                              <div className="flex items-center justify-between text-xs font-semibold text-[#002C47] group-hover/item:text-[#0078BF] transition-colors">
                                <span>{item.name}</span>
                                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover/item:opacity-100 text-[#0078BF] transition-opacity shrink-0 ml-1" />
                              </div>
                              <p className="text-[11px] text-slate-500 font-light mt-0.5 leading-snug group-hover/item:text-slate-600">
                                {item.desc}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Guidance Footer */}
            <div className="px-6 sm:px-8 py-3.5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse"></span>
                <span className="font-medium">
                  Need clinical guidance on your symptoms or diagnostic reports?
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/about"
                  onClick={onClose}
                  className="font-bold text-[#0078BF] hover:text-[#006EB6] transition-colors flex items-center gap-1"
                >
                  <span>View Dr. Randeep Rana&apos;s Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="bg-[#00843D] hover:bg-[#006EB6] text-white font-semibold px-4 py-1.5 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Schedule Direct Evaluation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
