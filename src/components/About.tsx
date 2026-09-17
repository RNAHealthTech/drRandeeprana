"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Target,
  Eye,
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  Globe,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Calendar,
  BookOpen,
} from "lucide-react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"education" | "experience" | "honors" | "international">("education");

  // Gallery Slides
  const slides = [
    {
      image: "/images/dr-randeep-rana-whitecoat.jpg",
      tag: "Clinical Excellence",
      title: "Consultant Gastroenterology & Liver OPD",
      desc: "Patient-centered evaluations at Max Smart Super Speciality Hospital, Saket, New Delhi.",
    },
    {
      image: "/images/dr-randeep-rana-scrubs-front.jpg",
      tag: "Advanced Interventions",
      title: "Interventional Endoscopy & EUS / ERCP Suite",
      desc: "Minimally invasive third space endoscopy, stone clearance, and organ-preserving care.",
    },
    {
      image: "/images/poster-award-best-oral-clinical-science.jpg",
      tag: "International Honors",
      title: "Best Oral Clinical Science Awardee — EASL Milan",
      desc: "Randomized controlled trial research in decompensated cirrhosis and portal hypertension.",
    },
    {
      image: "/images/apdw-2025-singapore-poster.jpg",
      tag: "Global Research",
      title: "APDW Singapore — Poster of Distinction",
      desc: "Pioneering EUS-guided vascular interventions and pancreatic pseudoaneurysm therapies.",
    },
    {
      image: "/images/ddw-2024-poster-presentation.jpg",
      tag: "Academic Pedigree",
      title: "DDW Washington D.C. — Research Presentation",
      desc: "Microbiome metagenomics in chronic pancreatitis and persistent inflammation.",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const educationTimeline = [
    {
      degree: "Fellowship in Advanced GI Endoscopy",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "2023 – 2024",
      desc: "Super-specialized fellowship in Advanced GI Endoscopy, Linear EUS, ERCP, POEM, and Third Space interventions.",
    },
    {
      degree: "D.M. (Gastroenterology)",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "2020 – 2023",
      desc: "All India Rank 2 entrance. Pivotal RCT clinical research in portal hypertension and cirrhosis survival.",
    },
    {
      degree: "M.D. (Internal Medicine)",
      institution: "ABVIMS & Dr Ram Manohar Lohia Hospital (Dr RMLH), New Delhi",
      year: "2015 – 2018",
      desc: "Comprehensive residency in internal medicine, ICU critical care, and multi-system emergency management.",
    },
    {
      degree: "MBBS (Gold Medalist)",
      institution: "Dayanand Medical College & Hospital (DMCH), Ludhiana",
      year: "2008 – 2012",
      desc: "Awarded First Position & University Gold Medal in Medicine.",
    },
  ];

  const experienceList = [
    {
      role: "Consultant – Gastroenterology",
      inst: "Max Smart Super Speciality Hospital, Saket, New Delhi",
      year: "Current",
      desc: "Leading advanced therapeutic endoscopy, hepatology OPD, and pancreatico-biliary sciences.",
    },
    {
      role: "Assistant Professor – Gastroenterology",
      inst: "GB Pant Institute of Postgraduate Medical Education & Research (GIPMER)",
      year: "2024 – 2025",
      desc: "Teaching postgraduate DM fellows and conducting complex tertiary interventional procedures.",
    },
    {
      role: "Associate Consultant",
      inst: "Institute of Liver, GI & Pancreatico-Biliary Sciences, Sir Ganga Ram Hospital",
      year: "2025 – 2026",
      desc: "Specialized care in decompensated liver diseases, variceal bleeding, and endosonography.",
    },
    {
      role: "Senior Resident (DM)",
      inst: "AIIMS New Delhi",
      year: "2020 – 2023",
      desc: "High-volume advanced endoscopy, EUS tissue acquisition, and academic clinical trials.",
    },
  ];

  const honorsList = [
    {
      title: "Gold Medal (First Position in Medicine)",
      org: "Dayanand Medical College & Hospital (DMCH)",
      year: "MBBS 2012",
    },
    {
      title: "All India Rank 1",
      org: "AIIMS Advanced GI Endoscopy Fellowship Entrance",
      year: "2023",
    },
    {
      title: "All India Rank 2",
      org: "AIIMS DM Gastroenterology Super-Speciality Entrance",
      year: "2020",
    },
    {
      title: "Full-Thickness Resection (FTRD) Certified",
      org: "OVESCO Germany / AIIMS New Delhi",
      year: "2025",
    },
    {
      title: "Distinction in Cardiology",
      org: "Johns Hopkins University Post-Graduate Program",
      year: "2017",
    },
    {
      title: "Editorial Fellow",
      org: "Indian Journal of Gastroenterology (IJG)",
      year: "2024 – Present",
    },
  ];

  const internationalList = [
    {
      title: "Best Oral Presentation Award (Clinical Science)",
      event: "EASL Congress 2024, Milan, Italy",
      desc: "Randomized controlled trial on simvastatin + carvedilol for survival in decompensated cirrhosis.",
    },
    {
      title: "Poster of Distinction",
      event: "Asian Pacific Digestive Week (APDW) 2025, Singapore",
      desc: "VAPT-EASE study on EUS-guided thrombin-coil embolization for visceral arterial pseudoaneurysms.",
    },
    {
      title: "Poster Presentation",
      event: "Digestive Disease Week (DDW) 2024, Washington D.C., USA",
      desc: "Metagenomics & microbiome in pancreatic tissue of chronic pancreatitis patients.",
    },
    {
      title: "Best Abstract Presentation Prize",
      event: "UEG Week 2025, Messe Berlin, Germany",
      desc: "Moderated poster session in EUS Hot Topics & difficult CBD stone clearance.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F4F7F9] text-[#1C2936] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00843D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0078BF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#00843D] text-xs font-extrabold uppercase tracking-widest shadow-2xs">
            About Dr. Randeep Rana
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Excellence in Gastroenterology &amp; <br className="hidden sm:inline" />
            <span className="text-[#00843D] italic">Advanced Endoscopy Care</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Combining academic rigor from AIIMS New Delhi, Dr. RML Hospital, and DMCH with compassionate, patient-centered care at Max Smart Super Speciality Hospital, Saket.
          </p>
        </div>

        {/* Top Key Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-xs">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-1 hover:border-[#00843D]/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#00843D]">Gold Medalist</span>
            <span className="text-xs text-slate-600 font-medium block">1st in Medicine (MBBS)</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-1 hover:border-[#00843D]/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#00843D]">AIR 1</span>
            <span className="text-xs text-slate-600 font-medium block">AIIMS Fellowship Entrance</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-1 hover:border-[#00843D]/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#00843D]">15+ Years</span>
            <span className="text-xs text-slate-600 font-medium block">Clinical &amp; Research Exp</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-1 hover:border-[#00843D]/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#00843D]">Global Impact</span>
            <span className="text-xs text-slate-600 font-medium block">EASL, DDW, APDW, UEG</span>
          </div>
        </div>

        {/* Main Grid: Interactive Slider + Bio Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Image Carousel Slider (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Slider Viewport */}
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 group bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/95 via-[#002C47]/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#00843D] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{slides[currentSlide].tag}</span>
                </span>
              </div>

              {/* Slider Arrows */}
              <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                <button
                  onClick={handlePrevSlide}
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all transform group-hover:translate-x-0 -translate-x-2 opacity-80 hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all transform group-hover:translate-x-0 translate-x-2 opacity-80 hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Text Content */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white space-y-1">
                <h3 className="text-lg sm:text-xl font-serif font-bold leading-snug">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light line-clamp-2">
                  {slides[currentSlide].desc}
                </p>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-2 right-5 z-20 flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === i ? "w-6 bg-[#00843D]" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="grid grid-cols-5 gap-2">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative rounded-xl overflow-hidden h-14 sm:h-16 border-2 transition-all ${
                    currentSlide === idx
                      ? "border-[#00843D] ring-2 ring-[#00843D]/30 scale-102"
                      : "border-slate-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Bio summary */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-serif font-bold text-[#002C47] flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-[#00843D]" />
                <span>Consultant-Led GI &amp; Hepatology Leadership</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                <strong className="text-[#002C47] font-semibold">Dr. Randeep Rana</strong> is Consultant Gastroenterology at Max Smart Super Speciality Hospital, Saket. Holding MBBS (Gold Medalist, DMCH), M.D (Dr. RMLH), D.M (Gastroenterology, AIIMS Delhi), and Fellowship in Advanced GI Endoscopy (AIIMS Delhi), he is an Ex-Assistant Professor at GIPMER.
              </p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3 hover:border-[#00843D]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] text-[#00843D] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#002C47]">Our Clinical Mission</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  To provide evidence-based, compassionate gastroenterology care, utilizing advanced interventional endoscopy with warmth, diagnostic clarity, and patient empowerment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3 hover:border-[#0078BF]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#0078BF] flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#002C47]">Our Vision</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  To set global benchmark standards in therapeutic endoscopy, cirrhosis long-term survival, and non-invasive pancreatic and liver care without unnecessary surgery.
                </p>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-[#F0FDF4] to-[#F0F9FF] p-6 rounded-3xl border border-emerald-200/80 shadow-xs space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00843D]">
                  Comprehensive Curriculum Vitae
                </span>
                <h4 className="text-lg font-serif font-bold text-[#002C47]">
                  View Full Academic Profile &amp; Research
                </h4>
                <p className="text-xs text-slate-600 font-light">
                  Explore Dr. Rana&apos;s complete research publications, conference presentations, and clinical credentials.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="px-5 py-3 rounded-xl bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Full CV</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#002C47] border border-slate-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Calendar className="w-4 h-4 text-[#00843D]" />
                  <span>Book Visit</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Tabbed Section: Career, Education, Awards, Global Research */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-100 pb-4">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "education"
                  ? "bg-[#00843D] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Pedigree</span>
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "experience"
                  ? "bg-[#00843D] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Clinical Appointments</span>
            </button>

            <button
              onClick={() => setActiveTab("honors")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "honors"
                  ? "bg-[#00843D] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Honors &amp; Ranks</span>
            </button>

            <button
              onClick={() => setActiveTab("international")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "international"
                  ? "bg-[#00843D] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Global Research (EASL/DDW)</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <AnimatePresence mode="wait">
            {/* 1. Education Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {educationTimeline.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2 hover:border-[#00843D]/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2.5 py-0.5 rounded">
                        {edu.year}
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#002C47]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-[#0078BF]">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 font-light leading-relaxed pt-1">
                        {edu.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {experienceList.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2 hover:border-[#00843D]/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0078BF] bg-[#EFF6FF] px-2.5 py-0.5 rounded">
                        {exp.year}
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#002C47]">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-[#00843D]">
                        {exp.inst}
                      </p>
                      <p className="text-xs text-slate-500 font-light leading-relaxed pt-1">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. Honors Tab */}
            {activeTab === "honors" && (
              <motion.div
                key="honors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {honorsList.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2 hover:border-[#D97706]/40 transition-colors flex items-start gap-3"
                  >
                    <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#002C47]">
                        {h.title}
                      </h4>
                      <p className="text-[11px] text-[#00843D] font-medium mt-0.5">
                        {h.org}
                      </p>
                      <span className="text-[10px] text-slate-400 font-light block mt-1">
                        {h.year}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 4. International Research Tab */}
            {activeTab === "international" && (
              <motion.div
                key="international"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {internationalList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-2 hover:border-[#0078BF]/40 transition-colors"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0078BF] bg-[#EFF6FF] px-2.5 py-0.5 rounded">
                      {item.event}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#002C47]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
