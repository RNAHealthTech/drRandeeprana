"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";

export default function FloatingWidgets() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 sm:bottom-8 right-6 z-40">
        <a
          href="https://wa.me/919643163941?text=Hello%20Dr.%20Randeep%20Rana,%20I%20would%20like%20to%20consult%20regarding%20gastroenterology%20care."
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 rounded-md bg-[#6CB29D] text-white transition-transform duration-300"
          aria-label="Contact on WhatsApp"
        >
          {/* Glowing Ring */}
          <span className="absolute -inset-1 rounded-md bg-[#6CB29D]/40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-white text-[#002C47] text-xs font-semibold px-3.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:inline border border-slate-200">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 p-3 sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+919643163941"
            className="py-3 px-4 rounded-md font-bold text-xs text-[#002C47] bg-[#F4F7F9] flex items-center justify-center gap-2 border border-slate-200 uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-[#6CB29D]" />
            <span>Call Now</span>
          </a>
          <Link
            href="/contact"
            className="py-3 px-4 rounded-md font-bold text-xs text-white bg-[#6CB29D] hover:bg-[#5BA897] flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </>
  );
}
