'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Header } from '@/components/common/Header';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface PageHeroProps {
    title: string;
    highlightTitle?: string;
    subtitle?: string;
    badge?: string;
    bgImage?: string;
    mobileBgImage?: string;
    accentImage?: string;
    breadcrumbs?: BreadcrumbItem[];
    stats?: StatItem[];
    children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    highlightTitle,
    subtitle,
    badge = '24/7 HEAVY DUTY TRUCK & TRAILER SERVICES',
    bgImage = '/banner/inner-banner.png',
    mobileBgImage,
    accentImage = '/banner/truck.png',
    breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: title },
    ],
    stats,
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const effectiveMobileBgImage =
        mobileBgImage ||
        (bgImage?.includes('contact')
            ? '/banner/contact-mobile-banner.png'
            : '/banner/mobile-page-banner.png');

    // Interactive 3D Tilt Physics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-12deg', '12deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
        const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full min-h-[450px] sm:min-h-[460px] lg:min-h-[480px] bg-[#0b1120] text-white overflow-hidden flex flex-col justify-between font-sans border-b border-red-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ perspective: '1200px' }}
        >
            {/* 1. LAYERED BACKGROUND WITH PARALLAX DEPTH */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Desktop Background Banner Image (Hidden on mobile) */}
                <div className="hidden sm:block absolute inset-0 w-full h-full">
                    <Image
                        src={bgImage}
                        alt={title}
                        fill
                        priority
                        quality={90}
                        className="object-cover object-center filter brightness-[0.55] contrast-[1.15]"
                    />
                </div>
                {/* Mobile Background Banner Image (Visible on mobile <640px) */}
                <div className="block sm:hidden absolute inset-0 w-full h-full">
                    <Image
                        src={effectiveMobileBgImage}
                        alt={title}
                        fill
                        priority
                        quality={90}
                        className="object-cover object-center filter brightness-[0.55] contrast-[1.15]"
                    />
                </div>
                {/* Subtle Top Gradient Overlay */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1120]/80 via-[#0b1120]/50 to-transparent pointer-events-none" />
            </div>

            {/* 2. TOP UTILITY BAR (ADDRESS + PHONE) */}
            <div className="hidden sm:block relative z-30 w-full bg-[#0b1120] px-4 sm:px-6 md:px-10 py-1.5 text-[11px] sm:text-sm font-medium text-slate-300">
                <div className="max-w-7xl mx-auto flex items-center justify-end gap-3.5 sm:gap-6">
                    {/* Location Address */}
                    <a
                        href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors truncate group"
                    >
                        <svg className="w-3.5 h-3.5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <span className="truncate">2142 W Yosemite Ave, Manteca, CA 95337</span>
                    </a>

                    {/* Divider */}
                    <span className="hidden sm:inline-block h-3 w-[1px] bg-slate-700" />

                    {/* 24/7 Phone Line */}
                    <a
                        href="tel:+12092398111"
                        className="flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300 transition-colors shrink-0"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                        </span>
                        <span>(209) 239-8111</span>
                    </a>
                </div>
            </div>

            {/* 3. TOP NAVBAR: LOGO NOTCH + HEADER PILL */}
            <div className="relative z-20 flex items-start justify-between w-full p-0">
                {/* Top-Left Notched Logo Card */}
                <div className="relative bg-[#0b1120] px-4 pt-2.5 pb-2 sm:px-6 sm:pt-3 sm:pb-2.5 rounded-br-[24px] sm:rounded-br-[32px] shadow-sm flex flex-col items-start">
                    {/* 3D Elevated Logo Image */}
                    <Link href="/" className="relative w-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                        <Image
                            src="/logo/logo.png"
                            alt="Imperial Truck & Trailer Repair Logo"
                            width={260}
                            height={65}
                            priority
                            className="h-9 sm:h-11 md:h-12 w-full object-contain object-center block"
                        />
                    </Link>

                    {/* Premium 3D Industrial Emblem Badge */}
                    <div className="mt-1.5 relative group w-full flex items-center">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-blue-600/30 rounded-md blur-[3px] opacity-75 group-hover:opacity-100 transition duration-300" />
                        <div className="relative w-full px-2.5 py-1 rounded-[6px] bg-gradient-to-b from-[#1e2536] via-[#121622] to-[#090c12] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_3px_8px_rgba(0,0,0,0.8)] flex items-center justify-between text-[8.5px] sm:text-[9.5px] md:text-[10px] font-black tracking-wider uppercase">
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                                </span>
                                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                                    TRUCK &amp; TRAILER REPAIR
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 ml-1.5">
                                <span className="h-2.5 w-[1px] bg-neutral-600/90" />
                                <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] font-black">
                                    WASH
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Inverted Fillet Curve: Right transition */}
                    <div className="absolute top-0 left-full w-6 h-6 sm:w-8 sm:h-8 pointer-events-none">
                        <svg viewBox="0 0 32 32" className="w-full h-full fill-[#0b1120]" preserveAspectRatio="none">
                            <path d="M0 0 H32 C14.327 0 0 14.327 0 32 V0 Z" />
                        </svg>
                    </div>

                    {/* Inverted Fillet Curve: Bottom transition */}
                    <div className="absolute top-full left-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none">
                        <svg viewBox="0 0 32 32" className="w-full h-full fill-[#0b1120]" preserveAspectRatio="none">
                            <path d="M0 0 V32 C0 14.327 14.327 0 32 0 H0 Z" />
                        </svg>
                    </div>
                </div>

                {/* Top-Right Floating Pill Navbar */}
                <div className="pt-3 pr-3 sm:pt-4 sm:pr-5 md:pt-6 md:pr-8">
                    <Header layoutPrefix="page-hero" />
                </div>
            </div>

            {/* 4. MAIN HERO CONTENT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8 sm:py-12 my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* LEFT COLUMN: BREADCRUMBS, BADGE, 3D TITLES & ACTIONS */}
                    <div className="lg:col-span-7 flex flex-col pb-30 md:pb-0 items-center md:items-start text-center md:text-left space-y-2 sm:space-y-5">

                        {/* Interactive Breadcrumb Trail */}
                        {breadcrumbs && breadcrumbs.length > 0 && (
                            <motion.nav
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                aria-label="Breadcrumb"
                                className="hidden md:inline-flex items-center flex-wrap gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1120]/85 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide shadow-lg"
                            >
                                {breadcrumbs.map((item, index) => {
                                    const isLast = index === breadcrumbs.length - 1;
                                    return (
                                        <React.Fragment key={index}>
                                            {index > 0 && (
                                                <svg
                                                    className="w-3.5 h-3.5 text-red-500 shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            )}
                                            {isLast || !item.href ? (
                                                <span className="text-red-400 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                                                    {item.label}
                                                </span>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="text-white hover:text-red-400 transition-colors duration-150 flex items-center gap-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                                                >
                                                    {index === 0 && (
                                                        <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                        </svg>
                                                    )}
                                                    <span>{item.label}</span>
                                                </Link>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </motion.nav>
                        )}


                        {/* 3D Racing Chrome & Ruby Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="font-racing text-2xl sm:text-4xl md:text-4xl lg:text-[44px] uppercase tracking-wider leading-[1.1] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                        >
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200"
                                style={{
                                    filter: 'drop-shadow(0 0 2px #000) drop-shadow(0 2px 6px rgba(0,0,0,0.85))',
                                    WebkitTextStroke: '0.5px rgba(255,255,255,0.6)',
                                }}
                            >
                                {title}
                            </span>
                            {highlightTitle && (
                                <span
                                    className="block text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-500 to-red-600 mt-1"
                                    style={{
                                        filter: 'drop-shadow(0 0 2px #000) drop-shadow(0 2px 6px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(239,68,68,0.4))',
                                        WebkitTextStroke: '0.5px rgba(254,202,202,0.4)',
                                    }}
                                >
                                    {highlightTitle}
                                </span>
                            )}
                        </motion.h1>



                        {/* Custom Children / Action Buttons */}
                        {children && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="pt-2 w-full"
                            >
                                {children}
                            </motion.div>
                        )}


                    </div>



                </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-4 sm:h-6 pointer-events-none" />
        </section>
    );
};
