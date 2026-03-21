import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gabriel Lucero · Film & Producción",
  description: "Videografía cinematográfica de bodas, fiestas de XV y videoclips. Capturamos tu historia para que la revivas para siempre.",
  keywords: ["videografía bodas", "wedding film", "Gabriel Lucero", "videógrafo bodas Argentina", "fiestas de XV", "videoclip profesional", "videógrafo XV", "producción audiovisual Argentina"],
  openGraph: {
    title: "Gabriel Lucero · Film & Producción",
    description: "Videografía cinematográfica de bodas, fiestas de XV y videoclips en Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
