'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import servicesData from '@/data/services.json';

interface ServiceItem {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    tag: string;
    badge: string;
    features: string[];
}

// 3D Wireframe Semi-Truck Blueprint with Interactive Diagnostic Scan Nodes
const DiagnosticTruckBlueprint = ({ activeIndex }: { activeIndex: number }) => {
    // Exact physical coordinates on the semi-truck diagram matching servicesData.services (index 0 to 11)
    const nodes = [
        { id: 0, x: 266, y: 74, label: 'Hood ECM & Engine Powertrain' },       // Computer Diagnostics (Engine Hood)
        { id: 1, x: 215, y: 96, label: 'Axle Pneumatic Air Brakes' },          // Brakes & Air Systems (Drive Axle)
        { id: 2, x: 260, y: 105, label: 'Commercial Steer & Drive Tires' },     // Tire Services (Steer Wheel)
        { id: 3, x: 246, y: 92, label: 'Steering Gearbox & Kingpins' },         // Suspension & Steering (Front Axle)
        { id: 4, x: 205, y: 88, label: 'Eaton Fuller Transmission & Clutch' },  // Transmission & Clutch (Mid Drivetrain)
        { id: 5, x: 242, y: 68, label: 'Alternator & 24V Electrical Harness' }, // Electrical & Alternator (Engine Bay)
        { id: 6, x: 105, y: 36, label: 'High-Pressure Rig Washout Port' },      // Truck & RV Wash (Trailer Roof)
        { id: 7, x: 105, y: 65, label: '53ft Trailer Chassis & Structural Frame' }, // Truck & Trailer Repair (Trailer Chassis)
        { id: 8, x: 145, y: 55, label: 'OEM Parts Inventory & Filtration Bay' }, // Heavy Duty Parts (Trailer Cargo Bay)
        { id: 9, x: 232, y: 52, label: 'Cab Climate Compressor & R134a HVAC' },  // A/C & Climate (Cab Cabin)
        { id: 10, x: 180, y: 40, label: 'Thermo King / Bulkhead Reefer Unit' },  // Reefer & APU (Trailer Front Bulkhead)
        { id: 11, x: 196, y: 45, label: 'Clean Truck Check OBD & Exhaust Stack' }, // Smog Check (Exhaust / CARB Port)
    ];

    const activeNode = nodes[activeIndex % nodes.length] || nodes[0];
    const isRightSide = activeNode.x > 170;
    const leaderTargetX = isRightSide ? activeNode.x - 22 : activeNode.x + 22;
    const leaderTargetY = activeNode.y > 65 ? activeNode.y - 18 : activeNode.y + 18;

    return (
        <div className="relative w-full max-w-xl mx-auto h-36 sm:h-44 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_12px_30px_rgba(0,0,0,0.25)] p-3 overflow-hidden flex flex-col justify-between ">
            {/* Blueprint Gridlines (Light Theme) */}
            <div
                className="absolute inset-0 opacity-[0.18] pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.4) 1px, transparent 0)',
                    backgroundSize: '16px 16px',
                }}
            />

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_6px_#ef4444]" />
                    </span>
                    <span className="text-red-600 font-extrabold uppercase tracking-wider">3D TELEMETRY SCANNER</span>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        ACTIVE SCAN
                    </span>
                </div>
            </div>

            {/* SVG 3D Semi-Truck Schematic Wireframe (Dark Blueprint On White) */}
            <div className="relative w-full h-20 flex items-center justify-center">
                <svg viewBox="0 0 320 140" className="w-full h-full text-slate-800">
                    {/* Semi Trailer 53ft Box */}
                    <rect x="25" y="25" width="165" height="70" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
                    <line x1="25" y1="45" x2="190" y2="45" stroke="#64748b" strokeWidth="1" />
                    <line x1="25" y1="65" x2="190" y2="65" stroke="#64748b" strokeWidth="1" />

                    {/* Thermo King / Reefer Unit on Trailer Bulkhead */}
                    <rect x="175" y="32" width="15" height="26" rx="2" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.4" />
                    <line x1="178" y1="38" x2="187" y2="38" stroke="#64748b" strokeWidth="1" />
                    <line x1="178" y1="44" x2="187" y2="44" stroke="#64748b" strokeWidth="1" />
                    <line x1="178" y1="50" x2="187" y2="50" stroke="#64748b" strokeWidth="1" />

                    {/* Vertical Exhaust Stack behind Cab */}
                    <rect x="194" y="22" width="5" height="45" rx="1" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.2" />
                    <path d="M194,22 L199,18" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Semi Tractor Cab Body */}
                    <path
                        d="M190,45 L225,45 L255,60 L275,60 L280,95 L190,95 Z"
                        fill="#f1f5f9"
                        stroke="#0f172a"
                        strokeWidth="2"
                    />
                    {/* Windshield */}
                    <path d="M228,48 L252,60 L228,60 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.2" />

                    {/* Fuel Tank under Cab */}
                    <rect x="228" y="88" width="22" height="12" rx="3" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.2" />

                    {/* Front Bumper & Grill */}
                    <line x1="280" y1="75" x2="280" y2="95" stroke="#dc2626" strokeWidth="3" />
                    <line x1="275" y1="95" x2="285" y2="95" stroke="#0f172a" strokeWidth="2.5" />

                    {/* Wheels (Trailer Tandems) */}
                    <circle cx="55" cy="105" r="14" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="55" cy="105" r="6" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.2" />
                    <circle cx="95" cy="105" r="14" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="95" cy="105" r="6" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.2" />

                    {/* Drive & Steer Axles (Tractor) */}
                    <circle cx="215" cy="105" r="14" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="215" cy="105" r="6" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.2" />
                    <circle cx="260" cy="105" r="14" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="260" cy="105" r="6" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.2" />

                    {/* Active Diagnostic Target Highlight Marker */}
                    <g key={activeNode.id}>
                        <circle
                            cx={activeNode.x}
                            cy={activeNode.y}
                            r="10"
                            fill="rgba(239, 68, 68, 0.25)"
                            stroke="#dc2626"
                            strokeWidth="2"
                            className="animate-ping"
                            style={{ transformOrigin: `${activeNode.x}px ${activeNode.y}px` }}
                        />
                        <circle
                            cx={activeNode.x}
                            cy={activeNode.y}
                            r="5"
                            fill="#dc2626"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                        />
                        <line
                            x1={activeNode.x}
                            y1={activeNode.y}
                            x2={leaderTargetX}
                            y2={leaderTargetY}
                            stroke="#dc2626"
                            strokeWidth="1.5"
                            strokeDasharray="2 2"
                        />
                        <circle cx={leaderTargetX} cy={leaderTargetY} r="2.5" fill="#dc2626" />
                    </g>
                </svg>
            </div>

            {/* Bottom Live Target Spec Output */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 font-bold">ZONE TARGET:</span>
                <span className="text-red-600 font-extrabold uppercase truncate tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    {activeNode.label}
                </span>
            </div>
        </div>
    );
};

// 3D Infinite Card Component that Pops Out of Row on Hover
const Infinite3DCard = ({
    service,
    index,
    onHover,
    onSelect,
}: {
    service: ServiceItem;
    index: number;
    onHover: (idx: number) => void;
    onSelect: (service: ServiceItem) => void;
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tilt tracking inside the card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
        stiffness: 300,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
        stiffness: 300,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        onHover(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onSelect(service)}
            className={`relative shrink-0 cursor-pointer transition-all duration-300  ${isHovered ? 'z-50' : 'z-10'
                }`}
        >
            <motion.div
                animate={{
                    y: isHovered ? -24 : 0,
                    scale: isHovered ? 1.08 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 24,
                }}
                className={`w-[230px] sm:w-[325px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-300 flex flex-col justify-between antialiased [backface-visibility:hidden] [transform:translateZ(0)] [text-rendering:geometricPrecision] ${isHovered
                    ? 'border-red-500 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(239,68,68,0.35)] ring-2 ring-red-500/80'
                    : 'border-slate-800 shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
                    }`}
            >
                {/* Card Upper: Image Viewport */}
                <div className="relative w-full h-36 sm:h-52 overflow-hidden ">
                    <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 230px, 340px"
                        className={`object-cover object-center transition-transform duration-500 ease-out ${isHovered ? 'scale-105' : 'scale-100'
                            }`}
                    />

                </div>

                {/* Card Body Content */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                    <div>
                        <h3 className={`text-base sm:text-xl font-black tracking-tight leading-snug transition-colors ${isHovered ? 'text-red-400' : 'text-white'
                            }`}>
                            {service.name}
                        </h3>
                    </div>

                    {/* Features Quick List */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-1.5 pt-2 border-t border-slate-800 overflow-hidden"
                            >
                                {service.features.slice(0, 2).map((feat) => (
                                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-100">
                                        <svg className="w-3.5 h-3.5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="truncate">{feat}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Card Action Link */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs font-bold text-red-400 group-hover:text-red-300 transition-colors flex items-center gap-1">
                            Explore Diagnostics &rarr;
                        </span>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const CARD_STEP = 345;
const CYCLE_WIDTH = 12 * 345; // 4140px

export const ServiceSection = () => {
    const services: ServiceItem[] = servicesData.services;
    const [activeHoverIndex, setActiveHoverIndex] = useState<number>(0);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
    const [isRowPaused, setIsRowPaused] = useState(false);
    const [manualOffset, setManualOffset] = useState<number>(-CYCLE_WIDTH);

    const handleScroll = (direction: 'left' | 'right') => {
        setActiveHoverIndex((prev) => {
            if (direction === 'left') {
                return (prev - 1 + services.length) % services.length;
            } else {
                return (prev + 1) % services.length;
            }
        });

        setManualOffset((prev) => {
            const next = direction === 'left' ? prev + CARD_STEP : prev - CARD_STEP;
            // Seamlessly wrap within middle ranges to allow infinite clicks in both directions
            if (next > 0) {
                return next - CYCLE_WIDTH;
            }
            if (next < -2 * CYCLE_WIDTH) {
                return next + CYCLE_WIDTH;
            }
            return next;
        });
    };

    // Duplicate services 5 times to ensure continuous infinite card buffers on both sides
    const infiniteServices = [
        ...services,
        ...services,
        ...services,
        ...services,
        ...services,
    ];

    return (
        <section
            id="services"
            className="relative w-full bg-[#070b14] text-white font-sans py-8 sm:py-16 overflow-hidden border-t border-slate-800"
        >
            {/* Dynamic Blueprint Background Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.14]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(239, 68, 68, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.22) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Atmospheric Ambient Lighting */}
            <div className="absolute top-1/4 -left-36 w-[500px] h-[500px] bg-red-600/12 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-36 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">

                {/* ======================================================== */}
                {/* 1. HEADER: BRAND TAG + 3D TRUCK WIREFRAME BLUEPRINT HUD  */}
                {/* ======================================================== */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-2">

                    <div className="max-w-5xl">
                        <h2 className="font-racing text-3xl sm:text-4xl lg:text-[45px] uppercase tracking-wider text-white leading-tight">
                            Precision Heavy-Duty <span className="text-red-500">Engineering</span>
                        </h2>

                        {/* View All Services and Left/Right Navigation Controls */}
                        <div className="flex items-center gap-3.5 mt-6">
                            <a
                                href="#contact"
                                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-200 flex items-center gap-2"
                            >
                                <span>View All Services</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleScroll('left')}
                                    aria-label="Previous Service"
                                    className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-red-500/80 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => handleScroll('right')}
                                    aria-label="Next Service"
                                    className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-red-500/80 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Interactive Wireframe Blueprint HUD */}
                    <div className="hidden md:block w-full lg:w-auto shrink-0">
                        <DiagnosticTruckBlueprint activeIndex={activeHoverIndex} />
                    </div>

                </div>

            </div>

            {/* ======================================================== */}
            {/* 2. INFINITE CONTINUOUS 3D SLIDING ROW                     */}
            {/* ======================================================== */}
            <div
                className="relative w-full py-6 sm:py-10 overflow-hidden"
                style={{ perspective: 1800 }}
                onMouseEnter={() => setIsRowPaused(true)}
                onMouseLeave={() => setIsRowPaused(false)}
            >
                {/* Marquee Track with CSS Infinite Animation */}
                <div
                    className="flex items-center gap-6 sm:gap-8 w-max will-change-transform px-4 transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(${manualOffset}px)`,
                        animation: isRowPaused ? 'none' : 'infiniteScroll 45s linear infinite',
                        animationPlayState: isRowPaused ? 'paused' : 'running',
                        ['--manual-offset' as string]: `${manualOffset}px`,
                    }}
                >
                    {infiniteServices.map((service, index) => (
                        <Infinite3DCard
                            key={`${service.id}-${index}`}
                            service={service}
                            index={index % services.length}
                            onHover={setActiveHoverIndex}
                            onSelect={setSelectedService}
                        />
                    ))}
                </div>
            </div>

            {/* Global Style for Keyframe Marquee */}
            <style jsx global>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(var(--manual-offset, -4140px));
          }
          100% {
            transform: translateX(calc(var(--manual-offset, -4140px) - 4140px));
          }
        }
      `}</style>

            {/* ======================================================== */}
            {/* 3. BOTTOM EMERGENCY / HIGHWAY DISPATCH STATUS DOCK       */}
            {/* ======================================================== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 md:mt-10 relative z-10">
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border-2 border-red-500/60 ring-1 ring-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(220,38,38,0.3)]">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-2xl bg-red-600/25 border border-red-500/60 text-red-500 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                                Stuck on Highway 99, I-5, or I-205 in Northern California?
                            </h4>
                            <p className="hidden md:block text-xs sm:text-sm text-slate-200 font-medium mt-1">
                                Our 24/7 mobile emergency units are dispatched within minutes across San Joaquin County.
                            </p>
                        </div>
                    </div>

                    <a
                        href="tel:2092398111"
                        className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-200 shrink-0 flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call (209) 239-8111
                    </a>
                </div>
            </div>

            {/* ======================================================== */}
            {/* 4. 3D TECHNICAL MODAL / DRAWER SPOTLIGHT                 */}
            {/* ======================================================== */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/85 backdrop-blur-md"
                        />

                        {/* 3D Pop Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20, rotateX: -8 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                            style={{ perspective: 1000 }}
                            className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl sm:rounded-3xl bg-slate-900 border border-red-500/40 shadow-[0_25px_70px_rgba(220,38,38,0.25)] overflow-hidden z-10 flex flex-col md:flex-row overflow-y-auto"
                        >
                            {/* Left Image Viewport */}
                            <div className="relative w-full md:w-1/2 h-36 sm:h-48 md:h-auto md:min-h-[280px] bg-slate-950 shrink-0">
                                <Image
                                    src={selectedService.image}
                                    alt={selectedService.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center"
                                />

                                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
                                        {selectedService.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="p-4 sm:p-7 md:w-1/2 flex flex-col justify-between space-y-3 sm:space-y-5">
                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                                            {selectedService.category}
                                        </span>
                                        <button
                                            onClick={() => setSelectedService(null)}
                                            className="p-1 sm:p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
                                        {selectedService.name}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5 sm:mt-2.5">
                                        {selectedService.description}
                                    </p>

                                    {/* Comprehensive Features */}
                                    <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Technical Capabilities &amp; Scope:
                                        </span>
                                        <div className="space-y-1 sm:space-y-1.5">
                                            {selectedService.features.map((feat) => (
                                                <div key={feat} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Call-to-Action Buttons */}
                                <div className="flex gap-2.5 pt-3 sm:pt-4 border-t border-slate-800">
                                    <a
                                        href="#contact"
                                        onClick={() => setSelectedService(null)}
                                        className="flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider text-center shadow-lg transition-all"
                                    >
                                        View Details
                                    </a>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="py-2 sm:py-3 px-3 sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider text-center transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
