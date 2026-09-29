'use client';

import React from 'react';
import Image from 'next/image';

export const MobileStickyActions = () => {
  return (
    <div className="md:hidden fixed bottom-5 right-4 z-[990] flex flex-col items-end gap-3 pointer-events-auto select-none">
      {/* 1. Google Maps / Shop Location Sticky Icon */}
      <a
        href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Shop Location on Google Maps"
        className="active:scale-90 transition-transform duration-200 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center p-0.5"
      >
        <Image
          src="/logo/map.png"
          alt="Map Location"
          width={46}
          height={46}
          className="w-11 h-11 object-contain"
        />
      </a>

      {/* 2. 24/7 Phone Call Sticky Icon */}
      <a
        href="tel:+12092398111"
        aria-label="Call Imperial Truck & Trailer Repair 24/7"
        className="active:scale-90 transition-transform duration-200 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center p-0.5 animate-bounce-subtle"
      >
        <Image
          src="/logo/telephone.png"
          alt="Call Telephone"
          width={46}
          height={46}
          className="w-11 h-11 object-contain"
        />
      </a>
    </div>
  );
};
