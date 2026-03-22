"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "Primer contacto",
    description:
      "Me contás sobre su historia, la fecha y la visión que tienen para su boda. Charlamos sobre qué los hace únicos como pareja.",
  },
  {
    number: "02",
    title: "Planificación",
    description:
      "Nos reunimos para coordinar cada detalle: el cronograma del día, los momentos clave, las locaciones y el estilo cinematográfico que quieren.",
  },
  {
    number: "03",
    title: "El gran día",
    description:
      "Llego temprano, me integro naturalmente a la celebración y capturo cada emoción de forma discreta. Tu única preocupación es disfrutar.",
  },
  {
    number: "04",
    title: "La entrega",
    description:
      "Edito su película con cuidado artesanal y se las entrego en el plazo acordado. La podrán revivir para siempre, y compartir con quienes más aman.",
  },
];

export default function Process({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="proceso"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: isDark ? "var(--bg)" : "var(--bg-2)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        {/* Header */}
        <AnimateIn>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "5rem",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Proceso
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
                    Cómo <em>trabajamos</em>
                    <br />
                    juntos
                  </>
                ) : (
                  <>
                    Cómo trabajamos
                    <br />
                    juntos
                  </>
                )}
              </h2>
            </div>
            <p
              style={{
                maxWidth: "340px",
                fontSize: "0.9rem",
                color: "var(--text-2)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Un proceso simple y humano, pensado para que se sientan
              acompañados en cada paso del camino.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
            gap: isMobile ? "32px" : isDark ? "0" : "48px",
            position: "relative",
          }}
        >
          {/* Connecting line — dark only */}
          {isDark && (
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, var(--border), transparent)",
                display: "none", // hidden on mobile, shown via CSS
              }}
              className="md:block"
            />
          )}

          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 0.12}>
              <div
                style={{
                  padding: isDark ? "0 24px" : "0",
                  borderLeft: isDark
                    ? index !== 0
                      ? "1px solid var(--border-subtle)"
                      : "none"
                    : "none",
                  borderTop: !isDark ? `2px solid var(--border)` : "none",
                  paddingTop: !isDark ? "32px" : "0",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontSize: isDark ? "3rem" : "0.8rem",
                    fontWeight: isDark ? 400 : 600,
                    color: isDark ? "var(--gold)" : "var(--text-3)",
                    lineHeight: 1,
                    marginBottom: isDark ? "1.5rem" : "1.5rem",
                    fontFamily: isDark
                      ? "var(--font-playfair, 'Playfair Display', serif)"
                      : "inherit",
                    letterSpacing: isDark ? "0" : "0.05em",
                  }}
                >
                  {isDark ? step.number.replace("0", "") : step.number}
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: isDark ? 500 : 500,
                    color: "var(--text)",
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
