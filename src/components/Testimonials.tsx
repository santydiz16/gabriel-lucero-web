"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    couple: "Camila & Martín",
    date: "Boda · Marzo 2024 · Mendoza",
    text: "Gabriel tiene una sensibilidad única para capturar lo que importa. Cuando vimos nuestra película por primera vez, lloramos como si estuviéramos viviendo ese día de nuevo. Cada mirada, cada abrazo... todo está ahí. Es un artista.",
    rating: 5,
  },
  {
    couple: "Valentina & Sebastián",
    date: "Boda · Noviembre 2023 · Buenos Aires",
    text: "Lo mejor que hicimos fue elegir a Gabriel. No lo sentimos como un extraño ese día — era parte de la celebración. La película superó todo lo que imaginamos. Nuestras familias la ven una y otra vez.",
    rating: 5,
  },
  {
    couple: "Isabela Torres",
    date: "XV años · Agosto 2024 · Córdoba",
    text: "Para los XV de mi hija quería algo diferente, algo que ella pudiera ver de grande y emocionarse. Gabriel entendió eso desde el primer minuto. El resultado fue una película preciosa que la hizo llorar de emoción. Todos nuestros familiares ya le pidieron su contacto.",
    rating: 5,
  },
  {
    couple: "Matías Vega",
    date: "Videoclip · Enero 2024 · Buenos Aires",
    text: "Trabajar con Gabriel fue una experiencia increíble. Entiende la música, entiende la estética, y sabe cómo traducir una canción en imágenes. Mi videoclip quedó a un nivel cinematográfico que no esperaba. Definitivamente lo llamo para el próximo.",
    rating: 5,
  },
  {
    couple: "Florencia & Diego",
    date: "Boda · Mayo 2024 · Córdoba",
    text: "Desde la primera reunión supimos que estábamos en las manos correctas. Gabriel entendió exactamente el estilo que queríamos y lo llevó a otro nivel. Cada vez que lo mostramos a alguien, nos piden su contacto.",
    rating: 5,
  },
];

export default function Testimonials({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      id="testimonios"
      style={{
        padding: "120px 0",
        background: isDark ? "var(--bg-2)" : "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      {isDark && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,92,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Header */}
        <AnimateIn>
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Testimonios
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
                  Lo que dicen
                  <br />
                  <em>nuestros clientes</em>
                </>
              ) : (
                <>
                  Lo que dicen
                  <br />
                  nuestros clientes
                </>
              )}
            </h2>
          </div>
        </AnimateIn>

        {/* Testimonial card */}
        <div
          style={{
            position: "relative",
            minHeight: "320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Quote icon */}
          <Quote
            size={isDark ? 48 : 32}
            style={{
              color: isDark ? "rgba(201,168,92,0.2)" : "rgba(0,0,0,0.06)",
              marginBottom: "1.5rem",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote
                className={isDark ? "heading-serif" : ""}
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: isDark ? 400 : 300,
                  fontStyle: isDark ? "italic" : "normal",
                  color: "var(--text)",
                  lineHeight: 1.6,
                  margin: "0 0 2.5rem",
                  letterSpacing: isDark ? "0" : "-0.01em",
                }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: isDark
                      ? "linear-gradient(135deg, #2d1f0a, #1a1208)"
                      : "linear-gradient(135deg, #e8e4dc, #d0ccc4)",
                    border: `1px solid var(--border)`,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: "var(--gold)",
                    fontFamily: isDark ? "var(--font-playfair, serif)" : "inherit",
                    fontStyle: "italic",
                  }}
                >
                  {testimonials[current].couple[0]}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      margin: 0,
                    }}
                  >
                    {testimonials[current].couple}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--gold)",
                      margin: "3px 0 0",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {testimonials[current].date}
                  </p>
                </div>
                {/* Stars */}
                <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: "0.8rem" }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          {/* Dots */}
          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === current ? "var(--gold)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={prev}
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--border)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-2)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-2)";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--border)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-2)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-2)";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
