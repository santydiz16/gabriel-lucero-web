import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Lucero · Wedding Film",
  description: "Videografía de bodas cinematográfica. Capturamos tu historia para que la revivas para siempre.",
  keywords: ["videografía bodas", "wedding film", "Gabriel Lucero", "videógrafo bodas Argentina"],
  openGraph: {
    title: "Gabriel Lucero · Wedding Film",
    description: "Videografía de bodas cinematográfica.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
