import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Award, BookOpen, Globe, Video, Award as Trophy, Users, SquarePen, ExternalLink } from "lucide-react";
import YouTubeVideoPlayer from "@/components/YouTubeVideoPlayer";

export const metadata: Metadata = {
  title: "Dr. Randeep Rana in the News — Media Mentions, Conferences & Publications",
  description:
    "Discover Dr. Randeep Rana's media mentions, conference presentations, editorial roles, and professional recognition in gastroenterology. Featured in JAMA, American Journal of Gastroenterology, and more.",
};

export default function MediaPage() {
  const societalRoles = [
    { role: "Life Member", organization: "Indian Society of Gastroenterology (ISG)" },
    { role: "Life Member", organization: "Indian Pancreas Club (IPC)" },
    { role: "Life Member", organization: "Society of Gastrointestinal Endoscopy of India (SGEI)" },
    { role: "Life Member", organization: "Colitis & Crohn’s Foundation - India (CCFI)" },
    { role: "Member", organization: "European Association for the Study of the Liver (EASL)" },
    { role: "Member", organization: "American Society for Gastrointestinal Endoscopy (ASGE)" },
    { role: "Member", organization: "European Society of Gastrointestinal Endoscopy (ESGE)" },
    { role: "Member", organization: "International Association of Pancreatology (IAP)" },
    { role: "Member", organization: "World Endoscopy Organization (WEO)" },
    { role: "Member", organization: "International Liver Cancer Association (ILCA)" },
    { role: "Editorial Fellow", organization: "Indian Journal of Gastroenterology (IJG)" },
  ];

  const globalResearch = [
    {
      journal: "The American Journal of Gastroenterology",
      title: "Simvastatin Addition to Standard of Care Improves Long-Term Survival in Patients With Cirrhosis After Variceal Bleed: An Open Label RCT",
      year: "2025",
      impact: "Landmark RCT demonstrating statin addition improves long-term survival in decompensated cirrhosis.",
    },
    {
      journal: "Journal of Clinical Gastroenterology",
      title: "Adjunctive Incremental Pregabalin Therapy Leads to Better Pain Relief in Patients With Chronic Pancreatitis: A Double-Blind RCT",
      year: "2025",
      impact: "Double-blind RCT providing high-level evidence for neuropathic pain control in chronic pancreatitis.",
    },
    {
      journal: "JAMA",
      title: "Simvastatin and Rifaximin for Patients With Decompensated Cirrhosis",
      year: "2025",
      impact: "Clinical trial insight on systemic inflammation and survival in end-stage liver disease.",
    },
    {
      journal: "Indian Journal of Gastroenterology",
      title: "Endoscopic Interventions for Managing Pancreatic Fluid Collections Associated with Acute Pancreatitis: A State-of-the-Art Review",
      year: "2025",
      impact: "State-of-the-art review on EUS-guided cystogastrostomy and necrosectomy.",
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
        bgImage="/images/dr-randeep-rana-speaker.jpg"
      />

      {/* Section 1: Conferences & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DDW 2024 Washington D.C. */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md overflow-hidden space-y-0 hover:border-[#6CB29D]/50 transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src="/images/ddw-2024-poster-presentation.jpg"
                  alt="DDW 2024 Washington D.C. Poster Presentation"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-[#002C47]/90 px-3 py-1 rounded-md uppercase tracking-widest border border-white/20">
                  DDW 2024 • Washington D.C.
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#002C47]">Digestive Disease Week 2024 Presentation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Presented groundbreaking research on Microbiome & Mycobiome Metagenomics in Chronic Pancreatitis tissue at DDW 2024 in Washington, D.C.
                  </p>
                </div>
              </div>
            </div>

            {/* APDW 2025 Singapore */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md overflow-hidden space-y-0 hover:border-[#6CB29D]/50 transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src="/images/apdw-2025-singapore-poster.jpg"
                  alt="APDW 2025 Singapore Poster Presentation"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-[#6CB29D] bg-[#002C47]/90 px-3 py-1 rounded-md uppercase tracking-widest border border-[#6CB29D]/40">
                  APDW 2025 • Singapore
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#002C47]">Poster of Distinction & Clinical Study</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Featured research on EUS-Guided Thrombin & Coil combination for Visceral Arterial Pseudoaneurysm (VAPT-EASE Study) at Asian Pacific Digestive Week 2025 Singapore.
                  </p>
                </div>
              </div>
            </div>

            {/* Poster Award - Clinical Science */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md overflow-hidden space-y-0 hover:border-[#6CB29D]/50 transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src="/images/poster-award-best-oral-clinical-science.jpg"
                  alt="Best Oral Poster Awardee in Clinical Science"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-[#6CB29D] px-3 py-1 rounded-md uppercase tracking-widest">
                  Best Oral Award • Clinical Science
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#002C47]">International Poster Awardee</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Honored with the Best Oral Award in Clinical Science for landmark Randomized Controlled Trial on statin therapy in decompensated cirrhosis.
                  </p>
                </div>
              </div>
            </div>

            {/* GBPGCON Session Chairperson */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md overflow-hidden space-y-0 hover:border-[#6CB29D]/50 transition-all group flex flex-col justify-between">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src="/images/gbpgcon-chairperson-delegate.jpg"
                  alt="GBPGCON Session Chairperson"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-[#001D30]/90 px-3 py-1 rounded-md uppercase tracking-widest border border-white/20">
                  GBPGCON • New Delhi
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#002C47]">Session Chairperson & Academic Lead</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Presiding as Chairperson and Delegate at GBPGCON, guiding expert discussions on clinical gastroenterology & therapeutic endoscopy.
                  </p>
                </div>
              </div>
            </div>

            {/* EASL Hepatology Congress Hall */}
            <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md overflow-hidden space-y-0 hover:border-[#6CB29D]/50 transition-all group flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src="/images/easl-hepatology-congress-hall.jpg"
                  alt="EASL Home of Hepatology Congress Hall"
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-[#002C47]/90 px-3 py-1 rounded-md uppercase tracking-widest border border-[#6CB29D]/40">
                  EASL Congress • Home of Hepatology
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#002C47]">European Association for the Study of the Liver (EASL)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                    Active active member and clinical presenter at EASL congresses, participating in global clinical trial dialogues and advanced hepatology protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Editorial Roles & Medical Societies Table */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              Editorial Appointments & Affiliations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Editorial Roles & Society Fellowships
            </h2>
          </div>

          <div className="overflow-x-auto rounded-md border border-[#DDE6ED] bg-white">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#EBF5F2] text-[#002C47] border-b border-[#DDE6ED] text-xs font-bold uppercase tracking-widest">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
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
                className="p-8 rounded-md border border-[#DDE6ED] bg-[#F4F7F9] space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#EBF5F2] text-[#00843D] border border-[#00843D]/20 font-bold text-[11px] uppercase tracking-widest">
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

      {/* Section 4: Media Features & Public Health Outreach */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              National Media Feature • The Lallantop
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Featured Health Interview & Expert Discussion
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Dr. Randeep Rana featured on India&apos;s leading digital news and health series <strong>The Lallantop (&quot;Sehat&quot;)</strong>, explaining non-alcoholic fatty liver disease (NAFLD / MASLD), risk factors in non-drinkers, FibroScan assessment, and lifestyle protocols.
            </p>
          </div>

          {/* Featured Video Player Showcase */}
          <div className="max-w-4xl mx-auto bg-white rounded-md border border-[#DDE6ED] p-6 sm:p-8 shadow-sm space-y-6">
            <YouTubeVideoPlayer
              videoId="7Swj422FPj0"
              title="Alcohol को हाथ भी नहीं लगाते, फिर Fatty Liver क्यों हुआ? डॉक्टर से वजह सुन लीजिए — Dr. Randeep Rana"
              channelName="The Lallantop • Sehat"
            />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#00843D] bg-[#EBF5F2] px-2.5 py-0.5 rounded">
                  The Lallantop • Sehat Health Series
                </span>
                <h3 className="font-serif font-bold text-[#002C47] text-base sm:text-lg">
                  Alcohol को हाथ भी नहीं लगाते, फिर Fatty Liver क्यों हुआ? डॉक्टर से वजह सुन लीजिए
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  Expert Talk by Dr. Randeep Rana (Consultant Gastroenterologist & Liver Specialist, Max Smart Super Speciality Hospital)
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=7Swj422FPj0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#002C47] hover:bg-[#6CB29D] text-white transition-colors text-xs font-bold shrink-0 self-start sm:self-auto"
              >
                Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Media Presence */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-[#002C47]">
                Connect with &ldquo;YourGutDoc&rdquo; Across Social Platforms
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1">
                Follow Dr. Randeep Rana for evidence-based digestive health education and clinical science updates.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {socialHandles.map((handle, idx) => (
                <a
                  key={idx}
                  href={handle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-md border border-[#DDE6ED] hover:border-[#6CB29D]/50 transition-all text-center space-y-3 block group shadow-sm hover:shadow-md"
                >
                  <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#002C47] flex items-center justify-center mx-auto group-hover:bg-[#6CB29D] group-hover:text-white transition-colors">
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
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
