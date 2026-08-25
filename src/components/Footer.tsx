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
    <footer className="bg-[#001D30] text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-[#002C47] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#002C47]">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" aria-label="Dr. Randeep Rana Home">
              <Logo variant="dark" />
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Consultant Gastroenterology at Max Smart Superspeciality Hospital, Saket, New Delhi. Ex-Assistant Professor at GIPMER. DM (Gastroenterology) & Fellowship in Advanced GI Endoscopy from AIIMS, New Delhi.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300 font-light">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#6CB29D]" /> MBBS (DMCH), MD (Dr. RMLH), DM & Fellowship (AIIMS New Delhi)
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6CB29D]" /> Max Smart Superspeciality Hospital, Saket
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#6CB29D] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <li><Link href="/" className="hover:text-[#6CB29D] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#6CB29D] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#6CB29D] transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#6CB29D] transition-colors">Blogs</Link></li>
              <li><Link href="/media" className="hover:text-[#6CB29D] transition-colors">Media & News</Link></li>
              <li><Link href="/contact" className="hover:text-[#6CB29D] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Specializations Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#6CB29D] uppercase tracking-widest">Key Services</h4>
            <ul className="space-y-2 text-xs font-light text-slate-400">
              <li><Link href="/services" className="hover:text-[#6CB29D]">Pancreatico-Biliary Sciences & ERCP</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Advanced Endoscopy & EUS</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Third Space Endoscopy (POEM, ESD, STER)</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Early GI Cancer & EFTR (FTRD)</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Inflammatory Bowel Diseases (IBD)</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Portal Hypertension & Liver Cirrhosis</Link></li>
            </ul>
          </div>

          {/* Hospital Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#6CB29D] uppercase tracking-widest">Clinical Location</h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Max Smart Superspeciality Hospital</strong><br />
                  Saket, New Delhi, India<br />
                  <span className="text-slate-400 text-[11px]">Mon - Sat: 9.00 am - 6.00 pm</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919643163941" className="hover:underline text-slate-200 font-bold">
                    +91 96431 63941
                  </a>
                  <a href="tel:+919643163941" className="hover:underline text-slate-200 font-bold">
                    +91 96431 63941
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <a href="mailto:randeeprana90@gmail.com" className="hover:underline text-slate-200">
                  randeeprana90@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} Dr. Randeep Rana. All Rights Reserved. | Website by{" "}
            <a
              href="https://rnahealthtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6CB29D] font-semibold hover:underline"
            >
              RNA HealthTech
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#6CB29D]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#6CB29D]">Terms of Use</Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-md bg-[#002C47] hover:bg-[#6CB29D] text-slate-200 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-6 text-[10px] text-slate-500 text-center font-light leading-relaxed">
          Disclaimer: The information provided on this website is for educational purposes only and does not substitute professional medical advice, diagnosis, or treatment. Always consult Dr. Randeep Rana or a qualified medical professional for personal health concerns.
        </div>
      </div>
    </footer>
  );
}
