'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';

export const ContactUsPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        service: 'Diesel Engine & Diagnostics',
        description: '',
    });

    const [captcha, setCaptcha] = useState({ num1: 4, num2: 7 });
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 8) + 2;
        const n2 = Math.floor(Math.random() * 8) + 1;
        setCaptcha({ num1: n1, num2: n2 });
        setCaptchaInput('');
        setCaptchaError('');
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const businessHours = [
        { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM', status: 'Full Shop Bays Open' },
        { day: 'Saturday', hours: '8:00 AM – 5:00 PM', status: 'Weekend Bay Service' },
        { day: 'Sunday', hours: 'Closed (24/7 Mobile Active)', status: '24/7 Highway Dispatch' },
    ];

    const contactChannels = [
         {
            title: 'Manteca Facility',
            value: '2142 W Yosemite Ave, Manteca, CA 95337',
            actionHref: 'https://maps.app.goo.gl/NVCfUL71V9ntsT1n8',
            actionText: 'Get Driving Directions',
            icon: '📍',
            badge: 'Shop Location',
        },
        {
            title: '24/7 Roadside Hotline',
            value: '(209) 239-8111',
            actionHref: 'tel:+12092398111',
            actionText: 'Call Dispatch Now',
            icon: '📞',
            badge: '24/7 Dispatch',
        },
       
        {
            title: 'Fleet & Service Inquiries',
            value: 'info@imperialtruckwashrepair.com',
            actionHref: 'mailto:info@imperialtruckwashrepair.com',
            actionText: 'Send Email Message',
            icon: '✉️',
            badge: 'Fleet Desk',
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(captchaInput.trim(), 10) !== captcha.num1 + captcha.num2) {
            setCaptchaError('Incorrect captcha answer. Please try again.');
            generateCaptcha();
            return;
        }
        setCaptchaError('');
        setFormSubmitted(true);
        setTimeout(() => {
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                service: 'Diesel Engine & Diagnostics',
                description: '',
            });
            generateCaptcha();
        }, 3000);
    };

    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
            {/* 1. TOP PAGE HERO */}
            <PageHero
                title="Get In Touch"
                highlightTitle="Contact Imperial"
                subtitle="Fast 24/7 commercial road dispatch, shop scheduling, and fleet accounts. Located right off CA-120 / I-5 on W Yosemite Ave in Manteca, CA."
                badge="24/7 ROADSIDE DISPATCH & MANTECA MASTER FACILITY"
                bgImage="/banner/contact-banner.png"
                mobileBgImage="/banner/contact-mobile-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us' },
                ]}
            />

            {/* 2. THREE CORE CONTACT TILES */}
            <section className="relative w-full py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                        {contactChannels.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl bg-gradient-to-br from-white via-red-50/40 to-red-100/70 border border-red-200/90 p-4 sm:p-5 shadow-[0_4px_16px_rgba(220,38,38,0.06),inset_0_0_16px_rgba(220,38,38,0.04)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.18),inset_0_0_20px_rgba(220,38,38,0.08)] hover:border-red-400 hover:to-red-100/95 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                            >
                                {/* Top Red Gradient Accent */}
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-500" />

                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2.5">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-lg sm:text-xl shadow-xs group-hover:scale-105 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-200/70 group-hover:border-red-200 transition-colors">
                                            {item.badge}
                                        </span>
                                    </div>

                                    <h3 className=" text-slate-900 text-sm sm:text-base mb-1 group-hover:text-red-600 transition-colors">
                                        {item.title}
                                    </h3>

                                    <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm block break-words">
                                        {item.value}
                                    </span>
                                </div>

                                <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                                    <a
                                        href={item.actionHref}
                                        target={item.actionHref.startsWith('http') ? '_blank' : undefined}
                                        rel={item.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-[11px] sm:text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 group-hover:shadow-red-500/20"
                                    >
                                        <span>{item.actionText}</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CONTACT FORM & LOCATION GRID (PATTERNED THEME SECTION) */}
            <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-100/75 border-b border-slate-200 overflow-hidden">
                {/* Subtle Technical Engineering Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />
                <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                        {/* Left Column: Direct Service Request & Message Form */}
                        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                            <div className="mb-6 pb-4 border-b border-slate-100">
                               
                                <h2 className="font-racing text-2xl sm:text-3xl uppercase tracking-wider text-slate-900">
                                    Send Us A Message
                                </h2>
                             
                            </div>

                            {formSubmitted ? (
                                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                                    <span className="text-3xl block">✅</span>
                                    <h4 className="font-racing text-xl text-emerald-900 uppercase">Message Sent Successfully</h4>
                                    <p className="text-xs sm:text-sm text-emerald-800">
                                        Thank you! Our Manteca dispatch team has received your request and will contact you promptly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3.5">
                                    {/* Row 1: Full Name & Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. John Doe"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="(209) 000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Email & Service */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                                                Service Requested *
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer"
                                            >
                                                <option>Diesel Engine &amp; Diagnostics</option>
                                                <option>Commercial Brake &amp; Air Lines</option>
                                                <option>Heavy-Duty Transmission &amp; Clutch</option>
                                                <option>Commercial Tires &amp; Wheel Seals</option>
                                                <option>Truck &amp; Trailer Washout</option>
                                                <option>Trailer Structural &amp; Door Repair</option>
                                                <option>DOT BIT Safety Inspection</option>
                                                <option>24/7 Emergency Mobile Roadside</option>
                                                <option>Preventative Maintenance &amp; Oil Service</option>
                                                <option>Other / General Fleet Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 3: Description (Optional) */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                Description
                                            </label>
                                            <span className="text-[11px] text-slate-400 font-medium">Optional</span>
                                        </div>
                                        <textarea
                                            rows={3}
                                            placeholder="Please describe symptoms, unit #, or specific service requirements..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Row 4: Captcha Verification */}
                                    <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider whitespace-nowrap">
                                                    Security Captcha *
                                                </span>
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-300 shadow-xs font-mono font-bold text-slate-900 text-sm">
                                                    <span>{captcha.num1}</span>
                                                    <span className="text-red-600 font-extrabold">+</span>
                                                    <span>{captcha.num2}</span>
                                                    <span className="text-slate-400">=</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={generateCaptcha}
                                                    title="Refresh Captcha"
                                                    className="p-1.5 text-slate-500 hover:text-red-600 rounded-lg hover:bg-slate-200/70 transition-colors text-xs cursor-pointer"
                                                >
                                                    🔄
                                                </button>
                                            </div>
                                            <div className="w-full sm:w-32">
                                                <input
                                                    type="number"
                                                    required
                                                    placeholder="Answer"
                                                    value={captchaInput}
                                                    onChange={(e) => {
                                                        setCaptchaInput(e.target.value);
                                                        if (captchaError) setCaptchaError('');
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-center font-mono font-bold"
                                                />
                                            </div>
                                        </div>
                                        {captchaError && (
                                            <p className="text-red-600 text-xs font-semibold mt-2 flex items-center gap-1">
                                                <span>⚠️</span>
                                                <span>{captchaError}</span>
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                                    >
                                        <span>Submit Service Request</span>
                                        <span>→</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right Column: Master Location Card & Business Hours */}
                        <div className="lg:col-span-5 space-y-6">

                          

                            {/* Hours Card */}
                            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <h3 className="font-racing text-lg sm:text-xl uppercase tracking-wider text-slate-900">
                                                Operating Hours
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
                                                className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-200/60"
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

                            {/* Google Maps Live Interactive Embed */}
                            <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                                <iframe
                                    title="Imperial Truck & Trailer Repair Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.673895514656!2d-121.25299492348508!3d37.79462837198132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090409c2598be69%3A0x6b306b38cbb2d40c!2s2142%20W%20Yosemite%20Ave%2C%20Manteca%2C%20CA%2095337!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
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
