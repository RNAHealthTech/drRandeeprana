"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  X,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function Treatments() {
  const [pancreatitisModalOpen, setPancreatitisModalOpen] = useState(false);
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
      description: "Early GI cancer diagnosis with IEE/NBI, EMR, ESD, and Full-Thickness Resection Device (FTRD / EFTR), for which he holds certification from OVESCO, Germany.",
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
              <div className="bg-white p-6 rounded-md border border-[#DDE6ED] space-y-4 flex flex-col justify-between hover:border-[#00843D]/50 transition-all shadow-xs">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-[#00843D] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Indian Journal of Gastroenterology
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#002C47] leading-snug">
                    Endoscopic Interventions for Managing Pancreatic Fluid Collections
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Dr. Rana&apos;s state-of-the-art review highlights EUS-guided cystogastrostomy as a minimally invasive alternative to traditional surgery for draining pancreatic pseudocysts and walled-off necrosis.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/blog/understanding-pancreatitis-causes-symptoms-treatment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00843D] hover:text-[#006EB6] transition-colors uppercase tracking-wider"
                  >
                    <span>Read Clinical Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Insight 2: When Pancreatitis Needs More Than Medicines */}
              <div className="bg-white p-6 rounded-md border border-[#DDE6ED] space-y-4 flex flex-col justify-between hover:border-[#00843D]/50 transition-all shadow-xs">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-[#00843D] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Featured Editorial &amp; Clinical Breakthrough
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#002C47] leading-snug">
                    When Pancreatitis Needs More Than Medicines: How Modern and Advanced Endoscopy Is Changing the Game
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Acute pancreatitis complications like infected necrosis and fluid collections once required major open surgery. Dr. Rana details how modern EUS-guided drainage and direct endoscopic necrosectomy safely resolve severe disease through natural orifices.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setPancreatitisModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00843D] hover:text-[#006EB6] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-slate-300">|</span>
                  <Link
                    href="/blog/when-pancreatitis-needs-more-than-medicines-advanced-endoscopy"
                    className="text-xs text-slate-500 hover:text-[#0078BF] transition-colors"
                  >
                    View in Blog &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Text Reading Modal for Pancreatitis Article */}
        <AnimatePresence>
          {pancreatitisModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
              onClick={() => setPancreatitisModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#EBF5F2] text-[#00843D] text-[10px] font-bold uppercase tracking-wider">
                      Featured Clinical Article
                    </span>
                    <span className="text-xs text-slate-400 font-light hidden sm:inline">•</span>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      Indian Journal of Gastroenterology
                    </span>
                  </div>
                  <button
                    onClick={() => setPancreatitisModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1C2936]">
                  {/* Article Title & Doctor Header */}
                  <div className="space-y-3 pb-4 border-b border-slate-100">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47] leading-tight">
                      When Pancreatitis Needs More Than Medicines: How Modern and Advanced Endoscopy Is Changing the Game
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                      <span className="font-semibold text-[#00843D]">Dr. Randeep Rana</span>
                      <span>•</span>
                      <span>MD, DM (AIIMS New Delhi)</span>
                      <span>•</span>
                      <span>Consultant Gastroenterologist &amp; Advanced Endoscopist</span>
                    </div>
                  </div>

                  {/* Section 1: Intro */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                    <p>
                      Acute pancreatitis can begin with something as simple as severe abdominal pain and vomiting. For many patients, the inflammation settles with medicines, fluids and supportive care. But in some, pancreatitis may take a more complicated course leading to the formation of collections around the pancreas containing fluid, infected material or even dead pancreatic tissue. This is where treatment has changed dramatically over the last decade. From the perspective of an advanced endoscopist, one of the most remarkable developments in gastroenterology has been the ability to treat these complications from inside the gastrointestinal tract often without open surgery.
                    </p>
                  </div>

                  {/* Section 2: Evolution of management */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                      Evolution of management from major surgery to a minimally invasive endoscopic approach
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      Traditionally, infected pancreatic necrosis often meant major surgery, with considerable physiological stress for an already critically ill patient. Today, the approach is very different. Today, doctors increasingly follow a “minimally invasive” approach.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      With advances in endoscopic ultrasound (EUS) and therapeutic endoscopy, Instead of opening the abdomen, specialists can often reach the pancreatic collection through the stomach or intestine using an endoscope, a flexible instrument passed through the mouth. EUS allows the endoscopist to see the pancreatic collection, assess its contents and identify blood vessels before creating a controlled opening between the collection and the stomach or intestine. A specially designed lumen-apposing metal stent (LAMS) can then be placed to create a wide drainage pathway. For collections containing substantial amounts of dead tissue, drainage may not be enough. For collections containing a substantial amount of dead tissue, the endoscope can be passed through the opening to remove the necrotic material. This procedure, called direct endoscopic necrosectomy, which can many a times avoid the need for major open surgery. In practical terms, this means that the illness which once required a large open surgical operation can now be manged through natural orifice i.e. mouth by creating a small opening through stomach or duodenum, but, importantly in selected patients and in expert hands.
                    </p>
                  </div>

                  {/* Section 3: Timing Matters */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                      Timing Matters: The Right Procedure at the Right Time
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      But, despite such an advancement, it is important to learn one of the most important lessons in managing pancreatic collections is that the right procedure at the wrong time can be the wrong procedure. Modern treatment is not simply about intervening earlier. Timing matters. When possible, intervention is generally delayed until the collection develops a mature wall, often around three to four weeks after the onset of pancreatitis. During this period, patients are carefully supported with nutrition, antibiotics when infection is suspected, and close monitoring. This expectant management makes subsequent drainage and removal of necrotic material safer and more effective. But, exceptions can always be there. Patients with suspected infected pancreatic necrosis who deteriorate despite appropriate medical treatment may require drainage earlier. Thus, advanced endoscopy is not simply about having sophisticated equipment. It is about knowing when to intervene, where to intervene and how much intervention is actually required.
                    </p>
                  </div>

                  {/* Section 4: One Size Does Not Fit All */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                      One Size Does Not Fit All: The Step-Up Strategy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      At the same time, it is important to know that One size does not fit all. Every pancreatic collection is different. Some are predominantly fluid-filled and can be treated with drainage alone. Others contain extensive solid necrotic material and may require repeated endoscopic necrosectomy sessions. Also, the location of the pancreatic collection matters and guides the management. Collections lying close to the stomach or duodenum are particularly suitable for endoscopic drainage. Collections extending into more distant may require percutaneous drainage or a combination of radiological, endoscopic or minimally invasive surgical approaches. This is why management increasingly follows a step-up strategy—starting with the least invasive effective treatment and escalating only when necessary.
                    </p>
                  </div>

                  {/* Section 5: The Evolving Role */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                      The Evolving Role of the Advanced Endoscopist
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      The endoscopist is no longer just meant to diagnose illness, while modern therapeutic endoscopy has fundamentally changed the role of the gastroenterologist. An advanced endoscopist today may use EUS not only to diagnose disease but also to perform complex interventions which may include draining pancreatic collections, accessing difficult anatomical spaces and removing infected necrotic tissue and drastically change patient outcomes.
                    </p>
                  </div>

                  {/* Section 6: Technology & Outcomes */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#002C47]">
                      Technology and Multidisciplinary Collaboration
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      But technology alone does not determine the outcome. These procedures require careful patient selection, detailed imaging assessment, expertise in EUS and therapeutic endoscopy, and close coordination with gastroenterologists, radiologists, surgeons, intensivists and other specialists. The real advance is not that surgery has disappeared. It is that we now have more ways to treat complex pancreatic disease and can choose the least invasive approach that is appropriate for an individual patient.
                    </p>
                  </div>

                  {/* Section 7: Message for Patients */}
                  <div className="p-5 rounded-xl bg-[#EBF5F2] border border-[#6CB29D]/30 space-y-3">
                    <h3 className="text-base font-serif font-bold text-[#002C47] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00843D] shrink-0" />
                      <span>The Message for Patients and Families</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      The message for patients and families is very simple and important. Severe or persistent abdominal pain, fever, vomiting or deterioration following pancreatitis should not be ignored. Pancreatic collections are complex conditions, and their management is best undertaken in centres with expertise in advanced endoscopy, interventional radiology and pancreatic surgery. For patients and families, this represents a major shift: when pancreatitis becomes complicated, the question is no longer simply “Does the patient need surgery?” It is now increasingly, “If this problem can be treated safely through advanced endoscopy?”
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#002C47] pt-1">
                      And many a times, the answer nowadays lies not through an incision, but through an endoscope and a skillful endoscopist.
                    </p>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#00843D] hover:bg-[#006EB6] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-colors"
                    >
                      <span>Book Consultation With Dr. Rana</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href="/blog/when-pancreatitis-needs-more-than-medicines-advanced-endoscopy"
                      className="text-xs font-semibold text-[#0078BF] hover:underline"
                    >
                      Open In Dedicated Blog Page &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
