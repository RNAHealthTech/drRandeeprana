"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, ExternalLink, ShieldCheck, HeartPulse, Search, AlertCircle } from "lucide-react";
import YouTubeVideoPlayer from "@/components/YouTubeVideoPlayer";

export default function Testimonials() {
  const educationalGuides = [
    {
      title: "GERD & Acid Reflux Guidance",
      category: "Upper GI Health",
      icon: HeartPulse,
      summary:
        "Persistent heartburn and acid regurgitation can indicate gastroesophageal reflux. Clinical evaluation helps rule out erosive esophagitis, hiatal hernia, and Barrett's esophagus.",
      point: "Early lifestyle and medical evaluation prevents mucosal injury.",
    },
    {
      title: "Colorectal Screening Protocols",
      category: "Preventive Care",
      icon: Search,
      summary:
        "Screening colonoscopy is recommended from age 45 or earlier with family risk factors. Detecting and removing adenomatous polyps significantly reduces colorectal cancer risk.",
      point: "Evidence-based surveillance tailored to individual clinical history.",
    },
    {
      title: "Fatty Liver (MASLD) Management",
      category: "Hepatology Education",
      icon: ShieldCheck,
      summary:
        "Hepatic steatosis often develops silently in non-drinkers with metabolic risk factors. Quantitative FibroScan assessment helps monitor liver stiffness and fat percentage objectively.",
      point: "Structured lifestyle, dietary, and metabolic care in early stages.",
    },
    {
      title: "Red-Flag Gastrointestinal Signs",
      category: "Clinical Advisory",
      icon: AlertCircle,
      summary:
        "Symptoms such as vomiting blood, black tarry stools, difficulty swallowing, unexplained weight loss, or persistent jaundice require prompt medical evaluation.",
      point: "Immediate specialist consultation recommended for acute symptoms.",
    },
  ];

  return (
    <section id="patient-education" className="py-16 bg-[#F4F7F9] relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Public Health &amp; Clinical Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Evidence-Based Digestive <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Health Awareness</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Doctor-led educational outreach, clinical insights, and verified health guidance on gastrointestinal and liver wellness.
          </p>
        </div>

        {/* Video Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-[#EBF5F2] border border-[#DDE6ED] rounded-md p-6 sm:p-10 text-[#1C2936] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase text-[#00843D]">
              <Play className="w-3.5 h-3.5 fill-current" /> Educational Media Feature • The Lallantop
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] leading-snug">
              &ldquo;Alcohol को हाथ भी नहीं लगाते, फिर Fatty Liver क्यों हुआ?&rdquo;
            </h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Watch <strong>Dr. Randeep Rana</strong> on digital health feature <em>The Lallantop (&quot;Sehat&quot;)</em> discuss non-alcoholic fatty liver disease (NAFLD / MASLD), early symptoms, FibroScan assessment, and evidence-based lifestyle management.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-1 text-slate-600">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#6CB29D]" /> Dr. Randeep Rana, DM (AIIMS)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#00843D]">
                DMC Reg. No. 82691
              </span>
            </div>
            <div className="pt-2">
              <a
                href="https://www.youtube.com/watch?v=7Swj422FPj0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00843D] hover:text-[#002C47] transition-colors"
              >
                Watch Educational Interview on YouTube <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <YouTubeVideoPlayer
              videoId="7Swj422FPj0"
              title="Alcohol को हाथ भी नहीं लगाते, फिर Fatty Liver क्यों हुआ? डॉक्टर से वजह सुन लीजिए — Dr. Randeep Rana"
              channelName="The Lallantop • Sehat"
            />
          </div>
        </motion.div>

        {/* Clinical Health Guidance Cards (replacing promotional testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationalGuides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white border border-slate-200 p-8 rounded-md relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EBF5F2] text-[#00843D] text-[11px] font-bold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" /> {guide.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#002C47] pt-1">
                    {guide.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#00843D] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                    {guide.point}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
