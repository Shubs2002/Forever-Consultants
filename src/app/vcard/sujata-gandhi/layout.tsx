import type { Metadata } from "next";

const BASE_URL = "https://forever-consultants.vercel.app";

export const metadata: Metadata = {
  title: "Sujata Gandhi — Senior Insurance Advisor, MDRT | Forever Consultants",
  description:
    "Contact Sujata Gandhi — Senior Insurance Advisor (MDRT) with 20+ years of experience. LIC Insurance, Mediclaim & Health Insurance expert at Forever Consultants, Mumbai.",
  alternates: {
    canonical: `${BASE_URL}/vcard/sujata-gandhi`,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: `${BASE_URL}/vcard/sujata-gandhi`,
    siteName: "Forever Consultants",
    title: "Sujata Gandhi — Senior Insurance Advisor, MDRT",
    description:
      "20+ years of trusted financial advisory. LIC Insurance, Mediclaim & Health Insurance. Contact Sujata Gandhi at Forever Consultants.",
    images: [
      {
        url: "https://res.cloudinary.com/dc3o4l7rx/image/upload/c_fill,g_face,w_1200,h_630,q_auto/v1774331514/Woman_in_blazer_202603241115_k1l8p6.jpg",
        width: 1200,
        height: 630,
        alt: "Sujata Gandhi — Senior Insurance Advisor at Forever Consultants",
        type: "image/jpeg",
      },
    ],
    firstName: "Sujata",
    lastName: "Gandhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujata Gandhi — Senior Insurance Advisor, MDRT",
    description:
      "20+ years of trusted financial advisory. LIC Insurance, Mediclaim & Health Insurance. Contact Sujata Gandhi.",
    images: [
      "https://res.cloudinary.com/dc3o4l7rx/image/upload/c_fill,g_face,w_1200,h_630,q_auto/v1774331514/Woman_in_blazer_202603241115_k1l8p6.jpg",
    ],
  },
  other: {
    "profile:first_name": "Sujata",
    "profile:last_name": "Gandhi",
  },
};

export default function SujataVCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
