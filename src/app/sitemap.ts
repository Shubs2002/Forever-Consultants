import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foreverconsultants.in";
  // Use a stable date to prevent unnecessary re-crawl signals on every build
  const lastModified = "2026-04-18";

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/lic`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mutual-funds`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/health`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // VCard profile pages — needed for Google Image indexing of person photos
    {
      url: `${baseUrl}/vcard/nitin-gandhi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vcard/sujata-gandhi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
