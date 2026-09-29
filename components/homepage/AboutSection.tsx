'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header & Text Stagger Reveal
      gsap.from('.gsap-about-reveal', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // 2. Chapter Row Stagger Reveal
      gsap.from('.gsap-chapter-reveal', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#f8fafc] text-slate-900 py-6 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden border-t border-slate-200/80 font-sans"
    >
      {/* Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-8 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* 1. SECTION HEADER: CATEGORY TAG + IMPACTFUL HEADLINE     */}
        {/* ======================================================== */}
        <div className="flex flex-col items-start mb-4 sm:mb-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">
            <h2 className="gsap-about-reveal font-racing text-[19px] sm:text-4xl md:text-4xl uppercase tracking-wider text-slate-900 leading-[1.15] max-w-5xl pl-3.5 border-l-4 border-red-600">
              Heavy-Duty Fleet Care <span className="text-red-600">Engineered For Zero Downtime</span>
            </h2>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. INTERWOVEN MIX: CHAPTERS OF RELEVANT IMAGE + TEXT     */}
        {/* ======================================================== */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* -------------------------------------------------------- */}
          {/* CHAPTER 01: TEXT LEFT + IMAGE RIGHT (MANTECA FACILITY)   */}
          {/* -------------------------------------------------------- */}
          <div id="why-us" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* Story Text Block 1 */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-50 text-red-600 font-black text-[11px] tracking-wider uppercase mb-2 border border-red-100">
                <span>01</span>
                <span className="text-slate-300">|</span>
                <span>Manteca Headquarters &amp; Facility</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-[21px] font-black text-slate-900 tracking-tight leading-snug mb-2">
                Full-Service Commercial Truck & Trailer Repair Headquarters
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                <strong className="text-slate-900 font-semibold">Imperial Truck &amp; Trailer Repair and Wash</strong> is Northern California’s trusted partner for <a href="#services" className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2 decoration-red-300 hover:decoration-red-600 transition-colors">commercial truck & trailer maintenance</a> and heavy rig care. Located conveniently on <span className="text-red-600 font-bold">W Yosemite Ave in Manteca, California</span>, our dedicated facility is engineered to minimize downtime for independent owner-operators and enterprise freight carriers.
              </p>

              {/* Quick Feature Pills */}
              <div className="grid grid-cols-2 gap-2.5 w-full mb-3">
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Manteca Central HQ</span>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Fast Turnaround Priority</span>
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:gap-2 transition-all"
              >
                <span>Explore Full Service Menu</span>
                <span className="text-sm leading-none">→</span>
              </a>
            </div>

            {/* Relevant Image 1: Main Manteca Shop & Office */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.12)] hover:border-red-400 transition-all duration-300">
                <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden bg-slate-100">
                  <Image
                    src="/gallery/2.webp"
                    alt="Imperial Truck & Trailer Repair Manteca Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
               
                </div>
              </div>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* CHAPTER 02: IMAGE LEFT + TEXT RIGHT (PARTS INVENTORY)    */}
          {/* -------------------------------------------------------- */}
          <div id="inventory" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* Relevant Image 2: Commercial Truck Parts & Warehouse Inventory */}
            <div className="lg:col-span-6 order-1">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] hover:border-amber-400 transition-all duration-300">
                <div className="relative w-full h-48 sm:h-60 lg:h-70 overflow-hidden bg-slate-100">
                  <Image
                    src="/gallery/11.png"
                    alt="Heavy-Duty Commercial Truck Parts Inventory Warehouse"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
             
                 
                </div>
              </div>
            </div>

            {/* Story Text Block 2 */}
            <div className="lg:col-span-6 flex flex-col items-start order-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 font-black text-[11px] tracking-wider uppercase mb-2 border border-amber-200">
                <span>02</span>
                <span className="text-slate-300">|</span>
                <span>Heavy-Duty Truck Parts &amp; Inventory</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-[22px] font-black text-slate-900 tracking-tight leading-snug mb-2">
                Extensive In-Stock OEM &amp; Aftermarket Commercial Parts
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                Beyond diagnostic and bay repairs, we supply an extensive in-stock warehouse of genuine OEM and high-durability aftermarket <a href="#services" className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2 decoration-amber-300 hover:decoration-amber-600 transition-colors">commercial truck and trailer parts</a>. From brake chambers, air valves, and airlines to turbos, alternators, filters, suspension airbags, and driveline components, we have the exact parts ready to eliminate downtime.
              </p>

              {/* Parts Inventory Telemetry & Key Categories */}
              <div className="w-full space-y-2 p-3 rounded-xl bg-white border border-slate-200 shadow-sm mb-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    <span>In-Stock Parts Availability</span>
                    <span className="text-amber-600 font-black">Same-Day Pickup &amp; Install</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full w-[99%]" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
                  {['Air Brakes & Drums', 'Turbos & Filters', 'Starters & Alternators', 'Suspension Air Bags', 'Clutches & Drivetrain'].map((part) => (
                    <span key={part} className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[10px] font-bold">
                      {part}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 hover:gap-2 transition-all"
              >
                <span>Inquire About In-Stock Parts</span>
                <span className="text-sm leading-none">→</span>
              </a>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* CHAPTER 03: TEXT LEFT + IMAGE RIGHT (TRUCK WASHOUT BAY)  */}
          {/* -------------------------------------------------------- */}
          <div id="service-areas" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* Story Text Block 3 */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-black text-[11px] tracking-wider uppercase mb-2 border border-blue-100">
                <span>03</span>
                <span className="text-slate-300">|</span>
                <span>Fleet Washout &amp; 24/7 Roadside</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                High-Pressure Truck Wash &amp; Mobile Rescue
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                Beyond in-shop powertrain maintenance, our dedicated <a href="#services" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 decoration-blue-300 hover:decoration-blue-600 transition-colors">commercial wash facility</a> offers high-pressure eco rig washouts, trailer sanitization, and undercarriage degreasing. Paired with 24/7 mobile emergency units across <a href="#service-areas" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 decoration-blue-300 hover:decoration-blue-600 transition-colors">San Joaquin County</a>, we deliver comprehensive road-ready care.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 w-full mb-3">
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Drive-Through Wash Bay</span>
                </div>
                <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 Highway Emergency</span>
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <a
                href="#service-areas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:gap-2 transition-all"
              >
                <span>View 24/7 Mobile Service Coverage</span>
                <span className="text-sm leading-none">→</span>
              </a>
            </div>

            {/* Relevant Image 3: Live Truck & Rig Washout Bay in Action */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300">
                <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden bg-slate-100">
                  <Image
                    src="/gallery/6.webp"
                    alt="Imperial Truck and Trailer High Pressure Wash Station"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                 
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};





