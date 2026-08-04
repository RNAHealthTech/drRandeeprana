"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, ShieldCheck, ArrowUp } from "lucide-react";

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
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-[#6CB29D] flex items-center justify-center text-white font-serif font-extrabold text-xl shadow-md">
                RR
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-tight">
                  Dr. Randeep Rana
                </span>
                <span className="block text-xs font-sans font-semibold text-[#6CB29D] tracking-widest uppercase">
                  MD, DM (AIIMS) • Gastroenterologist
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Consultant Gastroenterologist, Hepatologist & Pancreatologist at Max Smart Super Speciality Hospital Saket and Assistant Professor at GB Pant Institute (GIPMER) & MAMC, New Delhi.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300 font-light">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#6CB29D]" /> AIIMS & PGIMER Super Specialist Alumni
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6CB29D]" /> Max Smart Saket & GIPMER / MAMC
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
              <li><Link href="/services" className="hover:text-[#6CB29D]">Acidity & Severe GERD Treatment</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Painless Gastroscopy & Colonoscopy</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Non-Invasive Fatty Liver & FibroScan</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">ERCP Bile Duct Stone Clearance</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Pancreatitis & EUS Cystogastrostomy</Link></li>
              <li><Link href="/services" className="hover:text-[#6CB29D]">Ulcerative Colitis & Crohn's Disease</Link></li>
            </ul>
          </div>

          {/* Hospital Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#6CB29D] uppercase tracking-widest">Clinical Locations</h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Max Smart Superspeciality Hospital</strong><br />
                  Press Enclave Marg, Saket, New Delhi 110017
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">GB Pant (GIPMER) & MAMC</strong><br />
                  Asst. Professor, Dept of Gastroenterology
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <a href="tel:+919876543210" className="hover:underline text-slate-200 font-bold">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6CB29D] shrink-0" />
                <a href="mailto:drrandeeprana@gastrohealth.in" className="hover:underline text-slate-200">
                  drrandeeprana@gastrohealth.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} Dr. Randeep Rana. All Rights Reserved. Designed for Medical Excellence.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#6CB29D]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#6CB29D]">Terms of Use</Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#002C47] hover:bg-[#6CB29D] text-slate-200 hover:text-white transition-colors"
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
