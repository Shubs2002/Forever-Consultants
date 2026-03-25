import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nitin Gandhi - Digital vCard | Forever Consultants",
  description: "Contact Nitin Gandhi, Senior Insurance Advisor (MDRT) at Forever Consultants",
};

export default function VCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
