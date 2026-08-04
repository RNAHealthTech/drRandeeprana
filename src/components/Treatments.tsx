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
      icon: Search,
      title: "Painless Upper GI Gastroscopy",
      tag: "Diagnostic & Therapeutic",
      duration: "15 - 20 Mins",
      anesthesia: "Light Sedation (Painless)",
      description: "Visual inspection of esophagus, stomach, and duodenum to diagnose ulcers, GERD, H. Pylori infection, and strictures.",
      benefits: ["100% painless under light sedation", "Biopsy for rapid diagnosis", "Immediate digital report"],
    },
    {
      icon: Stethoscope,
      title: "Screening & Therapeutic Colonoscopy",
      tag: "Lower GI Procedures",
      duration: "20 - 30 Mins",
      anesthesia: "Painless Sedation",
      description: "Complete examination of the large intestine (colon) and terminal ileum for polyp detection, lower GI bleeding, and colitis evaluation.",
      benefits: ["Polyp removal during procedure", "Early colon cancer prevention", "High-definition video imaging"],
    },
    {
      icon: Activity,
      title: "ERCP (Bile Duct Stone & Jaundice Care)",
      tag: "Advanced Biliary Interventions",
      duration: "45 - 60 Mins",
      anesthesia: "Monitored Anesthesia Care",
      description: "Endoscopic removal of bile duct stones, placement of plastic/metallic stents for obstructive jaundice, and pancreatic duct interventions.",
      benefits: ["Avoids major open surgery", "Immediate jaundice relief", "Same-day recovery tracking"],
    },
    {
      icon: Zap,
      title: "Endoscopic Variceal Band Ligation (EVL)",
      tag: "Emergency Endoscopy",
      duration: "20 Mins",
      anesthesia: "Sedation / MAC",
      description: "Life-saving endoscopic banding for esophageal varices secondary to liver cirrhosis, preventing severe internal bleeding.",
      benefits: ["Immediate hemostasis control", "Prevents re-bleeding episodes", "Standard liver care protocol"],
    },
    {
      icon: ShieldCheck,
      title: "Polypectomy & Mucosal Resection (EMR)",
      tag: "Pre-Cancerous Lesions",
      duration: "30 Mins",
      anesthesia: "Sedation",
      description: "Endoscopic removal of precancerous polyps in esophagus, stomach, or colon using snare electrocautery without surgical incisions.",
      benefits: ["Complete lesion eradication", "No surgical scar", "Histopathology confirmation"],
    },
    {
      icon: Heart,
      title: "Non-Invasive Fatty Liver & FibroScan",
      tag: "Hepatology Clinic",
      duration: "10 Mins",
      anesthesia: "Non-Invasive (No Sedation)",
      description: "Quantitative assessment of liver fat percentage (CAP score) and liver stiffness (Fibrosis stage) to arrest progression to cirrhosis.",
      benefits: ["Zero pain or needle prick", "Instant liver health score", "Personalized reversal roadmap"],
    },
  ];

  return (
    <section id="treatments" className="py-24 bg-white relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
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

        {/* Realistic Procedure Facility Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Advanced Endoscopy Suite */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl group border border-[#DDE6ED] h-64 sm:h-72">
            <img
              src="/images/endoscopy-suite.png"
              alt="Advanced Hospital Endoscopy Suite Max Smart Saket"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002C47] via-[#002C47]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="px-3 py-1 rounded-full bg-[#6CB29D] text-[10px] font-extrabold uppercase tracking-widest text-white inline-block">
                Interventional Endoscopy Suite
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                HD Narrow-Band Imaging & CO2 Endoscopy
              </h3>
              <p className="text-xs text-slate-200 font-light">
                Equipped with latest Olympus & Fujinon EUS/ERCP towers for painless diagnostic & therapeutic procedures.
              </p>
            </div>
          </div>

          {/* Card 2: FibroScan & Non-Invasive Hepatology */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl group border border-[#DDE6ED] h-64 sm:h-72">
            <img
              src="/images/fibroscan-liver-care.png"
              alt="FibroScan Quantitative Liver Assessment Equipment"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002C47] via-[#002C47]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="px-3 py-1 rounded-full bg-[#001D30] border border-[#6CB29D]/50 text-[10px] font-extrabold uppercase tracking-widest text-[#6CB29D] inline-block">
                Hepatology & Liver Diagnostics
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Non-Invasive FibroScan & Fatty Liver Clinic
              </h3>
              <p className="text-xs text-slate-200 font-light">
                Instant stiffness & fat CAP scoring without needle puncture or pain for early fatty liver reversal.
              </p>
            </div>
          </div>
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
                className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#6CB29D]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-extrabold text-[#6CB29D] bg-[#EBF5F2] px-3 py-1 rounded-full uppercase tracking-wider">
                      {proc.tag}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-[#002C47] text-[#6CB29D] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors mb-3">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6CB29D]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Per Card Action CTA */}
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-full font-bold text-white bg-[#002C47] hover:bg-[#001D30] transition-all shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <span>Book Procedure Consult</span>
                  <ArrowRight className="w-4 h-4 text-[#6CB29D]" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Clinical Insights Banner */}
        <div className="mt-20 bg-[#002C47] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-4xl">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#6CB29D] text-xs font-extrabold uppercase tracking-widest border border-[#6CB29D]/30 inline-block">
              Featured Clinical Research & Breakthroughs
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Pioneering Interventions in Hepatology & Pancreatology
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Insight 1: Endoscopic Pancreatitis Review */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
                <span className="text-[11px] font-bold text-[#6CB29D] uppercase tracking-wider">
                  Indian Journal of Gastroenterology
                </span>
                <h4 className="text-base font-serif font-bold text-white leading-snug">
                  Endoscopic Interventions for Managing Pancreatic Fluid Collections
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Dr. Rana's state-of-the-art review highlights EUS-guided cystogastrostomy as a minimally invasive alternative to traditional surgery for draining pancreatic pseudocysts and walled-off necrosis.
                </p>
              </div>

              {/* Insight 2: Simvastatin Cirrhosis Trial */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
                <span className="text-[11px] font-bold text-[#6CB29D] uppercase tracking-wider">
                  Am J Gastroenterol & JAMA
                </span>
                <h4 className="text-base font-serif font-bold text-white leading-snug">
                  Simvastatin Addition Improves Long-Term Survival in Cirrhosis
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
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
