"use client";

import { Instagram } from "lucide-react";

export default function Footer({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";

  return (
    <footer
      style={{
        padding: "48px 32px",
        borderTop: "1px solid var(--border-subtle)",
        background: isDark ? "var(--bg)" : "var(--bg-2)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: isDark
                ? "var(--font-playfair, 'Playfair Display', serif)"
                : "inherit",
              fontSize: "1rem",
              fontWeight: isDark ? 500 : 300,
              color: "var(--text)",
              letterSpacing: isDark ? "0.06em" : "-0.02em",
            }}
          >
            Gabriel Lucero
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Wedding Film
          </div>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-3)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Gabriel Lucero. Todos los derechos reservados.
        </p>

        <a
          href="https://www.instagram.com/gabriellucero.ph"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--text-2)",
            textDecoration: "none",
            fontSize: "0.8rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
        >
          <Instagram size={16} />
          @gabriellucero.ph
        </a>
      </div>
    </footer>
  );
}
