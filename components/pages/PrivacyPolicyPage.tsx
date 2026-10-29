"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { CTA } from "@/components/common/CTA";
import { MobileStickyActions } from "@/components/common/MobileStickyActions";
import { FloatingEstimateButton } from "@/components/common/FloatingEstimateButton";

export const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "introduction",
      number: "1",
      title: "Introduction",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Welcome to Imperial Truck Wash &amp; Repair. We are committed to
          protecting your privacy and ensuring that your personal information is
          handled safely and responsibly. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website at{" "}
          <a
            href="https://imperialtruckwashrepair.com/"
            className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://imperialtruckwashrepair.com/
          </a>
          , as well as when you use our services.
        </p>
      ),
    },
    {
      id: "information-we-collect",
      number: "2",
      title: "Information We Collect",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <p>
            We may collect personal and non-personal information from you in
            several ways:
          </p>
          <ul className="space-y-3 pl-1 sm:pl-2">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Personal Information:
                </strong>{" "}
                When you fill out a contact form, request a quote, or schedule a
                service, we may collect identifiable information such as your
                name, email address, phone number, company name, and
                vehicle/fleet details.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Payment Information:
                </strong>{" "}
                If you make payments online, our third-party payment processors
                will collect your billing information. We do not store full
                credit card numbers on our servers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Automatically Collected Information:
                </strong>{" "}
                When you browse our website, we automatically collect certain
                data, such as your IP address, browser type, operating system,
                and pages visited, to help us optimize our site&apos;s
                performance.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-use",
      number: "3",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <p>We use the information we collect to:</p>
          <ul className="space-y-2.5 pl-1 sm:pl-2">
            {[
              "Provide, operate, and maintain our truck wash and repair services.",
              "Respond to your inquiries, send service estimates, and provide customer support.",
              "Process transactions and send related information, including invoices and confirmations.",
              "Improve our website, marketing efforts, and overall user experience.",
              "Send periodic emails regarding your service or other relevant business updates (you may opt out at any time).",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-sm shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-share",
      number: "4",
      title: "How We Share Your Information",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. We may share your information only in the following
            situations:
          </p>
          <ul className="space-y-3 pl-1 sm:pl-2">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Service Providers:
                </strong>{" "}
                We may share data with trusted third-party vendors who assist us
                in operating our website, conducting our business, or servicing
                you (e.g., payment processors, hosting providers), provided
                those parties agree to keep this information confidential.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Legal Requirements:
                </strong>{" "}
                We may disclose your information if required to do so by law, or
                in response to a valid legal request by public authorities.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookies",
      number: "5",
      title: "Cookies and Tracking Technologies",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Our website uses &quot;cookies&quot; and similar tracking technologies
          to enhance your browsing experience. Cookies are small data files
          stored on your device that help us remember your preferences and
          understand how you use our site. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent, though
          some parts of the site may not function properly without them.
        </p>
      ),
    },
    {
      id: "data-security",
      number: "6",
      title: "Data Security",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, alteration, disclosure,
          or destruction. However, please remember that no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>
      ),
    },
    {
      id: "third-party-links",
      number: "7",
      title: "Third-Party Links",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of those external
          sites. We encourage you to read the privacy policies of any website
          you visit.
        </p>
      ),
    },
    {
      id: "childrens-privacy",
      number: "8",
      title: "Children's Privacy",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Our website and services are not directed to individuals under the age
          of 13. We do not knowingly collect personal information from children.
          If we become aware that we have collected such data, we will take
          steps to delete it promptly.
        </p>
      ),
    },
    {
      id: "changes",
      number: "9",
      title: "Changes to This Privacy Policy",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Effective Date&quot; at the top. We encourage you
          to review this policy periodically.
        </p>
      ),
    },
    {
      id: "contact-us",
      number: "10",
      title: "Contact Us",
      content: (
        <div className="space-y-4 text-slate-700 text-[15px] sm:text-base">
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#111827] text-white border border-slate-800 shadow-md">
            <h4 className="font-racing text-lg sm:text-xl text-white uppercase tracking-wider mb-3">
              Imperial Truck Wash &amp; Repair
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm sm:text-[15px]">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:imperialtruckrepair13@gmail.com"
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5"
                >
                  imperialtruckrepair13@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+12092398111"
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5"
                >
                  (209) 239-8111
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                  Address
                </span>
                <a
                  href="https://maps.app.goo.gl/NVCfUL71V9ntsT1n8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5"
                >
                  2142 W Yosemite Ave, Manteca, CA 95337
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      {/* Top Page Hero */}
      <PageHero
        title="Privacy Policy"
        highlightTitle="Privacy"
        subtitle="How Imperial Truck Wash & Repair protects and handles your personal data."
        badge="OFFICIAL LEGAL POLICY"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      {/* Main Content Area */}
      <main className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Card / Effective Date */}
          <div className="mb-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Official Policy
              </span>
              <h1 className="font-racing text-2xl sm:text-3xl text-slate-900 uppercase tracking-wide mt-2">
                Privacy Policy
              </h1>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shrink-0">
              Effective Date:{" "}
              <span className="text-red-600">October 30, 2026</span>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-slate-100">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white font-racing text-sm font-bold shadow-xs shrink-0">
                    {section.number}
                  </span>
                  <h2 className="font-racing text-lg sm:text-xl text-slate-900 uppercase tracking-wide">
                    {section.title}
                  </h2>
                </div>
                {section.content}
              </motion.div>
            ))}
          </div>

          {/* Bottom Back to Home / Contact Link */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <Link
              href="/terms-of-service"
              className="inline-flex items-center gap-2 font-bold text-slate-700 hover:text-red-600 transition-colors"
            >
              <span>View Terms of Service</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Standard CTA & Floating Actions */}
      <CTA />
      <FloatingEstimateButton />
      <MobileStickyActions />
    </div>
  );
};
