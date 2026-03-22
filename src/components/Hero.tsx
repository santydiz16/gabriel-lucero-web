"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "+15", label: "Años" },
  { value: "+800", label: "Casos" },
  { value: "95%", label: "Éxito" },
];

export default function Hero({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
      }}
    >
      {/* ─── LEFT PANEL — text ─── */}
      <div
        style={{
          flex: isMobile ? "none" : "0 0 58%",
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile
            ? "120px 24px 56px"
            : "0 clamp(32px, 6vw, 80px) 0 clamp(24px, 5vw, 72px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: prefersReduced ? 0 : 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
          <span
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
            }}
          >
            Estudio Jurídico G.N.
          </span>
        </motion.div>

        {/* Main headline — bold display */}
        <div style={{ overflow: "hidden", marginBottom: "2rem" }}>
          {["DEFENDEMOS", "LO QUE MÁS", "TE IMPORTA."].map((word, i) => (
            <motion.div
              key={i}
              initial={{ y: prefersReduced ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: prefersReduced ? 0.01 : 0.7,
                delay: prefersReduced ? 0 : 0.35 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ overflow: "hidden" }}
            >
              <h1
                className="heading-display"
                style={{
                  fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
                  color: i === 2 ? "var(--gold)" : "var(--text)",
                  margin: 0,
                }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: prefersReduced ? 0 : 0.75 }}
          style={{
            fontSize: "clamp(0.88rem, 1.6vw, 1rem)",
            color: "var(--text-2)",
            lineHeight: 1.8,
            maxWidth: "400px",
            marginBottom: "2.5rem",
          }}
        >
          Más de una década representando personas y empresas ante la justicia
          argentina con rigor, ética y resultados comprobados.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: prefersReduced ? 0 : 0.9 }}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: isMobile ? "3rem" : "4rem" }}
        >
          <button
            onClick={() => scrollTo("#contacto")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--gold)",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "15px 28px",
              fontWeight: 700,
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Consulta gratuita
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => scrollTo("#areas")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "1px solid var(--border-strong)",
              cursor: "pointer",
              color: "var(--text-2)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "15px 28px",
              fontWeight: 500,
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.color = "var(--text-2)";
            }}
          >
            Nuestras áreas
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReduced ? 0 : 1.1, duration: prefersReduced ? 0.01 : 0.6 }}
          style={{
            display: "flex",
            gap: "0",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.5rem",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                paddingRight: i < stats.length - 1 ? "1.5rem" : 0,
                borderRight: i < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
                marginRight: i < stats.length - 1 ? "1.5rem" : 0,
              }}
            >
              <div
                className="heading-display"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "var(--text)",
                  marginBottom: "2px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Instagram handle — bottom left, desktop only */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReduced ? 0 : 1.3 }}
            style={{
              position: "absolute",
              bottom: "28px",
              left: "clamp(24px, 5vw, 72px)",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-3)",
            }}
          >
            @estudiojuridico.gn
          </motion.div>
        )}
      </div>

      {/* ─── RIGHT PANEL — image ─── */}
      <div
        style={{
          flex: isMobile ? "none" : "1",
          position: "relative",
          height: isMobile ? "45vw" : "auto",
          minHeight: isMobile ? "220px" : "unset",
          overflow: "hidden",
        }}
      >
        {/* Copper vertical stripe — desktop only */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              background: "linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
              zIndex: 2,
            }}
          />
        )}

        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=85&fit=crop&crop=center"
          alt="Palacio de Justicia"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: isMobile ? "center 30%" : "center" }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isMobile
              ? "linear-gradient(to bottom, transparent 40%, var(--bg) 100%)"
              : "linear-gradient(to right, rgba(7,17,31,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Location badge — desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReduced ? 0 : 1.2, duration: prefersReduced ? 0.01 : 0.5 }}
            style={{
              position: "absolute",
              bottom: "32px",
              right: "32px",
              background: "rgba(7,17,31,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              padding: "14px 20px",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "3px",
              }}
            >
              San Luis
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "var(--text-2)",
                letterSpacing: "0.05em",
              }}
            >
              Argentina
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
