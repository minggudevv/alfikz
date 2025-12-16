import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import JsonLd from "@/components/JsonLd";
import SnowEffect from "@/components/SnowEffect";
import ChristmasDecorations from "@/components/ChristmasDecorations";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alfikz SMP - #1 Minecraft Medieval Survival Server Indonesia",
    template: "%s | Alfikz SMP"
  },
  description: "Join Alfikz SMP, the best medieval survival economy server in Indonesia. Features: Economy, PvP, RPG, Anti-Grief, and Crossplay (Java & Bedrock). Play now on play.alfikz.my.id!",
  keywords: ["Minecraft", "SMP", "Survival", "Economy", "Medieval", "Indonesia", "Minecraft Server", "Java", "Bedrock", "Alfikz", "Alfikz SMP", "Game Server"],
  authors: [{ name: "Alfikz Team" }],
  creator: "Alfikz Team",
  publisher: "Alfikz SMP",
  metadataBase: new URL("https://www.alfikz.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alfikz SMP - #1 Minecraft Medieval Survival Server Indonesia",
    description: "Experience the ultimate medieval survival economy. Join our thriving community on Java & Bedrock! IP: play.alfikz.my.id",
    url: "https://www.alfikz.my.id",
    siteName: "Alfikz SMP",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Alfikz SMP Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfikz SMP - Join the Adventure",
    description: "The best medieval survival economy server in Indonesia. Play now!",
    images: ["/logo.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased bg-background text-foreground pb-20 md:pb-0`}
      >
        <JsonLd />
        <SnowEffect />
        <ChristmasDecorations />
        <Header />
        <main className="pt-0 md:pt-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
