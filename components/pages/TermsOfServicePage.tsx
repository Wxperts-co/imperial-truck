"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { CTA } from "@/components/common/CTA";
import { MobileStickyActions } from "@/components/common/MobileStickyActions";
import { FloatingEstimateButton } from "@/components/common/FloatingEstimateButton";

export const TermsOfServicePage = () => {
  const sections = [
    {
      id: "acceptance",
      number: "1",
      title: "Acceptance of Terms",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          By booking an appointment, requesting an estimate, dropping off a
          vehicle, or otherwise engaging our Services, you confirm that you are
          authorized to bind the vehicle owner or operating company to these
          Terms. These Terms constitute a legally binding agreement between you
          and Imperial Truck Wash &amp; Repair.
        </p>
      ),
    },
    {
      id: "services",
      number: "2",
      title: "Description of Services",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Imperial Truck Wash &amp; Repair provides commercial vehicle cleaning,
          detailing, routine maintenance, and mechanical repair services. The
          specific scope of work for any given vehicle will be outlined in a
          separate work order, estimate, or invoice provided to you prior to or
          during the rendering of Services. We reserve the right to refuse
          service to anyone for any reason at any time.
        </p>
      ),
    },
    {
      id: "estimates-payment",
      number: "3",
      title: "Estimates, Invoicing, and Payment",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <ul className="space-y-3 pl-1 sm:pl-2">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Estimates:
                </strong>{" "}
                Any initial estimate provided via the Site, over the phone, or
                in person is a good-faith approximation of the anticipated costs
                based on preliminary information. Final costs may vary if
                additional repairs, parts, or labor are deemed necessary upon
                closer inspection. We will seek your authorization before
                performing unauthorized additional work.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Payment Terms:
                </strong>{" "}
                Payment in full is due upon completion of the Services and prior
                to the release of the vehicle, unless prior commercial credit
                arrangements have been explicitly established in writing. We
                accept major credit cards, fleet cards, commercial checks
                (subject to approval), and electronic funds transfers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Storage Fees:
                </strong>{" "}
                Vehicles left on our premises for more than 48 hours after you
                have been notified of service completion may be subject to daily
                storage fees, unless prior arrangements have been made.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Mechanic&apos;s Lien:
                </strong>{" "}
                We reserve the right to retain possession of your vehicle and
                assert a mechanic&apos;s lien or similar statutory lien for any
                unpaid invoices related to parts, labor, or storage.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "customer-responsibilities",
      number: "4",
      title: "Customer Responsibilities",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <ul className="space-y-3 pl-1 sm:pl-2">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Vehicle Condition:
                </strong>{" "}
                You are responsible for disclosing any known hazardous
                materials, fragile components, pre-existing mechanical failures,
                or custom modifications on or inside the vehicle prior to
                servicing or washing.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Personal Property:
                </strong>{" "}
                Please remove all valuable personal items, electronics, and
                unsecured cargo from the vehicle&apos;s cab and exterior
                compartments before drop-off. Imperial Truck Wash &amp; Repair
                is not responsible for lost, stolen, or damaged personal
                property left inside the vehicle.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Accurate Information:
                </strong>{" "}
                You agree to provide current, complete, and accurate billing,
                contact, and vehicle specification information when requesting
                Services.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "liability-disclaimers",
      number: "5",
      title: "Limitation of Liability and Disclaimers",
      content: (
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-[15px] sm:text-base">
          <ul className="space-y-3 pl-1 sm:pl-2">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Pre-Existing Damage:
                </strong>{" "}
                We are not liable for pre-existing cosmetic damage (e.g., loose
                trim, peeling paint, cracked windshields, compromised clear
                coats) that may be exacerbated by high-pressure washing systems
                or routine mechanical servicing.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Service Warranties:
                </strong>{" "}
                Mechanical repairs are warranted for a specific period or
                mileage as explicitly detailed on your final invoice. This
                warranty covers defective parts supplied by us and the labor to
                install them. It does not cover parts supplied by the customer,
                normal wear and tear, or damage resulting from subsequent
                accidents, misuse, or neglect.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">
                  Consequential Damages:
                </strong>{" "}
                To the fullest extent permitted by applicable law, Imperial
                Truck Wash &amp; Repair shall not be liable for any indirect,
                incidental, special, or consequential damages, including but not
                limited to lost profits, lost revenue, load spoilage, towing
                fees, or downtime costs arising from the use of our Site, the
                delay of Services, or mechanical failures.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      number: "6",
      title: "Intellectual Property",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          All content on the Site, including text, graphics, logos, images,
          service marks, and software, is the property of Imperial Truck Wash
          &amp; Repair or its content suppliers and is protected by applicable
          copyright and trademark laws. You may not reproduce, distribute, or
          create derivative works from this content without our express written
          consent.
        </p>
      ),
    },
    {
      id: "third-party-links",
      number: "7",
      title: "Third-Party Links",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          Our Site may contain links to third-party websites or services that
          are not owned or controlled by Imperial Truck Wash &amp; Repair. We
          have no control over, and assume no responsibility for, the content,
          privacy policies, or practices of any third-party websites or
          services.
        </p>
      ),
    },
    {
      id: "indemnification",
      number: "8",
      title: "Indemnification",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          You agree to indemnify, defend, and hold harmless Imperial Truck Wash
          &amp; Repair, its officers, directors, employees, and agents from and
          against any and all claims, damages, obligations, losses, liabilities,
          costs, or debt, and expenses (including attorney&apos;s fees) arising
          from your use of the Site, your violation of these Terms, or your
          violation of any third-party rights, including environmental
          compliance related to the state of your vehicle prior to our Services.
        </p>
      ),
    },
    {
      id: "governing-law",
      number: "9",
      title: "Governing Law",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          These Terms shall be governed by and construed in accordance with the
          laws of the State in which our primary facility is located, without
          regard to its conflict of law provisions. Any legal action or
          proceeding arising out of or relating to these Terms shall be brought
          exclusively in the state or federal courts located in that
          jurisdiction.
        </p>
      ),
    },
    {
      id: "changes",
      number: "10",
      title: "Changes to Terms",
      content: (
        <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. We will indicate the date of the latest
          revision at the top of this document. Your continued use of the Site
          or Services following the posting of any changes constitutes
          acceptance of those changes.
        </p>
      ),
    },
    {
      id: "contact-information",
      number: "11",
      title: "Contact Information",
      content: (
        <div className="space-y-4 text-slate-700 text-[15px] sm:text-base">
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#111827] text-white border border-slate-800 shadow-md">
            <h4 className="font-racing text-lg sm:text-xl text-white uppercase tracking-wider mb-3">
              Imperial Truck Wash &amp; Repair
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-[15px]">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                  Website
                </span>
                <a
                  href="https://imperialtruckwashrepair.com/"
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5 truncate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  imperialtruckwashrepair.com
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
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5 truncate"
                >
                  2142 W Yosemite Ave, Manteca, CA 95337
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:imperialtruckrepair13@gmail.com"
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5 truncate"
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
                  className="font-medium text-white hover:text-amber-400 transition-colors mt-0.5 truncate"
                >
                  (209) 239-8111
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
        title="Terms of Service"
        highlightTitle="Terms"
        subtitle="Guidelines, commercial service policies, payment terms, and warranties."
        badge="COMMERCIAL TERMS & POLICIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
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
                Commercial Agreement
              </span>
              <h1 className="font-racing text-2xl sm:text-3xl text-slate-900 uppercase tracking-wide mt-2">
                Terms of Service
              </h1>
            </div>
       
          </div>

          {/* Intro Card */}
          <div className="mb-6 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-slate-700 leading-relaxed text-[15px] sm:text-base">
            <p>
              Welcome to Imperial Truck Wash &amp; Repair. These Terms of
              Service (&quot;Terms&quot;) govern your access to and use of the
              website located at{" "}
              <a
                href="https://imperialtruckwashrepair.com/"
                className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://imperialtruckwashrepair.com/
              </a>{" "}
              (the &quot;Site&quot;) and the commercial truck washing,
              maintenance, and repair services (collectively, the
              &quot;Services&quot;) provided by Imperial Truck Wash &amp; Repair. By accessing
              our Site or utilizing our Services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use our
              Site or Services.
            </p>
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

          {/* Bottom Back to Home / Privacy Policy Link */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 font-bold text-slate-700 hover:text-red-600 transition-colors"
            >
              <span>View Privacy Policy</span>
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
