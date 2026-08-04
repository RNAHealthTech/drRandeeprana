"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Eye, Award, CheckCircle, SquarePen } from "lucide-react";

export default function About() {
  const educationTimeline = [
    {
      degree: "Fellowship in Advanced GI Endoscopy",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "2023 - 2024",
      description: "Super-specialized training in Endoscopic Ultrasound (EUS), ERCP, and complex interventional GI procedures.",
    },
    {
      degree: "DM (Gastroenterology)",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "2020 - 2023",
      description: "Pivotal research on decompensated cirrhosis, variceal bleeding, and pancreatic fluid collection management.",
    },
    {
      degree: "MD (Internal Medicine)",
      institution: "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      year: "2019",
      description: "Rigorous clinical residency in internal medicine, acute emergency care, and systemic disease diagnostics.",
    },
  ];

  const highlights = [
    "Over 15+ years of extensive clinical & interventional experience",
    "Expert in EUS, ERCP, and EUS-guided cystogastrostomy",
    "Assistant Professor of Gastroenterology at GIPMER & MAMC",
    "Consultant Gastroenterologist at Max Smart Super Speciality Hospital, Saket",
    "Over 40 high-impact research publications in JAMA, AJG, and IJG",
    "Editorial Fellow of the Indian Journal of Gastroenterology (IJG)",
  ];

  return (
    <section id="about" className="py-24 bg-[#F4F7F9] relative overflow-hidden text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            About Dr. Randeep Rana
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Excellence in Gastroenterology & <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Advanced Endoscopy Care</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Combining academic rigor from AIIMS New Delhi and PGIMER Chandigarh with compassionate patient care at Max Smart Super Speciality Hospital Saket and GIPMER / MAMC.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Biography & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DDE6ED] shadow-sm space-y-6">
              {/* Realistic Clinical Showcase Banner Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-md group h-56 sm:h-64 mb-6 border border-slate-100">
                <img
                  src="/images/doctor-consultation.png"
                  alt="Dr. Randeep Rana consulting patient in clinic"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#6CB29D] text-[10px] font-extrabold uppercase tracking-widest text-white mb-1 inline-block">
                    Patient-Centered Care
                  </span>
                  <div className="text-sm font-serif font-bold">
                    Compassionate Clinical Consultations & Diagnostic Clarity
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#002C47] flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#6CB29D]" />
                Professional Profile & Clinical Legacy
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                <strong className="text-[#002C47] font-semibold">Dr. Randeep Rana</strong> is a distinguished Consultant Gastroenterologist, Hepatologist, and Pancreatologist in New Delhi. Describing himself as <em className="text-[#002C47] font-serif font-medium">&ldquo;a gastroenterologist by profession, a therapeutic endoscopist by choice, and a Punjabi by heart,&rdquo;</em> he combines deep cultural empathy with cutting-edge interventional medicine.
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                Currently serving as Assistant Professor in the Department of Gastroenterology at GB Pant Institute (GIPMER) & Maulana Azad Medical College (MAMC), and consulting at Max Smart Superspeciality Hospital Saket, Dr. Rana is a recognized authority in Endoscopic Ultrasound (EUS), ERCP, cirrhosis survival, and complex acute/chronic pancreatitis.
              </p>

              {/* Key Clinical Highlights */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-extrabold text-[#002C47] uppercase tracking-widest">
                  Key Clinical Credentials
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#002C47] text-white p-6 rounded-3xl space-y-3 shadow-md">
                <div className="h-10 w-10 rounded-full bg-[#6CB29D] text-white flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white">Our Mission</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  To provide evidence-based, compassionate gastroenterology care, utilizing advanced interventional endoscopy with warmth, clarity, and patient empowerment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#DDE6ED] space-y-3 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#002C47]">Our Vision</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  To set global benchmark standards in therapeutic endoscopy, cirrhosis long-term survival, and non-invasive pancreatic and liver care.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#DDE6ED] shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#002C47]">Academic Timeline</h3>
            </div>

            <div className="relative border-l-2 border-[#DDE6ED] pl-6 ml-4 space-y-8">
              {educationTimeline.map((edu) => (
                <div key={edu.degree} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#6CB29D] shadow-md group-hover:scale-125 transition-transform" />
                  
                  <div className="inline-block px-3 py-0.5 rounded-full bg-[#EBF5F2] text-[#002C47] text-[11px] font-bold tracking-wider mb-2">
                    {edu.year}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-[#6CB29D] mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* AIIMS Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-[#002C47] text-white flex items-center space-x-4">
              <Award className="w-8 h-8 text-[#6CB29D] shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#6CB29D]">AIIMS New Delhi Fellowship</div>
                <div className="text-xs font-light text-slate-200 mt-0.5">Specialized Interventional Therapeutic Endoscopy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
