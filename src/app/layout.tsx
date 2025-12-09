import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
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
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
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
