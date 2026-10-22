"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Search,
  Activity,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Heart,
  SquarePen,
} from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      icon: Activity,
      title: "ERCP & Complex Pancreatico-Biliary Interventions",
      tag: "Biliary & Pancreas",
      duration: "30 - 60 Mins",
      anesthesia: "Monitored Sedation / MAC",
      description: "Endoscopic extraction of CBD stones, plastic & metallic biliary/pancreatic stenting, and relief of obstructive jaundice.",
      benefits: ["Bile duct stone clearance", "Jaundice relief", "Minimally invasive alternative to open surgery"],
    },
    {
      icon: Search,
      title: "Advanced EUS & Drainage (Plastic / LAMS)",
      tag: "Diagnostic & Therapeutic EUS",
      duration: "30 - 45 Mins",
      anesthesia: "Monitored Sedation",
      description: "EUS-guided FNA biopsy, cystogastrostomy (plastic & LAMS / BFMS insertion), and endoscopic pancreatic necrosectomy.",
      benefits: ["Minimally invasive cyst drainage", "High-definition diagnostic accuracy", "Same-day recovery tracking"],
    },
    {
      icon: Zap,
      title: "Third Space Endoscopy (POEM, ESD, STER)",
      tag: "Submucosal Endoscopy",
      duration: "45 - 90 Mins",
      anesthesia: "General Anesthesia / MAC",
      description: "Peroral Endoscopic Myotomy (POEM) for Achalasia Cardia, Endoscopic Submucosal Dissection (ESD), and STER for submucosal tumors.",
      benefits: ["No external incisions", "Organ-preserving therapy", "Established clinical protocol"],
    },
    {
      icon: ShieldCheck,
      title: "Early GI Cancer & EFTR (FTRD)",
      tag: "Preventive Oncology & Resection",
      duration: "30 - 60 Mins",
      anesthesia: "Sedation / MAC",
      description: "Early GI cancer diagnosis with IEE/NBI, EMR, ESD, and Full-Thickness Resection Device (FTRD / EFTR by OVESCO Germany).",
      benefits: ["Targeted lesion resection", "Certified FTRD expertise", "Histopathology confirmation"],
    },
    {
      icon: Heart,
      title: "EUS Vascular & Biliary Drainage (EUS-HGS / CDS)",
      tag: "Advanced Interventional EUS",
      duration: "45 - 60 Mins",
      anesthesia: "MAC / General Anesthesia",
      description: "EUS-guided hepaticogastrostomy (EUS-HGS), choledochoduodenostomy (EUS-CDS), gastrojejunostomy (EUS-GE), and variceal/pseudoaneurysm coiling & glue.",
      benefits: ["Advanced biliary bypass", "Vascular pseudoaneurysm control", "Endoscopic enterostomy"],
    },
    {
      icon: Stethoscope,
      title: "Diagnostic & Therapeutic Endoscopy / Colonoscopy",
      tag: "Routine & Emergency GI",
      duration: "15 - 30 Mins",
      anesthesia: "Monitored Conscious Sedation",
      description: "Diagnostic and therapeutic Upper GI gastroscopy, variceal ligation (EVL), non-variceal bleed management, colonoscopy, and hot/cold snare polypectomy.",
      benefits: ["Sedation-supported comfort", "Immediate bleeding control", "Early polyp detection & removal"],
    },
  ];

  return (
    <section id="treatments" className="py-16 bg-white relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-md bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Advanced Endoscopic & Liver Procedures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Specialized Procedures & <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Interventional Care</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            State-of-the-art procedures performed in modern, accredited endoscopy suites at Max Smart Super Speciality Hospital, Saket.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((proc, idx) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-extrabold text-[#6CB29D] bg-[#EBF5F2] px-3 py-1 rounded-md uppercase tracking-wider">
                      {proc.tag}
                    </span>
                    <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#00843D] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#002C47] mb-3">
                    {proc.title}
                  </h3>

                  {/* Quick Meta */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4 pb-4 border-b border-slate-200">
                    <span className="flex items-center gap-1 text-[#002C47]">
                      <Clock className="w-3.5 h-3.5 text-[#6CB29D]" /> {proc.duration}
                    </span>
                    <span>•</span>
                    <span className="text-[#6CB29D]">{proc.anesthesia}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {proc.description}
                  </p>

                  {/* Clinical Benefits */}
                  <div className="space-y-2 mb-8">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Key Advantages:</div>
                    {proc.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-md bg-[#6CB29D]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Per Card Action CTA */}
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-md font-bold text-white bg-[#6CB29D] hover:bg-[#5BA897] transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <span>Book Procedure Consult</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Clinical Insights Banner */}
        <div className="mt-20 bg-[#F4F7F9] border border-[#DDE6ED] rounded-md p-8 sm:p-12 text-[#1C2936] relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-4xl">
            <span className="px-3.5 py-1.5 rounded-md bg-white text-[#00843D] text-xs font-extrabold uppercase tracking-widest border border-[#6CB29D]/30 inline-block">
              Featured Clinical Research & Breakthroughs
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              Pioneering Interventions in Hepatology & Pancreatology
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Insight 1: Endoscopic Pancreatitis Review */}
              <div className="bg-white p-6 rounded-md border border-[#DDE6ED] space-y-3">
                <span className="text-[11px] font-bold text-[#00843D] uppercase tracking-wider">
                  Indian Journal of Gastroenterology
                </span>
                <h4 className="text-base font-serif font-bold text-[#002C47] leading-snug">
                  Endoscopic Interventions for Managing Pancreatic Fluid Collections
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Dr. Rana&apos;s state-of-the-art review highlights EUS-guided cystogastrostomy as a minimally invasive alternative to traditional surgery for draining pancreatic pseudocysts and walled-off necrosis.
                </p>
              </div>

              {/* Insight 2: Simvastatin Cirrhosis Trial */}
              <div className="bg-white p-6 rounded-md border border-[#DDE6ED] space-y-3">
                <span className="text-[11px] font-bold text-[#00843D] uppercase tracking-wider">
                  Am J Gastroenterol & JAMA
                </span>
                <h4 className="text-base font-serif font-bold text-[#002C47] leading-snug">
                  Simvastatin Addition Improves Long-Term Survival in Cirrhosis
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Landmark randomized controlled trial exploring novel statin & rifaximin therapy to reduce portal hypertension, lower variceal re-bleeding risk, and improve long-term survival in decompensated cirrhosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
