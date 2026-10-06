'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ctx: gsap.Context | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
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

          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  const coreSpecialties = [
    'Diesel Repair',
    'A/C & Climate',
    'Air Brakes',
    'Commercial Tires',
    'Wheel Seals',
    'Shocks',
    'Transmissions',
    'Heavy-Duty Clutch',
    'King Pins',
    'Electrical',
    'Truck & RV Wash',
    'Computer Diagnostics',
    'Heavy Duty Parts Inventory',
  ];

  const amenities = [
    { title: 'Credit Cards Accepted', icon: '💳', desc: 'All Major Fleet & Credit Cards' },
    { title: 'Gender-Neutral Restrooms', icon: '🚻', desc: 'Clean, Accessible Facilities' },
    { title: 'Established in 2012', icon: '🏆', desc: 'Over 12+ Years of Trusted Service' },
    { title: 'Experienced Mechanics', icon: '🔧', desc: 'Certified Diesel & Master Technicians' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#f8fafc] text-slate-900 py-8 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden border-t border-slate-200/80 font-sans"
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

      {/* Ambient 3D Lighting Gradients */}
      <div className="absolute top-8 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* 1. SECTION HEADER: CATEGORY TAG + IMPACTFUL HEADLINE     */}
        {/* ======================================================== */}
        <div className="flex flex-col items-start mb-4 sm:mb-6">
         

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 w-full">
            <div>
              <h2 className="gsap-about-reveal font-racing text-2xl sm:text-4xl md:text-4xl uppercase tracking-wider text-slate-900 leading-[1.12] max-w-7xl pl-3.5 border-l-4 border-red-600">
                Heavy-Duty Truck Repair in Manteca, California, <span className="text-red-600">Where the Rig Leaves Fixed and Clean</span>
              </h2>

            </div>

            {/* Quick 3D Stats Pill */}
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-md shrink-0">
              <div className="px-3.5 py-1.5 rounded-xl bg-red-600 text-white text-center">
                <span className="font-racing text-xl sm:text-2xl leading-none block">2012</span>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">ESTABLISHED</span>
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-xs font-extrabold text-slate-900">12+ Years Of Trust</span>
                <span className="text-[11px] text-slate-500">Manteca &amp; San Joaquin</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. INTERWOVEN MIX: CHAPTERS OF RELEVANT IMAGE + TEXT     */}
        {/* ======================================================== */}
        <div className="space-y-6 sm:space-y-10">
          
          {/* -------------------------------------------------------- */}
          {/* CHAPTER 01: TEXT LEFT + IMAGE RIGHT (MANTECA FACILITY)   */}
          {/* -------------------------------------------------------- */}
          <div id="why-us" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Story Text Block 1 */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-50 text-red-600 font-black text-[11px] tracking-wider uppercase mb-2 border border-red-100">
                <span>01</span>
                <span className="text-slate-300">|</span>
                <span>Manteca Headquarters &amp; Facility</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                Full-Service Commercial Truck &amp; Trailer Repair Headquarters
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal text-justify">
                You know the sound – a new whine from the wheel end somewhere on the road out of Tracy, or a check-engine light that disappears for a while and then comes back an hour later. <strong className="text-red-600 font-semibold">Imperial Truck &amp; Trailer Repair and Wash</strong> sits at 2142 W Yosemite Avenue in Manteca, California, close to Highway 99, Highway 120, and I-5, and we have been taking those calls since 2012. Pull in. Tell us what the truck is doing. Somebody here has heard that sound before. 
              </p>

              {/* Core Specialties Pills */}
              <div className="w-full mb-4">
                <span className="text-[11px] uppercase font-bold text-slate-600 tracking-wider block mb-2">
                  Key Shop Specialties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {coreSpecialties.slice(0, 8).map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-xs text-slate-800 text-[11px] font-bold flex items-center gap-1.5 hover:border-red-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore All Specialties</span>
                <span className="text-sm leading-none">→</span>
              </Link>
            </div>

            {/* Relevant Image 1: Main Manteca Shop & Office */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.18)] hover:border-red-400 transition-all duration-300">
                <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden bg-slate-100">
                  <Image
                    src="/gallery/2.webp"
                    alt="Imperial Truck & Trailer Repair Manteca Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                </div>
              </div>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* CHAPTER 02: IMAGE LEFT + TEXT RIGHT (PARTS INVENTORY)    */}
          {/* -------------------------------------------------------- */}
          <div id="inventory" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Relevant Image 2: Commercial Truck Parts & Warehouse Inventory */}
            <div className="lg:col-span-6 order-1">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.18)] hover:border-amber-400 transition-all duration-300">
                <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden bg-slate-100">
                  <Image
                    src="/gallery/11.webp"
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

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                The part is already here 
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal text-justify">
                Waiting on a part is often the slowest part of a repair, so Imperial keeps a warehouse stocked with genuine OEM and quality aftermarket parts. Brake chambers, air valves, and airlines. Turbos and alternators. Wheel seals, shocks, kingpins, driveline pieces. When the part is on the shelf, same-day pickup is possible, along with same-day installation in the bay where the schedule allows. 
              </p>

              {/* Parts Inventory Telemetry & Key Categories */}
              <div className="w-full space-y-2 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm mb-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    <span>In-Stock Parts Availability</span>
                    <span className="text-amber-600 font-black">Same-Day Pickup &amp; Bay Install</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full w-[99%]" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-100">
                  {['Air Brakes & Drums', 'Wheel Seals & Shocks', 'King Pins & Bushings', 'Starters & Alternators', 'Clutches & Transmissions', 'A/C Compressors'].map((part) => (
                    <span key={part} className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[10.5px] font-bold">
                      {part}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 hover:gap-2 transition-all"
              >
                <span>Inquire About In-Stock Heavy Duty Parts</span>
                <span className="text-sm leading-none">→</span>
              </Link>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* CHAPTER 03: TEXT LEFT + IMAGE RIGHT (TRUCK WASHOUT BAY)  */}
          {/* -------------------------------------------------------- */}
          <div id="wash" className="gsap-chapter-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Story Text Block 3 */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-black text-[11px] tracking-wider uppercase mb-2 border border-blue-100">
                <span>03</span>
                <span className="text-slate-300">|</span>
                <span>Fleet Washout &amp; Rig Care</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                Then a bath
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal text-justify">
                A repaired truck should look the part too. Our drive-through wash bay handles high-pressure washouts, undercarriage degreasing, and trailer sanitization, using eco-friendly methods. RVs are welcome too. One stop, then the highway.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 w-full mb-3">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Drive-Through Wash Bay</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 Highway Emergency</span>
                </div>
              </div>

              {/* Internal Anchor Action Link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:gap-2 transition-all"
              >
                <span>Explore Truck &amp; RV Wash Services</span>
                <span className="text-sm leading-none">→</span>
              </Link>
            </div>

            {/* Relevant Image 3: Live Truck & Rig Washout Bay */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:border-blue-400 transition-all duration-300">
                <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden bg-slate-100">
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

          {/* -------------------------------------------------------- */}
          {/* CHAPTER 04: AMENITIES & QUALITY SERVICE 3D GRID          */}
          {/* -------------------------------------------------------- */}
          <div className="pt-4 sm:pt-6 border-t border-slate-200">
            <div className="text-center max-w-6xl mx-auto mb-6">
              <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider block">
                Facility Amenities &amp; Standards
              </span>
              <h3 className="font-racing text-xl sm:text-3xl uppercase tracking-wider text-slate-900 mt-1">
                Paying, waiting, washing up
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-2 max-w-4xl mx-auto font-normal">
                We accept Comdata, EFS, Fleet One, and every major credit card. Private restrooms are on the grounds, and they&apos;re kept clean, which matters especially when a repair runs a few hours. Owner-operators with a single rig and fleets with many rely on the same bays and the same parts counter.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-[inset_0_0_14px_rgba(239,68,68,0.1),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_0_18px_rgba(239,68,68,0.18),0_6px_16px_rgba(239,68,68,0.1)] hover:border-red-400 transition-all flex items-center gap-2.5 sm:gap-3.5"
                >
                  <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <h4 className="font-medium  text-slate-900 text-xs sm:text-sm leading-snug tracking-tight">{item.title}</h4>
                    <p className="hidden sm:block text-xs text-slate-500 leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
