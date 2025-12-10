import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imakuscleaning.com"),
  title: {
    default: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
    template: "%s | Imakus Cleaning Solutions",
  },
  description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina. OSHA & EPA compliant. Expert staff, advanced equipment.",
  keywords: [
    "commercial cleaning",
    "kitchen detailing",
    "floor maintenance",
    "window cleaning",
    "OSHA compliant",
    "EPA certified",
    "industrial cleaning",
    "South Florida cleaning services",
    "restaurant kitchen cleaning",
    "escalator detailing",
    "high altitude cleaning",
    "Miami cleaning services",
    "commercial cleaning Florida",
  ],
  authors: [{ name: "Imakus Cleaning Solutions", url: "https://www.imakuscleaning.com" }],
  creator: "Imakus Cleaning Solutions",
  publisher: "Imakus Cleaning Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.imakuscleaning.com",
  },
  openGraph: {
    title: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
    description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina. OSHA & EPA compliant.",
    url: "https://www.imakuscleaning.com",
    siteName: "Imakus Cleaning Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imakus Cleaning Solutions - Professional Commercial Cleaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
    description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NSBCH32');`}
        </Script>
      </head>
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NSBCH32"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
