import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imperialtruckwashrepair.com"),
  title: "Imperial Truck & Trailer Repair and Wash | 2142 W Yosemite Ave, Manteca, CA 95337",
  description: "Commercial Diesel Repair, Heavy Duty Truck & Trailer Wash, Computer Diagnostics, and 24/7 Mobile Recovery at 2142 W Yosemite Ave, Manteca, CA 95337. Call +1 (209) 239-8111.",
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
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/logo/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#070a12] text-white">
        {children}
      </body>
    </html>
  );
}


