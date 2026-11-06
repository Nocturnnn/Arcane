import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./chaos.css";
import "./responsive.css";

const serif = localFont({
  src: "../fonts/bodoni-moda.woff2",
  weight: "900",
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia"],
  adjustFontFallback: "Times New Roman",
});
const condensed = localFont({
  src: "../fonts/anton.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-condensed",
  fallback: ["Impact"],
  adjustFontFallback: "Arial",
});
const handwriting = localFont({
  src: "../fonts/permanent-marker.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-handwriting",
  preload: false,
  fallback: ["cursive"],
  adjustFontFallback: false,
});
const mono = localFont({
  src: "../fonts/ibm-plex-mono.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-mono",
  fallback: ["monospace"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ARCANE — A beleza do caos",
  description:
    "Duas cidades. Um conflito. Uma experiência editorial sobre o universo de Arcane, suas personagens e as marcas que ficam. Projeto de fã.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${condensed.variable} ${handwriting.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
