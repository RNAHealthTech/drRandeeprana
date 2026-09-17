import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ServicesClinicalTabs from "@/components/ServicesClinicalTabs";
import {
  FileCheck,
  Users,
  Compass,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gastroenterology Services | Conditions, Diagnostics & Symptoms — Dr. Randeep Rana",
  description:
    "Explore comprehensive GI, liver, and pancreatic conditions, state-of-the-art diagnostic suites, and rapid symptom triage with Dr. Randeep Rana at Max Smart Super Speciality Hospital, Saket, New Delhi.",
};

export default function ServicesPage() {
  const pillars = [
    {
      title: "Compassionate Education",
      desc: "Dr. Rana ensures every patient clearly understands their condition, diagnostic reports, treatment options, and recovery roadmap.",
      icon: Users,
    },
    {
      title: "Comprehensive Diagnostics",
      desc: "State-of-the-art high-definition Japanese video endoscopes, non-invasive liver FibroScan (CAP/kPa), and motility labs under one roof.",
      icon: Award,
    },
    {
      title: "Evidence-Based Care",
      desc: "All treatment protocols are grounded in the latest international medical research, academic trials, and peer-reviewed gastroenterology guidelines.",
      icon: FileCheck,
    },
    {
      title: "Minimally Invasive Approach",
      desc: "Advanced endoscopic techniques (EUS, ERCP, POEM, ESD) replace open surgeries, reducing recovery times and patient discomfort.",
      icon: Compass,
    },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Advanced Clinical Care & Interventions"
        title="Conditions, Diagnostics & Procedures"
        subtitle="Expert diagnosis & customized treatment protocols across all digestive organs. Led by Dr. Randeep Rana at Max Smart Super Speciality Hospital, Saket, New Delhi."
        breadcrumbs={[{ label: "Services" }]}
        bgImage="/images/dr-randeep-rana-scrubs-side.jpg"
      />

      {/* Visual Infrastructure Banner */}
      <section className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-[#DDE6ED] h-60 sm:h-72 group shadow-xs">
              <img
                src="/images/services-eus-ercp-suite.jpg"
                alt="State-of-the-art Advanced EUS and ERCP Endoscopy Suite"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-[#002C47]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-md bg-[#00843D] text-[10px] font-extrabold uppercase tracking-widest text-white inline-block mb-1">
                  Interventional GI & Endoscopy
                </span>
                <h3 className="text-xl font-serif font-bold">Advanced EUS & ERCP Interventions</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#DDE6ED] h-60 sm:h-72 group shadow-xs">
              <img
                src="/images/services-fibroscan-liver.jpg"
                alt="FibroScan Non-Invasive Liver Stiffness Assessment Suite"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-[#002C47]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-3 py-1 rounded-md bg-[#EBF5F2] text-[#00843D] border border-[#00843D]/30 text-[10px] font-extrabold uppercase tracking-widest inline-block mb-1">
                  Non-Invasive Liver Diagnostics
                </span>
                <h3 className="text-xl font-serif font-bold">FibroScan Quantitative Liver Assessment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Clinical Section: Conditions, Diagnostics & Symptoms */}
      <section className="py-16 bg-white" id="clinical-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesClinicalTabs />
        </div>
      </section>

      {/* Why Choose Our Services - 4 Pillars */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Why Choose Our Services?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              The Four Pillars of Dr. Rana&apos;s Practice
            </h2>
            <p className="text-slate-600 text-sm font-light max-w-2xl mx-auto">
              Combining world-class academic expertise from AIIMS & PGIMER with patient-centric empathy and state-of-the-art medical technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white p-8 rounded-2xl border border-[#DDE6ED] space-y-4 text-center hover:border-[#00843D]/40 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#EBF5F2] text-[#00843D] flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#002C47]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-6">
            <a
              href="/contact"
              className="bg-[#00843D] hover:bg-[#006EB6] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg py-4 px-8 transition-all inline-flex items-center gap-3 shadow-md"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
