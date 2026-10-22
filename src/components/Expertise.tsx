"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Activity,
  ShieldAlert,
  Search,
  Stethoscope,
  HeartPulse,
  Microscope,
  Cross,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  SquarePen,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function Expertise() {
  const expertiseItems = [
    {
      icon: Microscope,
      title: "Pancreatico-Biliary Sciences & ERCP",
      category: "Special Interest",
      description: "Advanced diagnostic & therapeutic interventions for acute/chronic pancreatitis, pancreatic head mass, fluid collections, and complex bile duct stone extraction via ERCP.",
      symptoms: ["Jaundice", "Severe back pain", "Bile duct stones", "Pancreatic mass"],
    },
    {
      icon: Activity,
      title: "Advanced Endoscopy (EUS / ERCP)",
      category: "Advanced Procedures",
      description: "Diagnostic & therapeutic endosonography including plastic/LAMS cystogastrostomy, pancreatic stenting, necrosectomy, and vascular pseudoaneurysm embolization.",
      symptoms: ["Pancreatic cyst", "Strictures", "Biliary obstruction", "Fluid collection"],
    },
    {
      icon: Zap,
      title: "Third Space Endoscopy (POEM, ESD, STER)",
      category: "Interventional Specialization",
      description: "Submucosal endoscopy procedures including Peroral Endoscopic Myotomy (POEM) for achalasia, ESD and Submucosal Tunneling Endoscopic Resection (STER).",
      symptoms: ["Achalasia cardia", "Submucosal tumor", "Difficulty swallowing", "GI lesions"],
    },
    {
      icon: ShieldCheck,
      title: "Early GI Cancer & EFTR (FTRD)",
      category: "Oncology & Resection",
      description: "Early GI cancer diagnosis (IEE, NBI) and full-thickness resection device (FTRD / EFTR) by OVESCO Germany certification, EMR and ESD for early mucosal neoplasms.",
      symptoms: ["Early mucosal lesions", "Polyps", "Subepithelial tumors", "Gastric dysplasia"],
    },
    {
      icon: HeartPulse,
      title: "Inflammatory Bowel Diseases (IBD)",
      category: "Special Interest",
      description: "Comprehensive care for complicated and steroid-refractory Ulcerative Colitis, Crohn's Disease, Celiac Enteropathy, and Intestinal Tuberculosis.",
      symptoms: ["Bloody diarrhea", "Abdominal cramps", "Weight loss", "Mucus in stool"],
    },
    {
      icon: Cross,
      title: "Portal Hypertension & Endo-Hepatology",
      category: "Hepatology Specialization",
      description: "Evidence-based management of liver cirrhosis, variceal bleeding (EVL, medical regimens), ascites in ACLF/cirrhosis, and EUS-guided variceal interventions.",
      symptoms: ["Variceal bleed", "Ascites", "Jaundice", "Hepatic encephalopathy"],
    },
    {
      icon: Flame,
      title: "Acidity, Severe GERD & Motility",
      category: "Upper GI",
      description: "Advanced evaluation of severe reflux disease, acid peptic disorders, Barrett's esophagus, hiatal hernia, and functional bowel disorders.",
      symptoms: ["Heartburn", "Sour regurgitation", "Chest burning", "Dysphagia"],
    },
    {
      icon: Search,
      title: "Diagnostic & Therapeutic Colonoscopy",
      category: "Lower GI",
      description: "High-definition screening colonoscopy, hot/cold snare polypectomy, lower GI bleeding workup, and early polyp detection.",
      symptoms: ["Blood in stool", "Chronic diarrhea", "Anemia", "Polyp screening"],
    },
  ];

  return (
    <section id="expertise" className="py-16 bg-[#F4F7F9] relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Clinical Expertise & Conditions Treated
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Specialized Care for <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Digestive & Liver Health</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Delivering precise diagnosis and compassionate, evidence-based management across all major gastroenterological and hepatological conditions.
          </p>
        </div>

        {/* 10 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-md bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center group-hover:bg-[#002C47] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#6CB29D] bg-[#EBF5F2] px-3 py-1 rounded-md uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#002C47] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Symptoms List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Key Warning Symptoms:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.symptoms.map((symptom) => (
                        <span
                          key={symptom}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md"
                        >
                          <CheckCircle className="w-3 h-3 text-[#6CB29D]" />
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href="#contact"
                  className="w-full py-3 rounded-md text-xs font-bold text-[#002C47] bg-[#EBF5F2] hover:bg-[#002C47] hover:text-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Consult Dr. Rana</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
