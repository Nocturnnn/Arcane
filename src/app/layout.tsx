import type { Metadata } from "next";
import "@fontsource/bodoni-moda/900.css";
import "@fontsource/anton/400.css";
import "@fontsource/permanent-marker/400.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import "./chaos.css";

export const metadata: Metadata = {
  title: "ARCANE — A beleza do caos",
  description:
    "Duas cidades. Um conflito. Uma experiência editorial sobre o universo de Arcane, suas personagens e as marcas que ficam. Projeto de fã.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
