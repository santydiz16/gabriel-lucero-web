"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const areaLinks = [
  "Derecho Civil",
  "Derecho Laboral",
  "Derecho Penal",
  "Derecho Comercial",
  "Derecho de Familia",
  "Derecho Inmobiliario",
];

export default function Footer({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border-subtle)" }}>
      {/* Top CTA strip */}
      <div
        style={{
          background: "var(--gold)",
          padding: isMobile ? "24px 20px" : "20px clamp(32px, 5vw, 72px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span
          className="heading-display"
          style={{ fontSize: isMobile ? "1rem" : "1.1rem", color: "#fff", letterSpacing: "-0.01em" }}
        >
          PRIMERA CONSULTA GRATUITA — SIN COMPROMISO.
        </span>
        <button
          onClick={() => scrollTo("#contacto")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "1px solid rgba(255,255,255,0.4)",
            cursor: "pointer",
            color: "#fff",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "10px 20px",
            fontWeight: 700,
            fontFamily: "inherit",
            transition: "border-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
        >
          Contactanos
          <ArrowUpRight size={12} />
        </button>
      </div>

      {/* Main grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "48px 20px 36px" : "64px clamp(32px, 5vw, 72px) 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
          gap: isMobile ? "40px" : "64px",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <Image
              src="/logo.png"
              alt="Estudio Jurídico G.N."
              width={52}
              height={52}
              style={{ mixBlendMode: "screen", objectFit: "contain", flexShrink: 0 }}
            />
            <div
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.2em",
                color: "var(--text-3)",
                textTransform: "uppercase",
                lineHeight: 1.4,
              }}
            >
              Estudio Jurídico
            </div>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-2)",
              lineHeight: 1.8,
              maxWidth: "300px",
              marginBottom: "1.5rem",
            }}
          >
            Defensa jurídica con rigor, ética y compromiso. Más de 15 años
            acompañando a personas y empresas en Argentina.
          </p>

          <a
            href="https://www.instagram.com/estudiojuridico.gn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-3)",
              textDecoration: "none",
              fontSize: "0.75rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
          >
            <IgIcon />
            @estudiojuridico.gn
          </a>
        </div>

        {/* Nav */}
        <div>
          <div
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 700,
              marginBottom: "1.2rem",
            }}
          >
            Navegación
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  color: "var(--text-2)",
                  padding: "3px 0",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Areas */}
        <div>
          <div
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 700,
              marginBottom: "1.2rem",
            }}
          >
            Áreas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {areaLinks.map((area) => (
              <button
                key={area}
                onClick={() => scrollTo("#areas")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  color: "var(--text-2)",
                  padding: "3px 0",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          padding: isMobile ? "16px 20px" : "18px clamp(32px, 5vw, 72px)",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "0.68rem", color: "var(--text-3)" }}>
          © {new Date().getFullYear()} Estudio Jurídico G.N. — San Luis, Argentina.
        </span>
        <span style={{ fontSize: "0.68rem", color: "var(--text-3)" }}>
          Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
