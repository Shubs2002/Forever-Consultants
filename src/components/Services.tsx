import { Shield, TrendingUp, HeartPulse, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "lic",
      title: "LIC Insurance",
      subtitle: "Protection & Security",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-violet-500/20 to-violet-500/5",
      iconColor: "text-violet-400",
      borderColor: "hover:border-violet-500/20",
      description:
        "Secure your family's financial future with India's most trusted life insurance provider.",
      features: [
        "Life Insurance Policies",
        "Retirement Planning",
        "Policy Servicing & Claims",
      ],
    },
    {
      id: "mutual-funds",
      title: "Mutual Funds",
      subtitle: "Wealth Creation",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-sky-500/20 to-sky-500/5",
      iconColor: "text-sky-400",
      borderColor: "hover:border-sky-500/20",
      description:
        "Grow your wealth steadily with expertly managed investment portfolios and diverse market instruments.",
      features: [
        "SIP & SWP Plans",
        "Portfolio Management (PMS)",
        "AIF & NCD Investments",
        "Company Fixed Deposits",
      ],
      note: "FDs are non-breakable",
    },
    {
      id: "health",
      title: "Health Insurance",
      subtitle: "Mediclaim Solutions",
      icon: <HeartPulse className="w-6 h-6" />,
      gradient: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-400",
      borderColor: "hover:border-emerald-500/20",
      description:
        "Comprehensive health coverage through our premium hospital network partners.",
      partners: [
        "Care Health",
        "Star Health",
        "ICICI Lombard",
        "New India Assurance",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-white/30 mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Core{" "}
            <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-white/30 max-w-lg mx-auto">
            Comprehensive financial services designed to protect and grow your
            wealth across generations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 ${service.borderColor}`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 ${service.iconColor} group-hover:scale-105 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <p className="text-xs font-medium tracking-wider uppercase text-white/30 mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                {service.features && (
                  <ul className="space-y-2.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-white/50"
                      >
                        <Check className="w-3.5 h-3.5 mr-2.5 text-white/20 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Partners */}
                {service.partners && (
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-white/20 mb-3">
                      Partners
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.partners.map((partner, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note */}
                {service.note && (
                  <p className="mt-4 text-xs text-amber-400/60 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                    {service.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
