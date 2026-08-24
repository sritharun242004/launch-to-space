import type { MetadataRoute } from "next";

const baseUrl = "https://launch-to-space.vercel.app";

const legalPages = ["privacy-policy", "cookie-policy", "legal-notice", "terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPages.map((slug) => ({
      url: `${baseUrl}/legal/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
