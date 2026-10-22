import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HeartPulse,
  Phone,
  CalendarCheck,
  ListFilter,
  AlertTriangle,
  Microscope,
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Stethoscope,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import {
  CATEGORY_PAGES_MAP,
  CategoryPageData,
} from "@/data/clinicalCategoryPagesData";
import CtaBanner from "@/components/CtaBanner";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_PAGES_MAP).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = CATEGORY_PAGES_MAP[slug];

  if (!data) {
    return {
      title: "Clinical Condition Care | Dr. Randeep Rana",
    };
  }

  return {
    title: `${data.title} ${data.titleAccent} Treatment in Delhi | Dr. Randeep Rana`,
    description: data.description,
  };
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data: CategoryPageData | undefined = CATEGORY_PAGES_MAP[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-[#F8FAFC] text-[#1C2936] min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 space-y-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#00843D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/services" className="hover:text-[#00843D] transition-colors">
            {data.sectionLabel}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#00843D] font-bold">{data.title}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#EBF5F2]/80 via-transparent to-transparent pointer-events-none rounded-bl-full" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5F2] text-[#00843D] font-bold text-xs uppercase tracking-wider border border-[#00843D]/20">
              <HeartPulse className="w-4 h-4" />
              <span>{data.badge}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
              {data.title} <em className="font-serif italic font-normal text-[#00843D]">{data.titleAccent}</em>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              {data.description}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl px-6 py-3.5 transition-all flex items-center gap-2.5 shadow-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              <a
                href="tel:+919643163941"
                className="bg-white hover:bg-slate-50 text-[#002C47] border border-slate-200 font-bold text-xs sm:text-sm rounded-xl px-6 py-3.5 transition-all flex items-center gap-2.5 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#00843D]" />
                <span>Call +91 96431 63941</span>
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            {data.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <strong
                  className="block text-lg sm:text-xl font-serif font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.label}
                </strong>
                <span className="text-xs text-slate-500 font-light leading-snug block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Jump To Heading Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-wrap items-center gap-2 sm:gap-3 sticky top-20 z-30 backdrop-blur-md bg-white/95">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002C47] flex items-center gap-1.5 mr-2">
            <ListFilter className="w-3.5 h-3.5 text-[#00843D]" />
            <span>Jump To Heading:</span>
          </span>
          {data.topics.map((topic) => (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#EBF5F2] hover:text-[#00843D] text-slate-700 border border-slate-200/80 transition-colors"
            >
              {topic.title.split("(")[0].trim()}
            </a>
          ))}
        </div>

        {/* In-Depth Topics List */}
        <div className="space-y-10">
          {data.topics.map((topic) => (
            <section
              key={topic.id}
              id={topic.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 scroll-mt-36"
            >
              {/* Topic Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00843D] text-white flex items-center justify-center shrink-0 font-bold shadow-xs">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      {topic.headingIndex}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47]">
                      {topic.title}
                    </h2>
                  </div>
                </div>

                <span
                  className="self-start sm:self-auto text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border"
                  style={{
                    color: topic.badgeColor || "#00843D",
                    borderColor: `${topic.badgeColor || "#00843D"}40`,
                    backgroundColor: `${topic.badgeColor || "#00843D"}10`,
                  }}
                >
                  {topic.badge}
                </span>
              </div>

              {/* Summary Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {topic.summary}
              </p>

              {/* 3-Column Clinical Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 1. Symptoms & Warning Signs */}
                <div className="bg-[#FAFBFD] border border-slate-200/90 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-[#00843D] flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#00843D]" />
                      <span>Symptoms &amp; Warning Signs</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {topic.symptoms.map((sym, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-light leading-snug">
                          <CircleDot className="w-3.5 h-3.5 text-[#00843D] shrink-0 mt-0.5" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Diagnostic Workup */}
                <div className="bg-[#FAFBFD] border border-slate-200/90 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-[#0078BF] flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-[#0078BF]" />
                      <span>Diagnostic Workup</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {topic.diagnostics.map((diag, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-light leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0078BF] shrink-0 mt-0.5" />
                          <span>{diag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. Treatment & Clinical Protocol */}
                <div className="bg-[#FAFBFD] border border-slate-200/90 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-[#2563EB] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                      <span>Treatment &amp; Protocol</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {topic.treatment.map((tr, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-light leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{tr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Topic Footer Note & Action */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <UserCheck className="w-4 h-4 text-[#00843D] shrink-0" />
                  <span>
                    Protocol curated by <strong className="text-[#002C47]">Dr. Randeep Rana</strong> (AIIMS &amp; PGIMER Trained, Max Smart Hospital)
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Book Evaluation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>

      <CtaBanner />
    </div>
  );
}
