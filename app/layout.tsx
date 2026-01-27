import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import ReactLenis from "lenis/react";
import Navbar from "@/components/common/Navbar";
import OnekoCat from "@/components/common/OnekoCat";
import Footer from "@/components/common/Footer";
import { Quote } from "@/components/common/Quote";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tejas | Full Stack Developer",
    template: "%s | Tejas",
  },
  description:
    "Portfolio of Tejas, a passionate Full Stack Developer building modern web applications with cutting-edge technologies.",
  keywords: [
    "Tejas",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Tejas" }],
  creator: "Tejas",
  publisher: "Tejas",
  icons: {
    icon: "/images/logos/logotj.svg",
  },
  openGraph: {
    title: "Tejas | Full Stack Developer",
    description:
      "Explore the portfolio of Tejas, featuring innovative web projects and technical expertise.",
    url: "https://tejaspr.site/", // You should replace this with your actual domain when deployed
    siteName: "Tejas Portfolio",
    images: [
      {
        url: "/images/logos/logotj.svg", // Using logo as placeholder, ideally use a dedicated OG image
        width: 800,
        height: 600,
        alt: "Tejas Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas | Full Stack Developer",
    description:
      "Explore the portfolio of Tejas, featuring innovative web projects and technical expertise.",
    images: ["/images/logos/logotj.svg"], // Using logo as placeholder
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <Navbar />
            {children}
            <OnekoCat />
            <Quote />
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
