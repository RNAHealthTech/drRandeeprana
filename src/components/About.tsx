"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Eye, Award, CheckCircle, SquarePen } from "lucide-react";

export default function About() {
  const educationTimeline = [
    {
      degree: "Fellowship in Advanced GI Endoscopy",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "July 2023 – July 2024",
      description: "Super-specialized fellowship in Advanced GI Endoscopy, EUS, ERCP, and complex interventional procedures.",
    },
    {
      degree: "D.M. (Gastroenterology)",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      year: "July 2020 – July 2023",
      description: "Pivotal clinical and randomized controlled trial research in portal hypertension, cirrhosis survival, and pancreatic disorders.",
    },
    {
      degree: "M.D. (Internal Medicine)",
      institution: "ABVIMS & Dr Ram Manohar Lohia Hospital (Dr RMLH), New Delhi",
      year: "May 2015 – May 2018",
      description: "Comprehensive residency in internal medicine, acute emergency care, and multi-system medical management.",
    },
    {
      degree: "MBBS (Gold Medalist)",
      institution: "Dayanand Medical College & Hospital (DMCH), Ludhiana",
      year: "Aug 2008 – Dec 2012",
      description: "First Position & Gold Medal in Medicine, MBBS (2012). Internship completed 2013-2014.",
    },
  ];

  const highlights = [
    "Gold Medalist (First Position in Medicine, MBBS 2012)",
    "All India Rank 2 (AIIMS DM Entrance 2020) & AIR 1 (AIIMS Fellowship 2023)",
    "All India Rank 69, State Rank 2 (NEET-PG)",
    "Consultant Gastroenterology, Max Smart Superspeciality Hospital, Saket",
    "Ex-Assistant Professor, GB Pant Institute (GIPMER), New Delhi",
    "Ex-Associate Consultant, Sir Ganga Ram Hospital (ILGPS), New Delhi",
    "Editorial Fellow - Indian Journal of Gastroenterology",
    "Member: ESGE, ASGE, EASL, WEO, ILCA, IAP, ISG, SGEI, IPC, CCFI",
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
            Combining academic rigor from AIIMS New Delhi, Dr. RML Hospital, and DMCH with compassionate care at Max Smart Super Speciality Hospital, Saket.
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
                  src="/images/dr-randeep-rana-whitecoat.jpg"
                  alt="Dr. Randeep Rana consulting patient in clinic"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
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
                <strong className="text-[#002C47] font-semibold">Dr. Randeep Rana</strong> is Consultant Gastroenterology at Max Smart Superspeciality Hospital, Saket, New Delhi. Holding MBBS (Gold Medalist, DMCH), M.D (Dr. RMLH), D.M (Gastroenterology, AIIMS Delhi), and Fellowship in Advanced GI Endoscopy (AIIMS Delhi), he is an Ex-Assistant Professor at GB Pant Institute of Postgraduate Medical Education and Research (GIPMER).
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                Specializing in Pancreatico-Biliary Sciences, Inflammatory Bowel Diseases, Portal Hypertension, Advanced Endoscopy (EUS/ERCP), Third Space Endoscopy (POEM, ESD, STER), and Early GI Cancer Management (EMR, ESD, EFTR/FTRD), Dr. Rana serves as Editorial Fellow of the <em>Indian Journal of Gastroenterology</em> and is an active member of ESGE, ASGE, EASL, WEO, ILCA, IAP, ISG, SGEI, IPC, and CCFI.
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
            className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-3xl border border-[#DDE6ED] shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47]">Academic Timeline</h3>
            </div>

            <div className="relative border-l-2 border-[#DDE6ED] pl-4 sm:pl-6 ml-2 sm:ml-4 space-y-8">
              {educationTimeline.map((edu) => (
                <div key={edu.degree} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-white bg-[#6CB29D] shadow-md group-hover:scale-125 transition-transform" />
                  
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
