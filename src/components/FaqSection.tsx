"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where does Dr. Randeep Rana practice in New Delhi?",
      a: "Dr. Randeep Rana is Consultant Gastroenterologist practicing at Max Smart Super Speciality Hospital, Saket, New Delhi and Assistant Professor at GB Pant Institute (GIPMER) & MAMC. You can book an OPD consultation directly through this website or by calling +91 98765 43210.",
    },
    {
      q: "What are Dr. Randeep Rana's educational qualifications?",
      a: "Dr. Randeep Rana holds an MD in General Medicine (PGIMER Chandigarh), a DM in Gastroenterology from AIIMS New Delhi, and a Fellowship in Advanced GI Endoscopy from AIIMS New Delhi.",
    },
    {
      q: "Is an Endoscopy or Colonoscopy procedure painful?",
      a: "No! Under Dr. Randeep Rana's protocol, endoscopic procedures (Gastroscopy and Colonoscopy) are performed under conscious sedation or light anesthesia. Patients experience zero pain or discomfort during the procedure.",
    },
    {
      q: "What is GERD and how is chronic acid reflux treated?",
      a: "GERD (Gastroesophageal Reflux Disease) is a condition where stomach acid frequently flows back into the esophagus. Dr. Rana evaluates stomach motility, checks for Hiatal Hernia, and provides targeted acid suppression, dietary modification, and endoscopic intervention if necessary.",
    },
    {
      q: "Can Fatty Liver Disease be reversed?",
      a: "Yes! Non-Alcoholic Fatty Liver Disease (NAFLD) is reversible in early and moderate stages. Dr. Rana utilizes non-invasive FibroScan testing to assess liver fat and fibrosis, paired with a custom medical and lifestyle reversal roadmap.",
    },
    {
      q: "What symptoms require urgent consultation with a Gastroenterologist?",
      a: "You should seek immediate medical evaluation if you experience: vomiting blood, black tarry stools, difficulty swallowing, unexplained significant weight loss, persistent abdominal pain radiating to the back, or sudden jaundice (yellow skin/eyes).",
    },
    {
      q: "What is ERCP and when is it required?",
      a: "ERCP (Endoscopic Retrograde Cholangiopancreatography) is an advanced endoscopic procedure used to clear bile duct stones, treat obstructive jaundice, and place stents in bile or pancreatic ducts without open surgery.",
    },
    {
      q: "How should I prepare for a Colonoscopy?",
      a: "Colonoscopy preparation requires bowel cleansing using a special liquid laxative solution prescribed by Dr. Rana 12-24 hours prior to the procedure to clear the colon for high-definition video visualization.",
    },
    {
      q: "What is Irritable Bowel Syndrome (IBS) and how is it managed?",
      a: "IBS is a common disorder affecting the large intestine causing cramping, bloating, gas, and altered bowel habits. Dr. Rana provides comprehensive treatment combining gut-brain axis therapy, dietary FODMAP management, and gut microbiome regulation.",
    },
    {
      q: "Does Dr. Randeep Rana treat Acute and Chronic Pancreatitis?",
      a: "Yes. Dr. Rana specializes in treating severe pancreatic conditions, managing pancreatic enzymes (PERT), clearing ductal stones via ERCP, and draining pancreatic pseudocysts via EUS-guided cystogastrostomy.",
    },
    {
      q: "How often should gastrointestinal cancer screening be performed?",
      a: "Screening colonoscopy is generally recommended starting at age 45, or earlier if you have a family history of colon cancer, polyps, or IBD.",
    },
    {
      q: "What are the OPD timings for Dr. Randeep Rana at Max Smart Saket?",
      a: "OPD consultations are available Monday through Saturday from 10:00 AM to 5:00 PM. Prior online or phone booking is recommended to avoid waiting.",
    },
    {
      q: "Can I consult Dr. Randeep Rana for a second medical opinion?",
      a: "Absolutely. Dr. Rana routinely provides second opinions on complex GI diagnoses, liver biopsy reports, surgical recommendations, and difficult endoscopy cases.",
    },
    {
      q: "Are emergency endoscopic services available at Max Smart Hospital?",
      a: "Yes, 24x7 emergency gastroenterology and acute GI bleeding / foreign body removal endoscopy services are available at Max Smart Super Speciality Hospital, Saket.",
    },
    {
      q: "How can I book an appointment with Dr. Randeep Rana?",
      a: "You can book an appointment by filling out the online booking form on this website, or by calling +91 98765 43210 or messaging on WhatsApp.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative text-[#1C2936]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Patient Support & Information
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Frequently Asked <span className="text-[#6CB29D] italic">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Get answers to common queries regarding gastrointestinal health, endoscopy procedures, and OPD consultations.
          </p>
        </div>

        {/* 15 Q&A Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.03 * idx }}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#EBF5F2]/40 border-[#6CB29D]/50 shadow-md"
                    : "bg-[#F4F7F9] border-[#DDE6ED] hover:border-[#6CB29D]/40"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#6CB29D]" : "text-slate-400"}`} />
                    <span className={`text-base font-serif font-bold ${isOpen ? "text-[#002C47]" : "text-[#1C2936]"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#6CB29D] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-[#6CB29D]/10 font-light"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
