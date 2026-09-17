"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Clock,
  User,
  Activity,
  HeartPulse,
  Stethoscope,
  Camera,
  Layers,
  Sparkles,
  Flame,
  ShieldCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { ClinicalItem, getClinicalDetails } from "@/data/clinicalData";
import Logo from "@/components/Logo";

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse,
  Stethoscope,
  Activity,
  Flame,
  Layers,
  Camera,
  ShieldCheck,
  Sparkles,
};

interface ClinicalDetailModalProps {
  item: ClinicalItem | null;
  sectionId: string;
  categoryTitle: string;
  categorySlug?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ClinicalDetailModal({
  item,
  sectionId,
  categoryTitle,
  categorySlug,
  isOpen,
  onClose,
}: ClinicalDetailModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const details = getClinicalDetails(item, sectionId, categoryTitle);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#002C47]/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col text-[#1C2936]"
        >
          {/* Top Bar: Badges & Close Button */}
          <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 bg-white shrink-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5F2] text-[#00843D] font-bold tracking-wider text-[11px] uppercase border border-[#00843D]/20">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>{details.typeTag}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500 font-medium text-xs bg-slate-100 px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>1 min read</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 font-medium text-xs bg-slate-100 px-3 py-1 rounded-full">
                <User className="w-3.5 h-3.5 text-[#0078BF]" />
                <span>Dr. Randeep Rana (AIIMS &amp; PGIMER Trained)</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Details (8 cols) */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                    {details.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
                    {details.protocolSubtitle}
                  </p>
                </div>

                {/* Clinical Summary Box */}
                <div className="bg-[#F0FAF7] border border-[#C5E9DF] rounded-2xl p-5 sm:p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00843D]/15 text-[#00843D] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#00843D]">
                      Clinical Summary
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                      {details.clinicalSummary}
                    </p>
                  </div>
                </div>

                {/* Clinical Overview */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                    Clinical Overview
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {details.clinicalOverview.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Available Diagnostics / Recommended Workup */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#002C47] flex items-center gap-2">
                    <span className="w-1.5 h-3.5 bg-[#00843D] rounded-full"></span>
                    <span>Available Diagnostics &amp; Protocols</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {details.availableDiagnostics.map((diag, i) => {
                      const DiagIcon = ICON_MAP[diag.iconName] || Activity;
                      return (
                        <div
                          key={i}
                          className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-3 text-center space-y-2 hover:border-[#00843D]/40 transition-colors flex flex-col items-center justify-center"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white shadow-2xs border border-slate-100 text-[#0078BF] flex items-center justify-center">
                            <DiagIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-semibold text-[#002C47] leading-tight">
                            {diag.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Direct link to dedicated guide if slug exists */}
                {categorySlug && (
                  <div className="pt-2">
                    <Link
                      href={`/conditions/${categorySlug}`}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00843D] hover:text-[#0078BF] transition-colors"
                    >
                      <span>Read Full In-Depth Medical Guide on {categoryTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Key Benefits & Action Box (4-5 cols) */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                
                {/* Doctor Clinic Branding Card */}
                <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00843D] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      DR
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002C47]">
                        Dr. Randeep Rana
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light">
                        Max Smart Super Speciality Hospital
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-light border-t border-slate-200/80 pt-3">
                    Comprehensive, consultant-led digestive care &amp; advanced interventional endoscopy in Saket, New Delhi.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#002C47]">
                    Key Clinical Benefits
                  </h4>
                  <div className="space-y-2.5">
                    {details.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#EBF5F2] text-[#00843D] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-700 font-medium leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-[#F0FDF4] to-[#F0F9FF] border border-emerald-200 rounded-2xl p-5 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#002C47]">
                    <CalendarCheck className="w-4 h-4 text-[#00843D]" />
                    <span>Need evaluation or personalised treatment for this?</span>
                  </div>
                  
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="w-full py-3 bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Consultation →</span>
                  </Link>

                  <a
                    href="tel:+919643163941"
                    className="w-full py-2.5 bg-white hover:bg-slate-50 text-[#002C47] border border-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#00843D]" />
                    <span>+91 96431 63941</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
