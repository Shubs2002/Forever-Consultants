import React from "react";
import { Shield, TrendingUp, HeartPulse } from "lucide-react";

export const servicesData = [
  {
    id: "hero",
    label: "Home",
  },
  {
    id: "lic",
    label: "LIC Insurance",
    icon: <Shield className="w-5 h-5" />,
    title: "LIC Insurance & Life Protection",
    subtitle: "Absolute Security",
    description:
      "Secure your family's financial future with India's most trusted life insurance provider.",
    features: [
      "Endowment & Money-back Policies",
      "Term Life Insurance",
      "Retirement & Pension Plans",
      "Child Education Plans",
      "Policy Servicing & Claims",
    ],
    fullDetails: "Life Insurance Corporation of India (LIC) is synonymous with trust and security in India. We provide comprehensive advisory services for all LIC policies, ensuring that your loved ones are financially protected even in your absence. Our expert consultants help you navigate the myriad of options to find the perfect plan tailored to your life stage, financial goals, and family's future needs. From securing your child's higher education to planning a comfortable retirement without financial worry, LIC's robust products coupled with our personalized lifelong service guarantee maximum security and peace of mind.",
    benefits: [
      { title: "Sovereign Guarantee", description: "LIC policies come with a sovereign guarantee from the Government of India, ensuring 100% safety of your capital.", icon: "shield" },
      { title: "Tax Exemption", description: "Save significant taxes under Section 80C on premiums paid, and enjoy tax-free maturity under Section 10(10D).", icon: "coins" },
      { title: "Wealth Accumulation", description: "Enjoy guaranteed additions and regular bonuses declared by LIC to grow your wealth steadily over the term.", icon: "trending" },
      { title: "Loan Facility", description: "Avail easy loan facilities against your policy during financial emergencies without breaking the policy.", icon: "bank" }
    ],
    process: [
      { title: "Needs Analysis", description: "We conduct a thorough assessment of your life stage, income, and liabilities." },
      { title: "Plan Customization", description: "We mix and match policies to create a bullet-proof insurance portfolio." },
      { title: "Seamless Onboarding", description: "We handle 100% of the documentation, medicals, and processing." },
      { title: "Claim Settlement", description: "We stand with your family to ensure swift and hassle-free claim settlements." }
    ]
  },
  {
    id: "mutual-funds",
    label: "Mutual Funds",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Mutual Funds & Wealth Creation",
    subtitle: "Accelerated Growth",
    description:
      "Grow your wealth steadily to beat inflation with expertly managed investment portfolios.",
    features: [
      "SIP (Systematic Investment Plan)",
      "SWP (Systematic Withdrawal Plan)",
      "Portfolio Management (PMS)",
      "Alternative Investment Funds (AIF)",
      "NCDs / Company Fixed Deposits",
    ],
    note: "Note: FDs are non-breakable",
    fullDetails: "Wealth creation is a marathon, not a sprint. To beat inflation and achieve your financial dreams, systematic equity exposure is crucial. We offer a highly curated selection of Mutual Funds structured perfectly to match your risk appetite and time horizons. Whether you are looking for tax-saving ELSS plans, high-growth small-cap equity, or highly stable liquid and debt funds, our continuous portfolio monitoring ensures your investments are always aligned with market momentum. Let your money work as hard as you do.",
    benefits: [
      { title: "Power of Compounding", description: "Start early with SIPs to harness exponential growth and turn small savings into massive corpuses.", icon: "trending" },
      { title: "Diversification", description: "Spread risk across various sectors and companies, minimizing the impact of market volatility.", icon: "pie-chart" },
      { title: "Expert Management", description: "Your money is managed by seasoned fund managers taking data-driven investment decisions.", icon: "users" },
      { title: "High Liquidity", description: "Withdraw your funds quickly whenever you need them, unlike traditional locked-in assets.", icon: "zap" }
    ],
    process: [
      { title: "Risk Profiling", description: "We analyze your financial goals and risk tolerance through scientific methods." },
      { title: "Asset Allocation", description: "We distribute your capital strategically across Equity, Debt, and Gold." },
      { title: "Fund Selection", description: "We rigorously filter thousands of schemes to select consistent top performers." },
      { title: "Portfolio Rebalancing", description: "We actively monitor and shift funds to lock in profits and mitigate risks." }
    ]
  },
  {
    id: "health",
    label: "Health Insurance",
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Mediclaim & Health Protection",
    subtitle: "Medical Security",
    description:
      "Comprehensive health coverage through our premium hospital network partners.",
    partners: [
      "Care Health",
      "Star Health",
      "ICICI Lombard",
      "New India Assurance",
    ],
    fullDetails: "A sudden medical emergency shouldn't derail your lifelong savings. Medical inflation is rising at an unprecedented rate, making adequate health insurance an absolute necessity, not an option. We partner with India's top health insurance providers to offer you and your loved ones extensive mediclaim coverage. Our recommended policies include massive cashless hospitalization networks, day-care procedures coverage, maternity benefits, and pre/post-hospitalization expenses. Most importantly, we don't just sell you a policy; our dedicated team ensures you get 24/7 support exactly when you are at the hospital.",
    benefits: [
      { title: "Cashless Treatment", description: "Access top-tier medical care across 10,000+ network hospitals without paying out of pocket.", icon: "hospital" },
      { title: "No Claim Bonus", description: "Get massive increases in your sum insured (up to 100%) for every claim-free year.", icon: "award" },
      { title: "Annual Health Checkups", description: "Enjoy complimentary comprehensive full-body checkups every year to stay proactive.", icon: "activity" },
      { title: "Tax deductions", description: "Save taxes up to ₹75,000 every year under Section 80D for yourself and senior citizen parents.", icon: "coins" }
    ],
    process: [
      { title: "Coverage Estimation", description: "We calculate the ideal cover amount based on your family size and city of residence." },
      { title: "Policy Comparison", description: "We compare features like room rent limits, copayments, and waiting periods across brands." },
      { title: "Proposal & Issuance", description: "We guide you through medical declarations to ensure clean policy issuance." },
      { title: "24/7 Claim Desk", description: "We coordinate directly with hospital TPAs for instant cashless approvals during emergencies." }
    ]
  },
];
