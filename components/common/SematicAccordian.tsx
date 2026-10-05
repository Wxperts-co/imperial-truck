'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import rawAcceleratorData from '@/data/ai-accelerator.json';

interface SemanticKeynotes {
  primary_conceptual_themes_intent?: string;
  primary_intent?: string;
  core_value_propositions?: string;
  value_proposition?: string;
  trust_signals?: string;
  geographic_infrastructural_anchors?: string;
  geo_strategy?: string;
  geo_voice_search_optimization_strategy?: string;
  content_strategy?: string;
  [key: string]: string | undefined;
}

interface NerTags {
  organization_brands?: string[];
  person?: string[];
  products_services_solutions?: string[];
  technical_specifications_code_entities?: string[];
  strategic_functional_concepts?: string[];
  infrastructure_security_entities?: string[];
  contact_channels_geographic_data?: string[];
  [key: string]: string[] | string | undefined;
}

interface AcceleratorPageData {
  semantic_keynotes?: SemanticKeynotes;
  named_entity_recognition_ner_tags?: NerTags;
  semantic_keywords?: string[];
  front_loaded_aeo_direct_answer_snippet?: string;
  [key: string]: unknown;
}

const KEYNOTE_LABEL_MAP: Record<string, string> = {
  primary_conceptual_themes_intent: 'Primary Intent',
  primary_intent: 'Primary Intent',
  user_intent: 'User Intent',
  intent_alignment: 'Intent Alignment',
  commercial_intent_alignment: 'Commercial Intent Alignment',
  service_centric_intent: 'Service-Centric Intent',
  primary_conceptual_themes_user_intent_targets: 'Primary Intent',
  core_value_propositions: 'Value Proposition',
  value_proposition: 'Value Proposition',
  value_propositions: 'Value Proposition',
  operational_value_proposition: 'Operational Value Proposition',
  service_value_proposition: 'Service Value Proposition',
  efficiency_driven_value_prop: 'Efficiency-Driven Value Prop',
  key_informational_value_core_value_propositions: 'Value Proposition',
  technical_authority: 'Technical Authority',
  fleet_specific_integration: 'Fleet-Specific Integration',
  trust_signals: 'Trust Signals',
  visual_trust_signals: 'Visual Trust Signals',
  trust_and_reliability_signals: 'Trust and Reliability Signals',
  geographic_infrastructural_anchors: 'GEO Strategy',
  geo_strategy: 'GEO Strategy',
  geo_aeo_optimization: 'GEO/AEO Optimization',
  geographic_authority: 'Geographic Authority',
  geo_positioning: 'GEO Positioning',
  strategic_takeaways_for_generative_engine_optimization_geo: 'GEO Strategy',
  geo_voice_search_optimization_strategy: 'Content Strategy',
  content_strategy: 'Content Strategy',
  operational_clarity: 'Operational Clarity',
  multi_channel_utility: 'Multi-Channel Utility',
  structural_optimization: 'Structural Optimization',
};

const NER_LABEL_MAP: Record<string, string> = {
  organization_brands: 'ORGANIZATION & BRANDS',
  person: 'PERSON',
  products_services_solutions: 'PRODUCTS, SERVICES & SOLUTIONS',
  technical_specifications_code_entities: 'TECHNICAL SPECIFICATIONS & CODE ENTITIES',
  strategic_functional_concepts: 'STRATEGIC & FUNCTIONAL CONCEPTS',
  infrastructure_security_entities: 'INFRASTRUCTURE & SECURITY ENTITIES',
  contact_channels_geographic_data: 'CONTACT, CHANNELS & GEOGRAPHIC DATA',
};

function formatKeynoteKey(key: string): string {
  if (KEYNOTE_LABEL_MAP[key]) return KEYNOTE_LABEL_MAP[key];
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatNerKey(key: string): string {
  if (NER_LABEL_MAP[key]) return NER_LABEL_MAP[key];
  return key
    .replace(/_/g, ' ')
    .toUpperCase();
}

function formatNerValue(val: unknown): string {
  if (!val) return 'None explicitly identified in provided text.';
  if (Array.isArray(val)) {
    if (val.length === 0) return 'None explicitly identified in provided text.';
    return val.join('; ');
  }
  if (typeof val === 'string') {
    return val.trim() ? val : 'None explicitly identified in provided text.';
  }
  return String(val);
}

function resolvePageData(pathname: string, customKey?: string): AcceleratorPageData | null {
  const dataList = Array.isArray(rawAcceleratorData)
    ? (rawAcceleratorData as Record<string, AcceleratorPageData>[])
    : [rawAcceleratorData as Record<string, AcceleratorPageData>];

  const rawKey = customKey || (
    !pathname || pathname === '/' ? 'home' : pathname.replace(/^\/+|\/+$/g, '')
  );

  const keyVariants = [
    rawKey,
    `/${rawKey}`,
    rawKey.replace(/\//g, '_'),
    rawKey.split('/').pop() || '',
  ].filter(Boolean);

  // Match any key variant
  for (const key of keyVariants) {
    for (const item of dataList) {
      if (item && item[key]) {
        return item[key];
      }
    }
  }

  // Fallback to 'home'
  for (const item of dataList) {
    if (item && item['home']) {
      return item['home'];
    }
  }

  // Fallback to first available object entry
  for (const item of dataList) {
    if (item && typeof item === 'object') {
      const firstEntry = Object.values(item)[0];
      if (firstEntry && typeof firstEntry === 'object') {
        return firstEntry as AcceleratorPageData;
      }
    }
  }

  return null;
}

interface SematicAccordianProps {
  pageKey?: string;
  data?: AcceleratorPageData;
}

export const SematicAccordian: React.FC<SematicAccordianProps> = ({ pageKey, data: customData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const data = customData || resolvePageData(pathname || '/', pageKey);

  if (!data) return null;

  const keynotes = data.semantic_keynotes || {};
  const nerTags = data.named_entity_recognition_ner_tags || {};

  const keynoteEntries = Object.entries(keynotes).filter(([, val]) => typeof val === 'string' && val.trim().length > 0);
  const nerEntries = Object.entries(nerTags).filter(([key, val]) => {
    // Exclude empty person if not explicitly identified
    if (key === 'person' && Array.isArray(val) && val.length === 0) return false;
    return val !== undefined && val !== null;
  });

  const seoKeywords: string[] = Array.isArray(data.seo_keywords)
    ? data.seo_keywords
    : Array.isArray(data.semantic_keywords)
    ? data.semantic_keywords
    : typeof data.seo_keywords === 'string'
    ? [data.seo_keywords]
    : typeof data.semantic_keywords === 'string'
    ? [data.semantic_keywords]
    : [];

  if (keynoteEntries.length === 0 && nerEntries.length === 0 && seoKeywords.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#080d1a] border-t border-slate-800/80 py-6 sm:py-8 px-4 sm:px-6 md:px-10 lg:px-12 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-slate-800/80 bg-[#0b1222]/90 backdrop-blur-sm overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
          {/* Accordion Toggle Header */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group hover:bg-slate-800/40 transition-colors duration-200"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-tight group-hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
              Semantic Keynotes &amp; Named Entity Recognition (NER) Tags
            </h2>

            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/80 text-red-500 group-hover:bg-red-500/10 transition-all duration-200 shrink-0 ml-3">
              <svg
                className={`w-5 h-5 transition-transform duration-300 ease-out text-red-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Accordion Collapsible Body */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-5 pt-2 sm:pt-3 border-t border-slate-800/60 text-[11px] sm:text-[14px] space-y-4">
                  {/* Semantic Keynotes Section */}
                  {keynoteEntries.length > 0 && (
                    <div className="space-y-3.5">
                      <h3 className="text-[#38bdf8] font-medium text-base sm:text-[17px] tracking-wide">
                        Semantic Keynotes
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-neutral-300 leading-relaxed marker:text-neutral-900">
                        {keynoteEntries.map(([key, val]) => (
                          <li key={key}>
                            <strong className="font-bold text-white">
                              {formatKeynoteKey(key)}:
                            </strong>{' '}
                            <span className="text-neutral-300">{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* NER Tags Section */}
                  {nerEntries.length > 0 && (
                    <div className="space-y-3.5 pt-2">
                      <h3 className="text-[#38bdf8] font-medium text-base sm:text-[17px] tracking-wide">
                        NER Tags
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-neutral-300 leading-relaxed marker:text-neutral-500">
                        {nerEntries.map(([key, val]) => (
                          <li key={key}>
                            <strong className="font-bold text-white">
                              {formatNerKey(key)}:
                            </strong>{' '}
                            <span className="text-neutral-300">
                              {formatNerValue(val)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* SEO Keywords Section */}
                  {seoKeywords.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-[#38bdf8] font-medium text-base sm:text-[15px] tracking-wide">
                        SEO Keywords
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-neutral-300 leading-relaxed marker:text-neutral-500">
                        {seoKeywords.map((keyword, index) => (
                          <li key={index}>
                            <span className="text-neutral-300">{keyword}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SematicAccordian;
