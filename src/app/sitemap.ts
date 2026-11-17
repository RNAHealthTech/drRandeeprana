
import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

import { blogPosts } from "@/data/blogPosts";
import { CATEGORY_PAGES_MAP } from "@/data/clinicalCategoryPagesData";

const BASE_URL = "https://drrandeepranagastro.com";

const appDir = path.join(process.cwd(), "src", "app");

const PAGE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

interface CandidateRoute {
  path: string;
  changeFrequency:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority: number;
}

// Check whether an actual Next.js page exists
function hasPage(route: string): boolean {
  const routeDir = route
    ? path.join(appDir, route.replace(/^\/+/, ""))
    : appDir;

  return PAGE_EXTENSIONS.some((ext) =>
    fs.existsSync(path.join(routeDir, `page${ext}`))
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const candidateStaticRoutes: CandidateRoute[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly", priority: 0.8 },
    { path: "/media", changeFrequency: "monthly", priority: 0.7 },
    { path: "/expertise", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faqs", changeFrequency: "monthly", priority: 0.7 },
    { path: "/testimonials", changeFrequency: "monthly", priority: 0.7 },
    { path: "/treatments", changeFrequency: "weekly", priority: 0.8 },
  ];

  // Verify static routes
  const staticRoutes: MetadataRoute.Sitemap =
    candidateStaticRoutes
      .filter((route) => hasPage(route.path))
      .map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      }));

  // Verify dynamic route templates
  const hasConditionsPage = hasPage("conditions/[slug]");
  const hasBlogPage = hasPage("blog/[slug]");

  // Conditions pages
  const conditionRoutes: MetadataRoute.Sitemap =
    hasConditionsPage
      ? Object.keys(CATEGORY_PAGES_MAP).map((slug) => ({
        url: `${BASE_URL}/conditions/${slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      }))
      : [];

  // Individual blog pages
  const blogRoutes: MetadataRoute.Sitemap =
    hasBlogPage
      ? blogPosts
        .filter((post) => Boolean(post.slug))
        .map((post) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: currentDate,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
      : [];

  // Combine and remove duplicate URLs
  const seenUrls = new Set<string>();

  return [...staticRoutes, ...conditionRoutes, ...blogRoutes].filter(
    (item) => {
      if (seenUrls.has(item.url)) return false;

      seenUrls.add(item.url);
      return true;
    }
  );
}
