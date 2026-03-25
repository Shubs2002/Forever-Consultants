import type { Metadata } from "next";
import ScrollSections from "@/components/ScrollSections";
import Philosophy from "@/components/Philosophy";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import BackToTop from "@/components/BackToTop";
import Awards from "@/components/Awards";

export const metadata: Metadata = {
  title: "Forever Consultants — Total Investment & Insurance Solutions | Mumbai",
  description:
    "25+ years trusted financial advisory in Mumbai. LIC Insurance, Mutual Funds, SIP, Mediclaim & Health Insurance. Expert wealth management by Nitin & Sujata Gandhi.",
  alternates: {
    canonical: "https://forever-consultants.vercel.app",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <ScrollSections />
      <Philosophy />
      <Awards />
      <Booking />
      <Testimonials />
      <BackToTop />
    </div>
  );
}
