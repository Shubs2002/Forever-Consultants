import type { Metadata } from "next";

const BASE_URL = "https://forever-consultants.vercel.app";

export const metadata: Metadata = {
  title: "About Us — Meet Nitin & Sujata Gandhi",
  description:
    "Meet the founders of Forever Consultants — Nitin Gandhi (25+ years in wealth management) and Sujata Gandhi (20+ years in insurance). Trusted financial advisors in Mumbai.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us — Meet Nitin & Sujata Gandhi | Forever Consultants",
    description:
      "45+ combined years of financial expertise. Meet the trusted advisors behind Forever Consultants in Mumbai.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Forever Consultants — About Our Founders",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
