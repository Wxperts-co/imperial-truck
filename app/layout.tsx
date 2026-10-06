import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Racing_Sans_One } from "next/font/google";
import "./globals.css";
import { ScrollStickyNavbar } from "@/components/common/ScrollStickyNavbar";
import { SematicAccordian } from "@/components/common/SematicAccordian";
import { Footer } from "@/components/common/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-racing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imperialtruckwashrepair.com"),
  title: "Imperial Truck & Trailer Repair and Wash | 2142 W Yosemite Ave, Manteca, CA 95337",
  description: "Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337. Call +1 (209) 239-8111.",
  verification: {
    google: "pUeBtsxJJNATyAXHc2YItaSnlF3CNPuCTrd9D3M7mcc",
  },
  openGraph: {
    title: "Imperial Truck & Trailer Repair and Wash | 2142 W Yosemite Ave, Manteca, CA 95337",
    description: "Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337. Call +1 (209) 239-8111.",
    url: "https://imperialtruckwashrepair.com",
    siteName: "Imperial Truck & Trailer Repair and Wash",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Imperial Truck & Trailer Repair and Wash",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Truck & Trailer Repair and Wash | 2142 W Yosemite Ave, Manteca, CA 95337",
    description: "Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337. Call +1 (209) 239-8111.",
    images: ["/logo/logo.png"],
  },
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${plusJakartaSans.variable} ${racingSansOne.variable}`}>
      <head>
        <meta name="google-site-verification" content="pUeBtsxJJNATyAXHc2YItaSnlF3CNPuCTrd9D3M7mcc" />
        <link rel="icon" href="/logo/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#070a12] text-white">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GYM6MQEVB"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3GYM6MQEVB');
          `}
        </Script>
        <ScrollStickyNavbar />
        {children}
        <SematicAccordian />
        <Footer />
      </body>
    </html>
  );
}


