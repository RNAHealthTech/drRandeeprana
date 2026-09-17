import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import CtaBanner from "@/components/CtaBanner";
import {
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Trophy,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Flame,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Randeep Rana — Consultant Gastroenterology Saket",
  description:
    "Comprehensive Profile & Curriculum Vitae of Dr. Randeep Rana — MBBS (DMCH Gold Medalist), MD (Dr. RMLH), DM & Advanced GI Endoscopy Fellow (AIIMS Delhi). Consultant Gastroenterology at Max Smart Super Speciality Hospital, Saket.",
};

export default function AboutPage() {
  const educationTable = [
    {
      course: "Fellowship in Advanced GI Endoscopy",
      duration: "July 2023 to July 2024",
      institute: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      course: "D.M. (Gastroenterology)",
      duration: "July 2020 to July 2023",
      institute: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      course: "M.D. (Internal Medicine)",
      duration: "May 2015 to May 2018",
      institute: "ABVIMS & Dr Ram Manohar Lohia Hospital (Dr RMLH), New Delhi",
    },
    {
      course: "MBBS",
      duration: "Aug 2008 to Dec 2012",
      institute: "Dayanand Medical College & Hospital (DMCH), Ludhiana",
    },
  ];

  const clinicalExperience = [
    {
      position: "Consultant – Gastroenterology",
      duration: "May 2026 – Present",
      institution: "Max Smart Super Speciality Hospital, Saket, New Delhi",
    },
    {
      position: "Clinical Assistant / Associate Consultant",
      duration: "July 2025 – May 2026",
      institution: "Institute of Liver, Gastroenterology and Pancreatico-Biliary Sciences (ILGPS), Sir Ganga Ram Hospital, New Delhi",
    },
    {
      position: "Assistant Professor, Department of Gastroenterology",
      duration: "July 2024 – July 2025",
      institution: "GB Pant Institute of Postgraduate Medical Education and Research (GIPMER), New Delhi",
    },
    {
      position: "Fellow – Advanced GI Endoscopy",
      duration: "July 2023 – July 2024",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      position: "Senior Resident (DM Gastroenterology)",
      duration: "July 2020 – July 2023",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    },
    {
      position: "Senior Resident (Internal Medicine)",
      duration: "2019",
      institution: "PGIMER, Chandigarh",
    },
    {
      position: "Senior Resident (Internal Medicine)",
      duration: "2018",
      institution: "ABVIMS & Dr Ram Manohar Lohia Hospital, New Delhi",
    },
    {
      position: "Medical Internship",
      duration: "01/01/2013 to 15/02/2014",
      institution: "Dayanand Medical College & Hospital (DMCH), Ludhiana, Punjab, India",
    },
  ];



  const awardsList = [
    {
      sn: "01",
      title: "All India Rank 1",
      detail: "Entrance Examination, Fellowship in Advanced GI Endoscopy, AIIMS New Delhi (2023)",
      badge: "National Rank 1",
      category: "Academic Rank",
    },
    {
      sn: "02",
      title: "All India Rank 2",
      detail: "AIIMS Super-Speciality Entrance Examination (DM Gastroenterology, 2020)",
      badge: "National Rank 2",
      category: "Academic Rank",
    },
    {
      sn: "03",
      title: "Gold Medal (First Position in Medicine)",
      detail: "MBBS Graduation Honors & Academic Excellence, Dayanand Medical College & Hospital (2012)",
      badge: "University Gold Medal",
      category: "Gold Medal",
    },
    {
      sn: "04",
      title: "International Travel Grants & Awards",
      detail: "EASL Travel Grant (Milan 2024), ICMR International Travel Grant (2024), APDW/JGHF Travel Grant (Singapore 2025)",
      badge: "International",
      category: "Global Grant",
    },
    {
      sn: "05",
      title: "Advanced Certification in Full-Thickness Resection Device (FTRD)",
      detail: "Hands-on Advanced Interventional Endoscopy Workshop by OVESCO (Germany) at AIIMS New Delhi (2025)",
      badge: "Advanced Endoscopy",
      category: "Certification",
    },
    {
      sn: "06",
      title: "Post-Graduate Program in Cardiology (Distinction)",
      detail: "Executive Clinical Program with Academic Distinction, Johns Hopkins University (2017)",
      badge: "Distinction",
      category: "Certification",
    },
    {
      sn: "07",
      title: "Advanced Certification Workshop in Diabetes",
      detail: "Cardiff University (2017)",
      badge: "Clinical Certification",
      category: "Certification",
    },
    {
      sn: "08",
      title: "National Faculty for Premier GI & Endoscopy Conferences",
      detail: "ENDOCON (2025 Jaipur), India EUS Summit (2025 New Delhi), GI Confluence (2024), GBPGCON (2025), Clinics in Hepato-Biliary Diseases (2025)",
      badge: "Faculty",
      category: "Faculty & Speaking",
    },
    {
      sn: "09",
      title: "Reviewer & Editorial Fellow for International Journals",
      detail: "The American Journal of Gastroenterology, Pancreatology (Official Journal of IAP), Digestive Diseases and Sciences, BMC Gastroenterology, Indian Journal of Gastroenterology (IJG)",
      badge: "Editorial",
      category: "Peer Review",
    },
    {
      sn: "10",
      title: "Organizing Committee Member for National & International Meets",
      detail: "IAP-IPC Joint Conference (PANCREAS, 2023), APAGE-CCF(I) CDAI IBD Meet (2022)",
      badge: "Organizing Committee",
      category: "Leadership",
    },
  ];




  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="About Dr. Randeep Rana"
        title="Consultant Gastroenterology & Advanced Endoscopy"
        subtitle="MBBS (DMCH Gold Medalist), M.D (Dr. RMLH), D.M (Gastroenterology, AIIMS Delhi), Fellowship in Advanced GI Endoscopy (AIIMS Delhi) at Max Smart Super Speciality Hospital, Saket, New Delhi."
        breadcrumbs={[{ label: "About" }]}
        bgImage="/images/dr-randeep-rana-scrubs-front.jpg"
      />

      {/* Interactive About Section with Carousel Slider & Tabbed Highlights */}
      <About />

      {/* CV Quick Credentials & Contact Strip */}
      <section className="py-8 bg-[#EBF5F2] text-[#1C2936] border-y border-[#DDE6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
              <p><strong className="text-[#00843D]">Current Position:</strong> Consultant Gastroenterology, Max Smart Super Speciality Hospital, Saket, New Delhi, India</p>
              <p><strong className="text-[#00843D]">Ex-Positions:</strong> Ex-Assistant Professor (GIPMER) | Ex-Associate Consultant (Sir Ganga Ram Hospital ILGPS)</p>
              <p><strong className="text-[#00843D]">Editorial Fellow:</strong> Indian Journal of Gastroenterology (IJG) | <strong className="text-[#00843D]">DMC Registration:</strong> 82691</p>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-md border border-slate-200 text-xs text-slate-700 space-y-1.5 font-normal">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00843D] shrink-0" />
                <a href="tel:+919643163941" className="hover:underline font-bold text-[#0078BF]">+91 96431 63941</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00843D] shrink-0" />
                <a href="mailto:randeeprana90@gmail.com" className="hover:underline text-[#0078BF]">randeeprana90@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00843D] shrink-0" />
                <span>Max Smart Saket (Mon - Sat: 9.00 am - 6.00 pm)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Interests Section */}
      <section className="py-12 bg-[#F4F7F9] border-b border-[#DDE6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#002C47] flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#6CB29D]" />
            Special Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Pancreatico-Biliary Sciences",
              "Inflammatory Bowel Diseases (IBD)",
              "Portal Hypertension",
              "Advanced Endoscopy - EUS / ERCP",
              "Third Space Endoscopy - POEM, ESD / STER",
              "Early GI Cancer & EFTR (FTRD)",
            ].map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs sm:text-sm font-bold"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: EDUCATION & CLINICAL TRAINING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Education Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#002C47] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Education & Qualifications
              </h2>
            </div>

            <div className="overflow-x-auto rounded-md border border-[#DDE6ED]">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#EBF5F2] text-[#002C47] border-b border-[#DDE6ED] text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Course / Degree</th>
                    <th className="py-4 px-6">Duration</th>
                    <th className="py-4 px-6">Institute</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {educationTable.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#002C47]">{item.course}</td>
                      <td className="py-4 px-6 text-slate-500 font-medium">{item.duration}</td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clinical Work Experience Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-[#EBF5F2] text-[#002C47] flex items-center justify-center font-bold">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
                Clinical Experience & Appointments
              </h2>
            </div>

            <div className="overflow-x-auto rounded-md border border-[#DDE6ED]">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#EBF5F2] text-[#002C47] border-b border-[#DDE6ED] text-xs font-bold uppercase tracking-widest">
                    <th className="py-4 px-6">Position</th>
                    <th className="py-4 px-6">Duration</th>
                    <th className="py-4 px-6">Institution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {clinicalExperience.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F7F9] transition-colors">
                      <td className="py-4 px-6 font-serif font-bold text-[#002C47]">{item.position}</td>
                      <td className="py-4 px-6 text-slate-500 font-medium">{item.duration}</td>
                      <td className="py-4 px-6 font-semibold text-[#6CB29D]">{item.institution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CONFERENCE PRESENTATIONS (INTERNATIONAL & NATIONAL) */}
      <section className="py-16 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#EBF5F2] text-[#002C47] text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-4 h-4 text-[#6CB29D]" />
              Conference Papers & Posters
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002C47]">
              Papers & Posters Presented at International & National Conferences
            </h2>
          </div>

          {/* Authentic Conference & Award Photos Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-md overflow-hidden border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/poster-award-best-oral-clinical-science.jpg"
                alt="Best Oral Poster Awardee in Clinical Science"
                className="w-full h-full object-cover object-top transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#6CB29D] text-[9px] font-extrabold uppercase tracking-widest text-white mb-1 inline-block">
                  Best Oral Award
                </span>
                <div className="text-xs font-serif font-bold">Clinical Science Awardee</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/ddw-2024-poster-presentation.jpg"
                alt="DDW 2024 Washington D.C. Poster"
                className="w-full h-full object-cover object-top transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  DDW 2024 • USA
                </span>
                <div className="text-xs font-serif font-bold">Washington D.C. Poster Presentation</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/apdw-2025-singapore-poster.jpg"
                alt="APDW 2025 Singapore Poster"
                className="w-full h-full object-cover object-top transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  APDW 2025 • Singapore
                </span>
                <div className="text-xs font-serif font-bold">EUS Pseudoaneurysm VAPT-EASE Study</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden border border-[#DDE6ED] group h-56 bg-slate-900">
              <img
                src="/images/gbpgcon-chairperson-delegate.jpg"
                alt="GBPGCON Session Chairperson"
                className="w-full h-full object-cover object-top transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#001D30] text-[9px] font-extrabold uppercase tracking-widest text-white mb-1 inline-block border border-white/20">
                  GBPGCON
                </span>
                <div className="text-xs font-serif font-bold">Session Chairperson & Delegate</div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden border border-[#DDE6ED] group h-56 bg-slate-900 md:col-span-2 lg:col-span-2">
              <img
                src="/images/easl-hepatology-congress-hall.jpg"
                alt="EASL Home of Hepatology Congress"
                className="w-full h-full object-cover object-center transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C47]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-[#002C47] text-[9px] font-extrabold uppercase tracking-widest text-[#6CB29D] mb-1 inline-block border border-[#6CB29D]/40">
                  EASL Congress
                </span>
                <div className="text-xs font-serif font-bold">European Association for the Study of the Liver (EASL)</div>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* SECTION 3: AWARDS, MEMBERSHIPS & EXTRACURRICULARS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Awards & Honours */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] flex items-center gap-3">
                <Award className="w-6 h-6 text-[#6CB29D]" />
                Awards, Ranks & Honours
              </h2>
              <p className="text-slate-600 text-sm font-normal">
                Participant faculty in various national and international conferences and programs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awardsList.map((award, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#00843D]/50 hover:bg-white transition-all shadow-2xs flex items-start gap-3.5 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#EBF5F2] text-[#00843D] group-hover:bg-[#00843D] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    {award.sn}
                  </span>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-sm font-bold text-[#002C47]">
                        {award.title}
                      </h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#00843D] bg-[#EBF5F2] px-2 py-0.5 rounded">
                        {award.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {award.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] flex items-center gap-3">
              <Users className="w-6 h-6 text-[#6CB29D]" />
              Societal Memberships
            </h2>
            <div className="p-6 rounded-md bg-[#EBF5F2] border border-[#6CB29D]/30 text-[#1C2936] space-y-4">
              <p className="text-xs sm:text-sm text-slate-700">
                <strong className="text-[#00843D]">Life Member:</strong> Indian Society of Gastroenterology (ISG), Indian Pancreas Club (IPC), Society of Gastrointestinal Endoscopy of India (SGEI), Colitis and Crohn’s Foundation (India)
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                <strong className="text-[#00843D]">Member:</strong> European Association for Study of Liver (EASL), American Society of Gastrointestinal Endoscopy (ASGE), European Society of Gastrointestinal Endoscopy (ESGE), International Association of Pancreatology (IAP), World Endoscopy Organization (WEO), International Liver Cancer Association (ILCA)
              </p>
            </div>
          </div>




        </div>
      </section>

      <WhyChoose />
      <CtaBanner />
    </div>
  );
}
