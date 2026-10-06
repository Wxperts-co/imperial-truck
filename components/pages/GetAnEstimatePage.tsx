'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/common/PageHero';
import { CTA } from '@/components/common/CTA';
import { MobileStickyActions } from '@/components/common/MobileStickyActions';
import { FloatingEstimateButton } from '@/components/common/FloatingEstimateButton';
import { AeoDirectAnswerSnippet } from '@/components/homepage/AeoDirectAnswerSnippet';
import servicesData from '@/data/services.json';

export const GetAnEstimatePage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        selectedServices: ['Diesel Engine Repair & Overhauls'],
        description: '',
    });

    const [captcha, setCaptcha] = useState({ num1: 4, num2: 7 });
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [serviceError, setServiceError] = useState('');

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

    const toggleService = (serviceName: string) => {
        if (serviceError) setServiceError('');
        setFormData((prev) => {
            const exists = prev.selectedServices.includes(serviceName);
            if (exists) {
                return {
                    ...prev,
                    selectedServices: prev.selectedServices.filter((s) => s !== serviceName),
                };
            } else {
                return {
                    ...prev,
                    selectedServices: [...prev.selectedServices, serviceName],
                };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.selectedServices.length === 0) {
            setServiceError('Please select at least one service.');
            return;
        }
        if (parseInt(captchaInput.trim(), 10) !== captcha.num1 + captcha.num2) {
            setCaptchaError('Incorrect answer. Please try again.');
            generateCaptcha();
            return;
        }
        setCaptchaError('');
        setServiceError('');
        setFormSubmitted(true);

        // Send emails in background (Admin, BCC & Customer confirmation)
        fetch('/api/estimate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).catch((err) => {
            console.error('Failed to send estimate emails in background:', err);
        });

        setTimeout(() => {
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                address: '',
                selectedServices: ['Diesel Engine Repair & Overhauls'],
                description: '',
            });
            generateCaptcha();
        }, 3500);
    };

    const valueProps = [
        {
            icon: '📋',
            title: 'Itemized Pricing',
            desc: 'Transparent parts & labor line items with zero hidden fees.',
            badge: 'Transparent',
        },
        {
            icon: '⚡',
            title: '10 Master Bays',
            desc: 'Fast bay turnaround minimizing your commercial fleet downtime.',
            badge: 'Fast Service',
        },
        {
            icon: '💳',
            title: 'Fleet Direct Billing',
            desc: 'Accepts Comdata, EFS, Fleet One, Wex & all major cards.',
            badge: 'Direct Billing',
        },
    ];

    return (
        <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
            {/* 1. TOP PAGE HERO */}
            <PageHero
                title="Get An Estimate"
                highlightTitle="Fast Fleet Quote"
                subtitle="Request a transparent, itemized estimate for diesel overhauls, air brakes, transmission repairs, preventative fleet maintenance, or commercial trailer washout."
                badge="TRANSPARENT FLEET PRICING • 10-BAY MASTER FACILITY • 24/7 DISPATCH"
                bgImage="/banner/contact-banner.png"
                mobileBgImage="/banner/contact-mobile-banner.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Get An Estimate' },
                ]}
            />

            {/* AEO DIRECT ANSWER SNIPPET */}
            <AeoDirectAnswerSnippet pageKey="get-an-estimate" />

            {/* 2. THREE KEY VALUE PROPOSITIONS */}
            <section className="relative w-full py-6 sm:py-7 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                        {valueProps.map((vp, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl bg-gradient-to-br from-white via-red-50/40 to-red-100/70 border border-red-200/90 p-4 shadow-[0_4px_16px_rgba(220,38,38,0.06),inset_0_0_16px_rgba(220,38,38,0.04)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.18),inset_0_0_20px_rgba(220,38,38,0.08)] hover:border-red-400 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-500" />
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg shadow-xs group-hover:scale-105 group-hover:bg-red-50 group-hover:border-red-200 transition-all">
                                            {vp.icon}
                                        </div>
                                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-600 border border-slate-200/70 transition-colors">
                                            {vp.badge}
                                        </span>
                                    </div>
                                    <h3 className="font-medium text-slate-900 text-sm mb-0.5 group-hover:text-red-600 transition-colors">
                                        {vp.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        {vp.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. COMPACT ESTIMATE FORM & SIDEBAR SECTION */}
            <section className="relative w-full py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-100/75 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />
                <div className="absolute top-12 right-12 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-12 left-12 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                        {/* LEFT COLUMN: Compact Estimate Form */}
                        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                            <div className="mb-5 pb-3.5 border-b border-slate-100">
                                <h2 className="font-racing text-xl sm:text-2xl uppercase tracking-wider text-slate-900">
                                    Request An Estimate
                                </h2>
                               
                            </div>

                            {formSubmitted ? (
                                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2.5 animate-fadeIn">
                                    <span className="text-3xl block">✅</span>
                                    <h3 className="font-racing text-xl text-emerald-900 uppercase">
                                        Estimate Request Received!
                                    </h3>
                                    <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto leading-relaxed">
                                        Thank you! Our master mechanics are reviewing your request and will contact you with an itemized quote promptly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3.5">
                                    
                                    {/* Row 1: Full Name & Phone Number */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. John Doe"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="(209) 000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Email & Address */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@carrier.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                                Address *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. 123 Main St, Manteca, CA"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: Multi-Select Services */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                                                Select Services * <span className="text-slate-500 font-normal">({formData.selectedServices.length} Selected)</span>
                                            </label>
                                            <span className="text-[11px] text-red-600 font-bold">Select all that apply</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {[...servicesData.services, { id: 'other', name: 'Other' }].map((s) => {
                                                const isSelected = formData.selectedServices.includes(s.name);
                                                return (
                                                    <button
                                                        type="button"
                                                        key={s.id}
                                                        onClick={() => toggleService(s.name)}
                                                        aria-pressed={isSelected}
                                                        aria-label={`${s.name} service`}
                                                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer select-none ${
                                                            isSelected
                                                                ? 'bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/30'
                                                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                                                        }`}
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] shrink-0 border transition-colors ${
                                                                isSelected
                                                                    ? 'bg-white text-red-600 border-white'
                                                                    : 'bg-white text-transparent border-slate-300'
                                                            }`}
                                                        >
                                                            ✓
                                                        </span>
                                                        <span className="leading-snug break-words">{s.name}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {serviceError && (
                                            <p className="text-red-600 text-xs font-bold mt-1.5">
                                                ⚠️ {serviceError}
                                            </p>
                                        )}
                                    </div>

                                    {/* Row 3: Symptoms / Repair Description */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                                                Repair Details & Symptoms
                                            </label>
                                            <span className="text-[11px] text-slate-400 font-medium">Optional</span>
                                        </div>
                                        <textarea
                                            rows={3}
                                            placeholder="Describe truck make/model, symptoms (e.g. air leak, brake noise, fault codes), or specific service needed..."
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none font-medium"
                                        />
                                    </div>

                                    {/* Row 4: Security Captcha */}
                                    <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider whitespace-nowrap">
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
                                                    aria-label="Refresh Security Captcha Question"
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
                                                    aria-label="Security Captcha Answer"
                                                    value={captchaInput}
                                                    onChange={(e) => {
                                                        setCaptchaInput(e.target.value);
                                                        if (captchaError) setCaptchaError('');
                                                    }}
                                                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-center font-bold"
                                                />
                                            </div>
                                        </div>
                                        {captchaError && (
                                            <p className="text-red-600 text-xs font-bold mt-2 animate-shake">
                                                ⚠️ {captchaError}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Action */}
                                    <button
                                        type="submit"
                                        className="w-full py-3.5 md:px-6 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Request Detailed Fleet Estimate</span>
                                        <span>→</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* RIGHT COLUMN: Fast Dispatch & Facility Overview */}
                        <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">

                            {/* 24/7 Roadside Hotline Dispatch Card */}
                            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c101b] to-[#1a1f33] text-white border border-red-500/30 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
                                
                                <div className="flex items-center gap-2 mb-2.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                                        Immediate Dispatch
                                    </span>
                                </div>

                                <h3 className="font-racing text-lg sm:text-xl uppercase tracking-wider text-white mb-1.5">
                                    Stranded On Highway?
                                </h3>
                                <p className="text-slate-300 text-xs leading-relaxed mb-3.5">
                                    Skip the online form for emergency roadside air lines, tires, and diesel breakdowns. Our live dispatchers are standing by 24/7.
                                </p>

                                <a
                                    href="tel:+12092398111"
                                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 transition-all flex items-center justify-center gap-2 mb-2.5 cursor-pointer"
                                >
                                    <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span>(209) 239-8111</span>
                                </a>

                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <span className="text-[11px] text-slate-300 block">Average Highway ETA</span>
                                    <span className="font-racing text-sm text-amber-400 tracking-wider">30 – 45 Minutes</span>
                                </div>
                            </div>

                            {/* Shop Facility & Direct Billing Info */}
                            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] space-y-3">
                                <h3 className="font-racing text-base uppercase tracking-wider text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
                                    <span>Facility Highlights</span>
                                    <span className="text-xs font-mono font-bold text-red-600">Manteca, CA</span>
                                </h3>

                                <div className="space-y-2.5 text-xs text-slate-700">
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-base shrink-0">📍</span>
                                        <div>
                                            <strong className="block text-slate-900">Shop Address</strong>
                                            <span>2142 W Yosemite Ave, Manteca, CA 95337</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-base shrink-0">⏱️</span>
                                        <div>
                                            <strong className="block text-slate-900">Drive-In Bay Hours</strong>
                                            <span>Mon – Fri: 8am – 6pm | Sat: 8am – 5pm</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <span className="text-base shrink-0">💳</span>
                                        <div>
                                            <strong className="block text-slate-900">Accepted Fleet Payment</strong>
                                            <span className="text-[11px] text-slate-600">Comdata, EFS, Fleet One, Wex, Visa, MC, Corporate Fleet Direct Billing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION & FLOATING ACTIONS */}
            <CTA />
            <MobileStickyActions />
            <FloatingEstimateButton />
        </div>
    );
};
