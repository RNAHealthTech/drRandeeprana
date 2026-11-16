"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import {
  Camera,
  Sparkles,
  Building2,
  Stethoscope,
  Activity,
  UserCheck,
  Globe,
  Trophy,
  Award,
  FileText,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  tag?: string;
  image: string;
  description: string;
  icon: any;
  location?: string;
  objectPosition?: string;
}

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // 5 Featured moments for the Auto Slider (Directly matching Dr. Randeep Rana's captions)
  const featuredSlides: GalleryItem[] = [
    {
      id: 1,
      title: "After a Talk Delivered at World Congress of Gastroenterology",
      category: "Global Congress",
      tag: "WCOG 2026 · Speaker",
      image: "/images/gallery/wcog-2026-delegates-stage.jpg",
      description:
        "Dr. Randeep Rana with fellow faculty delegates after delivering an expert talk at the World Congress of Gastroenterology (WCOG).",
      icon: Globe,
      location: "World Congress of Gastroenterology (WCOG)",
      objectPosition: "object-center",
    },
    {
      id: 2,
      title: "Receiving the Editorial Fellowship of Indian Journal of Gastroenterology",
      category: "Academic Honors",
      tag: "Editorial Fellowship · IJG",
      image: "/images/gallery/medical-conference-felicitation-award.jpg",
      description:
        "Dr. Randeep Rana receiving the prestigious Editorial Fellowship of the Indian Journal of Gastroenterology (IJG) under the aegis of ISG at the World Congress of Gastroenterology.",
      icon: Trophy,
      location: "Indian Journal of Gastroenterology (IJG)",
      objectPosition: "object-center",
    },
    {
      id: 3,
      title: "With Pioneers in the Field at WCOG",
      category: "Global Congress",
      tag: "WCOG 2026 · Pioneers",
      image: "/images/gallery/wcog-2026-venue-entrance.jpg",
      description:
        "Dr. Randeep Rana standing with leading pioneers and global authorities in the field of gastroenterology at the World Congress of Gastroenterology (WCOG 2026).",
      icon: Building2,
      location: "World Congress of Gastroenterology (WCOG)",
      objectPosition: "object-center",
    },
    {
      id: 4,
      title: "After Complex & Innovative Procedure with Team at Max Saket",
      category: "Endoscopy & Clinical",
      tag: "Max Saket Endoscopy Team",
      image: "/images/gallery/advanced-endoscopy-team-suite.jpg",
      description:
        "Dr. Randeep Rana with the dedicated clinical team after performing a complex and innovative advanced endoscopic procedure at Max Smart Super Speciality Hospital, Saket, New Delhi.",
      icon: Stethoscope,
      location: "Max Smart Super Speciality Hospital, Saket, New Delhi",
      objectPosition: "object-center",
    },
    {
      id: 5,
      title: "Sample of EUS-Guided Liver Biopsy",
      category: "Endoscopy & Clinical",
      tag: "EUS Liver Biopsy",
      image: "/images/gallery/endoscopic-retrieval-specimen.jpg",
      description:
        "High-yield histological core tissue sample of an EUS-guided liver biopsy, demonstrating modern minimally invasive tissue acquisition without percutaneous liver puncture.",
      icon: Activity,
      location: "Advanced Endoscopy Suite, Max Saket",
      objectPosition: "object-center",
    },
  ];

  // Full Gallery Items (15 items total)
  const allGalleryItems: GalleryItem[] = [
    ...featuredSlides,
    {
      id: 6,
      title: "Dr. Randeep Rana — Consultant Gastroenterologist",
      category: "Doctor Profile",
      tag: "Clinical Profile",
      image: "/images/dr-randeep-rana-max-whitecoat.jpg",
      description:
        "Dr. Randeep Rana in clinical white coat with stethoscope at Max Smart Super Speciality Hospital, Saket, New Delhi.",
      icon: UserCheck,
      location: "Max Smart Super Speciality Hospital, Saket",
      objectPosition: "object-top",
    },
    {
      id: 7,
      title: "Best Oral Clinical Science Awardee",
      category: "Academic Honors",
      tag: "International Award",
      image: "/images/poster-award-best-oral-clinical-science.jpg",
      description:
        "Dr. Randeep Rana recognized as Best Oral Awardee in Clinical Science for groundbreaking RCT research on cirrhosis survival.",
      icon: Trophy,
      location: "EASL Congress",
      objectPosition: "object-top",
    },
    {
      id: 8,
      title: "DDW 2024 Poster Presentation — Washington D.C.",
      category: "Research & Publications",
      tag: "DDW 2024 · USA",
      image: "/images/ddw-2024-poster-presentation.jpg",
      description:
        "Presenting Microbiome & Mycobiome Metagenomics research in chronic pancreatitis at Digestive Disease Week (DDW 2024) in Washington, D.C.",
      icon: Globe,
      location: "Washington D.C., USA",
      objectPosition: "object-top",
    },
    {
      id: 9,
      title: "APDW 2025 Singapore — EUS Intervention Study",
      category: "Research & Publications",
      tag: "APDW 2025 · Singapore",
      image: "/images/apdw-2025-singapore-poster.jpg",
      description:
        "Research presented on EUS-guided thrombin and coil combination for visceral arterial pseudoaneurysm (VAPT-EASE study) at APDW 2025 in Singapore.",
      icon: FileText,
      location: "Suntec Singapore",
      objectPosition: "object-top",
    },
    {
      id: 10,
      title: "Session Chairperson — GBPGCON Conference",
      category: "Academic Honors",
      tag: "Session Chairperson",
      image: "/images/gbpgcon-chairperson-delegate.jpg",
      description:
        "Dr. Randeep Rana presiding as Session Chairperson & Delegate at GBPGCON annual gastroenterology conference.",
      icon: Building2,
      location: "GB Pant Hospital Symposium, New Delhi",
      objectPosition: "object-top",
    },
    {
      id: 11,
      title: "EASL Hepatology Congress — International Venue",
      category: "Global Congress",
      tag: "EASL Congress Hall",
      image: "/images/easl-hepatology-congress-hall.jpg",
      description:
        "Representing AIIMS New Delhi and Max Healthcare at the European Association for the Study of the Liver (EASL) Congress Hall.",
      icon: Award,
      location: "Milan, Italy",
      objectPosition: "object-center",
    },
    {
      id: 12,
      title: "National Conference Keynote Speaker — GBPGCON",
      category: "Academic Honors",
      tag: "Keynote Speaker",
      image: "/images/dr-randeep-rana-speaker.jpg",
      description:
        "Dr. Randeep Rana presenting clinical insights on stage at GBPGCON gastroenterology symposium.",
      icon: Sparkles,
      location: "GBPGCON Annual Summit",
      objectPosition: "object-top",
    },
    {
      id: 13,
      title: "Interventional Gastroenterologist — Max Healthcare",
      category: "Endoscopy & Clinical",
      tag: "EUS & ERCP Practice",
      image: "/images/dr-randeep-rana-scrubs-front.jpg",
      description:
        "Dr. Randeep Rana in Max Healthcare scrubs specializing in EUS, ERCP & Third Space Endoscopy.",
      icon: Stethoscope,
      location: "Max Smart Super Speciality Hospital, Saket",
      objectPosition: "object-top",
    },
    {
      id: 14,
      title: "Advanced Interventional Endoscopist",
      category: "Endoscopy & Clinical",
      tag: "Third Space Endoscopy",
      image: "/images/dr-randeep-rana-scrubs-side.jpg",
      description:
        "Dr. Randeep Rana — Specialist in POEM, ESD, STER, EFTR, and EUS-guided vascular & biliary interventions.",
      icon: Activity,
      location: "Max Smart Super Speciality Hospital, Saket",
      objectPosition: "object-top",
    },
    {
      id: 15,
      title: "EASL Best Oral Award Ceremony — Milan, Italy",
      category: "Academic Honors",
      tag: "EASL Milan · Oral Award",
      image: "/images/dr-randeep-rana-award.jpg",
      description:
        "Dr. Randeep Rana receiving the prestigious Best Oral Presentation Award for clinical science at EASL Congress in Milan.",
      icon: Camera,
      location: "Milan, Italy",
      objectPosition: "object-top",
    },
  ];

  // Auto Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto Slider interval effect (4.5s)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, featuredSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
  };

  const categories = [
    "All",
    "Global Congress",
    "Endoscopy & Clinical",
    "Academic Honors",
    "Research & Publications",
    "Doctor Profile",
  ];

  const filteredItems =
    activeCategory === "All"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === activeCategory);

  const activeSlide = featuredSlides[currentSlide];
  const ActiveSlideIcon = activeSlide.icon;

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Clinical Gallery"
        title="Infrastructure & Photo Gallery"
        subtitle="Explore authentic photo moments of Dr. Randeep Rana's clinical practice, international award recognitions, conference presentations, and research milestones."
        breadcrumbs={[{ label: "Gallery" }]}
        bgImage="/images/gallery/wcog-2026-venue-entrance.jpg"
      />

      {/* Main Gallery Section */}
      <section className="py-16 sm:py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#00843D] text-xs font-extrabold uppercase tracking-widest shadow-2xs">
              Visual Tour &amp; Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
              Authentic Clinical &amp; Conference Moments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Combining world-class academic leadership from AIIMS New Delhi and Dr. RML Hospital with compassionate, patient-first clinical care at Max Smart Super Speciality Hospital, Saket.
            </p>
          </div>

          {/* ============================================================== */}
          {/* FEATURED MOMENTS AUTO SLIDER */}
          {/* ============================================================== */}
          <div className="bg-white rounded-3xl border border-[#DDE6ED] p-5 sm:p-8 lg:p-10 shadow-xs space-y-6">
            
            {/* Slider Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#EBF5F2] text-[#00843D] text-xs font-bold uppercase tracking-widest border border-[#00843D]/20 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Highlights · Auto Slider</span>
                  </span>
                  {isAutoPlaying && !isHovered && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00843D] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00843D] animate-ping" />
                      Auto-playing
                    </span>
                  )}
                  {isHovered && isAutoPlaying && (
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Paused on hover
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                  Recent International Congress &amp; Interventional Moments
                </h3>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                  <span className="text-[#00843D] text-base font-bold">0{currentSlide + 1}</span> / 0{featuredSlides.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00843D] text-[#002C47] hover:text-[#00843D] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    title={isAutoPlaying ? "Pause auto-slider" : "Play auto-slider"}
                    aria-label={isAutoPlaying ? "Pause auto-slider" : "Play auto-slider"}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00843D] text-[#002C47] hover:text-[#00843D] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00843D] text-[#002C47] hover:text-[#00843D] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Main Viewport */}
            <div
              className="relative rounded-2xl overflow-hidden bg-slate-950 h-[360px] sm:h-[480px] lg:h-[540px] group flex items-center justify-center shadow-inner select-none cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setSelectedItem(activeSlide)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Blurred Backdrop for Portrait Specimen Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-30 transform scale-125 pointer-events-none"
                    style={{ backgroundImage: `url(${activeSlide.image})` }}
                  />

                  {/* Main Slide Image */}
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="relative max-h-full max-w-full object-contain sm:object-cover sm:w-full sm:h-full z-10 transition-transform duration-700 group-hover:scale-102"
                  />

                  {/* Dark gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/95 via-[#002C47]/40 to-transparent z-15 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Top Info Badges */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#00843D] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 pointer-events-auto">
                    <ActiveSlideIcon className="w-3.5 h-3.5" />
                    <span>{activeSlide.tag || activeSlide.category}</span>
                  </span>
                  {activeSlide.location && (
                    <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 pointer-events-auto">
                      <MapPin className="w-3.5 h-3.5 text-[#6CB29D]" />
                      <span>{activeSlide.location}</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(activeSlide);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#002C47] text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm pointer-events-auto cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#00843D]" />
                  <span>View Full Photo</span>
                </button>
              </div>

              {/* Overlay Left / Right Arrows (clickable directly on image) */}
              <div className="absolute inset-y-0 left-3 right-3 z-25 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
                  }}
                  className="w-11 h-11 rounded-full bg-black/50 hover:bg-[#00843D] text-white backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all shadow-md transform -translate-x-1 group-hover:translate-x-0"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide();
                  }}
                  className="w-11 h-11 rounded-full bg-black/50 hover:bg-[#00843D] text-white backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all shadow-md transform translate-x-1 group-hover:translate-x-0"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-white space-y-2 pointer-events-none max-w-4xl">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold leading-snug drop-shadow-sm">
                  {activeSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-3xl drop-shadow-sm">
                  {activeSlide.description}
                </p>
              </div>

              {/* Animated Progress Bar at Bottom */}
              {isAutoPlaying && !isHovered && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30 overflow-hidden">
                  <motion.div
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.5, ease: "linear" }}
                    className="h-full bg-[#00843D]"
                  />
                </div>
              )}
            </div>

            {/* Thumbnail Preview Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              {featuredSlides.map((slide, index) => {
                const isSelected = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`text-left p-2 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer border ${
                      isSelected
                        ? "bg-[#EBF5F2] border-[#00843D] ring-2 ring-[#00843D]/20 shadow-xs"
                        : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-900 shrink-0 relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#00843D]/30 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white drop-shadow-sm" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className={`block text-[10px] font-extrabold uppercase tracking-wider truncate ${isSelected ? "text-[#00843D]" : "text-slate-500"}`}>
                        {slide.tag}
                      </span>
                      <p className="text-xs font-serif font-bold text-[#002C47] truncate">
                        {slide.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* COMPREHENSIVE GALLERY GRID SECTION */}
          {/* ============================================================== */}
          <div className="space-y-8 pt-4">
            
            {/* Filter Tabs Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#00843D] uppercase tracking-wider">
                  Complete Clinical &amp; Conference Archive
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                  All Photo Moments ({allGalleryItems.length})
                </h3>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-[#002C47] text-white shadow-xs"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-[#00843D] hover:text-[#00843D]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid (15 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="bg-white border border-[#DDE6ED] rounded-2xl overflow-hidden hover:border-[#00843D]/60 hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover ${item.objectPosition || "object-top"} transform group-hover:scale-105 transition-transform duration-700`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/85 via-[#002C47]/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#00843D] border border-slate-200 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.tag || item.category}</span>
                      </div>

                      {/* Zoom Indicator on Hover */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-xs text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {/* Location Badge */}
                      {item.location && (
                        <div className="absolute bottom-3 left-4 right-4 text-white/90 text-[11px] font-medium flex items-center gap-1 truncate pointer-events-none">
                          <MapPin className="w-3 h-3 text-[#6CB29D] shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h4 className="text-base sm:text-lg font-serif font-bold text-[#002C47] group-hover:text-[#00843D] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00843D]">
                        <span>Click To View Full Size</span>
                        <Maximize2 className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* INTERACTIVE LIGHTBOX MODAL */}
      {/* ============================================================== */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col max-h-[92vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2 min-w-0 pr-3">
                <span className="px-3 py-1 rounded-full bg-[#EBF5F2] text-[#00843D] text-xs font-bold uppercase tracking-widest border border-[#00843D]/20 shrink-0">
                  {selectedItem.tag || selectedItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47] truncate">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px] sm:min-h-[460px] relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-[#F8FAFC] border-t border-slate-200 text-slate-700 text-xs sm:text-sm font-light leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                {selectedItem.location && (
                  <p className="text-[11px] font-bold text-[#00843D] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedItem.location}</span>
                  </p>
                )}
                <p>{selectedItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 bg-[#002C47] hover:bg-[#00843D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaBanner />
    </div>
  );
}
