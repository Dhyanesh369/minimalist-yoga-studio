import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Lumina | Premium Yoga Studio in Stockholm",
    template: "%s | Lumina Stockholm"
  },
  description: "Experience the art of slow living at Lumina, Stockholm's premier minimalist yoga sanctuary. Offering cinematic beginner yoga, meditation, and breathwork sessions designed for deep restoration.",
  keywords: ["yoga studio stockholm", "luxury wellness stockholm", "beginner yoga classes", "meditation sanctuary", "mindful movement", "breathwork sessions"],
  authors: [{ name: "Lumina Studio" }],
  creator: "Lumina Studio",
  publisher: "Lumina Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumina | A Minimalist Yoga Sanctuary in Stockholm",
    description: "Reconnect with what is essential in our carefully crafted Nordic studio.",
    url: "https://luminastudio.com",
    siteName: "Lumina Yoga Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Lumina Yoga Studio Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina | Premium Yoga Studio Stockholm",
    description: "Experience calm and mindful movement in our premium minimalist yoga sanctuary.",
    images: ["/images/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'color-scheme': 'light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
