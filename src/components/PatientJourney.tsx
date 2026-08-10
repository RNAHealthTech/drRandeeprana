"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, UserCheck, Search, ShieldCheck, HeartPulse } from "lucide-react";

export default function PatientJourney() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your OPD visit at Max Smart Saket online or via phone (+91 95015 69493) at a time convenient for you.",
    },
    {
      number: "02",
      icon: UserCheck,
      title: "Detailed Consultation",
      description: "Meet Dr. Randeep Rana for a comprehensive evaluation of your symptoms, medical history, and dietary habits.",
    },
    {
      number: "03",
      icon: Search,
      title: "Accurate Diagnosis",
      description: "Undergo high-definition endoscopy, FibroScan, or blood markers if needed for precise disease identification.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Tailored Treatment",
      description: "Receive evidence-based pharmacological treatment, dietary counseling, or therapeutic endoscopic intervention.",
    },
    {
      number: "05",
      icon: HeartPulse,
      title: "Recovery & Follow-Up",
      description: "Continuous post-treatment care tracking, lifestyle guidance, and routine follow-ups ensuring long-term gut health.",
    },
  ];

  return (
    <section id="patient-journey" className="py-24 bg-[#F4F7F9] relative overflow-hidden text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Seamless Healthcare Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Your Care Journey With <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Dr. Randeep Rana</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            A structured 5-step patient pathway designed for maximum comfort, transparency, and rapid medical recovery.
          </p>
        </div>

        {/* 5 Steps Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-[#DDE6ED] z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="relative z-10 bg-white border border-[#DDE6ED] rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-[#6CB29D]/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Step Circle Badge */}
                <div className="h-14 w-14 rounded-full bg-[#002C47] text-[#6CB29D] flex items-center justify-center text-xl font-serif font-bold mb-6 shadow-md group-hover:bg-[#6CB29D] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold text-[#6CB29D] uppercase tracking-widest mb-1">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-serif font-bold text-[#002C47] mb-2 group-hover:text-[#6CB29D] transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Patient Recovery Lounge Visual Showcase */}
        <div className="mt-16 bg-white border border-[#DDE6ED] rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-64 sm:h-80 relative">
            <img
              src="/images/patient-recovery.png"
              alt="Luxury patient recovery lounge and post-op care"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Day-Care Procedure Recovery
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              Painless Procedures & Rapid Recovery
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              Most diagnostic and therapeutic endoscopies are completed in 15–30 minutes under conscious sedation. Patients rest comfortably in our private recovery lounge and can resume normal activities the same day.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-[#002C47]">
              <span className="flex items-center gap-1.5 bg-[#F4F7F9] px-3 py-1.5 rounded-full border border-slate-200">
                ✓ Zero Surgical Incisions
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7F9] px-3 py-1.5 rounded-full border border-slate-200">
                ✓ Monitored Sedation
              </span>
              <span className="flex items-center gap-1.5 bg-[#F4F7F9] px-3 py-1.5 rounded-full border border-slate-200">
                ✓ Same-Day Discharge
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
