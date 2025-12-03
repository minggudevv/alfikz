import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

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
  title: "Alfikz SMP - Medieval Survival Economy",
  description: "Join Alfikz SMP, the ultimate medieval survival economy server.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
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
        <Header />
        <main className="pt-0 md:pt-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
