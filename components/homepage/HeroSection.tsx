'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/common/Header';

export const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[640px] bg-[#0b1120] overflow-hidden font-sans">
            {/* Full Visible Screen Canvas Container */}
            <div className="relative w-full h-full overflow-hidden bg-neutral-900 flex flex-col justify-between">

                {/* Mobile Banner Image */}
                <Image
                    src="/banner/mobile-banner.png"
                    alt="Imperial Truck Mobile Banner"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="block sm:hidden object-cover object-center transform scale-[1.01] brightness-[1.15] contrast-[1.12] saturate-[1.28] filter transition-transform duration-700 ease-out"
                />

                {/* Desktop Background Banner Image */}
                <Image
                    src="/banner/banner3.png"
                    alt="Imperial Truck Banner"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="hidden sm:block object-cover object-center transform scale-[1.01] brightness-[1.15] contrast-[1.12] saturate-[1.28] filter transition-transform duration-700 ease-out"
                />

                {/* Crystal-Clear Targeted Scrim for Text Readability without Dimming the Facility Banner */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080d1a]/70 via-[#080d1a]/30 via-35% to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1120]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                {/* ======================================================== */}
                {/* 0. TOP UTILITY BAR: ADDRESS & PHONE NUMBER (RIGHT-ALIGNED) */}
                {/* ======================================================== */}
                <div className="hidden sm:block relative z-30 w-full bg-[#070b14]/85 backdrop-blur-md px-4 sm:px-6 md:px-10 py-1.5 text-[11px] sm:text-sm font-medium text-slate-300">
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
                            <span className="truncate">17643 E French Camp Rd, Manteca, CA 95336</span>
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
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_6px_#ef4444]" />
                            </span>
                            <span>(209) 239-8111</span>
                        </a>
                    </div>
                </div>

                {/* ======================================================== */}
                {/* TOP SECTION: Top-Left Logo Tab + Top-Right Floating Nav */}
                {/* ======================================================== */}
                <div className="relative z-20 flex items-start justify-between w-full p-0">

                    {/* Top-Left Notched Logo Card */}
                    <div className="relative bg-[#0b1120] px-4 pt-2.5 pb-2 sm:px-6 sm:pt-3 sm:pb-2.5 rounded-br-[24px] sm:rounded-br-[32px] shadow-sm flex flex-col items-start">

                        {/* 3D Elevated Logo Image */}
                        <div className="relative w-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                            <Image
                                src="/logo/logo.png"
                                alt="Imperial Truck & Trailer Repair Logo"
                                width={260}
                                height={65}
                                priority
                                className="h-9 sm:h-11 md:h-12 w-full object-contain object-center block"
                            />
                        </div>

                        {/* Premium 3D Industrial Emblem Badge (Same width as logo) */}
                        <div className="mt-1.5 relative group w-full flex items-center">
                            {/* Subtle ambient backlight glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-blue-600/30 rounded-md blur-[3px] opacity-75 group-hover:opacity-100 transition duration-300" />

                            {/* Main Badge Container matching full width */}
                            <div className="relative w-full px-2.5 py-1 rounded-[6px] bg-gradient-to-b from-[#1e2536] via-[#121622] to-[#090c12] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_3px_8px_rgba(0,0,0,0.8)] flex items-center justify-between text-[8.5px] sm:text-[9.5px] md:text-[10px] font-black tracking-wider uppercase">
                                <div className="flex items-center gap-1.5">
                                    {/* Glowing status pulse dot */}
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                                    </span>

                                    {/* Main Text */}
                                    <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                                        TRUCK &amp; TRAILER REPAIR
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    {/* Sleek Vertical Divider */}
                                    <span className="h-2.5 w-[1px] bg-neutral-600/90" />

                                    {/* Accent Wash Highlight */}
                                    <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] font-black">
                                        WASH
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Inverted Fillet Curve: Right transition to top edge of banner */}
                        <div className="absolute top-0 left-full w-6 h-6 sm:w-8 sm:h-8 pointer-events-none">
                            <svg
                                viewBox="0 0 32 32"
                                className="w-full h-full fill-[#0b1120]"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 0 H32 C14.327 0 0 14.327 0 32 V0 Z" />
                            </svg>
                        </div>

                        {/* Inverted Fillet Curve: Bottom transition to left edge of banner */}
                        <div className="absolute top-full left-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none">
                            <svg
                                viewBox="0 0 32 32"
                                className="w-full h-full fill-[#0b1120]"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 0 V32 C0 14.327 14.327 0 32 0 H0 Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Top-Right Floating Pill Navbar */}
                    <div className="pt-3 pr-3 sm:pt-4 sm:pr-5 md:pt-6 md:pr-8">
                        <Header layoutPrefix="hero" />
                    </div>
                </div>

                {/* ======================================================== */}
                {/* CENTER-LEFT HERO CONTENT: PERFECTLY ALIGNED & SMOOTH     */}
                {/* ======================================================== */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 my-auto py-6 sm:py-10  flex flex-col items-start justify-center">
                    <div className="max-w-4xl flex flex-col items-start space-y-4 sm:space-y-5">

                        {/* 1. Glowing 3D Industrial Roadside Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-red-500/50 text-red-400 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                            </span>
                            <span>24/7 HEAVY DUTY ROADSIDE RESCUE &amp; SHOP REPAIR</span>
                        </motion.div>

                        {/* 2. Ultra-Sharp Shiny Chrome & Ruby Racing Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-racing text-3xl sm:text-4xl md:text-5xl lg:text-[58px] uppercase tracking-wider leading-[1.08] "
                        >
                            {/* Shiny Brilliant White / Chrome Text with Sharp Definition */}
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300"
                                style={{
                                    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,1)) drop-shadow(0 6px 16px rgba(0,0,0,0.95)) drop-shadow(0 0 1px rgba(0,0,0,1))',
                                    WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
                                }}
                            >
                                HEAVY DUTY TRUCK &amp; TRAILER
                            </span>

                            {/* Shiny High-Intensity Ruby / Crimson Gloss Text */}
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-500 to-red-600 mt-1"
                                style={{
                                    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,1)) drop-shadow(0 6px 18px rgba(0,0,0,0.95)) drop-shadow(0 0 25px rgba(239,68,68,0.7))',
                                    WebkitTextStroke: '0.5px rgba(254,202,202,0.3)',
                                }}
                            >
                                REPAIR SPECIALISTS
                            </span>
                        </motion.h1>

                        {/* 3D Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-3.5 pt-2"
                        >
                            <a
                                href="tel:+12092398111"
                                className="px-7 py-3.5 rounded-xl bg-gradient-to-b from-red-500 to-red-700 text-white font-racing tracking-wider uppercase text-base sm:text-lg shadow-[0_10px_25px_rgba(220,38,38,0.6),inset_0_2px_0_rgba(255,255,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
                            >
                                <svg className="w-5 h-5 fill-white animate-bounce" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span>CALL +1 (209) 239-8111</span>
                            </a>

                            <Link
                                href="#services"
                                className="px-6 py-3.5 rounded-xl bg-slate-900/85 hover:bg-slate-800/90 border border-slate-600/80 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-md hover:text-red-400 transition-all duration-200 flex items-center gap-2"
                            >
                                <span>View All Services</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Spacer Anchor */}
                <div className="h-4 sm:h-8 pointer-events-none" />

            </div>
        </section>
    );
};
