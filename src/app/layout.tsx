"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../lib/SmoothScroll";
import Navigation from "./components/layout/header/navigation";
import Footer from "./components/layout/footer";
import { usePathname } from "next/navigation";
import Header from "./components/layout/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const hidden = "md:block hidden";
  const show = "md:hidden block";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        <div className={isHomePage ? show : "block"}>
          <Header />
        </div>
        <div className={hidden}>{isHomePage && <Navigation />}</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
