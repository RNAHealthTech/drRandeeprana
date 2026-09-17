"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, ShieldCheck, ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] text-slate-600 pt-16 pb-24 sm:pb-12 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" aria-label="Dr. Randeep Rana Home" className="inline-block mb-3">
              <Logo variant="light" />
            </Link>

            <p className="text-xs text-slate-600 font-light leading-relaxed mt-2 mb-4">
              Consultant Gastroenterology at Max Smart Super Speciality Hospital, Saket, New Delhi. Ex-Assistant Professor at GIPMER. DM (Gastroenterology) & Fellowship in Advanced GI Endoscopy from AIIMS, New Delhi.
            </p>

            <div className="flex flex-col space-y-2 text-xs text-slate-700 font-normal">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00843D] shrink-0" /> MBBS (DMCH), MD (Dr. RMLH), DM & Fellowship (AIIMS New Delhi)
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00843D] shrink-0" /> Max Smart Super Speciality Hospital, Saket
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#002C47] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <li><Link href="/" className="hover:text-[#0078BF] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0078BF] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#0078BF] transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#0078BF] transition-colors">Blogs</Link></li>
              <li><Link href="/media" className="hover:text-[#0078BF] transition-colors">Media & News</Link></li>
              <li><Link href="/contact" className="hover:text-[#0078BF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Specializations Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#002C47] uppercase tracking-widest">Key Services</h4>
            <ul className="space-y-2 text-xs font-light text-slate-600">
              <li><Link href="/services" className="hover:text-[#0078BF]">Pancreatico-Biliary Sciences & ERCP</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF]">Advanced Endoscopy & EUS</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF]">Third Space Endoscopy (POEM, ESD, STER)</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF]">Early GI Cancer & EFTR (FTRD)</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF]">Inflammatory Bowel Diseases (IBD)</Link></li>
              <li><Link href="/services" className="hover:text-[#0078BF]">Portal Hypertension & Liver Cirrhosis</Link></li>
            </ul>
          </div>

          {/* Hospital Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#002C47] uppercase tracking-widest">Clinical Location</h4>
            <div className="space-y-3 text-xs text-slate-600 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00843D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#002C47]">Max Smart Super Speciality Hospital</strong><br />
                  Saket, New Delhi, India<br />
                  <span className="text-slate-500 text-[11px]">Mon - Sat: 9.00 am - 6.00 pm</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00843D] shrink-0" />
                <a href="tel:+919643163941" className="hover:underline text-[#0078BF] font-bold">
                  +91 96431 63941
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00843D] shrink-0" />
                <a href="mailto:randeeprana90@gmail.com" className="hover:underline text-[#0078BF]">
                  randeeprana90@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} Dr. Randeep Rana. All Rights Reserved. | Website by{" "}
            <a
              href="https://rnahealthtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00843D] font-semibold hover:underline"
            >
              RNA HealthTech
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#0078BF]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0078BF]">Terms of Use</Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-md bg-white hover:bg-[#6CB29D] text-[#002C47] hover:text-white border border-slate-200 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-6 text-[10px] text-slate-400 text-center font-light leading-relaxed">
          Disclaimer: The information provided on this website is for educational purposes only and does not substitute professional medical advice, diagnosis, or treatment. Always consult Dr. Randeep Rana or a qualified medical professional for personal health concerns.
        </div>
      </div>
    </footer>
  );
}
