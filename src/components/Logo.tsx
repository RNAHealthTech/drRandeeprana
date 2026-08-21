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
    <div className={`inline-flex items-center gap-3 group shrink-0 ${className}`}>
      {/* Emblem Graphic */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform group- transition-transform duration-300 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00843D" />
              <stop offset="100%" stopColor="#005A29" />
            </linearGradient>

            <linearGradient id="logoGradSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0078BF" />
              <stop offset="100%" stopColor="#004E7C" />
            </linearGradient>

            <linearGradient id="logoGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6CB29D" />
              <stop offset="100%" stopColor="#00843D" />
            </linearGradient>
          </defs>

          {/* Shield / Outer Crest Base */}
          <path
            d="M50 8L88 22V48C88 70 71.5 88.5 50 94C28.5 88.5 12 70 12 48V22L50 8Z"
            fill="url(#logoGradPrimary)"
            className="transition-colors duration-300"
          />

          {/* Inner Accent Arc / Medical Care Curve */}
          <path
            d="M50 14L80 26V48C80 66 67 81.5 50 86.5C33 81.5 20 66 20 48V26L50 14Z"
            fill={isDarkBg ? "#001D30" : "#FFFFFF"}
            opacity="0.95"
          />

          {/* Medical Stethoscope / GI Care Loop Overlay */}
          <path
            d="M32 30C32 25.5 35.5 22 40 22C44.5 22 48 25.5 48 30V48C48 56.8 55.2 64 64 64C72.8 64 80 56.8 80 48"
            stroke="url(#logoGradSecondary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.25"
          />

          {/* Stylized Monogram "R R" */}
          {/* First 'R' */}
          <path
            d="M34 32H46C51 32 54 34.5 54 38.5C54 42.5 51 45 46 45H34V32ZM34 45V68M45 45L55 68"
            stroke="#00843D"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Second 'R' overlapping in Secondary Accent Color */}
          <path
            d="M52 32H64C69 32 72 34.5 72 38.5C72 42.5 69 45 64 45H52V32ZM52 45V68M63 45L73 68"
            stroke="#0078BF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Small Sparkling Medical Star Badge */}
          <circle cx="50" cy="22" r="3.5" fill="#00843D" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-xl sm:text-2xl font-serif font-bold tracking-tight transition-colors duration-200 ${
                isDarkBg
                  ? "text-white group-hover:text-[#6CB29D]"
                  : "text-[#1C2936] group-hover:text-[#0078BF]"
              }`}
            >
              Dr. Randeep Rana
            </span>
          </div>

          <span
            className={`text-[9.5px] sm:text-[10px] font-sans font-extrabold tracking-widest uppercase ${
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
