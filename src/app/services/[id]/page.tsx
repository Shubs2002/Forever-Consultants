import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowLeft, Check, Shield, Coins, TrendingUp, Landmark, PieChart, Users, Zap, Building2, Award, Activity } from "lucide-react";

export function generateStaticParams() {
  return servicesData
    .filter((s) => s.id !== "hero")
    .map((s) => ({
      id: s.id,
    }));
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  coins: <Coins className="w-6 h-6" />,
  trending: <TrendingUp className="w-6 h-6" />,
  bank: <Landmark className="w-6 h-6" />,
  "pie-chart": <PieChart className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  hospital: <Building2 className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  activity: <Activity className="w-6 h-6" />
};

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

  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col pt-32 pb-32 overflow-hidden">
      {/* Premium Hero Background Glows */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-[#3B82F6] transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        {/* HERO TITLE SECTION */}
        <div className="mb-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-16 glass-icon flex items-center justify-center text-[#60A5FA] shadow-lg shadow-blue-500/20 bg-white border border-blue-100">
              {service.icon}
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#3B82F6] bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              {service.subtitle}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl font-light">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Overview */}
            <section className="glass-card p-8 md:p-12 shadow-2xl border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none" />
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Service Overview</h2>
              <div className="prose prose-lg prose-zinc max-w-none text-zinc-600 leading-relaxed font-normal">
                <p>{service.fullDetails}</p>
              </div>
            </section>

            {/* Benefits Grid */}
            {service.benefits && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-px bg-zinc-300" />
                  <h2 className="text-2xl font-bold text-zinc-900">Key Benefits</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-zinc-200/60 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                        {iconMap[benefit.icon as string] || <Shield className="w-6 h-6" />}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process Timeline */}
            {service.process && (
              <section>
                <div className="flex items-center gap-4 mb-12">
                  <span className="w-8 h-px bg-zinc-300" />
                  <h2 className="text-2xl font-bold text-zinc-900">Our Methodology</h2>
                </div>
                
                <div className="relative border-l-2 border-zinc-200 ml-6 md:ml-8 gap-12 flex flex-col">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="relative pl-10 md:pl-12 group">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-4 border-zinc-200 flex items-center justify-center group-hover:border-[#3B82F6] transition-colors duration-300 z-10">
                        <div className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-[#3B82F6] transition-colors duration-300" />
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-zinc-100 shadow-sm group-hover:shadow-md transition-shadow duration-300 -mt-2">
                        <span className="text-sm font-black text-zinc-300 tracking-widest block mb-2">STEP 0{idx + 1}</span>
                        <h4 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h4>
                        <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-3xl p-8 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden sticky top-32">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to secure your future?</h3>
              <p className="text-blue-100 mb-8 max-w-xs relative z-10">
                Book a free 1-on-1 consultation with our senior advisory team to discuss your goals.
              </p>
              
              <div className="flex flex-col gap-4 relative z-10">
                <a
                  href="mailto:contact@foreverconsultants.com"
                  className="w-full text-center px-6 py-4 bg-white text-[#1E3A8A] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Consult an Expert
                </a>
                <Link
                  href="/#book"
                  className="w-full text-center px-6 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  Request Callback
                </Link>
              </div>
            </div>

            {/* Features List */}
            {service.features && (
              <div className="glass-card p-6 md:p-8 rounded-3xl">
                <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">
                  What's Included
                </h3>
                <ul className="flex flex-col gap-4">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#3B82F6]" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Partners List */}
            {service.partners && (
              <div className="glass-card p-6 md:p-8 rounded-3xl border-t-4 border-t-emerald-400">
                <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">
                  Network Partners
                </h3>
                <div className="flex flex-col gap-3">
                  {service.partners.map((p, i) => (
                    <span
                      key={i}
                      className="px-4 py-3 bg-white border border-zinc-100 rounded-xl text-zinc-800 font-bold text-sm shadow-sm flex items-center justify-between group cursor-default"
                    >
                      {p}
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-pulse" />
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Alert Note */}
            {service.note && (
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <p className="text-sm text-amber-800 font-semibold flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 -mt-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  </span>
                  {service.note}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
