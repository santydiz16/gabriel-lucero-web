"use client";

import AnimateIn from "./AnimateIn";
import { Check, Star } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Esencial",
    tagline: "Para parejas que quieren lo esencial",
    price: "Consultar",
    features: [
      "1 cámara profesional",
      "Hasta 6 horas de cobertura",
      "Película principal (3–5 min)",
      "Entrega en 60 días",
      "Formato digital en alta resolución",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    tagline: "El más elegido por nuestras parejas",
    price: "Consultar",
    features: [
      "2 cámaras profesionales",
      "Hasta 10 horas de cobertura",
      "Película principal (8–12 min)",
      "Teaser para redes sociales (60 seg)",
      "Entrega en 45 días",
      "Formato digital en 4K",
      "1 reunión de planificación",
    ],
    highlighted: true,
  },
  {
    name: "Luxury",
    tagline: "Una experiencia cinematográfica completa",
    price: "Consultar",
    features: [
      "2 cámaras + drone aéreo",
      "Día completo de cobertura",
      "Película principal (15–20 min)",
      "Teaser + Highlight reel",
      "Entrega en 30 días",
      "Formato digital en 4K",
      "2 reuniones de planificación",
      "Álbum digital de momentos",
    ],
    highlighted: false,
  },
];

export default function Services({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      style={{
        padding: "120px 0",
        background: isDark ? "var(--bg-2)" : "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <AnimateIn>
          <div style={{ marginBottom: "5rem", maxWidth: "560px" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Servicios
            </p>
            <h2
              className="heading-serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: isDark ? 400 : 300,
                color: "var(--text)",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: isDark ? "-0.01em" : "-0.03em",
              }}
            >
              {isDark ? (
                <>
                  Elegí el paquete
                  <br />
                  <em>perfecto para vos</em>
                </>
              ) : (
                <>
                  Elegí el paquete
                  <br />
                  perfecto para vos
                </>
              )}
            </h2>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {packages.map((pkg, index) => (
            <AnimateIn key={pkg.name} delay={index * 0.1}>
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  padding: "40px 36px",
                  background: pkg.highlighted
                    ? isDark
                      ? "var(--bg-3)"
                      : "var(--text)"
                    : isDark
                    ? "var(--bg-3)"
                    : "var(--bg-3)",
                  border: pkg.highlighted
                    ? `1px solid var(--gold)`
                    : `1px solid var(--border-subtle)`,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transform: hovered === index ? "translateY(-4px)" : "none",
                  boxShadow:
                    hovered === index
                      ? isDark
                        ? "0 20px 60px rgba(0,0,0,0.5)"
                        : "0 20px 60px rgba(0,0,0,0.08)"
                      : "none",
                }}
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "36px",
                      background: "var(--gold)",
                      color: isDark ? "#080808" : "#fff",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Star size={10} fill="currentColor" /> El más elegido
                  </div>
                )}

                <div style={{ marginTop: pkg.highlighted ? "16px" : "0" }}>
                  <h3
                    className={isDark ? "heading-serif" : ""}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: isDark ? 400 : 300,
                      color:
                        pkg.highlighted && !isDark ? "#fff" : "var(--text)",
                      margin: "0 0 8px",
                      fontStyle: isDark ? "italic" : "normal",
                      letterSpacing: isDark ? "0" : "-0.02em",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color:
                        pkg.highlighted && !isDark
                          ? "rgba(255,255,255,0.6)"
                          : "var(--text-2)",
                      margin: "0 0 2rem",
                    }}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: "2rem",
                      height: "1px",
                      background: pkg.highlighted ? "var(--gold)" : "var(--border)",
                      marginBottom: "2rem",
                    }}
                  />

                  {/* Features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem" }}>
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          marginBottom: "12px",
                          fontSize: "0.85rem",
                          color:
                            pkg.highlighted && !isDark
                              ? "rgba(255,255,255,0.85)"
                              : "var(--text-2)",
                        }}
                      >
                        <Check
                          size={14}
                          style={{
                            color: "var(--gold)",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "14px",
                      background: pkg.highlighted ? "var(--gold)" : "transparent",
                      border: `1px solid ${pkg.highlighted ? "var(--gold)" : pkg.highlighted && !isDark ? "rgba(255,255,255,0.3)" : "var(--border)"}`,
                      color: pkg.highlighted
                        ? isDark
                          ? "#080808"
                          : "#fff"
                        : pkg.highlighted && !isDark
                        ? "#fff"
                        : "var(--text)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "all 0.2s",
                    }}
                  >
                    Consultar precio
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note */}
        <AnimateIn delay={0.3}>
          <p
            style={{
              textAlign: "center",
              marginTop: "3rem",
              fontSize: "0.8rem",
              color: "var(--text-2)",
            }}
          >
            ¿Tenés algo en mente diferente?{" "}
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--gold)",
                fontSize: "0.8rem",
                textDecoration: "underline",
                padding: 0,
              }}
            >
              Hablemos y creamos un paquete a medida.
            </button>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
