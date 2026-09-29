'use client';

import React from 'react';

export const FloatingEstimateButton = () => {
  return (
    <aside
      aria-label="Instant Repair Estimate"
      className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-[980] pointer-events-auto select-none"
    >
      <a
        href="tel:+12092398111"
        className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white font-racing uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_25px_rgba(239,68,68,0.8),0_0_45px_rgba(245,158,11,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)] border border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(239,68,68,1),0_0_60px_rgba(245,158,11,0.7)] active:scale-95"
      >
        {/* Outer Radiant Glowing Halo */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600 opacity-80 blur-md animate-pulse pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-red-500/40 blur-lg animate-ping opacity-30 pointer-events-none" />

        {/* Inner Content */}
        <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
          {/* Estimate Icon with Glowing Badge */}
          <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/30 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.6)] shrink-0">
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

          <span className="font-racing tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] whitespace-nowrap">
            Get an Estimate
          </span>

          {/* Quick Arrow Badge */}
          <span className="hidden sm:inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/25 text-white text-[10px] group-hover:translate-x-0.5 transition-transform duration-200">
            →
          </span>
        </span>
      </a>
    </aside>
  );
};
