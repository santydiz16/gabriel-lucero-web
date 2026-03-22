"use client";

import { useState, useEffect } from "react";

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Armá tu paquete", href: "#arma-tu-pack" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Sobre mí", href: "#nosotros" },
];

const serviceLinks = [
  { label: "Bodas", href: "#servicios" },
  { label: "Fiestas de XV", href: "#servicios" },
  { label: "Videoclips", href: "#servicios" },
  { label: "Destino", href: "#servicios" },
];

export default function Footer({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: `1px solid var(--border-subtle)`,
        background: isDark ? "var(--bg)" : "var(--bg-2)",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: isMobile ? "48px 20px 40px" : "64px 32px 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
          gap: isMobile ? "40px" : "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, marginBottom: "1.25rem" }}
          >
            <div
              style={{
                fontFamily: isDark ? "var(--font-playfair, 'Playfair Display', serif)" : "inherit",
                fontSize: "1.15rem",
                fontWeight: isDark ? 500 : 300,
                letterSpacing: isDark ? "0.08em" : "-0.02em",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              Gabriel Lucero
            </div>
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              Film & Producción
            </div>
          </button>

          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
              margin: "0 0 1.5rem",
              maxWidth: "300px",
            }}
          >
            Videografía cinematográfica de bodas, fiestas de XV y videoclips
            en Argentina y el mundo.
          </p>

          <a
            href="https://www.instagram.com/gabriellucero.ph"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-2)",
              textDecoration: "none",
              fontSize: "0.82rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <IgIcon />
            @gabriellucero.ph
          </a>
        </div>

        {/* Navigation column */}
        <div>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              margin: "0 0 1.25rem",
            }}
          >
            Navegación
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {navLinks.map((link) => (
              <button
                key={link.href + link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                  fontSize: "0.85rem",
                  color: "var(--text-2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Services + Contact column */}
        <div>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              margin: "0 0 1.25rem",
            }}
          >
            Servicios
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2rem" }}>
            {serviceLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                  fontSize: "0.85rem",
                  color: "var(--text-2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              margin: "0 0 1rem",
            }}
          >
            Contacto
          </p>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontSize: "0.85rem",
              color: "var(--text-2)",
              textDecoration: "none",
              transition: "color 0.2s",
              marginBottom: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            WhatsApp
          </a>
          <p style={{ fontSize: "0.82rem", color: "var(--text-3)", margin: 0 }}>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid var(--border-subtle)`,
          padding: isMobile ? "20px" : "20px 32px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            color: "var(--text-3)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Gabriel Lucero. Todos los derechos reservados.
        </p>
        <button
          onClick={() => scrollTo("#contacto")}
          style={{
            background: "var(--gold)",
            border: "none",
            cursor: "pointer",
            color: isDark ? "#080808" : "#fff",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "9px 20px",
            fontWeight: 600,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
        >
          Reservar fecha
        </button>
      </div>
    </footer>
  );
}
