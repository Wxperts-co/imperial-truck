import type { Metadata } from "next";
import { ContactUsPage } from "@/components/pages/ContactUsPage";
import rawAcceleratorData from "@/data/ai-accelerator.json";

const dataList = Array.isArray(rawAcceleratorData)
  ? (rawAcceleratorData as Record<
      string,
      {
        front_loaded_aeo_direct_answer_snippet?: string;
        seo_keywords?: string[];
      }
    >[])
  : [
      rawAcceleratorData as Record<
        string,
        {
          front_loaded_aeo_direct_answer_snippet?: string;
          seo_keywords?: string[];
        }
      >,
    ];
const contactData = dataList[0]?.["contact-us"];
const contactSnippet = contactData?.front_loaded_aeo_direct_answer_snippet;

export const metadata: Metadata = {
  title: "Contact Us | Imperial Truck & Trailer Repair and Wash Manteca CA",
  description:
    contactSnippet ||
    "Fast 24/7 commercial road dispatch, shop scheduling, and fleet accounts. Located right off CA-120 / I-5 on W Yosemite Ave in Manteca, CA. Call (209) 239-8111.",
  alternates: {
    canonical: "https://imperialtruckwashrepair.com/contact-us",
  },
};

export default function Page() {
  return <ContactUsPage />;
}
