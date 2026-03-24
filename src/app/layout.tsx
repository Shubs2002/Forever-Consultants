import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Forever Consultants — Total Investment Solutions",
  description:
    "Comprehensive wealth management, LIC insurance, mutual funds, and health insurance. Securing your future, forever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playfair.variable} font-[family-name:var(--font-body)] min-h-screen flex flex-col w-full m-0 p-0`}>
        {/* Content */}
        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
