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
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Estudio Jurídico G.N. · Abogados en San Luis",
  description: "Defensa jurídica con rigor, ética y resultados. Más de 15 años representando personas y empresas en Argentina. Derecho Civil, Laboral, Penal, Comercial, Familia e Inmobiliario. Primera consulta gratuita.",
  keywords: ["estudio jurídico", "abogados San Luis", "abogado San Luis Argentina", "derecho civil", "derecho laboral", "derecho penal", "derecho de familia", "abogado Argentina", "consulta gratuita", "derecho comercial", "derecho inmobiliario"],
  authors: [{ name: "Estudio Jurídico G.N." }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Estudio Jurídico G.N. · Abogados en San Luis",
    description: "Defensa jurídica con rigor, ética y resultados. +15 años en Argentina. Primera consulta gratuita.",
    type: "website",
    locale: "es_AR",
    siteName: "Estudio Jurídico G.N.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico G.N. · Abogados en San Luis",
    description: "Defensa jurídica con rigor, ética y resultados. +15 años en Argentina. Primera consulta gratuita.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Estudio Jurídico G.N.",
  description: "Estudio jurídico en San Luis especializado en Derecho Civil, Laboral, Penal, Comercial, Familia e Inmobiliario. Más de 15 años de trayectoria.",
  url: "https://estudiojuridico.gn",
  telephone: "+5491100000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Luis",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  sameAs: ["https://www.instagram.com/estudiojuridico.gn"],
  priceRange: "Primera consulta gratuita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
