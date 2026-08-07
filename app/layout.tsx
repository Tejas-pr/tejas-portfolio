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
    default: "Tejas P R | Full Stack Developer",
    template: "%pr | Tejas",
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
  authors: [{ name: "Tejas P R" }],
  creator: "Tejas P R",
  publisher: "Tejas P R",
  icons: {
    icon: "/images/logos/logotj.svg",
  },
  openGraph: {
    title: "Tejas P R | Full Stack Developer",
    description:
      "Explore the portfolio of Tejas, featuring innovative web projects and technical expertise.",
    url: "https://tejaspr.site/", // You should replace this with your actual domain when deployed
    siteName: "Tejas P R Portfolio",
    images: [
      {
        url: "/images/logos/logotj.svg", // Using logo as placeholder, ideally use a dedicated OG image
        width: 800,
        height: 600,
        alt: "Tejas P R Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas P R | Full Stack Developer",
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
    <html lang="en" suppressHydrationWarning>
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
            <div className="relative flex min-h-screen w-full flex-col bg-background">
              {/* Grid Background */}
              <div className="fixed inset-0 z-0 opacity-50 [background-size:40px_40px] [background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#3a3a3a_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
              
              {/* Content */}
              <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />
                {/* overflow-x-hidden is scoped here (not on an ancestor of
                    Navbar) so full-bleed sections like CTA's breakout can't
                    cause a page-wide horizontal scrollbar, without breaking
                    the Navbar's `position: sticky`. */}
                <div className="overflow-x-hidden">{children}</div>
                <OnekoCat />
                <Quote />
                <Footer />
              </div>
            </div>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
