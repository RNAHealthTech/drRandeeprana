import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/blogPosts";
import { CATEGORY_PAGES_MAP } from "@/data/clinicalCategoryPagesData";

const BASE_URL = "https://drrandeepanagastro.com";

interface CandidateRoute {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Candidate public static routes specified for the project
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

  // Verify actual routes in src/app before adding to exclude 404s and non-existent pages
  const appDir = path.join(process.cwd(), "src", "app");
  const verifiedStaticRoutes: MetadataRoute.Sitemap = candidateStaticRoutes
    .filter((route) => {
      const pagePath =
        route.path === ""
          ? path.join(appDir, "page.tsx")
          : path.join(appDir, route.path.replace(/^\//, ""), "page.tsx");
      return fs.existsSync(pagePath);
    })
    .map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));

  // Dynamic condition category pages from CATEGORY_PAGES_MAP
  const conditionRoutes: MetadataRoute.Sitemap = Object.keys(
    CATEGORY_PAGES_MAP
  ).map((slug) => ({
    url: `${BASE_URL}/conditions/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic individual blog post pages from blogPosts data
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Deduplicate and combine all verified routes
  const seenUrls = new Set<string>();
  const combined: MetadataRoute.Sitemap = [];

  for (const item of [...verifiedStaticRoutes, ...conditionRoutes, ...blogRoutes]) {
    if (!seenUrls.has(item.url)) {
      seenUrls.add(item.url);
      combined.push(item);
    }
  }

  return combined;
}
