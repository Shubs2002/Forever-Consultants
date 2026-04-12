import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foreverconsultants.in";

export function generateStaticParams() {
  return servicesData
    .filter((s) => s.id !== "hero")
    .map((s) => ({
      id: s.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service || !service.title) {
    return {
      title: "Service Not Found",
    };
  }

  const serviceMetaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
    lic: {
      title: "LIC Insurance & Life Protection — Plans, Benefits & Expert Advisory",
      description:
        "Expert LIC insurance advisory by 15x MDRT qualifier & Corporate Trophy winning agents. Endowment plans, term life, retirement, child education plans with sovereign guarantee. 25+ years of trusted service in Mumbai.",
      keywords: [
        "LIC insurance Mumbai",
        "LIC agent",
        "life insurance India",
        "LIC policy",
        "endowment plan",
        "term life insurance",
        "child education plan LIC",
        "retirement plan LIC",
        "MDRT LIC agent",
        "best LIC agent Mumbai",
        "LIC Corporate Trophy winner",
      ],
    },
    "mutual-funds": {
      title: "Mutual Funds & Wealth Creation — SIP, Portfolio Management & Expert Advisory",
      description:
        "Best mutual fund advisor in Mumbai. ₹50Cr+ AUM managed. SIP, SWP, portfolio management, ELSS tax-saving funds. Expert fund selection & quarterly rebalancing by 15x MDRT qualifier. Start with ₹500/month.",
      keywords: [
        "mutual funds advisor Mumbai",
        "SIP investment",
        "SWP plan",
        "portfolio management",
        "ELSS funds",
        "equity mutual funds",
        "best mutual fund advisor",
        "wealth creation India",
        "500 crore AUM",
        "MDRT financial advisor",
      ],
    },
    health: {
      title: "Health Insurance & Mediclaim — Cashless Hospitalization & Expert Advisory",
      description:
        "Best health insurance plans in Mumbai by Care Health Insurance Champion (2024). Cashless hospitalization at 10,000+ hospitals. Care Health, Star Health, ICICI Lombard policies. Family floater & senior citizen plans.",
      keywords: [
        "health insurance Mumbai",
        "mediclaim policy",
        "cashless hospitalization",
        "family health insurance",
        "Star Health insurance",
        "Care Health insurance",
        "ICICI Lombard health",
        "senior citizen health insurance",
        "Care Health Champion advisor",
        "best health insurance agent Mumbai",
      ],
    },
  };

  const meta = serviceMetaMap[resolvedParams.id];

  // Service-specific FAQ schema for rich snippets
  const faqMap: Record<string, Array<{ question: string; answer: string }>> = {
    lic: [
      {
        question: "What types of LIC policies does Forever Consultants offer?",
        answer: "We offer comprehensive advisory for all LIC policy types including Endowment Plans, Money-back Plans, Term Life Insurance, Retirement & Pension Plans, and Child Education Plans. All LIC policies come with a sovereign guarantee from the Government of India, ensuring 100% safety of your capital.",
      },
      {
        question: "Why should I choose Forever Consultants for LIC insurance?",
        answer: "Our senior advisor Nitin Gandhi is a 15x MDRT qualifier and LIC Corporate Trophy winner with 25+ years of experience. We provide end-to-end service from needs analysis and plan customization to seamless onboarding and claim settlement support.",
      },
    ],
    "mutual-funds": [
      {
        question: "What is the minimum SIP amount to start investing?",
        answer: "You can start a Systematic Investment Plan (SIP) with as little as ₹500 per month. Our team helps you select the best-performing funds based on your risk profile, time horizon, and financial goals, ensuring maximum returns through the power of compounding.",
      },
      {
        question: "How much AUM does Forever Consultants manage?",
        answer: "Forever Consultants manages over ₹50 Crores in assets under management (AUM) across diverse portfolios including equity mutual funds, debt funds, ELSS tax-saving schemes, and alternative investments. Our portfolios are actively monitored and rebalanced quarterly.",
      },
    ],
    health: [
      {
        question: "Which health insurance companies does Forever Consultants work with?",
        answer: "We partner with India's top health insurance providers including Care Health Insurance, Star Health Insurance, ICICI Lombard, and New India Assurance. Our policies provide cashless hospitalization at 10,000+ network hospitals across India.",
      },
      {
        question: "Does health insurance cover pre-existing conditions?",
        answer: "Yes, most health insurance policies cover pre-existing conditions after a waiting period (typically 2-4 years depending on the insurer). Our advisor Sujata Gandhi, a Care Health Insurance Champion, helps you choose the policy with the most favorable terms for your specific health profile.",
      },
    ],
  };

  return {
    title: meta?.title || service.title,
    description: meta?.description || service.description,
    keywords: meta?.keywords,
    alternates: {
      canonical: `${BASE_URL}/services/${resolvedParams.id}`,
    },
    openGraph: {
      title: meta?.title || service.title,
      description: meta?.description || service.description,
      url: `${BASE_URL}/services/${resolvedParams.id}`,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} — Forever Consultants`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || service.title,
      description: meta?.description || service.description,
      images: [`${BASE_URL}/og-image.png`],
    },
    other: {
      // Inject FAQ as page-level structured data hint
      ...(faqMap[resolvedParams.id] && {
        "script:ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqMap[resolvedParams.id].map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }),
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-600 bg-zinc-50">
        Service not found.
      </div>
    );
  }

  return <ServiceDetailClient service={service} />;
}
