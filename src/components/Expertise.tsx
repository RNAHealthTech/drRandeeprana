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
} from "lucide-react";

export default function Expertise() {
  const expertiseItems = [
    {
      icon: Flame,
      title: "Acidity & Heartburn",
      category: "Upper GI Care",
      description: "Advanced evaluation for persistent chest burning, hyperacidity, sour regurgitation, and stomach irritation with personalized dietary and medical care.",
      symptoms: ["Chest burning", "Sour taste", "Nausea", "Bloating"],
    },
    {
      icon: ShieldAlert,
      title: "GERD & Reflux Disease",
      category: "Motility Disorder",
      description: "Comprehensive management of chronic esophageal reflux, hiatal hernia, Barrett's esophagus, and refractory regurgitation.",
      symptoms: ["Chronic cough", "Dysphagia", "Chest pain", "Acid regurgitation"],
    },
    {
      icon: HeartPulse,
      title: "Fatty Liver & NAFLD",
      category: "Hepatology",
      description: "Early non-invasive screening, FibroScan correlation, metabolic correction, and anti-fibrotic treatment for Non-Alcoholic Fatty Liver Disease.",
      symptoms: ["Right abdominal heaviness", "Fatigue", "Elevated ALT/AST", "Metabolic syndrome"],
    },
    {
      icon: Activity,
      title: "IBS & Functional GI",
      category: "Bowel Health",
      description: "Tailored multi-modal therapy for Irritable Bowel Syndrome (IBS-C, IBS-D, IBS-M), food intolerances, and gut microbiome optimization.",
      symptoms: ["Abdominal cramps", "Irregular stool pattern", "Bloating", "Mucus in stool"],
    },
    {
      icon: Search,
      title: "Diagnostic Colonoscopy",
      category: "Lower GI Procedures",
      description: "High-definition, painless screening colonoscopy for colon polyps, lower GI bleeding, unexplained weight loss, and colorectal cancer prevention.",
      symptoms: ["Blood in stool", "Chronic diarrhea", "Anemia", "Unexplained weight loss"],
    },
    {
      icon: Stethoscope,
      title: "Advanced Endoscopy",
      category: "Interventional Procedures",
      description: "Therapeutic gastroscopy, esophageal stricture dilation, foreign body removal, bleeding ulcer hemostasis, and band ligation.",
      symptoms: ["Difficulty swallowing", "Vomiting blood", "Black tarry stool", "Persistent nausea"],
    },
    {
      icon: Microscope,
      title: "ERCP Procedures",
      category: "Biliary & Pancreas",
      description: "Endoscopic Retrograde Cholangiopancreatography for common bile duct stone clearance, jaundice relief, biliary stenting, and strictures.",
      symptoms: ["Jaundice (yellow skin)", "Severe upper abdominal pain", "Dark urine", "Pale stools"],
    },
    {
      icon: Cross,
      title: "Liver Diseases & Cirrhosis",
      category: "Advanced Hepatology",
      description: "Expert management of Hepatitis B/C, alcoholic liver disease, liver cirrhosis, ascites management, hepatic encephalopathy, and portal hypertension.",
      symptoms: ["Abdominal swelling", "Leg edema", "Jaundice", "Easy bruising"],
    },
    {
      icon: AlertTriangle,
      title: "Acute & Chronic Pancreatitis",
      category: "Pancreatic Care",
      description: "Specialized inpatient and outpatient management of pancreatic inflammation, pancreatic pseudocysts, digestive enzyme deficiency, and severe pain control.",
      symptoms: ["Severe back-radiating pain", "Oily stools", "Unexplained weight loss", "Vomiting"],
    },
    {
      icon: Search,
      title: "GI Cancer Screening",
      category: "Preventive Oncology",
      description: "Early detection of esophagus, stomach, colon, gallbladder, and liver cancers through high-resolution magnification endoscopy and NBI technology.",
      symptoms: ["Family history of cancer", "Loss of appetite", "Early satiety", "Persistent anemia"],
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-[#F4F7F9] relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
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
                className="bg-white border border-[#DDE6ED] rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-[#6CB29D]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-full bg-[#EBF5F2] text-[#6CB29D] flex items-center justify-center group-hover:bg-[#002C47] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#6CB29D] bg-[#EBF5F2] px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors mb-3">
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
                  className="w-full py-3 rounded-full text-xs font-bold text-[#002C47] bg-[#EBF5F2] group-hover:bg-[#002C47] group-hover:text-white transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Consult Dr. Rana</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
