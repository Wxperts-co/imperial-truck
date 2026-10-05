'use client';

import React from 'react';
import { motion } from 'framer-motion';
import rawAcceleratorData from '@/data/ai-accelerator.json';

interface AeoDirectAnswerSnippetProps {
  pageKey?: string;
  customSnippet?: string;
  title?: string;
}

export const AeoDirectAnswerSnippet: React.FC<AeoDirectAnswerSnippetProps> = ({
  pageKey = 'home',
  customSnippet,
  title,
}) => {
  let snippetText = customSnippet;

  if (!snippetText) {
    const dataList = (Array.isArray(rawAcceleratorData)
      ? rawAcceleratorData
      : [rawAcceleratorData]) as Record<string, any>[];

    const keyVariants = [
      pageKey,
      `/${pageKey.replace(/^\/+/, '')}`,
      pageKey.replace(/^\/+/, ''),
      pageKey.replace(/\//g, '_'),
      pageKey.split('/').pop() || '',
    ].filter(Boolean);

    for (const key of keyVariants) {
      for (const item of dataList) {
        const pageEntry = item?.[key];
        if (pageEntry && typeof pageEntry === 'object' && typeof pageEntry.front_loaded_aeo_direct_answer_snippet === 'string') {
          snippetText = pageEntry.front_loaded_aeo_direct_answer_snippet;
          break;
        }
      }
      if (snippetText) break;
    }

    if (!snippetText) {
      for (const item of dataList) {
        if (item?.home && typeof item.home.front_loaded_aeo_direct_answer_snippet === 'string') {
          snippetText = item.home.front_loaded_aeo_direct_answer_snippet;
          break;
        }
      }
    }
  }

  if (!snippetText) return null;

  const defaultTitles: Record<string, string> = {
    home: 'Imperial Truck & Trailer Repair, Commercial Wash & 24/7 Roadside Rescue',
    'about-us': 'Commercial Rig Care, Fleet Maintenance & High-Pressure Washouts – Manteca, CA',
    gallery: 'Imperial Truck & Trailer Repair, Wash & Fleet Facility Gallery',
    'contact-us': 'Contact Imperial Truck & Trailer Repair, Wash & 24/7 Roadside Assistance',
    services: 'Heavy-Duty Commercial Truck & Trailer Repair Services – Manteca, CA',
    'get-an-estimate': 'Get An Estimate – Fast Commercial Fleet Quote & Service Scheduling',
    'services/diesel-repair': 'Heavy-Duty Commercial Diesel Engine Repair & Diagnostics – Manteca, CA',
    'diesel-repair': 'Heavy-Duty Commercial Diesel Engine Repair & Diagnostics – Manteca, CA',
    'services/brakes-air-systems': 'Heavy-Duty Truck Brakes & Pneumatic Air System Repair – Manteca, CA',
    'brakes-air-systems': 'Heavy-Duty Truck Brakes & Pneumatic Air System Repair – Manteca, CA',
    'services/wheel-seals-shocks': 'Heavy-Duty Wheel Seals, Shocks & Axle Hub Repair – Manteca, CA',
    'wheel-seals-shocks': 'Heavy-Duty Wheel Seals, Shocks & Axle Hub Repair – Manteca, CA',
    'services/king-pins-steering': 'Commercial King Pins, Bushings & Steering Linkage Overhauls – Manteca, CA',
    'king-pins-steering': 'Commercial King Pins, Bushings & Steering Linkage Overhauls – Manteca, CA',
    'services/ac-climate-control': 'Heavy-Duty Commercial Truck A/C & Cabin Climate Control – Manteca, CA',
    'ac-climate-control': 'Heavy-Duty Commercial Truck A/C & Cabin Climate Control – Manteca, CA',
    'services/heavy-duty-parts': 'Genuine OEM & Aftermarket Heavy-Duty Truck Parts – Manteca, CA',
    'heavy-duty-parts': 'Genuine OEM & Aftermarket Heavy-Duty Truck Parts – Manteca, CA',
    'services/computer-diagnostics': 'Heavy-Duty Commercial Computer Diagnostics & ECM Scanning – Manteca, CA',
    'computer-diagnostics': 'Heavy-Duty Commercial Computer Diagnostics & ECM Scanning – Manteca, CA',
    'services/tires-wheel-mounting': 'Commercial Tires, Wheel Mounting & 24/7 Roadside Tire Service – Manteca, CA',
    'tires-wheel-mounting': 'Commercial Tires, Wheel Mounting & 24/7 Roadside Tire Service – Manteca, CA',
    'services/transmissions-clutch': 'Heavy-Duty Commercial Transmissions & Heavy-Duty Clutch Repair – Manteca, CA',
    'transmissions-clutch': 'Heavy-Duty Commercial Transmissions & Heavy-Duty Clutch Repair – Manteca, CA',
    'services/electrical-alternators': 'Heavy-Duty Commercial Electrical Systems & Alternator Repair – Manteca, CA',
    'electrical-alternators': 'Heavy-Duty Commercial Electrical Systems & Alternator Repair – Manteca, CA',
    'services/truck-rv-wash': 'Eco-Friendly Truck & RV Wash, 53ft Trailer Washout – Manteca, CA',
    'truck-rv-wash': 'Eco-Friendly Truck & RV Wash, 53ft Trailer Washout – Manteca, CA',
    'services/truck-trailer-repair': 'Full Commercial Truck & Trailer Repair, BIT Inspections – Manteca, CA',
    'truck-trailer-repair': 'Full Commercial Truck & Trailer Repair, BIT Inspections – Manteca, CA',
  };

  const displayTitle =
    title ||
    defaultTitles[pageKey] ||
    defaultTitles[pageKey.replace(/^\/+/, '')] ||
    'Imperial Truck & Trailer Repair, Commercial Wash & 24/7 Roadside Rescue';

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0b1222] via-[#0e172a] to-[#0b1222] border-y border-slate-800/80 py-6 sm:py-7 px-4 sm:px-6 md:px-10 lg:px-12 font-sans overflow-hidden">
      {/* Top subtle highlight bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef4444]" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-28 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-28 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6"
        >
         

          {/* Content with Title & Snippet */}
          <div className="flex-1 text-center min-w-0 space-y-1.5">
            <h2 className="bg-gradient-to-r from-red-500 via-amber-400 to-red-500 bg-clip-text text-transparent font-racing tracking-wider uppercase text-base sm:text-lg md:text-xl leading-snug inline-block">
              {displayTitle}
            </h2>
            <p className="text-neutral-300 text-[13.5px] sm:text-[12px] md:text-[15px] leading-relaxed font-normal">
              {snippetText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AeoDirectAnswerSnippet;
