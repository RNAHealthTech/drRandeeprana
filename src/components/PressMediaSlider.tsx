"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface PressItem {
  id: number;
  image: string;
  fullPageImage?: string;
  publication: string;
  shortName: string;
  date: string;
  tag: string;
  headlineOriginal: string;
  headlineEnglish: string;
  summary: string;
  keyPoints: string[];
}

const PRESS_ITEMS: PressItem[] = [
  {
    id: 1,
    image: "/images/press/press-dainik-bhaskar-clipping.jpg",
    fullPageImage: "/images/press/press-dainik-bhaskar-full.jpg",
    publication: "Dainik Bhaskar (दैनिक भास्कर)",
    shortName: "Dainik Bhaskar",
    date: "15 October 2026",
    tag: "National Hindi Daily",
    headlineOriginal: "जब पैंक्रियाटाइटिस में दवाएं काफी नहीं होतीं, तब एडवांस्ड एंडोस्कोपी से मिल सकता है इलाज",
    headlineEnglish: "When Medications Are Not Enough for Pancreatitis, Advanced Endoscopy Provides Minimally Invasive Relief",
    summary:
      "Featured health advisory in Dainik Bhaskar (Delhi NCR / Noida Edition) by Dr. Randeep Rana (Max Smart Super Speciality Hospital, Saket) explaining how modern interventional endoscopy (EUS-guided cystogastrostomy) drains infected pancreatic fluid collections safely without requiring major open surgery.",
    keyPoints: [
      "Published in India's leading Hindi daily (Dainik Bhaskar)",
      "Minimally invasive cystogastrostomy performed through natural GI tract",
      "Endoscopic Ultrasound (EUS) guided precision clearance without incisions",
      "Significant reduction in ICU stay, wound complications, and recovery time",
    ],
  },
  {
    id: 2,
    image: "/images/press/press-akali-patrika-clipping.jpg",
    fullPageImage: "/images/press/press-akali-patrika-full.jpg",
    publication: "Akali Patrika (ਅਕਾਲੀ ਪੱਤ੍ਰਿਕਾ)",
    shortName: "Akali Patrika",
    date: "14 October 2026",
    tag: "Leading Punjabi Daily",
    headlineOriginal: "ਜਦੋਂ ਪੈਨਕ੍ਰਿਏਟਾਇਟਸ ਲਈ ਦਵਾਈਆਂ ਕਾਫ਼ੀ ਨਹੀਂ ਹੁੰਦੀਆਂ, ਤਾਂ ਐਡਵਾਂਸਡ ਐਂਡੋਸਕੋਪੀ ਇਲਾਜ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦੀ ਹੈ",
    headlineEnglish: "Advanced Therapeutic Endoscopy Provides Safe Intervention for Severe Pancreatic Conditions",
    summary:
      "Prominent editorial coverage in Punjab's historic daily newspaper highlighting Dr. Rana's clinical protocols in therapeutic endosonography, organ-preserving procedures, and distinguishing acute pancreatitis from routine acidity.",
    keyPoints: [
      "Statewide press coverage across northern India & Punjab region",
      "Organ-preserving and tissue-sparing therapeutic procedures",
      "Optimal timing of intervention (3-4 weeks) for maximum clinical efficacy",
      "Specialist consultation recommended for persistent upper abdominal pain",
    ],
  },
  {
    id: 3,
    image: "/images/press/press-aapka-metro-clipping.jpg",
    fullPageImage: "/images/press/press-aapka-metro-full.jpg",
    publication: "Aapka Metro (National Hindi Daily)",
    shortName: "Aapka Metro",
    date: "13 October 2026",
    tag: "National Hindi Daily",
    headlineOriginal: "जब पैंक्रियाटाइटिस में दवाएं काफी नहीं होतीं, तब एडवांस्ड एंडोस्कोपी से मिल सकता है इलाज",
    headlineEnglish: "Minimally Invasive Endoscopy for Severe Pancreatitis Complications",
    summary:
      "Featured healthcare column by Dr. Randeep Rana explaining internal drainage and necrosectomy for acute necrotizing pancreatitis, avoiding high-risk surgical explorations.",
    keyPoints: [
      "Specialized clinical guidance from Max Smart Super Speciality Hospital, Saket",
      "Endoscopic ultrasound avoids external surgical incisions",
      "Guidance on distinguishing acute pancreatitis from routine gastritis",
      "Evidence-based gastroenterology and advanced endotherapy protocols",
    ],
  },
  {
    id: 4,
    image: "/images/press/press-sach-di-pattari-clipping.jpg",
    fullPageImage: "/images/press/press-sach-di-pattari-full.jpg",
    publication: "Sach Di Pattari (Daily Newspaper)",
    shortName: "Sach Di Pattari",
    date: "14 October 2026",
    tag: "Daily Newspaper Feature",
    headlineOriginal: "ਜਦੋਂ ਪੈਨਕ੍ਰਿਏਟਾਇਟਸ ਲਈ ਦਵਾਈਆਂ ਕਾਫ਼ੀ ਨਹੀਂ ਹੁੰਦੀਆਂ, ਤਾਂ ਐਡਵਾਂਸਡ ਐਂਡੋਸਕੋਪੀ ਇਲਾਜ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦੀ ਹੈ",
    headlineEnglish: "Advanced Therapeutic Endoscopy Offers Non-Surgical Solutions for Severe Pancreatitis",
    summary:
      "Dr. Randeep Rana outlines modern interventional endoscopic protocols that safely clear necrotic tissue and fluid accumulations in acute pancreatitis, eliminating high-risk open surgeries for eligible patients.",
    keyPoints: [
      "Expert guidance from consultant gastroenterologist & endoscopist",
      "Same-day or short-stay minimally invasive intervention",
      "Preserving pancreatic function through timely specialist care",
      "Prompt emergency evaluation for severe nausea, vomiting, or abdominal pain",
    ],
  },
  {
    id: 5,
    image: "/images/press/press-fateh-express-clipping.jpg",
    fullPageImage: "/images/press/press-fateh-express-full.jpg",
    publication: "Fateh Express (Daily Newspaper)",
    shortName: "Fateh Express",
    date: "16 October 2026",
    tag: "Print Media Feature",
    headlineOriginal: "ਐਡਵਾਂਸਡ ਐਂਡੋਸਕੋਪੀ ਅਤੇ EUS ਰਾਹੀਂ ਪੈਨਕ੍ਰੀਆਟਾਇਟਸ ਦਾ ਸਟੀਕ ਇਲਾਜ",
    headlineEnglish: "Precision Treatment of Pancreatitis via Advanced Endoscopy & Endosonography (EUS)",
    summary:
      "Comprehensive clinical interview detailing how endoscopic ultrasound eliminates exploratory surgeries in pancreatic fluid collections, supporting faster recovery and minimal hospital stay.",
    keyPoints: [
      "Full-page editorial showcase on advanced therapeutic endoscopy",
      "Tissue-sparing procedures with reduced infection risk compared to surgery",
      "Expert commentary from former Assistant Professor at GB Pant Hospital",
      "Public health awareness on early warning signs of GI emergencies",
    ],
  },
];

export default function PressMediaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [viewFullPage, setViewFullPage] = useState(false);

  const currentItem = PRESS_ITEMS[currentIndex];
  const activeImage = viewFullPage && currentItem.fullPageImage ? currentItem.fullPageImage : currentItem.image;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PRESS_ITEMS.length);
    setViewFullPage(false);
    setIsZoomed(false);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PRESS_ITEMS.length) % PRESS_ITEMS.length);
    setViewFullPage(false);
    setIsZoomed(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setIsZoomed(false);
      }
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || lightboxOpen) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, lightboxOpen, handleNext]);

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#EBF5F2] text-[#00843D] text-xs font-bold uppercase tracking-widest border border-[#00843D]/20">
              <Newspaper className="w-4 h-4" />
              <span>Print Media &amp; News Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              In the News &amp; Press Highlights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Dr. Randeep Rana&apos;s expert columns, clinical breakthroughs, and public health advisories featured across leading national and regional daily newspapers.
            </p>
          </div>

          {/* Slider Counter & Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="text-[#00843D] text-base">{currentIndex + 1}</span> / {PRESS_ITEMS.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#00843D] text-[#002C47] hover:text-[#00843D] shadow-xs flex items-center justify-center transition-all"
                aria-label="Previous newspaper clipping"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#00843D] text-[#002C47] hover:text-[#00843D] shadow-xs flex items-center justify-center transition-all"
                aria-label="Next newspaper clipping"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Clipping Viewport (7 cols) + Editorial Story (5 cols) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Left Column: Clean Clipping Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs flex flex-col justify-between space-y-5">
            
            {/* Top Info Bar above image */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#00843D] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-2xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentItem.tag}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00843D]" />
                  <span>{currentItem.date}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00843D] hover:text-[#002C47] transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full View</span>
              </button>
            </div>

            {/* Clipping Viewport — Clean paper canvas */}
            <div
              className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group cursor-pointer h-[380px] sm:h-[460px] flex items-center justify-center shadow-inner"
              onClick={() => setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentIndex}-${viewFullPage ? "full" : "clip"}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full p-3 sm:p-4 flex items-center justify-center"
                >
                  <img
                    src={activeImage}
                    alt={currentItem.headlineEnglish}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-slate-200/80 transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Click-to-Enlarge Banner */}
              <div className="absolute inset-0 bg-[#002C47]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-xl bg-[#002C47]/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#00843D]" />
                  <span>Click to Enlarge Newspaper Clipping</span>
                </span>
              </div>

              {/* Switch View (Full Page / Close-up) if fullPage exists */}
              {currentItem.fullPageImage && (
                <div className="absolute bottom-3 left-3 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewFullPage(!viewFullPage);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-xs font-bold shadow-md border border-slate-200 flex items-center gap-1.5 transition-all"
                  >
                    <span>{viewFullPage ? "Show Article Clipping" : "Show Full Newspaper Page"}</span>
                  </button>
                </div>
              )}

              {/* Enlarge Button (bottom-right) */}
              <div className="absolute bottom-3 right-3 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-[#00843D] hover:bg-[#002C47] text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Zoom</span>
                </button>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {PRESS_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setViewFullPage(false);
                    setIsZoomed(false);
                  }}
                  className={`relative rounded-xl overflow-hidden h-16 sm:h-20 border-2 transition-all bg-white p-1 flex items-center justify-center ${
                    currentIndex === idx
                      ? "border-[#00843D] ring-2 ring-[#00843D]/30 scale-[1.02]"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View ${item.publication}`}
                >
                  <img
                    src={item.image}
                    alt={item.publication}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-[#002C47] bg-white/95 px-1 rounded text-center truncate shadow-2xs border border-slate-100">
                    {item.shortName}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Summary & Context Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2.5 py-0.5 rounded">
                    {currentItem.publication}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">• {currentItem.date}</span>
                </div>

                {/* Original Language Headline */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47] leading-snug pt-1">
                  &ldquo;{currentItem.headlineOriginal}&rdquo;
                </h3>

                {/* English Translation Subtitle */}
                <p className="text-xs sm:text-sm font-semibold text-[#0078BF]">
                  {currentItem.headlineEnglish}
                </p>
              </div>

              {/* Detailed Summary */}
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-3">
                {currentItem.summary}
              </p>

              {/* Key Medical Takeaways */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Key Clinical Highlights in Coverage:
                </span>
                <ul className="space-y-2">
                  {currentItem.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl bg-[#00843D] hover:bg-[#002C47] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Open High-Res Clipping</span>
              </button>
              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                Verified Print Edition
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* High-Resolution Full-Screen Lightbox Modal (z-[9999] so Navbar never overlaps!) */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col overflow-hidden"
            onClick={() => {
              setLightboxOpen(false);
              setIsZoomed(false);
            }}
          >
            {/* Top Fixed Header Bar */}
            <div
              className="w-full bg-slate-900/90 border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between text-white shrink-0 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-0.5 max-w-xl truncate">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-extrabold uppercase tracking-widest text-[#6CB29D]">
                    {currentItem.publication}
                  </span>
                  <span className="text-slate-400">• {currentItem.date}</span>
                </div>
                <h4 className="text-sm sm:text-base font-serif font-bold text-white truncate">
                  {currentItem.headlineOriginal}
                </h4>
              </div>

              {/* Action Buttons: Zoom & Close */}
              <div className="flex items-center gap-2 sm:gap-3">
                {currentItem.fullPageImage && (
                  <button
                    onClick={() => {
                      setViewFullPage(!viewFullPage);
                      setIsZoomed(false);
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <span>{viewFullPage ? "Show Clipping" : "Show Full Page"}</span>
                  </button>
                )}

                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  title="Toggle Zoom"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Fit Screen</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Zoom 100%</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setLightboxOpen(false);
                    setIsZoomed(false);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm ml-1"
                  aria-label="Close high-res view"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Central Viewport with Prev / Next Arrow Buttons */}
            <div
              className={`relative flex-1 w-full flex items-center justify-center p-2 sm:p-6 select-none ${
                isZoomed ? "overflow-auto cursor-zoom-out block" : "overflow-hidden"
              }`}
              onClick={(e) => {
                if (isZoomed) {
                  e.stopPropagation();
                  setIsZoomed(false);
                }
              }}
            >
              {/* Prev Button */}
              {!isZoomed && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#00843D] text-white flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl"
                  aria-label="Previous clipping"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* The Newspaper Image */}
              <div
                className={`transition-all duration-300 ${
                  isZoomed
                    ? "min-w-full flex items-center justify-center p-4"
                    : "flex items-center justify-center h-full max-h-[80vh] max-w-[92vw]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              >
                <img
                  src={activeImage}
                  alt={currentItem.headlineEnglish}
                  className={`bg-white rounded-xl shadow-2xl border border-white/20 transition-all ${
                    isZoomed
                      ? "max-w-none w-auto max-h-none shadow-2xl cursor-zoom-out"
                      : "max-h-[78vh] w-auto max-w-full object-contain cursor-zoom-in"
                  }`}
                />
              </div>

              {/* Next Button */}
              {!isZoomed && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#00843D] text-white flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl"
                  aria-label="Next clipping"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Navigation Indicator Bar */}
            <div
              className="w-full bg-slate-900/90 border-t border-white/10 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-slate-400 shrink-0 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-white">
                  Clipping {currentIndex + 1} of {PRESS_ITEMS.length}
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-slate-300">
                  {currentItem.publication}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden md:inline">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> to exit •{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">←</kbd>{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">→</kbd> to switch
                </span>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
