'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';
import servicesData from '@/data/services.json';

export const ServicesPage = () => {
    const serviceSteps = [
        {
            number: '01',
            title: 'Rapid Intake & ECM Telemetry',
            desc: 'Immediate bay drive-in or 24/7 roadside dispatch with dealer-level computer diagnostic fault-code analysis.',
            icon: '💻',
        },
        {
            number: '02',
            title: 'Transparent Fleet Quote',
            desc: 'Upfront itemized pricing, OEM part availability confirmation, and zero unexpected billings.',
            icon: '📋',
        },
        {
            number: '03',
            title: 'Master Mechanic Repair',
            desc: 'ASE-certified diesel technicians execute precision repairs using heavy-duty OEM tooling and calibrated torque.',
            icon: '🔧',
        },
        {
            number: '04',
            title: 'Torque Check & Road Signoff',
            desc: 'Mandatory secondary torque verification, air pressure leak tests, and certified road-ready evaluation.',
            icon: '🛡️',
        },
    ];


    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">

            {/* 1. TOP PAGE HERO */}
            <PageHero
                title="Commercial Services"
                highlightTitle="Heavy-Duty Repair & Wash"
                subtitle="Northern California's master 10-bay heavy-duty diesel truck repair, trailer maintenance, computer diagnostics, commercial tires, and high-pressure washout depot in Manteca, CA."
                badge="10 FULL-LENGTH BAYS • 24/7 ROADSIDE DISPATCH • CERTIFIED MASTER DIESEL MECHANICS"
                bgImage="/banner/inner-banner.png"
                mobileBgImage="/banner/mobile-page-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' },
                ]}
            />

            {/* 2. SERVICES CATALOG GRID SECTION */}
            <section id="services" className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12">
                        <h2 className="font-racing text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-slate-900 leading-tight">
                            Full-Service <span className="text-red-600">Truck &amp; Trailer</span> Solutions
                        </h2>
                        <p className="text-slate-900 text-sm sm:text-base mt-2 leading-relaxed">
                            From complex diesel overhauls and electronic computer scans to 53ft trailer washouts and emergency highway dispatch, our Manteca bays handle all heavy-duty commercial needs.
                        </p>
                    </div>

                    {/* 12 Compact Services Card Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                        {servicesData.services.map((service, index) => (
                            <div
                                key={service.id || index}
                                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.16)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                {/* Top Red Gradient Accent */}
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-500" />

                                <div>
                                    {/* Image Container with Zoom & Badge */}
                                    <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                      
                                    </div>

                                    {/* Content Block */}
                                    <div className="p-4 sm:p-4.5">
                                        <h3 className="font-racing text-base sm:text-lg uppercase tracking-wider text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors leading-snug">
                                            {service.name}
                                        </h3>
                                      

                                        {/* Key Features List */}
                                        {service.features && service.features.length > 0 && (
                                            <div className="space-y-1 pt-2.5 border-t border-slate-100">
                                                {service.features.slice(0, 3).map((feat, fIdx) => (
                                                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 truncate">
                                                        <span className="w-1 h-1 rounded-full bg-red-600 shrink-0" />
                                                        <span className="truncate">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Card Footer Actions */}
                                <div className="p-4 pt-0 mt-1 border-t border-slate-100">
                                    <Link
                                        href={`/services/${service.id}`}
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

            {/* 3. RAPID DISPATCH 4-STEP REPAIR PROCESS */}
            <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-100/80 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center max-w-7xl mx-auto mb-6">
                       
                        <h2 className="font-racing text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-slate-900">
                            Our 4-Step Rapid Repair Protocol
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2">
                            Designed to minimize driver downtime, isolate issues accurately, and return commercial rigs to freight lanes with certified safety.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl bg-white border border-red-200/80 p-5 shadow-[0_4px_16px_rgba(15,23,42,0.04),inset_0_0_18px_rgba(220,38,38,0.07)] hover:shadow-[0_14px_30px_rgba(220,38,38,0.16),inset_0_0_24px_rgba(220,38,38,0.12)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="font-racing text-2xl font-black text-red-600">
                                            {step.number}
                                        </span>
                                        <span className="text-2xl">{step.icon}</span>
                                    </div>
                                    <h3 className=" text-slate-900 text-base mb-1.5">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          

            {/* 5. CALL TO ACTION & ESTIMATE ACTIONS */}
            <CTA />
            <MobileStickyActions />
            <FloatingEstimateButton />
        </div>
    );
};
