'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/common/Header';

export const ScrollStickyNavbar = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger new sticky navbar when scrolled past hero header area (> 140px)
      setShowSticky(window.scrollY > 140);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      className={`fixed top-0 inset-x-0 z-[999] transition-all duration-300 ease-out ${showSticky
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
    >
      <div className="w-full bg-[#070a12]/95 backdrop-blur-xl border-b border-red-500/30 shadow-[0_12px_35px_rgba(0,0,0,0.9)] py-2.5 sm:py-3 px-4 sm:px-6 md:px-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Logo with Exact Hero Height & Sub-Badge Text */}
          <Link
            href="/"
            className="flex flex-col items-start transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            {/* Logo Image */}
            <div className="relative w-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
              <Image
                src="/logo/logo.png"
                alt="Imperial Truck & Trailer Repair Logo"
                width={260}
                height={65}
                className="h-9 sm:h-11 md:h-12 w-full object-contain object-center block"
              />
            </div>

            {/* Premium 3D Industrial Emblem Subtext Badge */}
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
          </Link>

          {/* Right: Navbar with Isolated Layout Animation */}
          <div className="flex items-center">
            <Header layoutPrefix="sticky" />
          </div>

        </div>
      </div>
    </div>
  );
};

