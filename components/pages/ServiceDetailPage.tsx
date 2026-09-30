'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';
import servicesData from '@/data/services.json';

interface ServiceDetailPageProps {
    serviceSlug?: string;
}

export const ServiceDetailPage = ({ serviceSlug }: ServiceDetailPageProps) => {
    const params = useParams();
    const currentSlug = serviceSlug || (params?.service as string) || 'diesel-repair';

    const service = servicesData.services.find((s) => s.id === currentSlug) || servicesData.services[0];
    const otherServices = servicesData.services.filter((s) => s.id !== service.id).slice(0, 3);

    const serviceWorkflow = [
        {
            step: '01',
            title: 'Diagnostic Intake & Scan',
            desc: 'OEM dealer-level scanning to pinpoint root causes, sensor anomalies, and fault codes.',
        },
        {
            step: '02',
            title: 'Transparent Fleet Quote',
            desc: 'Itemized estimate and immediate parts allocation from our on-site Manteca warehouse depot.',
        },
        {
            step: '03',
            title: 'Master Mechanic Repair',
            desc: 'Precision overhaul executed using OEM torque specs, certified replacement parts, and heavy tooling.',
        },
        {
            step: '04',
            title: 'Quality Check & Release',
            desc: 'Secondary torque verification, sensor recalibration, and road-ready safety signoff.',
        },
    ];

    const benefits = [
        { title: 'Fast Bay Turnaround', desc: '10 full-length commercial drive-in bays minimizing carrier downtime.', icon: '⚡' },
        { title: 'ASE-Certified Techs', desc: 'Over a decade of heavy-duty diesel experience on Cummins, Detroit & PACCAR.', icon: '🔧' },
        { title: 'In-Stock OEM Parts', desc: 'Immediate warehouse access to filters, brake drums, valves, and turbo kits.', icon: '📦' },
        { title: 'Direct Fleet Billing', desc: 'Accepts Comdata, EFS, Fleet One, and all major commercial fleet accounts.', icon: '💳' },
    ];

    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
            {/* 1. TOP PAGE HERO */}
            <PageHero
                title={service.name}

                subtitle={service.description}
                badge={`${service.category.toUpperCase()} • 10-BAY MASTER FACILITY • 24/7 ROADSIDE DISPATCH`}
                bgImage="/banner/inner-banner.png"
                mobileBgImage="/banner/mobile-page-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: service.name },
                ]}
            />

            {/* 2. MAIN DETAIL & SIDEBAR SECTION */}
            <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* LEFT COLUMN: Deep Service Breakdown */}
                        <div className="lg:col-span-8 space-y-10">


                            {/* Overview Description */}
                            <div className="space-y-3">
                                <h2 className="font-racing text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-slate-900 leading-tight">
                                    Complete <span className="text-red-600">{service.name}</span> in Manteca, CA
                                </h2>
                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                                    {(service as any).fulldescription || service.description}
                                </p>

                            </div>

                            {/* Featured Banner Image */}
                            <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.08)] bg-slate-950">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    className="object-cover"
                                />

                            </div>


                            {/* Key Service Highlights */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                                <h3 className="font-racing text-xl sm:text-2xl uppercase tracking-wider text-slate-900 mb-4">
                                    What This Service Covers
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feat, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                                            <span className="text-xs sm:text-sm font-bold text-slate-900">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits Grid */}
                            <div>
                                <h3 className="font-racing text-xl sm:text-2xl uppercase tracking-wider text-slate-900 mb-6">
                                    The Imperial Fleet Advantage
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {benefits.map((b, i) => (
                                        <div
                                            key={i}
                                            className="p-4 rounded-2xl bg-white border border-red-200/80 shadow-[0_4px_16px_rgba(220,38,38,0.06),inset_0_0_16px_rgba(220,38,38,0.05)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.16),inset_0_0_20px_rgba(220,38,38,0.08)] hover:border-red-400 hover:-translate-y-0.5 transition-all flex items-start gap-4 overflow-hidden"
                                        >
                                            <span className="text-2xl p-2 rounded-xl bg-red-50/70 border border-red-100 shrink-0">
                                                {b.icon}
                                            </span>
                                            <div>
                                                <h4 className=" text-slate-900 text-sm sm:text-base mb-1">
                                                    {b.title}
                                                </h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {b.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4-Step Turnaround Flow */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                                <div className="mb-6">
                                    <span className="text-xs uppercase font-extrabold text-red-500 tracking-wider block mb-1">
                                        Precision Execution
                                    </span>
                                    <h3 className="font-racing text-xl sm:text-2xl uppercase tracking-wider text-white">
                                        Our 4-Step Service Protocol
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {serviceWorkflow.map((sw, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="font-racing text-lg font-black text-red-500">
                                                    {sw.step}
                                                </span>
                                                <span className="font-bold text-white text-sm">
                                                    {sw.title}
                                                </span>
                                            </div>
                                            <p className="text-slate-300 text-xs leading-relaxed">
                                                {sw.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: Sidebar Navigation & Fast Dispatch */}
                        <div className="lg:col-span-4 space-y-6 sticky top-24">

                            {/* All Services Navigation List */}
                            <div className="hidden md:block p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
                                <h3 className="font-racing text-lg uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                                    <span>All Services</span>
                                    <span className="text-xs font-mono font-bold text-red-600">12 Capabilities</span>
                                </h3>
                                <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#dc2626_#f1f5f9]">
                                    {servicesData.services.map((s) => {
                                        const isCurrent = s.id === service.id;
                                        return (
                                            <Link
                                                key={s.id}
                                                href={`/services/${s.id}`}
                                                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${isCurrent
                                                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                                                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                                    }`}
                                            >
                                                <span className="truncate pr-2">{s.name}</span>
                                                <span className={isCurrent ? 'text-white' : 'text-red-600'}>
                                                    →
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 24/7 Roadside Hotline Dispatch Card */}
                            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0c101b] to-[#1a1f33] text-white border border-red-500/30 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />

                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                                        24/7 Active Dispatch
                                    </span>
                                </div>

                                <h3 className="font-racing text-xl uppercase tracking-wider text-white mb-2">
                                    Urgent Breakdown?
                                </h3>
                                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                    Immediate highway dispatch across Northern CA for roadside air lines, tires, and diesel repair.
                                </p>

                                <a
                                    href="tel:+12092398111"
                                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
                                >
                                    <span>📞 Call (209) 239-8111</span>
                                </a>

                                <Link
                                    href="/get-an-estimate"
                                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center block transition-all"
                                >
                                    Request Online Estimate →
                                </Link>
                            </div>



                        </div>

                    </div>
                </div>
            </section>

            {/* 3. RELATED SERVICES STRIP */}
            <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                                Complete Fleet Care
                            </span>
                            <h2 className="font-racing text-2xl sm:text-3xl uppercase tracking-wider text-slate-900">
                                Other Heavy-Duty Services
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                            <span>View All 12 Services</span>
                            <span>→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherServices.map((other) => (
                            <div
                                key={other.id}
                                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.16)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-500" />
                                <div>
                                    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                                        <Image
                                            src={other.image}
                                            alt={other.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5">
                                        <h3 className="font-racing text-base sm:text-lg uppercase tracking-wider text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors leading-snug">
                                            {other.name}
                                        </h3>
                                        <div className="space-y-1 pt-2.5 border-t border-slate-100">
                                            {other.features.slice(0, 3).map((f, fi) => (
                                                <div key={fi} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 truncate">
                                                    <span className="w-1 h-1 rounded-full bg-red-600 shrink-0" />
                                                    <span className="truncate">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 pt-0 mt-1 border-t border-slate-100">
                                    <Link
                                        href={`/services/${other.id}`}
                                        className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 group-hover:shadow-red-500/20"
                                    >
                                        <span>Get Full Details</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION & FLOATING ACTIONS */}
            <CTA />
            <MobileStickyActions />
            <FloatingEstimateButton />
        </div>
    );
};
