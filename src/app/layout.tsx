import type { Metadata, Viewport } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foreverconsultants.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
};

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────────────────
  title: {
    default: "Forever Consultants — Total Investment & Insurance Solutions | Mumbai",
    template: "%s | Forever Consultants",
  },
  description:
    "Award-winning financial advisory in Mumbai — 15x MDRT qualifier Nitin Gandhi & Care Health Champion Sujata Gandhi. 25+ years expertise in LIC Insurance, Mutual Funds, SIP, Mediclaim & Health Insurance. ₹50Cr+ AUM. Book a free consultation today.",
  keywords: [
    "Forever Consultants",
    "financial advisor Mumbai",
    "LIC agent Mumbai",
    "LIC insurance",
    "mutual funds advisor",
    "SIP investment",
    "health insurance India",
    "mediclaim policy",
    "wealth management",
    "investment consultant",
    "Nitin Gandhi",
    "Sujata Gandhi",
    "insurance advisor",
    "MDRT agent India",
    "MDRT qualifier",
    "Million Dollar Round Table",
    "Care Health Insurance champion",
    "LIC Warrior award",
    "LIC Corporate Trophy",
    "retirement planning",
    "child education plan",
    "term insurance",
    "portfolio management",
    "financial planning India",
    "best LIC agent Nalasopara",
    "insurance advisor Vasai",
  ],
  authors: [{ name: "Forever Consultants" }],
  creator: "Forever Consultants",
  publisher: "Forever Consultants",

  // ── Canonical & Alternates ─────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },

  // ── OpenGraph (Facebook, LinkedIn, WhatsApp) ───────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Forever Consultants",
    title: "Forever Consultants — Total Investment & Insurance Solutions",
    description:
      "Award-winning financial advisory — 15x MDRT qualifier. LIC Insurance, Mutual Funds, SIP, Mediclaim & Health Insurance. ₹50Cr+ AUM. Expert wealth management in Mumbai.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Forever Consultants — Your Trusted Financial Partners",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Forever Consultants — Total Investment & Insurance Solutions",
    description:
      "Award-winning financial advisory — 15x MDRT qualifier. LIC Insurance, Mutual Funds, SIP & Health Insurance. ₹50Cr+ AUM in Mumbai.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@ForeverConsult",
  },

  // ── Robots ─────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ───────────────────────────────────────
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
      },
    }),
  },

  // ── App & Icons ────────────────────────────────────────
  applicationName: "Forever Consultants",
  category: "Finance",
  classification: "Financial Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/infinity-logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  other: {
    // ── Geo Meta Tags (Local SEO) ──────────────────────
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    // ── Business Info ──────────────────────────────────
    "business:contact_data:street_address": "Shop No 3, Rajhans Complex, 2nd Road, near SVC Bank, Nalasopara West",
    "business:contact_data:locality": "Nalasopara West, Vasai-Virar",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": "401203",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": "+91-9769660363",
    // ── Content Language ───────────────────────────────
    "content-language": "en-IN",
    // ── IndexNow ───────────────────────────────────────
    "indexnow-key": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  },
};

// JSON-LD Structured Data — Enhanced for SEO + GEO
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization — FinancialService
      {
        "@type": ["FinancialService", "LocalBusiness", "ProfessionalService"],
        "@id": `${BASE_URL}/#organization`,
        name: "Forever Consultants",
        alternateName: "Forever Consultants — Total Investment Solutions",
        url: BASE_URL,
        logo: `${BASE_URL}/og-image.png`,
        image: `${BASE_URL}/og-image.png`,
        description:
          "Award-winning wealth management, LIC insurance, mutual funds, and health insurance advisory services in Mumbai. 15x MDRT qualifier, LIC Corporate Trophy winners, Care Health Insurance Champions. 25+ years of experience, ₹50Cr+ AUM.",
        foundingDate: "2000",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer, Cheque",
        openingHours: "Mo-Sa 09:00-19:00",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Mumbai",
            "@id": "https://www.wikidata.org/wiki/Q1156",
          },
          {
            "@type": "State",
            name: "Maharashtra",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: "19.4183",
          longitude: "72.8202",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No 3, Rajhans Complex, 2nd Road, near SVC Bank, Nala Sopara, Sriprastha",
          addressLocality: "Nalasopara West, Vasai-Virar",
          addressRegion: "Maharashtra",
          postalCode: "401203",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9769660363",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
            contactOption: "TollFree",
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-8087907776",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
          },
        ],
        email: "contact@foreverconsultants.in",
        sameAs: [],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "350",
          reviewCount: "180",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Financial Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "LIC Insurance & Life Protection",
                description:
                  "Comprehensive LIC policy advisory including endowment, money-back, term life, retirement, and child education plans. Backed by sovereign guarantee from the Government of India.",
                provider: { "@id": `${BASE_URL}/#organization` },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mutual Funds & Wealth Creation",
                description:
                  "Expert mutual fund advisory including SIP, SWP, Portfolio Management, ELSS tax-saving funds, and alternative investments. ₹50Cr+ assets under management.",
                provider: { "@id": `${BASE_URL}/#organization` },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mediclaim & Health Protection",
                description:
                  "Comprehensive health insurance from top providers including Care Health, Star Health, ICICI Lombard. Cashless hospitalization at 10,000+ network hospitals.",
                provider: { "@id": `${BASE_URL}/#organization` },
              },
            },
          ],
        },
        // GEO: Speakable schema for AI/voice search
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".gradient-text-accent", "[data-speakable]"],
        },
      },
      // Person — Nitin Gandhi
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#nitin-gandhi`,
        name: "Nitin Gandhi",
        jobTitle: "Senior Financial Strategist & MDRT Qualifier",
        worksFor: { "@id": `${BASE_URL}/#organization` },
        telephone: "+91-9769660363",
        email: "ntngandhi65@gmail.com",
        image: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#nitin-gandhi-photo`,
          url: "https://res.cloudinary.com/dbnlmt97x/image/upload/w_800,q_auto,f_auto/v1775031318/Untitled_design_24_ze2wqv.png",
          contentUrl: "https://res.cloudinary.com/dbnlmt97x/image/upload/w_800,q_auto,f_auto/v1775031318/Untitled_design_24_ze2wqv.png",
          name: "Nitin Gandhi — Senior Financial Strategist and 15x MDRT Qualifier at Forever Consultants Mumbai",
          caption: "Nitin Gandhi, Senior Financial Strategist & 15x MDRT Qualifier at Forever Consultants, Mumbai. 25+ years experience in LIC Insurance, Mutual Funds & Wealth Management.",
          description: "Professional photo of Nitin Gandhi, award-winning financial advisor and 15x MDRT qualifier at Forever Consultants Mumbai. Expert in LIC Insurance, Mutual Funds, SIP and Wealth Management with 25+ years of experience.",
          width: 800,
          height: 800,
          encodingFormat: "image/png",
          representativeOfPage: false,
          creator: { "@id": `${BASE_URL}/#organization` },
        },
        description:
          "15x MDRT (Million Dollar Round Table) qualifier with 25+ years of experience. Award-winning LIC agent recognized with Corporate Trophy (2015, 2016), Warrior 2020, Achiever's Trophy, Shatakveer Agent, Champions' Trophy, and Dharma Chakra Trophy. Expert in mutual funds, wealth compounding, and asset allocation.",
        url: `${BASE_URL}/about`,
        memberOf: {
          "@type": "Organization",
          name: "Million Dollar Round Table (MDRT)",
          url: "https://www.mdrt.org",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: "MDRT Member — Million Dollar Round Table",
            recognizedBy: {
              "@type": "Organization",
              name: "MDRT",
              url: "https://www.mdrt.org",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional License",
            name: "AMFI Registered Mutual Fund Distributor",
          },
        ],
        award: [
          "15x MDRT Qualifier (2010, 2011, 2013, 2021+)",
          "LIC Corporate Trophy 2015",
          "LIC Corporate Trophy 2016",
          "LIC Warrior 2020",
          "LIC Achiever's Trophy 2013-14",
          "LIC Shatakveer Agent 2012-13",
          "LIC Champions' Trophy 2014",
          "LIC Dharma Chakra Trophy 2023",
          "LIC Abhikarta Mahakumbh 2024",
        ],
        knowsAbout: ["Mutual Funds", "LIC Insurance", "SIP", "Wealth Management", "Portfolio Management", "Financial Planning", "ELSS", "Retirement Planning"],
      },
      // Person — Sujata Gandhi
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#sujata-gandhi`,
        name: "Sujata Gandhi",
        jobTitle: "Principal Life & Health Advisor",
        worksFor: { "@id": `${BASE_URL}/#organization` },
        telephone: "+91-8087907776",
        email: "sujatagandhi72@gmail.com",
        image: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#sujata-gandhi-photo`,
          url: "https://res.cloudinary.com/dbnlmt97x/image/upload/w_800,q_auto,f_auto/v1775031318/Untitled_design_23_w0hgi5.png",
          contentUrl: "https://res.cloudinary.com/dbnlmt97x/image/upload/w_800,q_auto,f_auto/v1775031318/Untitled_design_23_w0hgi5.png",
          name: "Sujata Gandhi — Principal Life and Health Advisor and Care Health Champion at Forever Consultants Mumbai",
          caption: "Sujata Gandhi, Principal Life & Health Advisor at Forever Consultants, Mumbai. Care Health Insurance Champion 2024 with 20+ years experience in LIC Insurance, Mediclaim & Health Insurance.",
          description: "Professional photo of Sujata Gandhi, award-winning insurance advisor and Care Health Insurance Champion at Forever Consultants Mumbai. Expert in LIC Insurance, Mediclaim and Health Insurance with 20+ years of experience.",
          width: 800,
          height: 800,
          encodingFormat: "image/png",
          representativeOfPage: false,
          creator: { "@id": `${BASE_URL}/#organization` },
        },
        description:
          "20+ years of expertise in life insurance, health insurance and risk mitigation. Care Health Insurance Champion (Jan 2024, Sept 2024), Amazing Almaty Contest winner 2024. Specialist in LIC policies, mediclaim, and family financial protection.",
        url: `${BASE_URL}/about`,
        award: [
          "Care Health Insurance Champion — September 2024",
          "Care Health Insurance Champion — January 2024",
          "Care Health Insurance Amazing Almaty Contest 2024",
        ],
        knowsAbout: ["Health Insurance", "LIC Insurance", "Mediclaim", "Risk Mitigation", "Family Protection", "Care Health Insurance", "Star Health"],
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Forever Consultants",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${BASE_URL}/about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "LIC Insurance",
            item: `${BASE_URL}/services/lic`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Mutual Funds",
            item: `${BASE_URL}/services/mutual-funds`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Health Insurance",
            item: `${BASE_URL}/services/health`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Contact",
            item: `${BASE_URL}/contact`,
          },
        ],
      },
      // FAQPage — High-impact for featured snippets & GEO citations
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does Forever Consultants offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Forever Consultants offers three core financial advisory services: (1) LIC Insurance & Life Protection — endowment, term life, retirement, and child education plans with sovereign guarantee, (2) Mutual Funds & Wealth Creation — SIP, SWP, portfolio management, ELSS, and alternative investments with ₹50Cr+ AUM managed, and (3) Mediclaim & Health Insurance — comprehensive health coverage through Care Health, Star Health, ICICI Lombard, and New India Assurance with cashless hospitalization at 10,000+ hospitals.",
            },
          },
          {
            "@type": "Question",
            name: "Who are the founders of Forever Consultants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Forever Consultants was founded by Nitin Gandhi and Sujata Gandhi. Nitin is a 15x MDRT (Million Dollar Round Table) qualifier with 25+ years of experience, recognized with LIC Corporate Trophy, Warrior 2020, and multiple other prestigious awards. Sujata is a Care Health Insurance Champion (2024) with 20+ years of expertise in life and health insurance.",
            },
          },
          {
            "@type": "Question",
            name: "How can I book a consultation with Forever Consultants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book a free consultation through 4 convenient modes: (1) Google Meet — virtual video call from anywhere, (2) Personal Visit — our advisor visits your home or office, (3) On Call — telephonic advisory at +91-9769660363, (4) On Premises — visit our office at Shop No 3, Rajhans Complex, 2nd Road, near SVC Bank, Nalasopara West, Vasai-Virar. All consultations are zero obligation with complete confidentiality guaranteed.",
            },
          },
          {
            "@type": "Question",
            name: "What is MDRT and why does it matter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MDRT (Million Dollar Round Table) is the premier association of the world's most successful financial professionals. Only the top 1% of financial advisors globally qualify for MDRT membership. Nitin Gandhi of Forever Consultants has qualified for MDRT 15 times, placing him among an elite group of financial advisors worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Forever Consultants located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Forever Consultants is located at Shop No 3, Rajhans Complex, 2nd Road, near SVC Bank, Nala Sopara, Sriprastha, Nalasopara West, Vasai-Virar, Maharashtra 401203, India. They serve clients across Mumbai, Vasai-Virar, and the greater Maharashtra region, with virtual consultations available nationwide via Google Meet.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" dir="ltr">
      <head>
        <JsonLd />
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body className={`${openSans.variable} ${playfair.variable} font-[family-name:var(--font-body)] min-h-screen flex flex-col w-full m-0 p-0`}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {/* Content */}
        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
