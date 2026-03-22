"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Film, Award } from "lucide-react";
import Image from "next/image";

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const stats = [
  { to: 6, suffix: "+", label: "Años de experiencia" },
  { to: 200, suffix: "+", label: "Producciones filmadas" },
  { to: 8, suffix: "", label: "Países" },
  { to: 100, suffix: "%", label: "Clientes satisfechos" },
];

function CountUp({
  to,
  suffix,
  isDark,
}: {
  to: number;
  suffix: string;
  isDark: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <div ref={ref} className="heading-serif" style={{ lineHeight: 1 }}>
      <span
        style={{
          fontSize: "2.2rem",
          fontWeight: isDark ? 400 : 300,
          color: isDark ? "var(--gold)" : "var(--text)",
        }}
      >
        {count}{suffix}
      </span>
    </div>
  );
}

export default function About({ variant }: { variant: "dark" | "minimal" }) {
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
      id="nosotros"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: isDark ? "var(--bg-3)" : "var(--bg-2)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
            gap: isMobile ? "48px" : "80px",
            alignItems: "center",
          }}
        >
          {/* Photo side */}
          <AnimateIn direction="right">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  aspectRatio: isMobile ? "4/3" : "3/4",
                  position: "relative",
                  overflow: "hidden",
                  border: isDark ? "1px solid var(--border-subtle)" : "none",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80&fit=crop&crop=center"
                  alt="Gabriel Lucero — Videógrafo de bodas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {isDark && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 60%)",
                  }} />
                )}
              </div>

              {/* Floating accent — desktop only */}
              {isDark && !isMobile && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <Film size={24} style={{ color: "var(--gold)" }} />
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-2)",
                      textAlign: "center",
                    }}
                  >
                    Wedding
                    <br />
                    Film
                  </span>
                </div>
              )}
            </div>
          </AnimateIn>

          {/* Text side */}
          <div>
            <AnimateIn direction={isMobile ? "up" : "left"}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Sobre mí
              </p>
              <h2
                className="heading-serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: isDark ? 400 : 300,
                  color: "var(--text)",
                  margin: "0 0 2rem",
                  lineHeight: 1.1,
                  letterSpacing: isDark ? "-0.01em" : "-0.03em",
                }}
              >
                {isDark ? (
                  <>
                    Hola, soy Gabriel.
                    <br />
                    <em>Cuento historias</em>
                    <br />
                    con una cámara.
                  </>
                ) : (
                  <>
                    Hola, soy Gabriel.
                    <br />
                    Cuento historias
                    <br />
                    con una cámara.
                  </>
                )}
              </h2>
            </AnimateIn>

            <AnimateIn direction={isMobile ? "up" : "left"} delay={0.1}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                  margin: "0 0 1.2rem",
                }}
              >
                Soy videógrafo especializado en bodas, fiestas de XV y
                videoclips artísticos. Apasionado por capturar la autenticidad
                de cada momento, creo que cada historia merece ser contada con
                belleza, emoción y un estilo cinematográfico único.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                  margin: "0 0 2.5rem",
                }}
              >
                Con más de 6 años de experiencia filmando en Argentina, Colombia,
                Italia y más, mi enfoque es siempre el mismo: ser invisible
                durante el evento para que seas completamente libre, y crear
                una película que te quite el aliento cada vez que la reveas.
              </p>
            </AnimateIn>

            {/* Animated Stats */}
            <AnimateIn direction={isMobile ? "up" : "left"} delay={0.15}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <CountUp to={stat.to} suffix={stat.suffix} isDark={isDark} />
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-2)",
                        letterSpacing: "0.05em",
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Social */}
            <AnimateIn direction={isMobile ? "up" : "left"} delay={0.2}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <a
                  href="https://www.instagram.com/gabriellucero.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-2)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    transition: "color 0.2s",
                    border: "1px solid var(--border)",
                    padding: "10px 20px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
                >
                  <IgIcon />
                  @gabriellucero.ph
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--gold)",
                    fontSize: "0.75rem",
                  }}
                >
                  <Award size={14} />
                  <span style={{ letterSpacing: "0.05em" }}>Premiado 2023</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
