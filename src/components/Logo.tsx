"use client";

import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
  stacked?: boolean;
}

export default function Logo({
  variant = "light",
  className = "",
  showText = true,
  stacked = false,
}: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <div
      className={`inline-flex ${
        stacked ? "flex-col items-center text-center gap-3" : "items-center gap-3.5"
      } group shrink-0 select-none ${className}`}
    >
      {/* Precision Circular Health Emblem */}
      <div
        className={`relative ${
          stacked ? "w-20 h-20 sm:w-24 sm:h-24" : "w-11 h-11 sm:w-13 sm:h-13"
        } shrink-0 flex items-center justify-center`}
      >
        {/* Soft Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[#00843D]/15 rounded-full blur-md group-hover:bg-[#0078BF]/25 transition-all duration-300 pointer-events-none" />

        <svg
          viewBox="0 0 120 120"
          className="w-full h-full relative z-10 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Gradient: Blue to Green Arc */}
            <linearGradient id="logoArcGrad" x1="15%" y1="15%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="40%" stopColor="#0078BF" />
              <stop offset="70%" stopColor="#00843D" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Inner Ring Glow */}
            <linearGradient id="logoInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00843D" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Outer Gradient Ring with Top Opening for the Sphere */}
          <path
            d="M 60 22 A 38 38 0 1 0 60.01 22"
            stroke="url(#logoArcGrad)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Inner Thin Concentric Guidance Circle */}
          <circle
            cx="60"
            cy="60"
            r="28"
            stroke={isDarkBg ? "#334155" : "#E2E8F0"}
            strokeWidth="1.5"
          />

          {/* Top Medical / Patient Wellness Dot */}
          <circle
            cx="60"
            cy="22"
            r="6.5"
            fill="#00843D"
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* Center Smiling Digestive Wellness Arc */}
          <path
            d="M 44 61 Q 60 72 76 61"
            stroke="#00843D"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Structured 3-Tier Brand Typography */}
      {showText && (
        <div
          className={`flex flex-col justify-center ${
            stacked ? "items-center text-center" : "items-start text-left"
          }`}
        >
          {/* Main Name */}
          <h1
            className={`text-lg sm:text-[21px] font-bold tracking-tight transition-colors duration-200 leading-none ${
              isDarkBg
                ? "text-white group-hover:text-[#6CB29D]"
                : "text-[#002C47] group-hover:text-[#0078BF]"
            }`}
          >
            Dr. Randeep Rana
          </h1>

          {/* Tier 1: Specialities in Medical Green */}
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-wider uppercase mt-1 ${
              isDarkBg ? "text-[#6CB29D]" : "text-[#00843D]"
            }`}
          >
            GASTROENTEROLOGY · HEPATOLOGY · ADVANCED ENDOSCOPY
          </span>

          {/* Tier 2: Pedigree & Hospital (30% bottom section) */}
          <span
            className={`text-[7.5px] sm:text-[8px] font-medium tracking-wide uppercase mt-0.5 ${
              isDarkBg ? "text-slate-400" : "text-slate-500"
            }`}
          >
            DM (AIIMS, NEW DELHI) · MAX SMART SUPER SPECIALITY HOSPITAL, SAKET
          </span>
        </div>
      )}
    </div>
  );
}

