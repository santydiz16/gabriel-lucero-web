"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      {isDark ? (
        <>
          {/* Real wedding photo base layer */}
          <Image
            src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1920&q=80&fit=crop&crop=center"
            alt="Wedding ceremony"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Dark cinematic overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.68)" }} />
          {/* Subtle gold vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(201,168,92,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Film grain effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
              opacity: 0.3,
            }}
          />
          {/* Letterbox top/bottom */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
        </>
      ) : (
        <>
          {/* Minimal: real light wedding photo */}
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80&fit=crop&crop=center"
            alt="Wedding reception"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Light overlay for readability */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(250,250,248,0.82)" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: isDark ? "0.25em" : "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: "0.7rem",
            letterSpacing: isDark ? "0.25em" : "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          Wedding Film · Argentina
        </motion.div>

        {/* Headline */}
        <div style={{ overflow: "hidden" }}>
          {["Tu historia", "merece ser", "eterna."].map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <h1
                className="heading-serif"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: isDark ? 400 : 300,
                  lineHeight: 1.05,
                  color: "var(--text)",
                  margin: 0,
                  fontStyle: isDark && i === 2 ? "italic" : "normal",
                  letterSpacing: isDark ? "-0.01em" : "-0.04em",
                }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "var(--text-2)",
            marginTop: "2rem",
            marginBottom: "3rem",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Capturo cada mirada, cada risa y cada lágrima de alegría para
          que revivan ese día para siempre.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("#portfolio")}
            style={{
              background: "transparent",
              border: `1px solid ${isDark ? "rgba(201,168,92,0.5)" : "rgba(0,0,0,0.3)"}`,
              cursor: "pointer",
              color: "var(--text)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "14px 36px",
              fontWeight: 500,
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-dim)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = isDark ? "rgba(201,168,92,0.5)" : "rgba(0,0,0,0.3)";
            }}
          >
            Ver mi trabajo
          </button>
          <button
            onClick={() => scrollTo("#contacto")}
            style={{
              background: "var(--gold)",
              border: "1px solid var(--gold)",
              cursor: "pointer",
              color: isDark ? "#080808" : "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "14px 36px",
              fontWeight: 600,
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Reservar fecha
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        onClick={() => scrollTo("#portfolio")}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      {/* Side text — dark only */}
      {isDark && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: "absolute",
              left: "32px",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              zIndex: 2,
            }}
          >
            @gabriellucero.ph
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              position: "absolute",
              right: "32px",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              zIndex: 2,
            }}
          >
            Buenos Aires · Argentina
          </motion.div>
        </>
      )}
    </section>
  );
}
