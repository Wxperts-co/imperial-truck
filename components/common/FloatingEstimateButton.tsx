'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const FloatingEstimateButton = () => {
  const pathname = usePathname();

  // Hide the floating estimate button when already on the estimate page
  if (pathname === '/get-an-estimate') {
    return null;
  }

  return (
    <aside
      aria-label="Instant Repair Estimate"
      className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-[980] pointer-events-auto select-none"
    >
      <Link href="/get-an-estimate" className="cursor-pointer block">
        <motion.div
          animate={{
            scale: [1, 1.06, 1, 1.04, 1],
            y: [0, -5, 0, -2.5, 0],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatDelay: 1.8,
            ease: 'easeInOut',
          }}
          className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#0b1120]/95 via-[#162036]/95 to-[#0b1120]/95 text-white font-racing uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.35)] border border-amber-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-amber-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.6)] active:scale-95 overflow-hidden"
        >
          {/* Continuous Soft Radiating Beacon Ripple */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600/30 via-amber-400/40 to-red-600/30 blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="absolute -inset-2 rounded-full bg-amber-400/20 blur-lg animate-pulse pointer-events-none" />

          {/* Diagonal Light Shimmer Sweep */}
          <motion.div
            animate={{ x: ['-150%', '250%'] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1.8,
              duration: 0.75,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 w-1/2 -skew-x-20 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          />

          {/* Inner Content */}
          <span className="relative z-10 flex items-center gap-2 sm:gap-2.5">
            {/* Glowing Status Pulse Dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
            </span>

            {/* Estimate Icon with Amber Accent Box */}
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.3)] shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-200">
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>

            {/* Main Text */}
            <span className="font-racing tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
              Get an <span className="text-amber-400 font-black">Estimate</span>
            </span>

            {/* Quick Arrow Badge */}
            <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 text-white text-[10px] sm:text-xs shadow-[0_0_8px_rgba(220,38,38,0.6)] group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </span>
        </motion.div>
      </Link>
    </aside>
  );
};
