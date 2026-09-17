"use client";

import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

export default function Logo({
  variant = "light",
  className = "",
  showText = true,
}: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-3 group shrink-0 select-none ${className}`}>
      {/* Enhanced Emblem Graphic */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[#00843D]/20 rounded-2xl blur-md group-hover:bg-[#0078BF]/30 transition-all duration-300 pointer-events-none" />

        <svg
          viewBox="0 0 120 120"
          className="w-full h-full relative z-10 transform group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Emerald Gradient */}
            <linearGradient id="emblemGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A859" />
              <stop offset="50%" stopColor="#00843D" />
              <stop offset="100%" stopColor="#005A29" />
            </linearGradient>

            {/* Sapphire Blue Gradient */}
            <linearGradient id="emblemGradSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0099FF" />
              <stop offset="50%" stopColor="#0078BF" />
              <stop offset="100%" stopColor="#004E7C" />
            </linearGradient>

            {/* Subtle Inner Sheen */}
            <linearGradient id="emblemSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Medical Gold Accent */}
            <linearGradient id="emblemGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Outer Shield Crest */}
          <path
            d="M60 6L108 22V56C108 84 86 106 60 114C34 106 12 84 12 56V22L60 6Z"
            fill="url(#emblemGradPrimary)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Inner Shield Layer */}
          <path
            d="M60 14L98 28V56C98 79 80 98 60 105C40 98 22 79 22 56V28L60 14Z"
            fill={isDarkBg ? "#001D30" : "#FFFFFF"}
          />

          {/* Top Sheen Reflection */}
          <path
            d="M60 14L98 28V50C76 46 44 46 22 50V28L60 14Z"
            fill="url(#emblemSheen)"
          />

          {/* Medical Stethoscope Arc / Care Loop */}
          <path
            d="M38 38C38 32 43 27 50 27C57 27 62 32 62 38V60C62 70 71 78 81 78C91 78 98 70 98 60"
            stroke="url(#emblemGradSecondary)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.18"
          />

          {/* Stylized Monogram "R R" */}
          {/* First 'R' in Medical Emerald */}
          <path
            d="M40 38H55C61.5 38 65.5 41.5 65.5 46.5C65.5 51.5 61.5 55 55 55H40V38ZM40 55V82M54 55L67 82"
            stroke="#00843D"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Second 'R' in Sapphire Blue Interlocking */}
          <path
            d="M62 38H77C83.5 38 87.5 41.5 87.5 46.5C87.5 51.5 83.5 55 77 55H62V38ZM62 55V82M76 55L89 82"
            stroke="#0078BF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Medical Caduceus Star / Trust Dot */}
          <circle cx="60" cy="24" r="4" fill="url(#emblemGold)" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-xl sm:text-[22px] font-serif font-bold tracking-tight transition-colors duration-200 leading-tight ${
                isDarkBg
                  ? "text-white group-hover:text-[#6CB29D]"
                  : "text-[#002C47] group-hover:text-[#0078BF]"
              }`}
            >
              Dr. Randeep Rana
            </span>
          </div>

          <span
            className={`text-[9.5px] sm:text-[10px] font-sans font-extrabold tracking-widest uppercase mt-0.5 ${
              isDarkBg ? "text-[#6CB29D]" : "text-[#00843D]"
            }`}
          >
            DM Gastroenterology (AIIMS New Delhi)
          </span>
        </div>
      )}
    </div>
  );
}
