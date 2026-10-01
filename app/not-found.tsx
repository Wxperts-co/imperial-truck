'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[9999] min-h-screen overflow-y-auto bg-[#070a12] text-white flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Speed & Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.25) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Bar: Brand Logo Only (Clean Standalone) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex justify-center sm:justify-start"
      >
        <Link href="/" className="inline-block transition-transform duration-200 hover:scale-105">
          <Image
            src="/logo/logo.png"
            alt="Imperial Truck & Trailer Repair Logo"
            width={240}
            height={60}
            priority
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
          />
        </Link>
      </motion.div>

      {/* Main 404 Content Container */}
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center flex flex-col items-center my-auto py-8">
        {/* Animated Detour Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <svg
            className="w-4 h-4 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          ROUTE ERROR &bull; ROAD DETOUR
        </motion.div>

        {/* 3D Giant 404 Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none"
        >
          <h1 className="font-racing text-7xl sm:text-9xl md:text-[11rem] font-extrabold tracking-widest text-3d-red leading-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
            404
          </h1>
        </motion.div>

        {/* Error Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-racing text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wider mt-4 mb-3"
        >
          LOST ON THE HIGHWAY?{' '}
          <span className="text-amber-400">PAGE NOT FOUND</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8"
        >
          The page or route you are looking for might have been moved, renamed,
          or is temporarily out of service. Let&apos;s get your rig back on track!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl mb-10"
        >
          {/* Home Button */}
          <Link
            href="/"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-racing tracking-wider uppercase text-base sm:text-lg shadow-[0_8px_25px_rgba(220,38,38,0.45)] active:scale-[0.98] transition-all duration-200 border border-red-500/40"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            BACK TO HOMEPAGE
          </Link>

          {/* Services Button */}
          <Link
            href="/services"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-racing tracking-wider uppercase text-base sm:text-lg border border-slate-700/80 shadow-[0_4px_15px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all duration-200"
          >
            <svg
              className="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            OUR SERVICES
          </Link>
        </motion.div>

        {/* 24/7 Roadside Assistance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-2xl rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-red-500 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">
                Need immediate heavy-duty roadside dispatch?
              </p>
              <p className="text-sm font-semibold text-white">
                24/7 Rapid Emergency Highway Recovery
              </p>
            </div>
          </div>

          <a
            href="tel:+12092398111"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-racing uppercase tracking-wider text-sm font-bold shadow-[0_4px_15px_rgba(245,158,11,0.3)] transition-all shrink-0"
          >
            +1 (209) 239-8111
          </a>
        </motion.div>
      </div>

      {/* Bottom Subtle Brand Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 text-xs text-slate-500 text-center py-2"
      >
        &copy; {new Date().getFullYear()} Imperial Truck &amp; Trailer Repair and Wash. All rights reserved.
      </motion.div>
    </div>
  );
}
