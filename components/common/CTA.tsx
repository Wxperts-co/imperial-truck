'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const CTA = () => {
    return (
        <section className="relative w-full py-8 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#f8fafc] border-t border-slate-200/90 overflow-hidden font-sans ">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 3D Elevated Main Container (Light Theme) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative rounded-3xl bg-white border-2 border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
                    style={{ perspective: 1000 }}
                >
                    {/* Subtle Speed & Grid Layer */}
                    <div
                        className="absolute inset-0 opacity-[0.2] pointer-events-none"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.25) 1px, transparent 0)',
                            backgroundSize: '24px 24px',
                        }}
                    />

                    {/* Top Edge Red Laser Highlight */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_10px_#ef4444]" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                        {/* LEFT CONTENT: Simple, High-Impact & Direct */}
                        <div className="lg:col-span-7 flex flex-col items-start space-y-3.5">
                            {/* 3D Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-wider uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                                24/7 RAPID HIGHWAY DISPATCH &amp; SHOP REPAIR
                            </div>

                            {/* 3D Title */}
                            <h2 className="font-racing text-[19px] sm:text-3xl lg:text-4xl text-slate-900 uppercase tracking-wider leading-[1.1]">
                                NEED RAPID ROADSIDE ASSISTANCE OR{' '}
                                <span className="text-red-600">
                                    TRUCK SERVICE?
                                </span>
                            </h2>

                            {/* 3D Call to Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                                {/* Primary 3D Red Call Button */}
                                <a
                                    href="tel:+12092398111"
                                    className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-b from-red-600 to-red-700 text-white font-racing tracking-wider uppercase text-base sm:text-lg shadow-[0_8px_20px_rgba(220,38,38,0.35)] hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                                >
                                    <svg className="w-4 h-4 fill-white animate-bounce" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span>CALL  (209) 239-8111</span>
                                </a>

                                {/* Secondary Button */}
                                <a
                                    href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:text-red-600 transition-all duration-200"
                                >
                                    <span>Visit Shop Location</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: 3D TRUCK PRESENTATION */}
                        <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0">
                            {/* 3D Platform Pedestal Shadow */}
                            <div className="absolute -bottom-2 w-4/5 h-8 bg-slate-900/15 rounded-full blur-xl pointer-events-none" />
                            <div className="absolute inset-0 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />

                            {/* Semi Truck Image with To and Fro Movement */}
                            <motion.div
                                animate={{
                                    x: [-10, 10, -10],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative w-full max-w-[420px] h-[190px] sm:h-[220px] lg:h-[240px] drop-shadow-[0_15px_20px_rgba(0,0,0,0.18)] z-10"
                            >
                                <Image
                                    src="/banner/truck.png"
                                    alt="Imperial Truck Heavy Duty Rig"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 420px"
                                    priority
                                    className="object-contain object-center scale-105"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
