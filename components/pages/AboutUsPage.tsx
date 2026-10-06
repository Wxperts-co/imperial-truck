'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';
import { AeoDirectAnswerSnippet } from '@/components/homepage/AeoDirectAnswerSnippet';

export const AboutUsPage = () => {
    const specialties = [
        { name: 'Diesel Repair', desc: 'Complete engine overhauls for Cummins, Detroit, and PACCAR powertrains.', icon: '⚡' },
        { name: 'A/C & Climate', desc: 'Commercial cab A/C compressors, leak testing, and freon recharges.', icon: '❄️' },
        { name: 'Air Brakes', desc: 'Heavy-duty air lines, ABS diagnostics, and certified DOT brake rebuilds.', icon: '🛑' },
        { name: 'Commercial Tires', desc: 'Steer and drive tire mounting, dynamic balancing, and 24/7 highway rescue.', icon: '🛞' },
        { name: 'Wheel Seals & Shocks', desc: 'Oil bath seals, heavy-duty gas shocks, and hub spindle assemblies.', icon: '🔩' },
        { name: 'Transmissions & Clutch', desc: 'Eaton Fuller AMT & manual gearbox overhauls and dual-disc clutches.', icon: '⚙️' },
        { name: 'King Pins & Steering', desc: 'Precision kingpin reaming, tie rod ends, and laser front-end alignment.', icon: '🎯' },
        { name: 'Electrical & Alternators', desc: 'High-output commercial alternators, starters, and battery load testing.', icon: '🔋' },
        { name: 'Truck & RV Wash', desc: 'Eco-friendly high-pressure rig washouts and undercarriage degreasing.', icon: '🚿' },
        { name: 'Computer Diagnostics', desc: 'Dealer-level ECM reprogramming and instantaneous fault-code isolation.', icon: '💻' },
        { name: 'Heavy Duty Parts', desc: 'Extensive in-stock warehouse inventory of genuine OEM and aftermarket parts.', icon: '📦' },
        { name: 'Full Trailer Repair', desc: 'Structural welding, landing gear, roll-up doors, and 90-day BIT inspections.', icon: '🚛' },
    ];

    const shopHighlights = [
        { tag: 'REALITY', title: 'No Impossible Promises', desc: 'No shop can promise that a truck will never go down. Tires may blow, sensors might fail, and nobody schedules a bad hour.' },
        { tag: 'THE GAP', title: 'Shrinking The Wait', desc: 'What a shop can do is shrink the gap between the phone call and the road: parts already on the shelf, a technician who has seen the problem before, a bay that’s ready.' },
        { tag: 'FOCUS', title: 'What We Work On', desc: 'That gap is the thing Imperial works on.' },
    ];

    const corePillars = [
        {
            number: '01',
            title: 'Honest work',
            subtitle: 'Torqued • Tested • Told Straight',
            desc: "In a truck shop, honesty is a sequence. A multi-point inspection. Torque verification. The DOT BIT checks. A road test. Then a conversation with the driver, in simple words, about what was found and what was done. A driver can't crawl under their own rig and double-check a repair, so the process has to earn the trust. It runs the same way for a wheel seal on a Tuesday morning as it does for a full overhaul.",
            highlight: 'Torqued. Tested. Told straight.',
            icon: '🛡️',
            image: '/services/medium-shot-man-checking-car.jpg',
            imageAlt: 'Honest Work Quality Verification',
        },
        {
            number: '02',
            title: 'Craft',
            subtitle: 'ASE-Certified Master Techs',
            desc: 'Diesel work rewards patience. The technicians are ASE-certified and have spent more than a decade with their hands inside commercial diesels: overhauls, electrical faults, transmissions. Certification proves what a person knows. The years of experience show up in smaller things, like how a mechanic reads a leak, which bolt gets a second look, and why a clutch that feels fine still gets driven before the truck goes back. None of that comes from a manual alone. It comes from doing the job long enough to know where the trouble tends to hide, and then staying careful anyway.',
            highlight: 'Decade+ Hands-On Experience',
            icon: '🔧',
            image: '/services/mechanic-repairing-truck-service.jpg',
            imageAlt: 'Master Diesel Mechanic Craft',
        },
        {
            number: '03',
            title: 'Speed, with a condition',
            subtitle: 'Ten Bays • In-Stock Parts • 24/7 Mobile',
            desc: "Every repair has a clock running behind it, whether it's a delivery window or a Monday-morning dispatch. We are set up to respect that: ten repair bays, a parts warehouse on the property, and a mobile line that never closes – all helping the wait stay short. The condition is that none of it can cut into the checks above. A fast repair that comes back is the slowest kind.",
            highlight: 'Short Wait • Zero Shortcuts',
            icon: '🚛',
            image: '/services/washing-vehicle-young-truck-driver-casual-clothes.jpg',
            imageAlt: 'Speed With A Condition',
        },
    ];

    const workshopGallery = [
        { src: '/gallery/12.png', title: 'Heavy Duty Fleet Bays', caption: 'Full-length commercial tractor-trailer repair bays' },
        { src: '/services/truck-computer-diagnostics-car-service-service-repair-trucks-large-garage-car.jpg', title: 'OEM ECM Diagnostics', caption: 'Dealer-level Cummins, Detroit & PACCAR software' },
        { src: '/services/indian-mechanic-unscrews-wheel-truck-pneumatic-wrench.jpg', title: 'Tire & Wheel Seals', caption: 'High-torque pneumatic wheel service & oil seals' },
        { src: '/gallery/11.webp', title: 'OEM Warehouse Depot', caption: 'Extensive in-stock genuine heavy-duty inventory' },
    ];

    const amenities = [
        {
            title: 'Credit & Fleet Cards',
            tag: 'Payment Ready',
            badge: 'Direct Fleet Billing',
            desc: 'Accepts Comdata, EFS, Fleet One, Visa, Mastercard, AMEX & Discover for seamless checkout.',
            icon: '💳'
        },
        {
            title: 'Driver Restrooms',
            tag: 'Driver Comfort',
            badge: 'Sanitized & Private',
            desc: 'Clean, secure, and driver-accessible private restrooms on facility grounds for long-haul comfort.',
            icon: '🚻'
        },
        {
            title: 'Quality Guarantee',
            tag: 'Safety Protocol',
            badge: 'Torque Verified',
            desc: 'Every commercial tractor and trailer is thoroughly inspected and torque-verified before dispatch.',
            icon: '🛡️'
        },
        {
            title: 'Master Diesel Techs',
            tag: 'Certified Crew',
            badge: '12+ Years Experience',
            desc: 'ASE-certified technicians trained across Cummins, Detroit Diesel, PACCAR, and Volvo engines.',
            icon: '🔧'
        },
    ];

    const businessHours = [
        { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM', status: 'Full Shop Bays Open' },
        { day: 'Saturday', hours: '8:00 AM – 5:00 PM', status: 'Weekend Bay Service' },
        { day: 'Sunday', hours: 'Closed (24/7 Mobile Active)', status: '24/7 Highway Dispatch' },
    ];

    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">

            {/* 1. TOP PAGE HERO */}
            <PageHero
                title="About Imperial"
                highlightTitle="Truck & Trailer Repair and Wash"
                subtitle="Honest Work at the Crossroads of California. Imperial Truck & Trailer Repair and Wash opened in Manteca, California, in 2012 with a simple goal: keep working trucks working."
                badge="TORQUED. TESTED. TOLD STRAIGHT."
                bgImage="/banner/inner-banner.png"
                mobileBgImage="/banner/mobile-page-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' },
                ]}
            />

            {/* AEO DIRECT ANSWER SNIPPET */}
            <AeoDirectAnswerSnippet pageKey="about-us" />

            {/* 2. DISTINCT ABOUT STORY & HERITAGE SECTION (LIGHT THEME) */}
            <section className="relative w-full py-8 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto">

                    {/* Top Section Badge & Title */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

                        {/* Left Story Column with Visual Collage */}
                        <div className="lg:col-span-7 space-y-3">

                            <h2 className="font-racing text-[21px] sm:text-4xl md:text-4xl uppercase tracking-wider text-slate-900 leading-tight">
                                About Imperial Truck &amp; Trailer Repair and Wash: <span className="text-red-600">Honest Work at the Crossroads of California</span>
                            </h2>

                            <p className="text-slate-800 text-[13px] sm:text-lg md:leading-[1.75] md:font-medium tracking-[-0.01em] antialiased text-justify">
                                <strong className="text-slate-950 font-bold">Imperial Truck &amp; Trailer Repair and Wash</strong> opened in Manteca, California, in 2012 with a simple goal: keep working trucks working.
                            </p>

                            <p className="text-slate-800 text-[13px] sm:text-lg md:leading-[1.75] md:font-medium tracking-[-0.01em] antialiased text-justify">
                                Everything on the property answers the same complaint: that a truck sitting in a yard earns nothing. It&apos;s why the repair bays, the parts warehouse, the wash bay, and the dispatch line all share one address.
                            </p>

                            {/* Authentic Shop Images Grid in Story */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md group border border-slate-200">
                                    <Image
                                        src="/banner/banner3.webp"
                                        alt="Imperial Master Diesel Technician"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 350px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                </div>

                                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md group border border-slate-200">
                                    <Image
                                        src="/gallery/11.webp"
                                        alt="Imperial Repair Bays & Parts Warehouse"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 350px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Background-Blended Key Stats Container with Red Accents */}
                            <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-red-50/70 via-white/80 to-red-50/60 border border-red-200/80 shadow-[0_8px_25px_rgba(239,68,68,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-red-200/80 overflow-hidden">
                                {/* Ambient Red Flare Accent */}
                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-500/15 rounded-full blur-xl pointer-events-none" />
                                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-500/10 rounded-full blur-xl pointer-events-none" />

                                <div className="px-2 sm:px-4 text-left relative z-10">
                                    <span className="font-racing text-2xl sm:text-4xl text-red-600 block drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)]">
                                        2012
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-slate-700 uppercase font-bold tracking-wider mt-0.5 block">
                                        Established Year
                                    </span>
                                </div>

                                <div className="px-2 sm:px-4 text-left pl-3 sm:pl-6 relative z-10">
                                    <span className="font-racing text-2xl sm:text-4xl text-slate-900 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                                        10 Bays
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-slate-700 uppercase font-bold tracking-wider mt-0.5 block">
                                        Shop Capacity
                                    </span>
                                </div>

                                <div className="px-2 sm:px-4 text-left pl-3 sm:pl-6 relative z-10">
                                    <span className="font-racing text-2xl sm:text-4xl text-red-600 block drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)]">
                                        24/7
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-slate-700 uppercase font-bold tracking-wider mt-0.5 block">
                                        Mobile Rescue
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Heritage Card with 3D Depth & Zero Downtime Standards */}
                        <div className="lg:col-span-5 flex items-center justify-center">
                            <div className="relative w-full rounded-3xl bg-[#0b1120] text-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.15)_inset] border border-slate-700/80 flex flex-col justify-between overflow-hidden">

                                <div>
                                    {/* Crisp Top Header with Live Indicator */}
                                    <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_#ef4444]" />
                                            </span>
                                            <span className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
                                                WHAT &quot;ZERO DOWNTIME&quot; CAN HONESTLY MEAN
                                            </span>
                                        </div>
                                    </div>

                                    {/* Facility Commitments - High Contrast & Sharp Text */}
                                    <div className="space-y-4">
                                        {shopHighlights.map((item, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="flex flex-col items-center">
                                                    <span className="font-mono text-[11px] font-bold text-white bg-red-600 px-2 py-1 rounded-md shadow-sm shrink-0 min-w-[65px] text-center">
                                                        {item.tag}
                                                    </span>
                                                    {i < shopHighlights.length - 1 && <span className="w-[2px] h-7 bg-red-500/40 my-1.5" />}
                                                </div>
                                                <div className="pt-0.5">
                                                    <h4 className="text-sm sm:text-base text-white font-bold">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed font-normal">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Crisp Action Bottom Strip */}
                                <div className="mt-8 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] text-slate-400 uppercase font-bold block">Need Immediate Dispatch?</span>
                                        <span className="text-xs text-slate-200 font-medium">Manteca Master Shop</span>
                                    </div>
                                    <a
                                        href="tel:+12092398111"
                                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-racing tracking-wider text-xs sm:text-sm shadow-[0_6px_15px_rgba(220,38,38,0.4)] flex items-center gap-1.5 transition-all"
                                    >
                                        <span>CALL (209) 239-8111</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* 3 Core Pillars Cards with Visual Headers */}
                    <div className="pt-10 border-t border-slate-200">
                        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-100/90 via-slate-50/70 to-slate-100/90 border border-slate-200 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
                            {/* Subtle Ambient Red Glow Accent */}
                            <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
                                <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider block mb-1">
                                    Our Operational Standards
                                </span>
                                <h3 className="font-racing text-2xl sm:text-4xl uppercase tracking-wider text-slate-900">
                                    The Imperial <span className="text-red-600">Pillars of Excellence</span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                {corePillars.map((pillar, idx) => (
                                    <Link
                                        href="/services"
                                        key={idx}
                                        className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.12)] hover:border-red-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                                    >
                                        {/* Pillar Header Image */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={pillar.image}
                                                alt={pillar.imageAlt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 400px"
                                                className="object-cover group-hover:scale-108 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />


                                        </div>

                                        {/* Pillar Body Content */}
                                        <div className="p-4 flex flex-col justify-between flex-grow">
                                            <div>
                                             
                                                <h4 className=" text-slate-900 text-lg group-hover:text-red-600 transition-colors">
                                                    {pillar.title}
                                                </h4>
                                                <p className="hidden md:block text-slate-600 font-medium text-xs sm:text-[13px] ">
                                                    {pillar.desc}
                                                </p>
                                            </div>

                                            <div className=" pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                                                <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-600 font-bold border border-red-100">
                                                    {pillar.highlight}
                                                </span>
                                                <span className="group-hover:translate-x-1 transition-transform text-red-600 font-bold text-sm">→</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Workshop Facility Life Gallery Strip: Yosemite Avenue & Two kinds of urgency */}
                    <div className="md:pt-14 pt-4 border-t border-slate-200 md:mt-12 mt-4">
                        <div className="text-center max-w-4xl mx-auto mb-8">
                            <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider block mb-1">
                                Crossroads of California
                            </span>
                            <h3 className="font-racing text-2xl sm:text-3xl uppercase tracking-wider text-slate-900">
                                Yosemite Avenue &amp; <span className="text-red-600">Two kinds of urgency</span>
                            </h3>
                            <p className="text-slate-800 text-xs sm:text-sm mt-3 leading-relaxed font-medium text-justify">
                                The shop sits on W Yosemite Avenue, a street that shares its name with the park at the far end of Highway 120, about ninety miles east. That road carries two kinds of traffic through Manteca: freight on its way somewhere, and families on their way to the mountains, some of them in RVs with several hundred miles already on the odometer. Both end up needing something sooner or later. A shop on this corner sees both, and learns to tell one kind of urgency from the other.
                            </p>
                            <p className="text-slate-800 text-xs sm:text-sm mt-2.5 leading-relaxed font-medium text-justify">
                                The owner-operator is usually watching a delivery window. The fleet manager is watching Monday morning and every unit that has to be ready for it. The pressures are different, and the need is the same. Imperial handles scheduled fleet maintenance and one-off repairs on a single truck, giving each one the attention the job requires.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 pb-4">
                            {workshopGallery.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative h-60 rounded-2xl group shadow-md hover:shadow-[0_12px_28px_rgba(220,38,38,0.15)] border border-slate-200/90 hover:border-red-400 transition-all duration-300"
                                >
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Crystal Clear Floating Caption Panel (Half above, half below bottom border) */}
                                    <div className="absolute left-3 right-3 bottom-0 translate-y-1/2 px-3 py-2.5 text-center rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 shadow-xl group-hover:border-red-500/50 transition-all duration-300 z-10">
                                        <h4 className=" text-white text-xs sm:text-sm leading-tight group-hover:text-red-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] sm:text-xs text-slate-200 mt-0.5 line-clamp-1 leading-normal font-normal">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. CORE SPECIALTIES RUNNING MARQUEE */}
            <section className="relative w-full py-6 sm:py-8 bg-white border-t border-slate-200">
                <div className="w-full">

                    {/* Specialties Running Marquee Section */}
                    <div className="overflow-hidden">

                        {/* Running 3D Cards Marquee Container (Single Row) */}
                        <div className="relative w-full overflow-hidden py-2 sm:py-4">

                            {/* Single Row Running Marquee */}
                            <motion.div
                                animate={{ x: ['0%', '-50%'] }}
                                transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
                                className="flex gap-2.5 sm:gap-5 w-max"
                            >
                                {[...specialties, ...specialties].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 sm:gap-3.5 px-3 py-2 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(220,38,38,0.08),inset_0_0_8px_rgba(220,38,38,0.06)] sm:shadow-[0_8px_20px_rgba(220,38,38,0.12),inset_0_0_12px_rgba(220,38,38,0.08)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.22),inset_0_0_16px_rgba(220,38,38,0.14)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 shrink-0 group cursor-default"
                                    >
                                        <span className="text-lg sm:text-3xl p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 shadow-xs group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </span>
                                        <span className="font-bold text-slate-900 text-xs sm:text-base whitespace-nowrap group-hover:text-red-600 transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. AMENITIES & STANDARDS MATRIX: Staying Put */}
            <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-100/75 border-t border-slate-200 overflow-hidden">
                {/* Subtle Technical Engineering Grid Pattern & Ambient Depth Accents */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />
                <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto space-y-12 relative z-10">

                    {/* Amenities & Standards */}
                    <div>
                        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                            <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider block mb-1">
                                Accountability &amp; Trust Since 2012
                            </span>
                            <h2 className="font-racing text-2xl sm:text-3xl uppercase tracking-wider text-slate-900">
                                Staying <span className="text-red-600">put</span>
                            </h2>
                            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed font-medium text-justify">
                                A shop that stays in one place for years answers to a particular kind of accountability. Customers come back, and drivers compare notes over the radio and at the fuel island. Imperial has been on W Yosemite Avenue since 2012, and it intends to keep earning whatever gets said about it.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {amenities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.05),inset_0_0_12px_rgba(220,38,38,0.04)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.14),inset_0_0_16px_rgba(220,38,38,0.08)] hover:border-red-400 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                                >
                                    {/* Top Red Gradient Highlight Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-500" />

                                    <div>
                                        {/* Top Header: Icon Capsule + Category Tag */}
                                        <div className="flex items-center justify-between gap-2 mb-3.5">
                                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300">
                                                {item.icon}
                                            </div>
                                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-200/70 group-hover:border-red-200 transition-colors">
                                                {item.tag}
                                            </span>
                                        </div>

                                        {/* Amenity Title */}
                                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 group-hover:text-red-600 transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Amenity Description */}
                                        <p className="text-slate-700 text-xs leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Status Badge */}
                                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                        <span className="inline-flex items-center gap-1.5 font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            {item.badge}
                                        </span>
                                        <span className="text-red-600 font-extrabold text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                                            ✓
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operating Hours & Manteca Facility Location Card: Stop by */}
                    <div className="pt-6 border-t border-slate-200">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch max-w-5xl mx-auto">

                            {/* Hours Card */}
                            <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.05)] flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <h3 className="font-racing text-lg sm:text-xl uppercase tracking-wider text-slate-900">
                                                Stop by
                                            </h3>
                                        </div>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                                            Shop Open
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        {businessHours.map((bh, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between py-1.5 px-2.5 rounded-xl bg-slate-50 border border-slate-200/60"
                                            >
                                                <div>
                                                    <span className="font-bold text-slate-900 text-xs block">{bh.day}</span>
                                                    <span className="text-[10px] text-slate-500">{bh.status}</span>
                                                </div>
                                                <span className={`font-mono font-bold text-xs ${bh.hours.includes('Closed') ? 'text-red-600' : 'text-slate-900'}`}>
                                                    {bh.hours}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Location Card */}
                            <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-[#0b1120] text-white shadow-xl border border-slate-800 flex flex-col justify-between h-full relative overflow-hidden">
                                {/* Subtle Ambient Accent */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-800">
                                        <span className="text-[11px] uppercase font-extrabold text-red-400 tracking-wider">
                                            Stop by
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/60">
                                            San Joaquin County
                                        </span>
                                    </div>

                                    <h3 className="font-racing text-lg sm:text-xl uppercase tracking-wider text-white">
                                        Imperial Truck &amp; Trailer Repair
                                    </h3>

                                    <p className="text-slate-300 text-xs mt-1 leading-relaxed flex items-center gap-1.5">
                                        <span className="text-red-400">📍</span> 2142 W Yosemite Ave, Manteca, CA 95337
                                    </p>

                                    <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                                        Open Monday to Friday, 8 AM to 6 PM, and Saturday, 8 AM to 5 PM. For roadside help at any hour, call (209) 239-8111 or request an estimate online.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2.5 pt-3 mt-3 border-t border-slate-800 relative z-10">
                                    <a
                                        href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[120px] px-3 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-1.5 text-center"
                                    >
                                        <span>Open Google Maps</span>
                                        <span className="text-red-600 font-bold">→</span>
                                    </a>

                                    <a
                                        href="tel:+12092398111"
                                        className="flex-1 min-w-[120px] px-3 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md transition-all flex items-center justify-center gap-1.5 text-center"
                                    >
                                        <span>Call (209) 239-8111</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* 4. CALL TO ACTION & ESTIMATE ACTIONS */}
            <CTA />
            <MobileStickyActions />
            <FloatingEstimateButton />
        </div>
    );
};
