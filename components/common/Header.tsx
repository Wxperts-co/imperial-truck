'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import servicesData from '@/data/services.json';

// High-Detail 3D Isometric / Perspective Heavy-Duty Commercial Semi-Truck
const SemiTruck3D = ({
    isMoving = false,
    direction = 1,
}: {
    isMoving?: boolean;
    direction?: number;
}) => (
    <div className="relative flex items-center justify-center">
        {/* Dynamic Forward Headlight Beam */}
        <div
            className={`absolute top-2.5 w-16 h-6 bg-gradient-to-r from-amber-300/60 via-amber-200/20 to-transparent blur-[3px] pointer-events-none rounded-full transform ${direction >= 0
                    ? 'left-[82%] rotate-6'
                    : 'right-[82%] -rotate-6 rotate-180'
                }`}
        />

        {/* Realistic Dual Exhaust Smoke Trail when accelerating */}
        {isMoving && (
            <div
                className={`absolute top-0 pointer-events-none ${direction >= 0 ? '-left-3' : '-right-3'
                    }`}
            >
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                    animate={{
                        opacity: [0.7, 0.4, 0],
                        x: direction >= 0 ? [-2, -18] : [2, 18],
                        y: [-2, -8],
                        scale: [0.5, 1.8],
                    }}
                    transition={{ repeat: Infinity, duration: 0.35, ease: 'easeOut' }}
                    className="w-3 h-3 bg-neutral-400/50 rounded-full blur-[1.5px]"
                />
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                    animate={{
                        opacity: [0.8, 0.3, 0],
                        x: direction >= 0 ? [-4, -24] : [4, 24],
                        y: [-1, -12],
                        scale: [0.4, 2.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.45,
                        delay: 0.1,
                        ease: 'easeOut',
                    }}
                    className="w-3.5 h-3.5 bg-neutral-300/40 rounded-full blur-[2px]"
                />
            </div>
        )}

        {/* 3D Semi Truck SVG Body */}
        <motion.svg
            viewBox="0 0 140 60"
            className="w-16 h-7 sm:w-18 sm:h-8 filter drop-shadow-[0_5px_8px_rgba(0,0,0,0.65)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: `scaleX(${direction >= 0 ? 1 : -1})`,
            }}
        >
            <defs>
                {/* Truck Red Metallic Body Gradient */}
                <linearGradient id="truckBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="25%" stopColor="#ef4444" />
                    <stop offset="65%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>

                {/* Chrome Metal Gradient */}
                <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#f1f5f9" />
                    <stop offset="65%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                {/* Windshield Glass Reflection */}
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
                </linearGradient>

                {/* Wheel Rim Radial */}
                <radialGradient id="wheelRim" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#475569" />
                </radialGradient>
            </defs>

            {/* Dual Vertical Chrome Exhaust Stacks */}
            <rect x="22" y="2" width="3.2" height="24" rx="1.6" fill="url(#chromeGrad)" />
            <rect x="19.5" y="4" width="3.5" height="22" rx="1.6" fill="url(#chromeGrad)" />
            <ellipse cx="23.6" cy="2" rx="1.6" ry="0.8" fill="#1e293b" />
            <ellipse cx="21.2" cy="4" rx="1.7" ry="0.8" fill="#1e293b" />

            {/* Main Sleeper Cab Body */}
            <path
                d="M24 14 H74 C78 14 82 17 84 21 L96 32 C98 34 100 37 100 40 V48 H24 V14 Z"
                fill="url(#truckBodyGrad)"
                stroke="#7f1d1d"
                strokeWidth="0.8"
            />

            {/* Aerodynamic Roof Fairing */}
            <path d="M24 14 C32 8.5 60 7.5 75 14 L73 17 H24 V14 Z" fill="#fca5a5" />

            {/* Roof Amber Clearance Lights */}
            <circle cx="58" cy="10.5" r="1.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.4" />
            <circle cx="65" cy="11.5" r="1.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.4" />
            <circle cx="72" cy="13" r="1.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.4" />

            {/* Windshield Window */}
            <path
                d="M74 18 L83 23 C85 24 87 27 87 29 H72 V18 H74 Z"
                fill="url(#glassGrad)"
                stroke="#1e293b"
                strokeWidth="0.5"
            />

            {/* Side Door Window */}
            <path
                d="M50 18 H68 V29 H50 V18 Z"
                fill="url(#glassGrad)"
                stroke="#1e293b"
                strokeWidth="0.5"
            />

            {/* Chrome Sun Visor */}
            <path d="M72 17 L86 22 L84 23.5 L71 18 Z" fill="url(#chromeGrad)" />

            {/* Chrome Side Step & Fuel Tank */}
            <rect x="36" y="40" width="28" height="6.5" rx="3.2" fill="url(#chromeGrad)" stroke="#334155" strokeWidth="0.5" />
            <rect x="38" y="41.5" width="24" height="3.5" rx="1.7" fill="#64748b" />

            {/* Front Heavy-Duty Chrome Grille */}
            <path d="M96 35 H106 C107.5 35 108 36.5 108 38 V48 H96 V35 Z" fill="url(#chromeGrad)" stroke="#334155" strokeWidth="0.5" />
            <line x1="99" y1="38" x2="106" y2="38" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="99" y1="41" x2="106" y2="41" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="99" y1="44" x2="106" y2="44" stroke="#1e293b" strokeWidth="0.8" />

            {/* Front Bumper */}
            <rect x="96" y="46" width="14" height="4" rx="1.5" fill="url(#chromeGrad)" stroke="#1e293b" strokeWidth="0.5" />

            {/* Front Headlight (Illuminated Bright Gold/White) */}
            <circle cx="106" cy="41" r="2.4" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
            <circle cx="106" cy="41" r="1.2" fill="#ffffff" />

            {/* Front Wheel (Spinning with vehicle motion) */}
            <g transform="translate(86, 48)">
                <circle cx="0" cy="0" r="8.5" fill="#18181b" stroke="#09090b" strokeWidth="1" />
                <circle cx="0" cy="0" r="6" fill="url(#wheelRim)" />
                {/* Animated Spoke Spokes for rolling realism */}
                <g className={isMoving ? 'animate-spin' : ''} style={{ transformOrigin: '0px 0px', animationDuration: '0.35s' }}>
                    <circle cx="0" cy="0" r="2" fill="#dc2626" />
                    <line x1="-5" y1="0" x2="5" y2="0" stroke="#475569" strokeWidth="1.2" />
                    <line x1="0" y1="-5" x2="0" y2="5" stroke="#475569" strokeWidth="1.2" />
                </g>
            </g>

            {/* Rear Dual Wheels (Spinning with vehicle motion) */}
            <g transform="translate(34, 48)">
                <circle cx="0" cy="0" r="8.5" fill="#18181b" stroke="#09090b" strokeWidth="1" />
                <circle cx="0" cy="0" r="6" fill="url(#wheelRim)" />
                {/* Animated Spoke Spokes for rolling realism */}
                <g className={isMoving ? 'animate-spin' : ''} style={{ transformOrigin: '0px 0px', animationDuration: '0.35s' }}>
                    <circle cx="0" cy="0" r="2" fill="#dc2626" />
                    <line x1="-5" y1="0" x2="5" y2="0" stroke="#475569" strokeWidth="1.2" />
                    <line x1="0" y1="-5" x2="0" y2="5" stroke="#475569" strokeWidth="1.2" />
                </g>
            </g>
        </motion.svg>
    </div>
);

export const Header = ({ layoutPrefix = 'main' }: { layoutPrefix?: string }) => {
    const [activeNav, setActiveNav] = useState('About Us');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDriving, setIsDriving] = useState(false);
    const [drivingDirection, setDrivingDirection] = useState(1);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#' },
        { name: 'Services', href: '#services', hasDropdown: true },
        { name: 'Gallery', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Synchronize active selection between hero header and sticky header
    useEffect(() => {
        const handleSync = (e: CustomEvent<string>) => {
            if (e.detail && e.detail !== activeNav) {
                const currentIndex = navLinks.findIndex((l) => l.name === activeNav);
                const nextIndex = navLinks.findIndex((l) => l.name === e.detail);
                const dir = nextIndex >= currentIndex ? 1 : -1;

                setDrivingDirection(dir);
                setIsDriving(true);
                setActiveNav(e.detail);

                setTimeout(() => {
                    setIsDriving(false);
                }, 750);
            }
        };

        window.addEventListener('nav-sync-tab' as any, handleSync as any);
        return () => window.removeEventListener('nav-sync-tab' as any, handleSync as any);
    }, [activeNav, navLinks]);

    const scrollToAnchor = (href: string) => {
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const navOffset = 95;
                const elementPosition =
                    targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: Math.max(0, elementPosition - navOffset),
                    behavior: 'smooth',
                });
            } else {
                const fallback = document.querySelector(href);
                if (fallback) {
                    fallback.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetName: string,
        href: string
    ) => {
        e.preventDefault();
        e.stopPropagation();

        if (targetName === 'Services') {
            setServicesDropdownOpen((prev) => !prev);
        } else {
            setServicesDropdownOpen(false);
        }

        if (targetName !== activeNav) {
            const currentIndex = navLinks.findIndex((l) => l.name === activeNav);
            const nextIndex = navLinks.findIndex((l) => l.name === targetName);
            const dir = nextIndex >= currentIndex ? 1 : -1;

            setDrivingDirection(dir);
            setIsDriving(true);
            setActiveNav(targetName);

            // Broadcast to other header instances (hero or sticky)
            window.dispatchEvent(
                new CustomEvent('nav-sync-tab', { detail: targetName })
            );

            setTimeout(() => {
                setIsDriving(false);
            }, 750);
        }

        if (targetName !== 'Services') {
            scrollToAnchor(href);
        }
    };

    const handleServiceSelect = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setServicesDropdownOpen(false);
        setMobileServicesOpen(false);
        setMobileMenuOpen(false);
        setActiveNav('Services');
        window.dispatchEvent(
            new CustomEvent('nav-sync-tab', { detail: 'Services' })
        );
        scrollToAnchor('#services');
    };

    return (
        <>
            {/* ======================================================== */}
            {/* 3D Physical Object Navbar with Realistic Moving Truck   */}
            {/* ======================================================== */}
            <div className="hidden md:flex p-[2.5px] rounded-full bg-gradient-to-b from-white via-[#d8dce4] to-[#94a3b8] shadow-[0_16px_36px_-6px_rgba(0,0,0,0.45),0_8px_16px_-4px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,1)]">
                <nav
                    aria-label="Main Navigation"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] shadow-[inset_0_2px_4px_rgba(0,0,0,0.12),inset_0_-1px_1px_rgba(255,255,255,0.9)] text-neutral-800 text-sm font-medium tracking-wide"
                >
                    <div className="flex items-center gap-1 relative">
                        {navLinks.map((link) => {
                            const isActive = activeNav === link.name;
                            return (
                                <div
                                    key={link.name}
                                    ref={link.name === 'Services' ? dropdownRef : undefined}
                                    className="relative flex flex-col items-center"
                                >

                                    {/* Real-Physics 3D Moving Semi-Truck */}
                                    {isActive && (
                                        <motion.div
                                            layoutId={`${layoutPrefix}-activeNavTruck`}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 170,
                                                damping: 22,
                                                mass: 1.15,
                                            }}
                                            className="absolute -top-7.5 z-30 pointer-events-none flex flex-col items-center"
                                        >
                                            {/* Weight Transfer & Suspension Simulation */}
                                            <motion.div
                                                animate={
                                                    isDriving
                                                        ? {
                                                            y: [0, -2, 0, 1.5, 0],
                                                            rotate: drivingDirection >= 0 ? [0, -3, 0, 2.5, 0] : [0, 3, 0, -2.5, 0],
                                                        }
                                                        : {
                                                            y: [0, -0.75, 0],
                                                            rotate: 0,
                                                        }
                                                }
                                                transition={{
                                                    repeat: isDriving ? 0 : Infinity,
                                                    duration: isDriving ? 0.75 : 2.2,
                                                    ease: 'easeInOut',
                                                }}
                                            >
                                                <SemiTruck3D
                                                    isMoving={isDriving}
                                                    direction={drivingDirection}
                                                />
                                            </motion.div>

                                            {/* 3D Contact Shadow on the Track */}
                                            <div className="w-12 h-1 bg-black/40 rounded-full blur-[1px] -mt-1 transform scale-x-90" />
                                        </motion.div>
                                    )}

                                    {/* 3D Extruded Active Button Pill */}
                                    {isActive && (
                                        <motion.div
                                            layoutId={`${layoutPrefix}-activeNavIndicator`}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 220,
                                                damping: 24,
                                            }}
                                            className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ef4444] via-[#dc2626] to-[#b91c1c] border-t border-red-300/60 shadow-[0_4px_10px_rgba(220,38,38,0.5),inset_0_1.5px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(153,27,27,0.9)] z-10 pointer-events-none"
                                        />
                                    )}

                                    {/* Navigation Link Text */}
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.name, link.href)}
                                        className={`relative z-20 px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer pointer-events-auto  ${isActive
                                                ? 'text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                                                : 'text-neutral-700 hover:text-black font-semibold hover:bg-white/80 hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5'
                                            }`}
                                    >
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff] animate-pulse" />
                                        )}
                                        <span>{link.name}</span>
                                        {link.hasDropdown && (
                                            <svg
                                                className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-white' : isActive ? 'text-white' : 'text-neutral-500'
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {/* Themed 3D Services Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.name === 'Services' && servicesDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[460px] p-2 rounded-2xl bg-[#0b1120]/98 backdrop-blur-2xl border-2 border-red-500/50 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(239,68,68,0.25)] z-50 text-left"
                                            >
                                                {/* Top Header */}
                                                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs font-black uppercase tracking-wider text-slate-400">
                                                    <span className="flex items-center gap-1.5 text-white">
                                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]" />
                                                        Commercial Repair &amp; Wash Services
                                                    </span>

                                                </div>

                                                {/* Grid of Services */}
                                                <div className="grid grid-cols-2 gap-1.5 p-1.5 max-h-[300px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#ef4444_#0f172a]">
                                                    {servicesData.services.map((service) => (
                                                        <a
                                                            key={service.id}
                                                            href="#services"
                                                            onClick={handleServiceSelect}
                                                            className="group flex flex-col p-2 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-red-500/40 transition-all duration-150 cursor-pointer"
                                                        >
                                                            <div className="flex items-center justify-between gap-1">
                                                                <span className="text-xs font-bold text-slate-200 group-hover:text-white group-hover:translate-x-0.5 transition-all truncate">
                                                                    {service.name}
                                                                </span>
                                                                <span className="text-[10px] font-semibold text-red-400 shrink-0">
                                                                    ›
                                                                </span>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>

                                                {/* Dropdown Footer CTA */}
                                                <div className="pt-2 mt-1 border-t border-slate-800 flex items-center justify-between px-3 text-xs">
                                                    <a
                                                        href="#services"
                                                        onClick={handleServiceSelect}
                                                        className="text-red-400 hover:text-red-300 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                                                    >
                                                        <span>Explore All 11 Services &rarr;</span>
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* 3D Vertical Metallic Beveled Divider */}
                    {/* <div className="h-5 w-[2px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-200 shadow-[1px_0_0_rgba(255,255,255,0.9)] mx-1" /> */}

                    {/* Social / Direct Action Icons */}
                    {/* <div className="flex items-center gap-1.5 pr-1">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="p-1 rounded-full hover:bg-white/80 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center"
                        >
                            <Image
                                src="/logo/facebook.png"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-1 rounded-full hover:bg-white/80 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center"
                        >
                            <Image
                                src="/logo/instagram.png"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="p-1 rounded-full hover:bg-white/80 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center"
                        >
                            <Image
                                src="/logo/youtube.png"
                                alt="YouTube"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                    </div> */}
                </nav>
            </div>


            {/* Mobile Toggle Button */}
            <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#fdfbf7]/95 backdrop-blur-md border border-black/10 shadow-[0_8px_16px_rgba(0,0,0,0.3)] text-neutral-900"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Mobile Side Slider Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[9998] md:hidden"
                        />

                        {/* Side Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] z-[9999] bg-[#0c101b] border-l border-white/15 shadow-[-15px_0_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-5 overflow-y-auto md:hidden text-white font-sans"
                        >
                            {/* TOP BAR: Logo with Sub-Badge & Close Button */}
                            <div className="flex items-start justify-between pb-4 border-b border-white/10 shrink-0 gap-3">
                                <Link
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMobileMenuOpen(false);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="flex flex-col items-start"
                                >
                                    <Image
                                        src="/logo/logo.png"
                                        alt="Imperial Truck & Trailer Repair"
                                        width={160}
                                        height={45}
                                        priority
                                        className="h-8 w-auto object-contain"
                                    />
                                    {/* Premium 3D Industrial Emblem Badge */}
                                    <div className="mt-1 relative group w-full flex items-center">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-blue-600/30 rounded-md blur-[2px] opacity-75" />
                                        <div className="relative w-full px-2 py-0.5 rounded-[5px] bg-gradient-to-b from-[#1e2536] via-[#121622] to-[#090c12] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_3px_8px_rgba(0,0,0,0.8)] flex items-center justify-between text-[7.5px] font-black tracking-wider uppercase">
                                            <div className="flex items-center gap-1">
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500 shadow-[0_0_6px_#ef4444]" />
                                                </span>
                                                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                                                    TRUCK &amp; TRAILER REPAIR
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 ml-1">
                                                <span className="h-2 w-[1px] bg-neutral-600/90" />
                                                <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] font-black">
                                                    WASH
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-label="Close Navigation Menu"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all shrink-0 mt-0.5"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* MIDDLE: Navigation Links */}
                            <div className="flex flex-col gap-1.5 py-4 my-auto overflow-y-auto">
                                {navLinks.map((link) => {
                                    const isActive = activeNav === link.name;
                                    if (link.name === 'Services') {
                                        return (
                                            <div key={link.name} className="flex flex-col">
                                                <button
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${isActive
                                                            ? 'bg-red-600/20 text-white border-l-2 border-red-500'
                                                            : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                                        }`}
                                                >
                                                    <span>{link.name}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-red-400' : 'text-neutral-400'
                                                            }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {/* Mobile Services Sub-list */}
                                                {mobileServicesOpen && (
                                                    <div className="mt-1 ml-3 pl-3 border-l-2 border-red-500/40 flex flex-col gap-1 py-1 max-h-56 overflow-y-auto">
                                                        {servicesData.services.map((service) => (
                                                            <a
                                                                key={service.id}
                                                                href="#services"
                                                                onClick={handleServiceSelect}
                                                                className="text-xs text-slate-300 hover:text-white py-1 flex items-center justify-between cursor-pointer"
                                                            >
                                                                <span>{service.name}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => {
                                                handleNavClick(e, link.name, link.href);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${isActive
                                                    ? 'bg-red-600/20 text-white border-l-2 border-red-500'
                                                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            {isActive && (
                                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* BOTTOM: Address, Phone Number & Social Icons */}
                            <div className="flex flex-col gap-3 pt-4 border-t border-white/10 shrink-0">
                                {/* Phone Number */}
                                <a
                                    href="tel:+12092398111"
                                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-red-600/15 border border-red-500/30 text-white hover:bg-red-600/25 transition-colors"
                                >
                                    <div className="p-1.5 rounded-lg bg-red-600 text-white shrink-0 flex items-center justify-center">
                                        <Image
                                            src="/logo/telephone.png"
                                            alt="Telephone"
                                            width={18}
                                            height={18}
                                            className="w-4.5 h-4.5 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">24/7 Roadside Line</span>
                                        <span className="font-racing text-sm text-white tracking-wide">(209) 239-8111</span>
                                    </div>
                                </a>

                                {/* Facility Address */}
                                <a
                                    href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/40 transition-colors text-xs"
                                >
                                    <div className="p-1.5 rounded-lg bg-red-600/20 text-red-400 shrink-0 mt-0.5 flex items-center justify-center">
                                        <Image
                                            src="/logo/map.png"
                                            alt="Map Location"
                                            width={18}
                                            height={18}
                                            className="w-4.5 h-4.5 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left text-neutral-300">
                                        <span className="font-bold text-white text-xs">2142 W Yosemite Ave</span>
                                        <span className="text-[11px] text-neutral-400">Manteca, CA 95337</span>
                                        <span className="text-red-400 font-bold text-[10px] mt-0.5">Get Directions →</span>
                                    </div>
                                </a>

                                {/* Social Links */}
                                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-neutral-300">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="flex items-center gap-1.5 text-xs hover:text-white"
                                    >
                                        <Image
                                            src="/logo/facebook.png"
                                            alt="Facebook"
                                            width={18}
                                            height={18}
                                            className="w-4.5 h-4.5 object-contain"
                                        />
                                        <span>Facebook</span>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="flex items-center gap-1.5 text-xs hover:text-white"
                                    >
                                        <Image
                                            src="/logo/instagram.png"
                                            alt="Instagram"
                                            width={18}
                                            height={18}
                                            className="w-4.5 h-4.5 object-contain"
                                        />
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="YouTube"
                                        className="flex items-center gap-1.5 text-xs hover:text-white"
                                    >
                                        <Image
                                            src="/logo/youtube.png"
                                            alt="YouTube"
                                            width={18}
                                            height={18}
                                            className="w-4.5 h-4.5 object-contain"
                                        />
                                        <span>YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
