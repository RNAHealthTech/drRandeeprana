import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Camera, Sparkles, Building2, Stethoscope, Activity, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Photo Gallery | Dr. Randeep Rana — Max Smart Saket & GIPMER",
  description:
    "Explore high-resolution realistic facility photos of Dr. Randeep Rana's gastroenterology practice, advanced endoscopy suites, FibroScan liver clinic, and patient care facilities in New Delhi.",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Dr. Randeep Rana — Consultant Gastroenterologist",
      category: "Doctor Profile",
      image: "/images/dr-randeep-rana.webp",
      description: "AIIMS-trained Consultant Gastroenterologist, Hepatologist & Pancreatologist in New Delhi.",
      icon: UserCheck,
    },
    {
      id: 2,
      title: "Advanced Endoscopy Procedure Suite",
      category: "Interventional Suite",
      image: "/images/endoscopy-suite.png",
      description: "State-of-the-art EUS and ERCP towers with high-definition narrow-band imaging and CO2 insufflation.",
      icon: Activity,
    },
    {
      id: 3,
      title: "Compassionate Patient Consultation",
      category: "Clinical Care",
      image: "/images/doctor-consultation.png",
      description: "Private consultation room at Max Smart Saket for in-depth medical evaluation and patient guidance.",
      icon: Stethoscope,
    },
    {
      id: 4,
      title: "FibroScan & Quantitative Liver Clinic",
      category: "Liver Diagnostics",
      image: "/images/fibroscan-liver-care.png",
      description: "Non-invasive elastography and CAP score assessment unit for painless fatty liver and cirrhosis staging.",
      icon: Sparkles,
    },
    {
      id: 5,
      title: "Super-Specialty Hospital Facility",
      category: "Infrastructure",
      image: "/images/hospital-facility.png",
      description: "Modern healthcare campus at Max Smart Superspeciality Hospital Saket & GIPMER MAMC New Delhi.",
      icon: Building2,
    },
    {
      id: 6,
      title: "Private Day-Care Recovery Lounge",
      category: "Patient Comfort",
      image: "/images/patient-recovery.png",
      description: "Tranquil post-endoscopy recovery suite designed for patient safety, comfort, and same-day discharge.",
      icon: Camera,
    },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Clinical Gallery"
        title="Infrastructure & Patient Care Facilities"
        subtitle="Step inside our world-class gastroenterology center, modern endoscopy suites, and advanced diagnostic facilities in New Delhi."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Main Gallery Section */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Accredited Endoscopy & Clinical Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Combining cutting-edge medical technology with warm, patient-first clinical environment.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#DDE6ED] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6CB29D]/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#001D30]/90 backdrop-blur-md text-[#6CB29D] border border-[#6CB29D]/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
