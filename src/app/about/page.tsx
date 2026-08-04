import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import CtaBanner from "@/components/CtaBanner";
import { GraduationCap, Briefcase, BookOpen, Quote, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Randeep Rana — AIIMS-Trained Gastroenterologist & Professor | YourGutDoc",
  description:
    "Learn about Dr. Randeep Rana — his qualifications, training at AIIMS and PGIMER, academic positions, research contributions, and expertise in gastroenterology, hepatology, and advanced endoscopy.",
};

export default function AboutPage() {
  const academicTraining = [
    {
      qualification: "Fellowship in Advanced GI Endoscopy",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      duration: "July 2023 - July 2024",
      details: "Specialized in complex interventional procedures including Endoscopic Ultrasound (EUS) & ERCP.",
    },
    {
      qualification: "Doctorate of Medicine (DM) in Gastroenterology",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      duration: "July 2020 - July 2023",
      details: "Pivotal research on decompensated cirrhosis, variceal bleeding, and pancreatic disorders.",
    },
    {
      qualification: "Doctor of Medicine (MD) in Internal Medicine",
      institution: "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      duration: "July 2019 - December 2019",
      details: "Comprehensive clinical residency in general medicine and acute systemic care.",
    },
  ];

  const professionalJourney = [
    {
      position: "Assistant Professor, Department of Gastroenterology",
      institution: "GB Pant Institute (GIPMER) & MAMC, New Delhi",
      duration: "July 2024 - June 2025",
    },
    {
      position: "Consultant Gastroenterologist",
      institution: "Max Smart Superspeciality Hospital, Saket, New Delhi",
      duration: "Present",
    },
    {
      position: "Senior Resident, Medicine",
      institution: "PGIMER & Dr. RML Hospital, New Delhi",
      duration: "2019 - 2020",
    },
  ];

  const publications = [
    {
      title: "Simvastatin and Rifaximin for Patients With Decompensated Cirrhosis",
      journal: "JAMA",
      year: "2025",
    },
    {
      title: "Simvastatin Addition to Standard of Care Improves Long-Term Survival in Patients With Cirrhosis After Variceal Bleed: An Open Label RCT",
      journal: "Am J Gastroenterol",
      year: "2026",
    },
    {
      title: "Adjunctive Incremental Pregabalin Therapy for Chronic Pancreatitis: A Double-blind RCT",
      journal: "J Clin Gastroenterol",
      year: "2026",
    },
    {
      title: "Endoscopic Interventions for Managing Pancreatic Fluid Collections: A State-of-the-Art Review",
      journal: "Indian J Gastroenterol",
      year: "2025",
    },
    {
      title: "Improving Mortality Prediction in Acute Pancreatitis: A Proposal for Refining ICU Risk Scoring Models",
      journal: "Pancreatology",
      year: "2025",
    },
    {
      title: "Randomized Controlled Trial of IV Ferric Carboxymaltose vs Oral Iron for IDA After Variceal Bleed",
      journal: "Am J Gastroenterol",
      year: "2024",
    },
    {
      title: "Assessing the Risk of Further Decompensation in Cirrhosis with Variceal Bleeding",
      journal: "ACG",
      year: "2023",
    },
    {
      title: "Virus Related Acute Pancreatitis and Virus Superinfection: A Multicentre Prospective Study",
      journal: "Pancreatology",
      year: "2022",
    },
    {
      title: "Non-Selective Beta Blockers in Pregnancy",
      journal: "Indian J Gastroenterol",
      year: "2026",
    },
    {
      title: "Distinct Course of Portal Hypertension in Cirrhosis with Gastric Variceal Bleeding",
      journal: "Hepatology International",
      year: "2023",
    },
  ];

  const societalRoles = [
    { role: "Fellow", organization: "Indian Society of Gastroenterology (ISG)" },
    { role: "International Member", organization: "American College of Gastroenterology (ACG)" },
    { role: "Editorial Fellow", organization: "Indian Journal of Gastroenterology (IJG)" },
    { role: "Organizing Committee Member", organization: "ISGCON 2025 (66th Annual Conference)" },
    { role: "Organizing Committee Member", organization: "WCOG 2026 (World Congress of Gastroenterology, India)" },
    { role: "Participant", organization: "JGHFoundation Young Clinician Investigator Program, APDW 2025, Singapore" },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="About Dr. Randeep Rana"
        title="A Pioneer in Gastroenterology, Hepatology, and Pancreatology"
        subtitle='Describing himself as "a gastroenterologist by profession, a therapeutic endoscopist by choice, and a Punjabi by heart," Dr. Rana seamlessly blends a deep cultural connection with cutting-edge medical science.'
        breadcrumbs={[{ label: "About Dr. Rana" }]}
      />

      <About />

      {/* Academic Background & Professional Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Academic Background Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Academic Background & Training
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#DDE6ED] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Qualification</th>
                    <th className="py-4 px-6">Institution</th>
                    <th className="py-4 px-6">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {academicTraining.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-bold text-[#002C47] font-serif">
                        {item.qualification}
                        <p className="text-xs font-sans font-light text-slate-500 mt-0.5">{item.details}</p>
                      </td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institution}</td>
                      <td className="py-4 px-6 text-slate-500 font-light">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Journey Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Professional Journey & Appointments
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#DDE6ED] shadow-sm">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Position</th>
                    <th className="py-4 px-6">Institution</th>
                    <th className="py-4 px-6">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {professionalJourney.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#002C47]">{item.position}</td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institution}</td>
                      <td className="py-4 px-6 text-slate-500 font-light">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Publications Table Section */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-4 h-4 text-[#6CB29D]" />
              Contributions to Medical Literature
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              High-Impact Publications & Clinical Trials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Dr. Rana is a prolific researcher with over 40 publications in leading international gastroenterology journals including <em>JAMA</em>, <em>The American Journal of Gastroenterology</em>, and <em>Pancreatology</em>.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#DDE6ED] bg-white shadow-md">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                  <th className="py-4 px-6">Publication Title</th>
                  <th className="py-4 px-6">Journal</th>
                  <th className="py-4 px-6">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {publications.map((pub, idx) => (
                  <tr key={idx} className="hover:bg-[#EBF5F2]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#002C47]">{pub.title}</td>
                    <td className="py-4 px-6 font-bold text-[#6CB29D]">{pub.journal}</td>
                    <td className="py-4 px-6 text-slate-500 font-bold">{pub.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Professional Memberships & Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Memberships */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                  Professional Memberships & Societal Roles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {societalRoles.map((role, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F4F7F9] border border-[#DDE6ED] space-y-1">
                    <span className="text-[11px] font-bold text-[#6CB29D] uppercase tracking-widest">{role.role}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#002C47]">{role.organization}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient-Centric Quote Card */}
            <div className="lg:col-span-5 bg-[#002C47] p-8 sm:p-10 rounded-3xl text-white shadow-2xl space-y-6 relative overflow-hidden">
              <Quote className="w-16 h-16 text-white/10 absolute top-4 right-4" />
              <div className="text-xs font-bold uppercase tracking-widest text-[#6CB29D]">
                Patient-Centric Philosophy
              </div>
              <blockquote className="text-lg sm:text-xl font-serif italic leading-relaxed relative z-10 text-slate-100">
                &ldquo;My goal is to provide the highest standard of care, utilizing the latest advancements in gastroenterology to improve the lives of my patients.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-base text-white">Dr. Randeep Rana</div>
                  <div className="text-xs text-[#6CB29D]">MD, DM (AIIMS New Delhi)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CtaBanner />
    </div>
  );
}
