import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { blogPosts } from "../page";
import { CheckCircle2, ArrowLeft, BookOpen, SquarePen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | Dr. Randeep Rana" };

  return {
    title: `${post.title} | Dr. Randeep Rana Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge={post.category}
        title={post.title}
        subtitle={`Published by Dr. Randeep Rana, MD, DM (Gastroenterology, AIIMS New Delhi) • ${post.readTime}`}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title.slice(0, 30) + "..." },
        ]}
      />

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#002C47] hover:text-[#6CB29D] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#6CB29D]" />
            Back to All Articles
          </Link>

          {/* Author Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#002C47] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6CB29D] text-white font-serif font-extrabold flex items-center justify-center text-sm sm:text-lg shadow-md shrink-0">
                DR
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-white">Dr. Randeep Rana</h3>
                <p className="text-xs text-[#6CB29D] font-medium">
                  MD, DM (AIIMS) • Consultant Gastroenterologist, Hepatologist & Pancreatologist
                </p>
              </div>
            </div>
            <span className="text-xs text-slate-300 font-bold hidden sm:inline">{post.date}</span>
          </div>

          {/* Abstract / Excerpt */}
          <div className="p-6 rounded-2xl bg-[#F4F7F9] border-l-4 border-[#6CB29D] text-[#002C47] font-serif italic text-base leading-relaxed">
            {post.excerpt}
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-light">
            {post.contentSections ? (
              post.contentSections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47]">
                    {sec.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{sec.text}</p>
                </div>
              ))
            ) : (
              <p>{post.excerpt}</p>
            )}

            {/* Key Takeaways Box */}
            <div className="pt-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#EBF5F2] border border-[#6CB29D]/40 space-y-4">
                <h3 className="text-lg font-serif font-bold text-[#002C47] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#6CB29D]" />
                  Key Clinical Takeaways
                </h3>
                <div className="space-y-3">
                  {post.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#6CB29D] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consult Doctor CTA */}
          <div className="pt-8 border-t border-slate-200 text-center space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#002C47]">Need Personal Medical Advice?</h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-light">
              Schedule a personalized consultation with Dr. Randeep Rana at Max Smart Superspeciality Hospital, Saket.
            </p>
            <Link
              href="/contact"
              className="bg-[#6CB29D] hover:bg-[#5BA897] text-white font-extrabold text-xs uppercase tracking-wider rounded-full py-3.5 px-8 transition-all shadow-lg inline-flex items-center gap-3"
            >
              <span>Consult Dr. Randeep Rana</span>
              <SquarePen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </div>
  );
}
