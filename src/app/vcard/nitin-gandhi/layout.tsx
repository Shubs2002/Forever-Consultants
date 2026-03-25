import type { Metadata } from "next";

const BASE_URL = "https://forever-consultants.vercel.app";

export const metadata: Metadata = {
  title: "Nitin Gandhi — Senior Insurance Advisor, MDRT | Forever Consultants",
  description:
    "Contact Nitin Gandhi — Senior Insurance Advisor (MDRT) with 25+ years of experience. LIC Insurance, Mutual Funds & Wealth Management expert at Forever Consultants, Mumbai.",
  alternates: {
    canonical: `${BASE_URL}/vcard/nitin-gandhi`,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: `${BASE_URL}/vcard/nitin-gandhi`,
    siteName: "Forever Consultants",
    title: "Nitin Gandhi — Senior Insurance Advisor, MDRT",
    description:
      "25+ years of trusted financial advisory. LIC Insurance, Mutual Funds & Wealth Management. Contact Nitin Gandhi at Forever Consultants.",
    images: [
      {
        url: "https://res.cloudinary.com/dc3o4l7rx/image/upload/c_fill,g_face,w_1200,h_630,q_auto/v1774331514/Create_a_nice_202603241115_jxggjs.jpg",
        width: 1200,
        height: 630,
        alt: "Nitin Gandhi — Senior Insurance Advisor at Forever Consultants",
        type: "image/jpeg",
      },
    ],
    firstName: "Nitin",
    lastName: "Gandhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Gandhi — Senior Insurance Advisor, MDRT",
    description:
      "25+ years of trusted financial advisory. LIC Insurance, Mutual Funds & Wealth Management. Contact Nitin Gandhi.",
    images: [
      "https://res.cloudinary.com/dc3o4l7rx/image/upload/c_fill,g_face,w_1200,h_630,q_auto/v1774331514/Create_a_nice_202603241115_jxggjs.jpg",
    ],
  },
  other: {
    "profile:first_name": "Nitin",
    "profile:last_name": "Gandhi",
  },
};

export default function NitinVCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
