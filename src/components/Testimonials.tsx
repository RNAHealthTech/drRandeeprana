"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Play, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      location: "Saket, New Delhi",
      treatment: "GERD & Acid Reflux",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. Randeep Rana is exceptional! I suffered from severe acidity and heartburn for 3 years. After proper endoscopy and his targeted medicine plan, I am completely symptom-free. Highly recommended gastroenterologist at Max Smart Hospital.",
    },
    {
      name: "Meenakshi Verma",
      location: "South Delhi",
      treatment: "Painless Colonoscopy",
      rating: 5,
      date: "1 month ago",
      text: "I was extremely anxious about getting a colonoscopy done. Dr. Rana explained everything so calmly. The procedure under sedation was 100% painless! Truly a master in advanced endoscopy.",
    },
    {
      name: "Sunil Kapoor",
      location: "Gurugram",
      treatment: "Fatty Liver & Reversal",
      rating: 5,
      date: "3 weeks ago",
      text: "Diagnosed with Grade 2 fatty liver. Dr. Rana's guidance on diet, medication, and lifestyle transformed my reports in just 3 months. His AIIMS background really reflects in his clinical diagnosis.",
    },
    {
      name: "Pooja Malhotra",
      location: "Vasant Kunj, Delhi",
      treatment: "IBS & Stomach Pain",
      rating: 5,
      date: "2 months ago",
      text: "Visited multiple doctors for chronic IBS and abdominal cramps. Dr. Rana listened patiently, diagnosed the exact issue, and prescribed minimal effective medicine. Excellent doctor!",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#F4F7F9] relative text-[#1C2936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-md bg-white border border-[#DDE6ED] text-[#002C47] text-xs font-bold uppercase tracking-widest">
            Patient Stories & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002C47] tracking-tight">
            Trusted by Thousands of <br className="hidden sm:inline" />
            <span className="text-[#6CB29D] italic">Satisfied Patients</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Real experiences from patients treated at Max Smart Super Speciality Hospital, Saket.
          </p>
        </div>

        {/* Video Testimonial Preview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-[#EBF5F2] border border-[#DDE6ED] rounded-md p-8 sm:p-12 text-[#1C2936] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-bold uppercase text-[#00843D]">
              <Play className="w-3.5 h-3.5 fill-current" /> Video Experience
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47]">
              &ldquo;My Painless ERCP & Bile Duct Recovery Experience&rdquo;
            </h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Watch how our patient recovered smoothly from severe jaundice and gallstone bile duct blockage through endoscopic intervention with Dr. Randeep Rana.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold pt-2 text-slate-600">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#6CB29D]" /> Max Smart OPD Patient
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-current" /> 5.0 Star Rated Care
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-video rounded-md bg-slate-900 border border-slate-300 overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="w-16 h-16 rounded-md bg-[#6CB29D] text-white flex items-center justify-center">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-semibold">Patient Story Video</span>
                <span className="px-2 py-0.5 bg-black/60 rounded text-[10px]">2:45 Mins</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Patient Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white border border-slate-200 p-8 rounded-md relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />

              <div className="flex items-center space-x-1 text-amber-400 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-serif italic">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-base font-serif font-bold text-[#002C47]">{rev.name}</h4>
                  <div className="text-xs font-semibold text-[#6CB29D]">{rev.treatment}</div>
                  <div className="text-[11px] text-slate-400">{rev.location}</div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EBF5F2] text-[#6CB29D] text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3" /> Verified Review
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">{rev.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
