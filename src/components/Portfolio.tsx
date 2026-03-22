"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const categories = ["Todo", "Bodas", "XV", "Videoclips", "Destino"];

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
    category: "Bodas",
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
    title: "Valentina — XV años",
    category: "XV",
    location: "Buenos Aires, Argentina",
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
  {
    id: 7,
    title: "Isabela — XV años",
    category: "XV",
    location: "Córdoba, Argentina",
    size: "small",
    photo: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Matías Vega — Videoclip",
    category: "Videoclips",
    location: "Estudio, Buenos Aires",
    size: "large",
    photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&fit=crop&crop=center",
  },
  {
    id: 9,
    title: "La Rueda — Videoclip",
    category: "Videoclips",
    location: "Locación exterior, CABA",
    size: "small",
    photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&fit=crop&crop=center",
  },
];

export default function Portfolio({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [hovered, setHovered] = useState<number | null>(null);
  const [lightboxItem, setLightboxItem] = useState<(typeof items)[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxItem]);

  const filtered =
    activeCategory === "Todo"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: isDark ? "var(--bg)" : "var(--bg-2)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        {/* Header */}
        <AnimateIn>
          <div style={{ marginBottom: isMobile ? "2.5rem" : "4rem" }}>
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
              gap: "0.4rem",
              marginBottom: isMobile ? "1.5rem" : "3rem",
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
                  fontSize: isMobile ? "0.65rem" : "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: isMobile ? "7px 14px" : "8px 20px",
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
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : "repeat(12, 1fr)",
            gap: isMobile ? "8px" : "16px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              // On mobile: large items full-width, others half-width
              const mobileSpan = item.size === "large" ? "span 2" : "span 1";
              const desktopSpan =
                item.size === "large"
                  ? "span 8"
                  : item.size === "medium"
                  ? "span 6"
                  : "span 4";
              const colSpan = isMobile ? mobileSpan : desktopSpan;

              const aspectRatio = isMobile
                ? item.size === "large"
                  ? "16/9"
                  : "3/4"
                : item.size === "large"
                ? "16/9"
                : item.size === "medium"
                ? "4/3"
                : "3/4";

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
                  onClick={() => setLightboxItem(item)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Photo */}
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.6s ease",
                      transform: hovered === item.id ? "scale(1.04)" : "scale(1)",
                    }}
                  />

                  {/* Hover overlay — on mobile always slightly visible */}
                  <motion.div
                    animate={{ opacity: isMobile ? 1 : hovered === item.id ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isDark
                        ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 70%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: isMobile ? "12px" : "24px",
                    }}
                  >
                    {/* Zoom icon — desktop only */}
                    {!isMobile && (
                      <ZoomIn
                        size={16}
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          color: "rgba(255,255,255,0.8)",
                        }}
                      />
                    )}

                    {isDark && !isMobile && (
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
                        fontSize: isMobile ? "0.78rem" : isDark ? "1.1rem" : "1rem",
                        fontWeight: 400,
                        color: "#fff",
                        margin: 0,
                        fontStyle: isDark ? "italic" : "normal",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </p>
                    {!isMobile && (
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
                    )}
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

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxItem(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.96)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "16px" : "24px",
              cursor: "zoom-out",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxItem(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <X size={18} />
            </button>

            {/* Image + caption */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "1000px",
                width: "100%",
                cursor: "default",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxItem.photo}
                alt={lightboxItem.title}
                style={{
                  width: "100%",
                  maxHeight: isMobile ? "65vh" : "76vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <div
                style={{
                  paddingTop: "16px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <p
                  className="heading-serif"
                  style={{
                    color: "#F5F0E8",
                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {lightboxItem.title}
                </p>
                <p
                  style={{
                    color: "#C9A85C",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {lightboxItem.location} · {lightboxItem.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
