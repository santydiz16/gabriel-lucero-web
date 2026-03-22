"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    name: "M. González",
    context: "Derecho Laboral · 2024",
    text: "Llegué al estudio en un momento muy difícil, luego de un despido injustificado. Me explicaron todo sin tecnicismos y me acompañaron en cada paso. El resultado superó lo que esperaba.",
    highlight: "El resultado superó lo que esperaba.",
  },
  {
    name: "F. Rodríguez",
    context: "Derecho de Familia · 2024",
    text: "Un divorcio muy complejo resuelto con una profesionalidad y sensibilidad que no esperaba. Rápido, claro y en los mejores términos. Los recomiendo sin dudarlo.",
    highlight: "Rápido, claro y en los mejores términos.",
  },
  {
    name: "Empresa Textil S.A.",
    context: "Derecho Comercial · 2023",
    text: "Buscábamos un estudio que entendiera nuestro negocio. Nos asesoraron en la restructuración societaria y en contratos clave. Su respuesta siempre fue rápida y precisa.",
    highlight: "Su respuesta siempre fue rápida y precisa.",
  },
  {
    name: "C. Martínez",
    context: "Derecho Civil · 2023",
    text: "Un conflicto por herencia que parecía sin salida. En pocas semanas lograron un acuerdo que protegió mis derechos sin llegar a juicio. Excelente trabajo.",
    highlight: "Protegió mis derechos sin llegar a juicio.",
  },
  {
    name: "R. Pérez",
    context: "Derecho Penal · 2024",
    text: "En la situación más difícil de mi vida, contar con abogados que realmente defiendan tu causa hace toda la diferencia. Rapidez, claridad y estrategia impecable.",
    highlight: "Rapidez, claridad y estrategia impecable.",
  },
  {
    name: "L. Sánchez",
    context: "Derecho Inmobiliario · 2024",
    text: "Tuve un problema complejo con un inquilino que no pagaba. El desalojo se resolvió mucho más rápido de lo que pensaba. Muy profesionales y atentos en todo momento.",
    highlight: "Se resolvió mucho más rápido de lo que pensaba.",
  },
];

export default function Testimonials({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="testimonios"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: "var(--bg-2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 clamp(32px, 5vw, 72px)",
        }}
      >
        {/* Header */}
        <AnimateIn>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              marginBottom: isMobile ? "2.5rem" : "4rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ width: "24px", height: "2px", background: "var(--gold)" }} />
                <span
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Testimonios
                </span>
              </div>
              <h2
                className="heading-display"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                LO QUE DICEN
                <br />
                NUESTROS CLIENTES.
              </h2>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
                maxWidth: "280px",
                margin: 0,
              }}
            >
              Nombres abreviados para preservar la privacidad de nuestros clientes.
            </p>
          </div>
        </AnimateIn>

        {/* Masonry 2-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--border-subtle)",
          }}
        >
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 0.06}>
              <TestimonialCard t={t} index={i} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg-3)" : "var(--bg-2)",
        padding: "40px 36px",
        transition: "background 0.25s",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        borderTop: index === 0 || index === 1 ? "3px solid var(--gold)" : "none",
      }}
    >
      {/* Highlighted quote */}
      <div
        className="heading-serif"
        style={{
          fontSize: "1.05rem",
          fontStyle: "italic",
          fontWeight: 400,
          color: "var(--gold)",
          lineHeight: 1.4,
        }}
      >
        &ldquo;{t.highlight}&rdquo;
      </div>

      {/* Full text */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-2)",
          lineHeight: 1.8,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {t.text}
      </p>

      {/* Attribution */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {/* Initial badge */}
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "var(--gold-dim)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            className="heading-display"
            style={{ fontSize: "0.85rem", color: "var(--gold)" }}
          >
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "0.02em",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: "0.68rem",
              color: "var(--gold)",
              letterSpacing: "0.08em",
              marginTop: "2px",
            }}
          >
            {t.context}
          </div>
        </div>
      </div>
    </div>
  );
}
