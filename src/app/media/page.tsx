import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Award, BookOpen, Globe, Video, Award as Trophy, Users, SquarePen } from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Randeep Rana in the News — Media Mentions, Conferences & Publications",
  description:
    "Discover Dr. Randeep Rana's media mentions, conference presentations, editorial roles, and professional recognition in gastroenterology. Featured in JAMA, American Journal of Gastroenterology, and more.",
};

export default function MediaPage() {
  const societalRoles = [
    { role: "Fellow", organization: "Indian Society of Gastroenterology (ISG)" },
    { role: "International Member", organization: "American College of Gastroenterology (ACG)" },
    { role: "Editorial Fellow", organization: "Indian Journal of Gastroenterology (IJG) - First IJG Editorial Fellowship" },
    { role: "Organizing Committee Member", organization: "ISGCON 2025 (66th Annual Conference)" },
    { role: "Organizing Committee Member", organization: "WCOG 2026 (World Congress of Gastroenterology, India)" },
    { role: "Participant", organization: "JGHFoundation Young Clinician Investigator Program, APDW 2025, Singapore" },
  ];

  const globalResearch = [
    {
      journal: "JAMA",
      title: "Simvastatin and Rifaximin for Patients With Decompensated Cirrhosis",
      year: "2025",
      impact: "Influencing global treatment protocols for end-stage liver disease.",
    },
    {
      journal: "The American Journal of Gastroenterology",
      title: "Simvastatin Addition to Standard of Care Improves Long-Term Survival in Patients With Cirrhosis After Variceal Bleed",
      year: "2026",
      impact: "Landmark RCT proving statins improve survival after severe gastrointestinal bleeding.",
    },
    {
      journal: "Indian Journal of Gastroenterology",
      title: "Endoscopic Interventions for Managing Pancreatic Fluid Collections",
      year: "2025",
      impact: "Comprehensive review on EUS-guided cystogastrostomy cited by researchers worldwide.",
    },
    {
      journal: "Pancreatology",
      title: "Improving Mortality Prediction in Acute Pancreatitis: Refining ICU Risk Scoring Models",
      year: "2025",
      impact: "Optimizing critical care risk stratification for severe acute pancreatitis.",
    },
  ];

  const socialHandles = [
    { platform: "X (Twitter)", handle: "@randeeprana90", link: "https://twitter.com/randeeprana90" },
    { platform: "Instagram", handle: "@rana_randeep_yourgutdoc", link: "https://instagram.com/rana_randeep_yourgutdoc" },
    { platform: "Facebook", handle: "Randeep Rana Yourgutdoc", link: "https://facebook.com" },
  ];

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Media & Recognition"
        title="Dr. Randeep Rana in the News & Academic Realm"
        subtitle="Explore Dr. Rana's international conference presentations, editorial appointments, research publications in top-tier medical journals, and public educational outreach."
        breadcrumbs={[{ label: "Media & Recognition" }]}
      />

      {/* Section 1: Conferences & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-4 h-4 text-[#6CB29D]" />
              Conference Presentations & Achievements
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Global Platform & Academic Leadership
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Dr. Rana is a regular speaker and presenter at prestigious national and international gastroenterology conventions, sharing clinical breakthroughs with global medical peers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* APDW 2025 */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#6CB29D]/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-[#002C47] text-[#6CB29D] flex items-center justify-center font-bold">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#6CB29D] uppercase tracking-widest">APDW 2025 • Singapore</span>
              <h3 className="text-xl font-serif font-bold text-[#002C47]">Poster of Distinction & Young Clinician Investigator</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Selected for the prestigious JGHFoundation Young Clinician Investigator Program at Asian Pacific Digestive Week 2025 in Singapore. Received Poster of Distinction honors for cirrhosis research.
              </p>
            </div>

            {/* ISGCON 2025 */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#6CB29D]/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-[#6CB29D] text-white flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#002C47] uppercase tracking-widest">ISGCON 2025 • India</span>
              <h3 className="text-xl font-serif font-bold text-[#002C47]">Scientific Program Contributor</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Contributed to the 66th Annual Conference of the Indian Society of Gastroenterology with an expert session on "Risk, Recognition, and Management" of upper GI disorders.
              </p>
            </div>

            {/* WCOG 2026 */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-3xl p-8 shadow-sm space-y-4 hover:border-[#6CB29D]/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-[#001D30] text-white flex items-center justify-center font-bold">
                <Award className="w-6 h-6 text-[#6CB29D]" />
              </div>
              <span className="text-[11px] font-bold text-[#6CB29D] uppercase tracking-widest">WCOG 2026 • World Congress</span>
              <h3 className="text-xl font-serif font-bold text-[#002C47]">Organizing Committee Leadership</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Invited to serve on the Organizing Committee for the upcoming World Congress of Gastroenterology (WCOG 2026) in India, reflecting recognition in the global GI community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Editorial Roles & Medical Societies Table */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Editorial Appointments & Affiliations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Editorial Roles & Society Fellowships
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#DDE6ED] bg-white shadow-md">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#002C47] text-white text-xs font-bold uppercase tracking-widest">
                  <th className="py-4 px-6">Role</th>
                  <th className="py-4 px-6">Organization / Journal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {societalRoles.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#EBF5F2]/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#6CB29D]">{item.role}</td>
                    <td className="py-4 px-6 font-semibold text-[#002C47]">{item.organization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Global Research Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-4 h-4 text-[#6CB29D]" />
              Research Spotlight
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Highlighted in Premier Medical Journals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalResearch.map((res, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-[#DDE6ED] bg-[#F4F7F9] shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#002C47] text-[#6CB29D] font-bold text-[11px] uppercase tracking-widest">
                    {res.journal}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{res.year}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#002C47]">{res.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{res.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Media & Educational Social Presence ("YourGutDoc") */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Public Health Outreach • "YourGutDoc"
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Educational Content & Social Media Presence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Under his online handle <strong>&quot;YourGutDoc&quot;</strong>, Dr. Randeep Rana shares evidence-based educational videos on EUS cystogastrostomy, pancreatitis recovery, and liver wellness to demystify complex gastroenterology for patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialHandles.map((handle, idx) => (
              <a
                key={idx}
                href={handle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-3xl border border-[#DDE6ED] shadow-sm hover:shadow-lg hover:border-[#6CB29D]/50 transition-all text-center space-y-3 block group"
              >
                <div className="h-10 w-10 rounded-full bg-[#EBF5F2] text-[#002C47] flex items-center justify-center mx-auto group-hover:bg-[#6CB29D] group-hover:text-white transition-colors">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{handle.platform}</div>
                  <div className="text-base font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors mt-0.5">
                    {handle.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
