"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FileCheck2,
  HeartHandshake,
  Cpu,
  Sparkles,
  ShieldCheck,
  Check,
  SquarePen,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";

export default function WhyChoose() {
  const pillars = [
    {
      icon: FileCheck2,
      tag: "Clinical Precision",
      title: "Evidence-Based Medical Protocol",
      description:
        "Treatment plans rooted in international clinical guidelines (ACG, BSG, ISG) guaranteeing proven diagnostic accuracy and optimal medical outcomes.",
      highlight: "Global Standard Protocols",
    },
    {
      icon: HeartHandshake,
      tag: "Patient Centric",
      title: "Patient-First & Compassionate Care",
      description:
        "Dedicated time spent listening to each patient, explaining disease pathology in simple language, and minimizing anxiety before any procedure.",
      highlight: "Empathetic Counseling",
    },
    {
      icon: Cpu,
      tag: "Advanced Tech",
      title: "State-of-the-Art Endoscopy Suite",
      description:
        "Utilizing high-definition narrow-band imaging (NBI) endoscopes and CO2 insufflation at Max Smart Saket for painless, high-precision GI procedures.",
      highlight: "HD-NBI & CO₂ Insufflation",
    },
    {
      icon: Sparkles,
      tag: "Minimally Invasive",
      title: "Advanced Non-Surgical Interventions",
      description:
        "Pioneering minimally invasive endoscopic interventions that eliminate the need for open abdominal surgery for polyps, stones, and strictures.",
      highlight: "Zero Incision Recovery",
    },
    {
      icon: ShieldCheck,
      tag: "Apex Training",
      title: "Trusted AIIMS Super-Specialty Alumni",
      description:
        "Trained at AIIMS New Delhi with All India Rank 1 Fellowship and Rank 2 DM entrance, delivering world-renowned expertise and diagnostic integrity.",
      highlight: "AIIMS Apex Pedigree",
    },
    {
      icon: Award,
      tag: "Global Research",
      title: "International Research & Faculty",
      description:
        "Presented award-winning clinical trials at EASL Milan and APDW Singapore, and serves as an active reviewer for prestigious international medical journals.",
      highlight: "EASL & APDW Recognized",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, pillars.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Continuous Auto-sliding (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="why-choose"
      className="py-20 bg-white relative text-[#1C2936] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-[#EBF5F2] text-[#00843D] text-xs font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5 border border-[#6CB29D]/30">
              <span className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse" />
              Continuous Care & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
              Why Choose{" "}
              <span className="text-[#00843D] italic">Dr. Randeep Rana?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Delivering global-standard gastroenterology, hepatology, and advanced endoscopy care with clinical precision, cutting-edge technology, and genuine human empathy.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:bg-[#00843D] hover:text-white hover:border-[#00843D] text-slate-700 transition-all flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:bg-[#00843D] hover:text-white hover:border-[#00843D] text-slate-700 transition-all flex items-center justify-center shadow-2xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    flex: `0 0 calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)`,
                  }}
                  className="min-w-0"
                >
                  <div className="h-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-[#00843D]/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Top Header in Card */}
                      <div className="flex items-center justify-between">
                        <div className="h-12 w-12 rounded-xl bg-[#EBF5F2] text-[#00843D] group-hover:bg-[#00843D] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0078BF] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0078BF]/15">
                          {pillar.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-serif font-bold text-[#002C47] group-hover:text-[#00843D] transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom Feature Pill */}
                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#00843D]">
                        <Check className="w-4 h-4 text-[#00843D]" />
                        {pillar.highlight}
                      </span>
                      <span className="text-slate-300 group-hover:text-[#00843D] font-mono text-xs font-semibold transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-8 bg-[#00843D]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Max Smart & GIPMER Trust Banner */}
        <div className="mt-16 bg-[#EBF5F2] border border-[#6CB29D]/30 rounded-2xl p-8 sm:p-12 text-[#1C2936] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xs">
          {/* Hospital Background Photo */}
          <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
            <img
              src="/images/easl-hepatology-congress-hall.jpg"
              alt="Max Smart Saket and GIPMER MAMC Delhi Facility"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#EBF5F2] via-[#EBF5F2]/95 to-transparent pointer-events-none z-0" />

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
            <span className="px-3.5 py-1 rounded-md bg-white border border-[#6CB29D]/40 text-xs font-bold uppercase tracking-widest text-[#00843D] inline-block">
              Consultant Gastroenterology
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              Max Smart Super Speciality Hospital, Saket, New Delhi
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Ex-Assistant Professor at GIPMER & Ex-Associate Consultant at Sir Ganga Ram Hospital (ILGPS). Offering state-of-the-art diagnostic evaluations and advanced therapeutic endoscopic interventions.
            </p>
          </div>
          <a
            href="/contact"
            className="relative z-10 bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider rounded-xl py-3.5 px-6 transition-all flex items-center gap-2 shrink-0 shadow-sm active:scale-95"
          >
            <span>Schedule OPD Visit</span>
            <SquarePen className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
