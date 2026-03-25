import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://forever-consultants.vercel.app";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Get in touch with Forever Consultants for expert financial advice. Book a free personal consultation for LIC Insurance, Mutual Funds, or Health Insurance in Mumbai.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Forever Consultants — Book a Free Consultation",
    description:
      "Request a personal visit from our expert advisors. LIC Insurance, Mutual Funds & Health Insurance consultation in Mumbai.",
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Forever Consultants",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
