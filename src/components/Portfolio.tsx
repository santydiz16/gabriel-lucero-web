"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = ["Todo", "Bodas", "Preboda", "Destino"];

const items = [
  {
    id: 1,
    title: "Camila & Martín",
    category: "Bodas",
    location: "Mendoza, Argentina",
    size: "large",
    photo: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1200&q=80&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Valentina & Sebastián",
    category: "Preboda",
    location: "Buenos Aires",
    size: "small",
    photo: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Lucía & Agustín",
    category: "Destino",
    location: "Cartagena, Colombia",
    size: "small",
    photo: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Sofía & Nicolás",
    category: "Bodas",
    location: "Córdoba, Argentina",
    size: "medium",
    photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&q=80&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Florencia & Diego",
    category: "Preboda",
    location: "Tigre, Buenos Aires",
    size: "medium",
    photo: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1000&q=80&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "Antonella & Marcos",
    category: "Destino",
    location: "Toscana, Italia",
    size: "large",
    photo: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200&q=80&fit=crop&crop=center",
  },
];

export default function Portfolio({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeCategory === "Todo"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{
        padding: "120px 0",
        background: isDark ? "var(--bg)" : "var(--bg-2)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <AnimateIn>
          <div style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Portfolio
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
                <>Historias que <em>permanecen</em></>
              ) : (
                "Historias que permanecen"
              )}
            </h2>
          </div>
        </AnimateIn>

        {/* Filter tabs */}
        <AnimateIn delay={0.1}>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background:
                    activeCategory === cat ? "var(--gold)" : "transparent",
                  border: `1px solid ${activeCategory === cat ? "var(--gold)" : "var(--border)"}`,
                  cursor: "pointer",
                  color:
                    activeCategory === cat
                      ? isDark
                        ? "#080808"
                        : "#fff"
                      : "var(--text-2)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 20px",
                  fontWeight: activeCategory === cat ? 600 : 400,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const colSpan =
                item.size === "large"
                  ? "span 8"
                  : item.size === "medium"
                  ? "span 6"
                  : "span 4";
              const aspectRatio =
                item.size === "large" ? "16/9" : item.size === "medium" ? "4/3" : "3/4";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={{
                    gridColumn: colSpan,
                    position: "relative",
                    aspectRatio,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Real wedding photo */}
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.6s ease" }}
                  />

                  {/* Hover overlay */}
                  <motion.div
                    animate={{ opacity: hovered === item.id ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isDark
                        ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 70%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "24px",
                    }}
                  >
                    {isDark && (
                      <div
                        style={{
                          width: "2rem",
                          height: "1px",
                          background: "var(--gold)",
                          marginBottom: "0.75rem",
                        }}
                      />
                    )}
                    <p
                      className={isDark ? "heading-serif" : ""}
                      style={{
                        fontSize: isDark ? "1.1rem" : "1rem",
                        fontWeight: 400,
                        color: "#fff",
                        margin: 0,
                        fontStyle: isDark ? "italic" : "normal",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        color: isDark ? "var(--gold)" : "rgba(255,255,255,0.7)",
                        margin: "4px 0 0",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.location}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimateIn delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <a
              href="https://www.instagram.com/gabriellucero.ph"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--gold)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "4px",
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
            >
              Ver más en Instagram <ArrowRight size={14} />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
