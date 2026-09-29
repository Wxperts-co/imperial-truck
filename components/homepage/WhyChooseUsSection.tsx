'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const WhyChooseUsSection = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    const steps = [
        {
            step: '01',
            badge: '24/7 Mobile Recovery',
            title: 'Highway Breakdown?',
            tagline: 'Instant GPS Highway Dispatch',
            metric: '45 MIN',
            metricLabel: 'Average Mobile Response Time',
            desc: 'Immediate 24/7 mobile emergency dispatch directly to your GPS location across Highway 99, I-5, and I-205 with mobile tire mounting and air line triage.',
            image: '/journey/step1.jpg',
            accentColor: '#ef4444',
            glow: 'shadow-[0_12px_32px_rgba(239,68,68,0.25)]',
            borderActive: 'border-red-500 ring-2 ring-red-500/40',
            badgeBg: 'bg-red-50 text-red-600 border-red-200',
            gradient: 'from-red-600 via-rose-500 to-amber-500',
            icon: (
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            specs: ['GPS Live Dispatch', 'Mobile Tire Service', 'San Joaquin Corridor'],
        },
        {
            step: '02',
            badge: 'Dealer-Level Protocol',
            title: 'Instant OEM Scan',
            tagline: 'Precision Electronic Diagnostic',
            metric: '99.8%',
            metricLabel: 'Diagnostic Scan Accuracy',
            desc: 'Direct electronic ECM diagnostics for Cummins, Detroit Diesel, and PACCAR powertrains to isolate fault codes in minutes without guessing.',
            image: '/journey/step2.jpg',
            accentColor: '#f59e0b',
            glow: 'shadow-[0_12px_32px_rgba(245,158,11,0.25)]',
            borderActive: 'border-amber-500 ring-2 ring-amber-500/40',
            badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
            gradient: 'from-amber-500 via-orange-500 to-red-500',
            icon: (
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            specs: ['Cummins & Detroit Insite', 'J1939 Telemetry', 'DPF & DEF Sensor Triage'],
        },
        {
            step: '03',
            badge: '10-Bay Capacity',
            title: 'Heavy Fix & Eco Wash',
            tagline: 'Master Overhaul & Rig Washout',
            metric: 'Same-Day',
            metricLabel: 'Routine Bay Release Rate',
            desc: 'Master powertrain rebuilds, transmissions, genuine in-stock parts inventory, and dedicated high-pressure truck and trailer washout bays.',
            image: '/journey/step3.jpg',
            accentColor: '#3b82f6',
            glow: 'shadow-[0_12px_32px_rgba(59,130,246,0.25)]',
            borderActive: 'border-blue-500 ring-2 ring-blue-500/40',
            badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
            gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
            icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            specs: ['10 Full Service Bays', 'Eaton Fuller AMT & Manual', 'Eco Rig Sanitization'],
        },
        {
            step: '04',
            badge: 'DOT & Clean Truck Pass',
            title: 'Back On The Highway',
            tagline: '100% Certified Road-Ready Release',
            metric: '100%',
            metricLabel: 'Safety Compliance Pass Rate',
            desc: 'Official California Clean Truck Check OBD emissions certification, 90-day BIT signoff, and guaranteed zero-downtime release back to freight.',
            image: '/journey/step4.jpg',
            accentColor: '#10b981',
            glow: 'shadow-[0_12px_32px_rgba(16,185,129,0.25)]',
            borderActive: 'border-emerald-500 ring-2 ring-emerald-500/40',
            badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            gradient: 'from-emerald-500 via-teal-400 to-emerald-600',
            icon: (
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            specs: ['California Clean Truck Pass', '90-Day BIT Certified', 'Zero Violation Guarantee'],
        },
    ];

    // Auto-advance through the journey smoothly
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, steps.length]);

    return (
        <section
            id="why-choose-us"
            className="relative w-full bg-[#f8fafc] text-slate-900 py-8 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden border-t border-slate-200/90 font-sans "
        >
            {/* Blueprint Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.35] pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.09) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Ambient Lighting Gradients */}
            <div className="absolute top-12 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-16 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ======================================================== */}
                {/* 1. HEADER: CLEAN, PROMINENT & HIGH-CONTRAST             */}
                {/* ======================================================== */}
                <div className="flex flex-col items-center text-center mb-4 sm:mb-8">


                    <h2 className="font-racing text-3xl sm:text-4xl md:text-4xl lg:text-5xl uppercase tracking-wider text-slate-900 leading-[1.1]">
                        How We Get You <span className="text-red-600">Back On The Highway</span>
                    </h2>

                </div>

                {/* ======================================================== */}
                {/* 2. HIGHWAY CIRCUIT ROAD TRACK WITH DYNAMIC CARDS         */}
                {/* ======================================================== */}
                <div
                    className="relative mb-6 sm:mb-12"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Glowing Highway Circuit Track Base */}
                    <div className="absolute top-1/2 left-8 right-8 h-3 -translate-y-1/2 bg-slate-200/90 border border-slate-300 rounded-full hidden md:block z-0 overflow-hidden">
                        {/* Animated Road Dashed Markings */}
                        <div className="absolute inset-0 flex items-center justify-around px-8">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="w-3 h-1 bg-amber-500/60 rounded-full" />
                            ))}
                        </div>

                        {/* Glowing Active Fill Progress Line */}
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 rounded-full shadow-[0_0_12px_#ef4444]"
                            initial={false}
                            animate={{
                                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                            }}
                            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                        />
                    </div>

                    {/* 4 Rich Interactive Step Cards */}
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                        {steps.map((item, idx) => {
                            const isCurrent = activeStep === idx;
                            const isPassed = activeStep >= idx;

                            return (
                                <motion.button
                                    key={item.step}
                                    onClick={() => {
                                        setActiveStep(idx);
                                        setIsAutoPlaying(false);
                                    }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                                    className={`relative p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer overflow-hidden ${isCurrent
                                            ? `bg-white ${item.borderActive} ${item.glow} scale-[1.02] shadow-[0_12px_28px_rgba(0,0,0,0.08)]`
                                            : isPassed
                                                ? 'bg-white/95 border-slate-300 hover:border-slate-400 shadow-sm'
                                                : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm'
                                        }`}
                                >
                                    {/* Active Top Gradient Flare Line */}
                                    {isCurrent && (
                                        <motion.div
                                            layoutId="activeStepGlow"
                                            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}
                                        />
                                    )}

                                    {/* Card Header: Step Pill + Badge */}
                                    <div className="flex items-center justify-between w-full mb-2.5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-xs shadow-sm transition-colors ${isCurrent
                                                        ? 'bg-slate-900 text-white'
                                                        : isPassed
                                                            ? 'bg-slate-100 text-slate-800'
                                                            : 'bg-slate-50 text-slate-400'
                                                    }`}
                                            >
                                                {item.step}
                                            </span>
                                            <div className="p-1 rounded-md bg-slate-50 border border-slate-100">
                                                {item.icon}
                                            </div>
                                        </div>

                                        <span
                                            className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${item.badgeBg}`}
                                        >
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Card Body */}
                                    <div>
                                        <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-0.5">
                                            {item.metric}
                                        </div>
                                        <h3 className="text-sm sm:text-base font-black tracking-tight text-slate-900 leading-snug">
                                            {item.title}
                                        </h3>

                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* ======================================================== */}
                {/* 3. ACTIVE MILESTONE COCKPIT (LUXURY HIGH-CONTRAST STAGE) */}
                {/* ======================================================== */}
                <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_45px_rgba(15,23,42,0.08)] p-3.5 sm:p-6 lg:p-7 overflow-hidden relative">

                    {/* Subtle Stage Background Watermark */}
                    <div className="absolute top-1 right-5 text-8xl font-black text-slate-900/[0.03]  font-mono pointer-events-none">
                        {steps[activeStep].step}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-7 items-center relative z-10"
                        >
                            {/* Left Column: Clear Text & Specs */}
                            <div className="md:col-span-6 flex flex-col items-start space-y-2 sm:space-y-3">

                                {/* Step Marker Pill */}
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-red-600 bg-red-50 px-2 sm:px-2.5 py-0.5 rounded-md border border-red-200 uppercase tracking-wider">
                                        STAGE {steps[activeStep].step} OF 04
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 uppercase tracking-wider">
                                        {steps[activeStep].badge}
                                    </span>
                                </div>

                                {/* Headline & Description */}
                                <div>
                                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="hidden md:block text-slate-700 text-sm sm:text-base leading-relaxed mt-1 font-normal line-clamp-3">
                                        {steps[activeStep].desc}
                                    </p>
                                </div>

                                {/* Key Spec Chips */}
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                                    {steps[activeStep].specs.map((sp) => (
                                        <span
                                            key={sp}
                                            className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-800"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            {sp}
                                        </span>
                                    ))}
                                </div>

                                {/* Big Metric Box */}
                                <div className="p-2 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-between w-full">
                                    <div>
                                        <span className="text-xl sm:text-3xl lg:text-4xl font-black text-red-600 font-racing leading-none">
                                            {steps[activeStep].metric}
                                        </span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 text-right max-w-[180px]">
                                        {steps[activeStep].metricLabel}
                                    </span>
                                </div>

                                {/* Controls & Call to Action */}
                                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 w-full">
                                    <button
                                        onClick={() => {
                                            setActiveStep((prev) => Math.max(0, prev - 1));
                                            setIsAutoPlaying(false);
                                        }}
                                        disabled={activeStep === 0}
                                        className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-35 disabled:cursor-not-allowed text-[11px] sm:text-xs font-bold text-slate-800 border border-slate-200 transition-colors"
                                    >
                                        &larr; Prev
                                    </button>

                                    <button
                                        onClick={() => {
                                            setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
                                            setIsAutoPlaying(false);
                                        }}
                                        disabled={activeStep === steps.length - 1}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-35 disabled:cursor-not-allowed text-[11px] sm:text-xs font-bold text-white shadow-sm transition-colors"
                                    >
                                        Next &rarr;
                                    </button>

                                    <a
                                        href="tel:2092398111"
                                        className="ml-auto px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white border border-red-300 hover:border-red-500 text-[11px] sm:text-xs font-black text-red-600 shadow-sm transition-colors flex items-center gap-1"
                                    >
                                        <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        (209) 239-8111
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: High-Res Interactive Image Window */}
                            <div className="md:col-span-6">
                                <div className="relative w-full h-40 sm:h-56 lg:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg group">
                                    <Image
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />




                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
