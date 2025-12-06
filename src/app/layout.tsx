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
  metadataBase: new URL("https://imakus-refresh-leonardo-vasquezs-projects.vercel.app"),
  title: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
  description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina. OSHA & EPA compliant. Expert staff, advanced equipment.",
  keywords: "commercial cleaning, kitchen detailing, floor maintenance, window cleaning, OSHA compliant, EPA certified, industrial cleaning, South Florida cleaning services",
  authors: [{ name: "Imakus Cleaning Solutions" }],
  openGraph: {
    title: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
    description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina. OSHA & EPA compliant.",
    siteName: "Imakus Cleaning Solutions",
    images: [
      {
        url: "/hero-cleaning.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imakus Cleaning Solutions | Commercial Cleaning & Detailing Services",
    description: "Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina.",
    images: ["/hero-cleaning.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
