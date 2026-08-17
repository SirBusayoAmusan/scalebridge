import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const siteUrl = "https://www.scalebridge.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scalebridge | Bridging Capital. Building Economic Progress.",
    template: "%s | Scalebridge",
  },
  description:
    "Scalebridge structures and mobilises capital for infrastructure, businesses and economically productive opportunities.",
  openGraph: {
    title: "Scalebridge | Bridging Capital. Building Economic Progress.",
    description:
      "Scalebridge structures and mobilises capital for infrastructure, businesses and economically productive opportunities.",
    url: siteUrl,
    siteName: "Scalebridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalebridge | Bridging Capital. Building Economic Progress.",
    description:
      "Scalebridge structures and mobilises capital for infrastructure, businesses and economically productive opportunities.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-2 focus-visible:left-2 focus-visible:z-[100] focus-visible:bg-ink focus-visible:text-bg focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-extrabold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
