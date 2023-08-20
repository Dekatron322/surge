import { Footer, Founder, Investors, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TheSurge.tech - Igniting Innovation in Tech Startups",
  description:
    "TheSurge.tech is a pioneering force dedicated solely to empowering tech startups across Africa. Our mission is to revolutionize the tech startup ecosystem, providing comprehensive support and resources to fuel innovation, accelerate growth, and drive unprecedented success.",
  keywords:
    "Startups, Funding, Angel, Investment, Investor, Capital, Seed Funding, African, ",
  twitter: {
    card: "summary_large_image",
    title: "TheSurge",
    images:
      "https://github.com/GreenInkLimited/PurplePagesWeb/blob/main/src/assets/homepage.png?raw=true",
    description:
      "TheSurge.tech is a pioneering force dedicated solely to empowering tech startups across Africa. Our mission is to revolutionize the tech startup ecosystem, providing comprehensive support and resources to fuel innovation, accelerate growth, and drive unprecedented success.",
  },
  openGraph: {
    title: "TheSurge",
    images:
      "https://github.com/GreenInkLimited/PurplePagesWeb/blob/main/src/assets/homepage.png?raw=true",
    description:
      "TheSurge.tech is a pioneering force dedicated solely to empowering tech startups across Africa. Our mission is to revolutionize the tech startup ecosystem, providing comprehensive support and resources to fuel innovation, accelerate growth, and drive unprecedented success.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
