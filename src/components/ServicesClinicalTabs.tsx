"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  Flame,
  Layers,
  Camera,
  ShieldCheck,
  Sparkles,
  Droplet,
  Compass,
  Search,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  Phone,
  HelpCircle,
  X,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import {
  CONDITIONS_DATA,
  DIAGNOSTICS_DATA,
  SYMPTOMS_DATA,
  MegaMenuSection,
  ClinicalCategory,
  ClinicalItem,
} from "@/data/clinicalData";
import ClinicalDetailModal from "@/components/ClinicalDetailModal";

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse,
  Stethoscope,
  Activity,
  Flame,
  Layers,
  Camera,
  ShieldCheck,
  Sparkles,
  Droplet,
  Compass,
};

interface SelectedModalState {
  item: ClinicalItem;
  sectionId: string;
  categoryTitle: string;
  categorySlug?: string;
}

export default function ServicesClinicalTabs() {
  const [activeTab, setActiveTab] = useState<string>("conditions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedModal, setSelectedModal] = useState<SelectedModalState | null>(null);

  const tabs: MegaMenuSection[] = [
    CONDITIONS_DATA,
    DIAGNOSTICS_DATA,
    SYMPTOMS_DATA,
  ];

  const currentSection = tabs.find((t) => t.id === activeTab) || tabs[0];

  // Global search across all 3 sections
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    const results: {
      sectionId: string;
      sectionTitle: string;
      categoryTitle: string;
      categorySlug?: string;
      item: ClinicalItem;
    }[] = [];

    tabs.forEach((section) => {
      section.columns.forEach((category) => {
        category.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query) ||
            category.title.toLowerCase().includes(query)
          ) {
            results.push({
              sectionId: section.id,
              sectionTitle: section.menuTitle,
              categoryTitle: category.title,
              categorySlug: category.slug,
              item,
            });
          }
        });
      });
    });

    return results;
  }, [searchQuery]);

  const handleOpenDetail = (
    item: ClinicalItem,
    sectionId: string,
    categoryTitle: string,
    categorySlug?: string
  ) => {
    setSelectedModal({
      item,
      sectionId,
      categoryTitle,
      categorySlug,
    });
  };

  return (
    <div className="w-full space-y-12">
      {/* Search and Tab Switcher */}
      <div className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery("");
                  }}
                  className={`px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#00843D] text-white shadow-sm"
                      : "text-slate-600 hover:text-[#0078BF] hover:bg-slate-50"
                  }`}
                >
                  <span>{tab.menuTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search condition, procedure, or symptom..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Section Title banner */}
        {!searchQuery && (
          <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2.5 py-1 rounded-md">
                {currentSection.menuTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002C47] mt-2">
                {currentSection.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                {currentSection.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 hidden sm:inline">
                💡 Click any item or arrow to view full clinical details
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0078BF] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider rounded-md px-5 py-2.5 transition-colors shrink-0 shadow-xs"
              >
                <span>Consult Dr. Rana</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* If Search is Active */}
      {searchQuery && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#002C47]">
              Search Results for &ldquo;{searchQuery}&rdquo; ({searchResults?.length || 0} found)
            </h3>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-[#0078BF] hover:underline"
            >
              Clear Search
            </button>
          </div>

          {searchResults && searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((res, i) => (
                <div
                  key={i}
                  onClick={() =>
                    handleOpenDetail(
                      res.item,
                      res.sectionId,
                      res.categoryTitle,
                      res.categorySlug
                    )
                  }
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#00843D] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00843D] bg-[#EBF5F2] px-2 py-0.5 rounded">
                        {res.sectionTitle}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {res.categoryTitle}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#002C47] group-hover:text-[#0078BF] transition-colors pt-1 flex items-center justify-between">
                      <span>{res.item.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#0078BF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {res.item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00843D] group-hover:underline inline-flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] text-slate-400">1 min read</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-200 space-y-3">
              <p className="text-slate-500 font-medium text-sm">
                No matching conditions, diagnostics, or symptoms found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <p className="text-xs text-slate-400">
                Contact Dr. Randeep Rana&apos;s team directly for comprehensive medical evaluation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00843D] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-md mt-2"
              >
                <span>Contact Clinic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Tab Panels */}
      {!searchQuery && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`grid ${
              currentSection.columns.length === 4
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-3"
            } gap-6`}
          >
            {currentSection.columns.map((col) => {
              const IconComponent = ICON_MAP[col.iconName] || Stethoscope;
              const detailPageHref = col.slug
                ? `/conditions/${col.slug}`
                : undefined;

              return (
                <div
                  key={col.title}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#6CB29D] transition-all duration-300 p-6 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Category Header with Dedicated Page Arrow Link */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${col.iconBg}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {detailPageHref ? (
                          <Link
                            href={detailPageHref}
                            className="text-base font-bold text-[#002C47] hover:text-[#00843D] transition-colors"
                          >
                            {col.title}
                          </Link>
                        ) : (
                          <h3 className="text-base font-bold text-[#002C47]">
                            {col.title}
                          </h3>
                        )}
                      </div>

                      {detailPageHref ? (
                        <Link
                          href={detailPageHref}
                          className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-[#EBF5F2] text-slate-400 hover:text-[#00843D] flex items-center justify-center transition-colors shadow-2xs"
                          title={`Open ${col.title} full dedicated guide`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {col.items.length} items
                        </span>
                      )}
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {col.items.map((item) => (
                        <div
                          key={item.name}
                          onClick={() =>
                            handleOpenDetail(
                              item,
                              currentSection.id,
                              col.title,
                              col.slug
                            )
                          }
                          className="group p-3 -mx-2 rounded-xl hover:bg-[#F0FAF7] border border-transparent hover:border-[#C5E9DF] transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs sm:text-[13px] font-bold text-[#002C47] group-hover:text-[#00843D] transition-colors flex items-center gap-1.5">
                              <span>{item.name}</span>
                            </h4>
                            <ExternalLink className="w-3 h-3 text-[#00843D] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                          </div>
                          <p className="text-xs text-slate-500 font-light mt-1 leading-snug group-hover:text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom direct page link */}
                  <div className="pt-4 mt-6 border-t border-slate-100">
                    {detailPageHref ? (
                      <Link
                        href={detailPageHref}
                        className="w-full py-2.5 bg-slate-50 hover:bg-[#00843D] text-[#002C47] hover:text-white rounded-xl text-xs font-bold text-center block transition-all shadow-2xs"
                      >
                        Explore {col.title} Guide →
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          handleOpenDetail(
                            col.items[0],
                            currentSection.id,
                            col.title,
                            col.slug
                          )
                        }
                        className="w-full py-2.5 bg-slate-50 hover:bg-[#EBF5F2] text-[#002C47] hover:text-[#00843D] rounded-xl text-xs font-bold text-center block transition-colors"
                      >
                        View {col.title} Details →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Clinical Guidance Banner */}
      <div className="bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0F9FF] rounded-2xl p-6 sm:p-8 border border-emerald-200/70 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00843D] text-white flex items-center justify-center shrink-0 shadow-sm">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#002C47]">
              Need clinical guidance on your symptoms or diagnostic reports?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light mt-0.5">
              Dr. Randeep Rana provides personalized evaluation and second opinions at Max Smart Super Speciality Hospital, Saket.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/about"
            className="text-xs sm:text-sm font-bold text-[#0078BF] hover:text-[#006EB6] hover:underline px-3 py-2 transition-colors flex items-center gap-1"
          >
            <span>View Dr. Rana&apos;s Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="bg-[#00843D] hover:bg-[#006EB6] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Schedule Direct Evaluation</span>
          </Link>
        </div>
      </div>

      {/* Popup / Modal Component */}
      {selectedModal && (
        <ClinicalDetailModal
          item={selectedModal.item}
          sectionId={selectedModal.sectionId}
          categoryTitle={selectedModal.categoryTitle}
          categorySlug={selectedModal.categorySlug}
          isOpen={!!selectedModal}
          onClose={() => setSelectedModal(null)}
        />
      )}
    </div>
  );
}
