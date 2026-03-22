"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas", href: "#areas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: scrolled ? "60px" : "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 4vw, 48px)",
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(7,17,31,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Ir al inicio"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Logo monogram */}
          <Image
            src="/logo.png"
            alt="Estudio Jurídico G.N."
            width={44}
            height={44}
            style={{ mixBlendMode: "screen", objectFit: "contain" }}
            priority
          />
          <div
            style={{
              fontSize: "0.52rem",
              letterSpacing: "0.2em",
              color: "var(--text-2)",
              textTransform: "uppercase",
              lineHeight: 1.3,
            }}
          >
            Estudio Jurídico
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                aria-current={isActive ? "true" : undefined}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--gold)" : "var(--text-3)",
                  transition: "color 0.2s",
                  padding: 0,
                  fontFamily: "inherit",
                  fontWeight: isActive ? 600 : 500,
                  position: "relative",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text)"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text-3)"; }}
              >
                {l.label}
              </button>
            );
          })}

          {/* CTA */}
          <button
            onClick={() => scrollTo("#contacto")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              padding: 0,
              fontFamily: "inherit",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Consulta gratuita
            <ArrowUpRight size={12} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "4px",
            display: "flex",
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 85vw)",
              zIndex: 99,
              background: "var(--bg-2)",
              borderLeft: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              padding: "80px 36px 48px",
            }}
          >
            {/* Copper accent line */}
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "var(--gold)",
                marginBottom: "2.5rem",
              }}
            />

            <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {links.map((l, i) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid var(--border-subtle)",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                    padding: "20px 0",
                    textAlign: "left",
                    fontFamily: "inherit",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{l.label}</span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--text-3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollTo("#contacto")}
              style={{
                marginTop: "auto",
                background: "var(--gold)",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "16px 28px",
                fontWeight: 700,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              Consulta gratuita
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay bg */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 98,
              background: "rgba(7,17,31,0.6)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
