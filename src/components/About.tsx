"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import Image from "next/image";

const pillars = [
  {
    num: "01",
    title: "Ética ante todo",
    desc: "Actuamos con integridad en cada caso, sin comprometer valores por resultados.",
  },
  {
    num: "02",
    title: "Estrategia sólida",
    desc: "Cada expediente se analiza en profundidad antes de dar el primer paso.",
  },
  {
    num: "03",
    title: "Comunicación real",
    desc: "Te informamos en cada etapa. Sin tecnicismos, sin sorpresas.",
  },
  {
    num: "04",
    title: "Resultados concretos",
    desc: "Trabajamos con metas claras y medibles desde la primera consulta.",
  },
];

export default function About({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="nosotros"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 clamp(32px, 5vw, 72px)",
        }}
      >
        {/* Section label */}
        <AnimateIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: isMobile ? "2rem" : "3rem",
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
              Nosotros
            </span>
          </div>
        </AnimateIn>

        {/* Main row: photo + text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            marginBottom: isMobile ? "56px" : "80px",
            alignItems: "start",
          }}
        >
          {/* Image with number overlay */}
          <AnimateIn direction="right">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&fit=crop&crop=center"
                  alt="Equipo del estudio jurídico"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Navy overlay for sophistication */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(7,17,31,0.2)",
                  }}
                />
              </div>

              {/* Large number decoration */}
              <div
                className="heading-display"
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-16px",
                  fontSize: "8rem",
                  color: "var(--bg-4)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                GN
              </div>
            </div>
          </AnimateIn>

          {/* Text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: isMobile ? 0 : "2rem",
            }}
          >
            <AnimateIn direction="left">
              {/* Pull quote in serif */}
              <blockquote
                className="heading-serif"
                style={{
                  fontSize: isMobile ? "1.3rem" : "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text)",
                  lineHeight: 1.45,
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "24px",
                  margin: "0 0 2rem",
                }}
              >
                "Cada caso importa. Cada cliente merece una defensa a la altura
                de sus derechos."
              </blockquote>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.1}>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-2)",
                  lineHeight: 1.85,
                  margin: "0 0 1.2rem",
                }}
              >
                El Estudio Jurídico G.N. nació de la convicción de que el acceso
                a una defensa legal de calidad no debería ser un privilegio.
                Fundado por profesionales con más de 15 años de trayectoria,
                combinamos experiencia técnica con un enfoque humano y directo.
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-2)",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                Trabajamos en las principales ramas del derecho argentino con
                una metodología clara: escuchar primero, estrategia después,
                resultados siempre.
              </p>
            </AnimateIn>

            {/* Tags */}
            <AnimateIn direction="left" delay={0.15}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "2rem",
                }}
              >
                {[
                  "Matrícula activa",
                  "Confidencialidad",
                  "Colegio de Abogados CABA",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "6px 14px",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Pillars grid — 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {pillars.map((p, i) => (
            <AnimateIn key={p.num} delay={i * 0.08}>
              <div
                style={{
                  padding: isMobile ? "28px 16px 28px 0" : "40px 32px 40px 0",
                  borderRight:
                    (isMobile && i % 2 === 0) || (!isMobile && i < 3)
                      ? "1px solid var(--border-subtle)"
                      : "none",
                  paddingRight: "32px",
                }}
              >
                <div
                  className="heading-display"
                  style={{
                    fontSize: "2.5rem",
                    color: "var(--bg-3)",
                    marginBottom: "16px",
                    lineHeight: 1,
                  }}
                >
                  {p.num}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "0.02em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
