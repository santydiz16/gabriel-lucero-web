"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar({ variant }: { variant: "dark" | "minimal" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 32px",
          height: scrolled ? "64px" : "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          background: scrolled
            ? isDark
              ? "rgba(8,8,8,0.92)"
              : "rgba(250,250,248,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${isDark ? "rgba(201,168,92,0.15)" : "rgba(0,0,0,0.08)"}`
            : "none",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
        >
          <div
            style={{
              fontFamily: isDark ? "var(--font-playfair, 'Playfair Display', serif)" : "var(--font-inter, Inter, sans-serif)",
              fontSize: "1.1rem",
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
              marginTop: "2px",
              textTransform: "uppercase",
            }}
          >
            Wedding Film
          </div>
        </button>

        {/* Desktop nav */}
        <nav style={{ gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                transition: "color 0.2s",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacto")}
            style={{
              background: "var(--gold)",
              border: "none",
              cursor: "pointer",
              color: isDark ? "#080808" : "#fff",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "10px 24px",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Reservar fecha
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "4px",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: isDark ? "#080808" : "#FAFAF8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  fontFamily: isDark ? "var(--font-playfair, 'Playfair Display', serif)" : "inherit",
                  fontStyle: isDark ? "italic" : "normal",
                  color: "var(--text)",
                  fontWeight: 400,
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacto")}
              style={{
                background: "var(--gold)",
                border: "none",
                cursor: "pointer",
                color: isDark ? "#080808" : "#fff",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "14px 36px",
                fontWeight: 600,
                marginTop: "1rem",
              }}
            >
              Reservar fecha
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
