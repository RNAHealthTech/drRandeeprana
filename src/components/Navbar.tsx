"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Menu, X, SquarePen, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blog" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Strip (Cleveland Clinic Style) */}
      <div className="bg-[#F8FAFC] text-[#5B6770] text-xs py-2 px-4 hidden sm:block border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#5B6770]">
              <MapPin className="w-3.5 h-3.5 text-[#00843D]" /> Max Smart Superspeciality Hospital, Saket, New Delhi
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+919643163941" className="hover:text-[#0078BF] transition-colors font-bold text-[#0078BF] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 96431 63941
            </a>
            <a href="mailto:randeeprana90@gmail.com" className="hover:text-[#0078BF] transition-colors">
              randeeprana90@gmail.com
            </a>
            <a
              href="#contact"
              className="bg-[#00843D] hover:bg-[#006EB6] text-white font-semibold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-sm transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar (Pure White Header) */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 border-b border-slate-200 py-3"
            : "bg-white border-b border-slate-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Cleveland Clinic Emblem & Brand Logo */}
            <Link href="/" aria-label="Dr. Randeep Rana Home">
              <Logo variant="light" />
            </Link>

            {/* Nav Links - Semi-bold 600 */}
            <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-[#5B6770]">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 ${
                      isActive
                        ? "text-[#0078BF] font-semibold"
                        : "hover:text-[#0078BF] font-semibold"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00843D] rounded-md"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Signature CTA Button Pill - Semi-bold 600 */}
            <div className="hidden sm:flex items-center space-x-3 shrink-0">
              <Link
                href="/contact"
                className="bg-[#6CB29D] hover:bg-[#5BA897] text-white font-semibold text-[11px] uppercase tracking-wider rounded-md py-2.5 pl-5 pr-2 transition-all duration-200 flex items-center gap-3 group"
              >
                <span>Book Appointment</span>
                <div className="w-7 h-7 rounded-md bg-white/20 text-white flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <SquarePen className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#002C47] bg-[#F4F7F9] border border-slate-200 hover:text-[#6CB29D] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <>
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 text-[#1C2936]"
          >
            <div className="flex flex-col space-y-2 font-medium text-xs uppercase tracking-wider">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-4 rounded-md transition-colors ${isActive
                        ? "bg-[#EBF5F2] text-[#00843D] font-bold"
                        : "hover:bg-[#F4F7F9] hover:text-[#0078BF]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="tel:+919643163941"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-md text-center font-bold text-[#002C47] bg-[#F4F7F9] border border-slate-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#6CB29D]" />
                  <span>Call +91 96431 63941</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-md text-center font-bold text-white bg-[#6CB29D] hover:bg-[#5BA897] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </header>
  );
}
