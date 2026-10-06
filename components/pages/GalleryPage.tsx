'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';
import { AeoDirectAnswerSnippet } from '@/components/homepage/AeoDirectAnswerSnippet';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const galleryImages: GalleryImage[] = [
        { id: 1, src: '/gallery/1.webp', alt: 'Imperial Truck & Trailer Facility 1' },
        { id: 2, src: '/gallery/2.webp', alt: 'Imperial Truck & Trailer Facility 2' },
        { id: 3, src: '/gallery/3.webp', alt: 'Imperial Truck & Trailer Facility 3' },
        { id: 4, src: '/gallery/4.webp', alt: 'Imperial Truck & Trailer Facility 4' },
        { id: 5, src: '/gallery/5.webp', alt: 'Imperial Truck & Trailer Facility 5' },
        { id: 6, src: '/gallery/6.webp', alt: 'Imperial Truck & Trailer Facility 6' },
        { id: 7, src: '/gallery/7.webp', alt: 'Imperial Truck & Trailer Facility 7' },
        { id: 8, src: '/gallery/8.webp', alt: 'Imperial Truck & Trailer Facility 8' },
        { id: 9, src: '/gallery/9.webp', alt: 'Imperial Truck & Trailer Facility 9' },
        { id: 10, src: '/gallery/10.webp', alt: 'Imperial Truck & Trailer Facility 10' },
        { id: 11, src: '/gallery/11.webp', alt: 'Imperial Truck & Trailer Facility 11' },
        { id: 12, src: '/gallery/12.png', alt: 'Imperial Truck & Trailer Facility 12' },
    ];

    // Keyboard listener for lightbox navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') {
                setSelectedImage(null);
            } else if (e.key === 'ArrowRight') {
                const currentIndex = galleryImages.findIndex((item) => item.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % galleryImages.length;
                setSelectedImage(galleryImages[nextIndex]);
            } else if (e.key === 'ArrowLeft') {
                const currentIndex = galleryImages.findIndex((item) => item.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                setSelectedImage(galleryImages[prevIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, galleryImages]);

    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
            {/* 1. TOP PAGE HERO */}
            <PageHero
                title="Facility & Workshop"
                highlightTitle="Visual Showcase"
                subtitle="Explore our heavy-duty repair bays, computer diagnostics lab, precision engine overhauls, and high-pressure rig wash stations in Manteca, CA."
                badge="INSIDE IMPERIAL TRUCK & TRAILER • WORKSHOP & FLEET SHOWCASE"
                bgImage="/banner/inner-banner.png"
                mobileBgImage="/banner/mobile-page-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Gallery' },
                ]}
            />

            {/* AEO DIRECT ANSWER SNIPPET */}
            <AeoDirectAnswerSnippet pageKey="gallery" />

            {/* 2. GALLERY IMAGES SECTION */}
            <section className="relative w-full py-10 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <h2 className="font-racing text-3xl sm:text-4xl uppercase tracking-wider text-slate-900 leading-tight">
                            Workshop &amp; <span className="text-red-600">Facility Gallery</span>
                        </h2>
                    </div>

                    {/* Gallery Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                        {galleryImages.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item)}
                                className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group border border-slate-200 shadow-sm hover:shadow-[0_12px_28px_rgba(220,38,38,0.15)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-slate-900"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />

                                {/* Hover Zoom Icon Indicator */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 rounded-full bg-slate-950/75 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 3. LIGHTBOX FULLSCREEN MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[1000] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-[#0b1120] text-white rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
                        >
                            {/* Lightbox Header Bar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
                                <span className="text-slate-300 text-xs font-mono font-bold">
                                    Photo {galleryImages.findIndex((i) => i.id === selectedImage.id) + 1} of {galleryImages.length}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                                    aria-label="Close Lightbox"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Fullscreen Photo View */}
                            <div className="relative w-full h-[320px] sm:h-[480px] md:h-[580px] bg-slate-950 flex items-center justify-center">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    priority
                                    className="object-contain"
                                />

                                {/* Prev / Next Arrows */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const currentIndex = galleryImages.findIndex((i) => i.id === selectedImage.id);
                                        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                                        setSelectedImage(galleryImages[prevIndex]);
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-red-600 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const currentIndex = galleryImages.findIndex((i) => i.id === selectedImage.id);
                                        const nextIndex = (currentIndex + 1) % galleryImages.length;
                                        setSelectedImage(galleryImages[nextIndex]);
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-red-600 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 4. CALL TO ACTION & ESTIMATE ACTIONS */}
            <CTA />
            <MobileStickyActions />
            <FloatingEstimateButton />
        </div>
    );
};
