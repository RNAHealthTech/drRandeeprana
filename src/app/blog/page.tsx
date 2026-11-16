import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Clock, ArrowRight, User } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Patient Education Blog | Digestive Health Articles by Dr. Randeep Rana",
  description:
    "Read expert patient education articles by Dr. Randeep Rana on pancreatitis, liver disease, fatty liver, cirrhosis, advanced endoscopy, and more. Evidence-based information for your digestive health.",
};

export { blogPosts, type BlogPost };

export default function BlogPage() {
  return (
    <div className="bg-white text-[#1C2936]">
      <PageHeader
        badge="Patient Education & Articles"
        title="Gastrointestinal Health & Medical Blog"
        subtitle="Informative articles, clinical insights, and patient education guides written by Dr. Randeep Rana to empower you on your digestive wellness journey."
        breadcrumbs={[{ label: "Blog" }]}
        bgImage="/images/dr-randeep-rana-scrubs-front.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#F4F7F9] border border-[#DDE6ED] rounded-md p-6 sm:p-8 hover:border-[#6CB29D]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#EBF5F2] text-[#6CB29D] font-bold uppercase tracking-widest text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#002C47]">
                      <Clock className="w-3.5 h-3.5 text-[#6CB29D]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <User className="w-3.5 h-3.5 text-[#6CB29D]" />
                    <span>Dr. Randeep Rana</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#002C47] group-hover:text-[#6CB29D] transition-colors uppercase tracking-wider"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#6CB29D]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
