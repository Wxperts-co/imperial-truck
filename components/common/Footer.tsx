'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import servicesData from '@/data/services.json';

export const Footer = () => {
  const navLinks = [
    { name: 'About Company', href: '#about' },
    { name: 'Repair Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const coreServices = servicesData.services.map((service) => ({
    name: service.name,
    href: '#services',
  }));

  const businessHours = [
    { day: 'Mon - Fri', hours: '8:00 AM - 6:00 PM', status: 'Regular Hours' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM', status: 'Weekend Hours' },
    { day: 'Sunday', hours: 'Closed', status: '24/7 Mobile Only' },
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#080d1a] text-white pt-10 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 lg:px-12 border-t-2 border-red-600/40 font-sans text-[15px]">
      
      {/* Top Subtle Red Glow Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* ======================================================== */}
        {/* MAIN FOOTER GRID - COMPACT 2-COL ON MOBILE, 4-COL DESKTOP*/}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          
          {/* ========================================== */}
          {/* Col 1: Brand & Contact Info (Full on Mobile)*/}
          {/* ========================================== */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start gap-3 sm:gap-4">
            
            {/* Logo */}
            <div className="py-0.5 sm:py-1">
              <Image
                src="/logo/logo.png"
                alt="Imperial Truck & Trailer Repair and Wash"
                width={260}
                height={65}
                className="h-10 sm:h-12 w-auto object-contain object-left block"
              />
            </div>

            <p className="text-[13.5px] sm:text-[15px] text-neutral-200 leading-relaxed max-w-sm">
              Northern California’s trusted commercial rig repair facility. Delivering expert diesel diagnostics, mobile highway recovery, and full washouts in Manteca, CA.
            </p>

            {/* 24/7 Emergency Dispatch Pill */}
            <a
              href="tel:+12092398111"
              className="w-full sm:w-auto mt-0.5 flex items-center justify-between gap-3 sm:gap-4 p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl bg-[#131b2e] border border-red-500/50 shadow-md hover:border-red-400 hover:bg-[#19243d] transition-colors group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs uppercase font-bold text-red-400 tracking-wider">24/7 Roadside Line</span>
                  <span className="font-racing text-sm sm:text-base text-white tracking-wide">
                     (209) 239-8111
                  </span>
                </div>
              </div>
              <span className="text-red-400 text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:imperialtruckrepair13@gmail.com"
              className="inline-flex items-center gap-2 text-[13.5px] sm:text-[15px] text-neutral-200 hover:text-amber-400 transition-colors"
            >
              <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="font-medium truncate">imperialtruckrepair13@gmail.com</span>
            </a>

            {/* Social Icons with Original Images & No Background */}
            <div className="flex items-center gap-3 mt-0.5">
              {[
                {
                  name: 'Facebook',
                  href: 'https://facebook.com',
                  iconSrc: '/logo/facebook.png',
                },
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  iconSrc: '/logo/instagram.png',
                },
                {
                  name: 'YouTube',
                  href: 'https://youtube.com',
                  iconSrc: '/logo/youtube.png',
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 inline-block"
                >
                  <Image
                    src={soc.iconSrc}
                    alt={soc.name}
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain block"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* Col 2: Navigation Links (1 Col on Mobile)  */}
          {/* ========================================== */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-2.5 sm:gap-3">
            <h4 className="font-racing text-sm sm:text-base uppercase tracking-wider text-white pb-1.5 sm:pb-2 border-b border-white/15">
              Navigation
            </h4>

            <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-[15px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-200 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 sm:gap-2 group font-medium"
                  >
                    <span className="text-red-500 font-bold text-xs sm:text-sm">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================== */}
          {/* Col 3: Key Services (1 Col on Mobile)      */}
          {/* ========================================== */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-2.5 sm:gap-3">
            <h4 className="font-racing text-sm sm:text-base uppercase tracking-wider text-white pb-1.5 sm:pb-2 border-b border-white/15">
              Our Services
            </h4>

            <ul className="flex flex-col gap-1.5 sm:gap-2 text-[13px] sm:text-[15px]">
              {coreServices.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-neutral-200 hover:text-amber-300 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 sm:gap-2 group font-medium truncate max-w-full"
                  >
                    <span className="text-amber-400 font-bold text-xs sm:text-sm">›</span>
                    <span className="truncate">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================== */}
          {/* Col 4: Business Hours & Location           */}
          {/* ========================================== */}
          <div className="col-span-2 lg:col-span-3 flex flex-col gap-2.5 sm:gap-3">
            <h4 className="font-racing text-sm sm:text-base uppercase tracking-wider text-white pb-1.5 sm:pb-2 border-b border-white/15">
              Hours &amp; Location
            </h4>

            {/* Business Hours Card */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#101726] border border-white/15 flex flex-col gap-1.5 sm:gap-2 text-[13.5px] sm:text-[15px]">
              {businessHours.map((bh) => (
                <div
                  key={bh.day}
                  className="flex items-center justify-between pb-1.5 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-xs sm:text-[15px]">{bh.day}</span>
                    <span className="text-[11px] sm:text-[12px] text-neutral-300">{bh.status}</span>
                  </div>
                  <span className={`font-mono font-bold text-xs sm:text-sm ${bh.hours === 'Closed' ? 'text-red-400' : 'text-amber-300'}`}>
                    {bh.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Manteca Facility Address */}
            <a
              href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 p-2.5 sm:p-3 rounded-xl bg-[#101726] border border-white/15 hover:border-red-500/60 transition-colors flex items-start gap-2.5 group"
            >
              <div className="p-1.5 rounded-lg bg-red-600/20 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="flex flex-col text-[13.5px] sm:text-[15px]">
                <span className="font-bold text-white">
                  17643 E French Camp Rd
                </span>
                <span className="text-neutral-200">Manteca, CA 95336</span>
                <span className="text-[12px] sm:text-[13px] text-red-400 font-bold mt-0.5 group-hover:underline">
                  Get Directions →
                </span>
              </div>
            </a>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM COPYRIGHT BAR & AGENCY POWERED BY                 */}
        {/* ======================================================== */}
        <div className="pt-4 sm:pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-[15px] text-neutral-300 text-center md:text-left">
          
          {/* Left: Copyright */}
          <div className="flex items-center justify-center md:justify-start gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <p>© {new Date().getFullYear()} Imperial Truck &amp; Trailer Repair &amp; Wash. All rights reserved.</p>
          </div>

          {/* Right: Agency Credit with Logo & Services */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 text-[11px] sm:text-[13px]">
            <span className="text-neutral-200 font-semibold tracking-wide uppercase">
              WEBSITE DEVELOPMENT | HOSTING | SEO | DIGITAL MARKETING
            </span>
            <a
              href="https://wxperts.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="/logo/wxperts_powerdby.jpg"
                alt="Powered by WXperts.co"
                width={110}
                height={28}
                className="h-5 sm:h-7 w-auto object-contain rounded-xs block"
              />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
