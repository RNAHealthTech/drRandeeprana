"use client";

import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  stacked?: boolean;
}

export default function Logo({
  variant = "light",
  className = "",
  stacked = false,
}: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <div
      className={`inline-flex flex-col justify-center ${
        stacked ? "items-center text-center" : "items-start text-left"
      } group shrink-0 select-none ${className}`}
    >
      {/* Main Name */}
      <span
        className={`text-lg sm:text-[21px] font-bold tracking-tight transition-colors duration-200 leading-tight ${
          isDarkBg
            ? "text-white group-hover:text-[#6CB29D]"
            : "text-[#002C47] group-hover:text-[#0078BF]"
        }`}
      >
        Dr. Randeep Rana
      </span>

      {/* Tier 1: Specialities */}
      <span
        className={`text-[10px] sm:text-[11.5px] font-bold tracking-wide uppercase mt-1 ${
          isDarkBg ? "text-[#6CB29D]" : "text-[#00843D]"
        }`}
      >
        GASTROENTEROLOGIST · HEPATOLOGIST · ADVANCED ENDOSCOPIST
      </span>

      {/* Tier 2: Pedigree & Hospital */}
      <span
        className={`text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase mt-0.5 ${
          isDarkBg ? "text-slate-400" : "text-slate-500"
        }`}
      >
        DM (AIIMS, NEW DELHI) · MAX SMART SUPER SPECIALITY HOSPITAL, SAKET
      </span>
    </div>
  );
}

