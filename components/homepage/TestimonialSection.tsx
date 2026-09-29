'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import reviewsData from '@/data/reviews.json';

interface ReviewItem {
    id: string;
    name: string;
    role: string;
    rating: number;
    review: string;
    avatar: string;
    badge: string;
    highlight: string;
}

export const TestimonialSection = () => {
    const reviews: ReviewItem[] = reviewsData;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    // Auto-advance through reviews smoothly
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 6500);
        return () => clearInterval(interval);
    }, [isAutoPlaying, reviews.length]);

    const activeReview = reviews[activeIndex];

    return (
        <section
            id="reviews"
            className="relative w-full bg-[#0b1120] text-white py-8 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden border-t border-slate-800 font-sans "
        >
            {/* Blueprint Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.14] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(239, 68, 68, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.2) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                }}
            />

            {/* Ambient Lighting Glows */}
            <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ======================================================== */}
                {/* 1. HEADER: BRAND TAG + RATINGS STATS                     */}
                {/* ======================================================== */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="max-w-6xl">


                        <h2 className="font-racing text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white leading-[1.08]">
                            Trusted By Commercial <span className="text-red-500">Drivers &amp; Truck</span>
                        </h2>

                        <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                            Real feedback from independent owner-operators, freight carriers, and commercial rig drivers across Northern California.
                        </p>
                    </div>

                </div>

                {/* ======================================================== */}
                {/* 2. SPOTLIGHT HERO REVIEW CARD (INTERACTIVE)              */}
                {/* ======================================================== */}
                <div
                    className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3.5 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Quote Mark Watermark */}
                    <div className="absolute top-2 right-6 text-6xl sm:text-8xl font-serif font-black text-white/[0.03] pointer-events-none">
                        &ldquo;
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeReview.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-center relative z-10"
                        >
                            {/* Left: Driver Avatar & Quick Specs (1 row on mobile, 2 rows on bigger screens) */}
                            <div className="lg:col-span-4 flex flex-row sm:flex-col items-center sm:items-start gap-2.5 sm:gap-3">
                                <div className="relative w-10 h-10 sm:w-20 sm:h-20 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]">
                                    <Image
                                        src={activeReview.avatar}
                                        alt={activeReview.name}
                                        fill
                                        sizes="80px"
                                        className="object-cover object-center"
                                    />
                                </div>

                                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-1.5 min-w-0">
                                    <h3 className="text-sm sm:text-xl font-black text-white tracking-tight leading-snug">
                                        {activeReview.name}
                                    </h3>

                                    {/* Rating Stars with Google Icon */}
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                            />
                                        </svg>
                                        <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400 text-xs sm:text-sm">
                                            {'★'.repeat(activeReview.rating)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Review Narrative Quote & Highlight */}
                            <div className="lg:col-span-8 flex flex-col justify-between space-y-2.5 sm:space-y-4">

                                {/* Highlight Badge */}
                                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider self-start">
                                    <span>KEY HIGHLIGHT:</span>
                                    <span className="text-white font-extrabold">{activeReview.highlight}</span>
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-xs sm:text-base lg:text-lg font-medium text-slate-100 leading-relaxed italic border-l-2 border-red-500/60 pl-3 sm:pl-4">
                                    &ldquo;{activeReview.review}&rdquo;
                                </blockquote>

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-slate-800">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        {reviews.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setActiveIndex(idx);
                                                    setIsAutoPlaying(false);
                                                }}
                                                className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx
                                                    ? 'w-5 sm:w-7 bg-red-600 shadow-[0_0_10px_#ef4444]'
                                                    : 'w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <button
                                            onClick={() => {
                                                setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => {
                                                setActiveIndex((prev) => (prev + 1) % reviews.length);
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-1.5 sm:p-2 rounded-lg bg-red-600 hover:bg-red-500 text-white shadow-md transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Google Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
                    <a
                        href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs sm:text-sm font-extrabold shadow-sm transition-all duration-200 hover:scale-105"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                        </svg>
                        <span>Read More</span>
                    </a>

                    <a
                        href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-extrabold shadow-sm transition-all duration-200 hover:scale-105"
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                        </svg>
                        <span>Write a Review</span>
                    </a>
                </div>

            </div>
        </section>
    );
};
