import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Camera, Sparkles, Building2, Stethoscope, Activity, UserCheck, Globe, Trophy, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Photo Gallery | Dr. Randeep Rana — Max Smart Saket & GIPMER",
  description:
    "Explore high-resolution realistic facility photos of Dr. Randeep Rana's gastroenterology practice, advanced endoscopy suites, international poster presentations, DDW Washington, APDW Singapore, and award ceremonies.",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Dr. Randeep Rana — Consultant Gastroenterology",
      category: "Doctor Profile",
      image: "/images/dr-randeep-rana-whitecoat.jpg",
      description: "Dr. Randeep Rana in clinical white coat at Max Smart Superspeciality Hospital, Saket.",
      icon: UserCheck,
    },
    {
      id: 2,
      title: "Best Oral Clinical Science Awardee",
      category: "International Recognition",
      image: "/images/poster-award-best-oral-clinical-science.jpg",
      description: "Dr. Randeep Rana recognized as Best Oral Awardee in Clinical Science for groundbreaking RCT research on cirrhosis survival.",
      icon: Trophy,
    },
    {
      id: 3,
      title: "DDW 2024 Poster Presentation — Washington D.C.",
      category: "International Research",
      image: "/images/ddw-2024-poster-presentation.jpg",
      description: "Presenting Microbiome & Mycobiome Metagenomics research in chronic pancreatitis at Digestive Disease Week (DDW 2024) in Washington D.C.",
      icon: Globe,
    },
    {
      id: 4,
      title: "APDW 2025 Singapore — EUS Intervention Study",
      category: "Poster of Distinction",
      image: "/images/apdw-2025-singapore-poster.jpg",
      description: "Displaying landmark research on EUS-guided thrombin and coil combination for Visceral Arterial Pseudoaneurysm (VAPT-EASE Study) at APDW Singapore.",
      icon: FileText,
    },
    {
      id: 5,
      title: "Session Chairperson — GBPGCON Conference",
      category: "Academic Leadership",
      image: "/images/gbpgcon-chairperson-delegate.jpg",
      description: "Dr. Randeep Rana presiding as Session Chairperson & Delegate at GBPGCON annual gastroenterology conference.",
      icon: Building2,
    },
    {
      id: 6,
      title: "EASL Hepatology Congress — International Venue",
      category: "Global Forum",
      image: "/images/easl-hepatology-congress-hall.jpg",
      description: "Representing AIIMS New Delhi and Max Healthcare at the European Association for the Study of the Liver (EASL) Congress Hall.",
      icon: Award,
    },
    {
      id: 7,
      title: "National Conference Keynote Speaker — GBPGCON",
      category: "Keynote & Speaker",
      image: "/images/dr-randeep-rana-speaker.jpg",
      description: "Dr. Randeep Rana presenting clinical insights on stage at GBPGCON gastroenterology symposium.",
      icon: Sparkles,
    },
    {
      id: 8,
      title: "Interventional Gastroenterologist — Max Healthcare",
      category: "Clinical Practice",
      image: "/images/dr-randeep-rana-scrubs-front.jpg",
      description: "Dr. Randeep Rana in Max Healthcare scrubs specializing in EUS, ERCP & Third Space Endoscopy.",
      icon: Stethoscope,
    },
    {
      id: 9,
      title: "Advanced Interventional Endoscopy Stance",
      category: "Specialized Procedures",
      image: "/images/dr-randeep-rana-scrubs-side.jpg",
      description: "Dr. Randeep Rana — Specialist in POEM, ESD, STER, EFTR, and EUS-guided vascular & biliary interventions.",
      icon: Activity,
    },
    {
      id: 10,
      title: "Advanced Endoscopy Procedure Suite",
      category: "Interventional Suite",
      image: "/images/endoscopy-suite.png",
      description: "State-of-the-art EUS and ERCP towers with narrow-band imaging and CO2 insufflation at Max Smart Saket.",
      icon: Camera,
    },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Clinical Gallery"
        title="Infrastructure & Photo Gallery"
        subtitle="Explore authentic photo moments of Dr. Randeep Rana's clinical practice, international award recognitions, conference presentations, and procedure facilities."
        breadcrumbs={[{ label: "Gallery" }]}
        bgImage="/images/dr-randeep-rana-award.jpg"
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
