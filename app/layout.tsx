import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import InstallPrompt from "@/components/InstallPrompt";
import SplashScreen from "@/components/SplashScreen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Castillo Services — Conseil Stratégique & Fabrication de Précision",
  description:
    "Castillo Services accompagne la transformation numérique des entreprises et fournit des produits manufacturés de haute qualité en République Démocratique du Congo.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Castillo Services",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A6E",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className="font-sans antialiased">
        <SplashScreen />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <InstallPrompt />
        </Providers>
      </body>
    </html>
  );
}