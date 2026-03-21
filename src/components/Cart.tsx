"use client";

import { useState, useMemo, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import { Plus, ShoppingBag, X, Send, Sparkles, Check } from "lucide-react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "5491100000000"; // ← reemplazar con número real

// ─── DATA ────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "cobertura", label: "Cobertura", icon: "📽" },
  { id: "camara",    label: "Cámaras & Equipo", icon: "🎥" },
  { id: "video",     label: "Entregables", icon: "🎞" },
  { id: "extras",    label: "Extras", icon: "✨" },
];

type Service = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  popular?: boolean;
  included?: boolean;
};

const SERVICES: Service[] = [
  // Cobertura
  { id: "cob-6h",      category: "cobertura", name: "Cobertura 6 horas",        description: "Ideal para bodas compactas, XV o ceremonias civiles",             price: 800,  unit: "evento" },
  { id: "cob-10h",     category: "cobertura", name: "Cobertura 10 horas",        description: "La más popular — cubre ceremonia y recepción completa",           price: 1200, unit: "evento", popular: true },
  { id: "cob-full",    category: "cobertura", name: "Día completo",               description: "Desde los preparativos hasta el último baile sin límite horario", price: 1800, unit: "evento" },
  { id: "cob-presession", category: "cobertura", name: "Sesión previa al evento", description: "Sesión cinematográfica íntima antes del gran día",               price: 400,  unit: "sesión" },

  // Cámaras & Equipo
  { id: "cam-segunda", category: "camara", name: "Segunda cámara profesional",  description: "Capturá cada momento desde dos ángulos simultáneos",             price: 300, unit: "evento", popular: true },
  { id: "cam-drone",   category: "camara", name: "Dron cinematográfico",         description: "Tomas aéreas épicas que elevan cualquier producción",            price: 350, unit: "evento" },
  { id: "cam-slowmo",  category: "camara", name: "Cámara slow motion",           description: "Momentos congelados a 120 fps — emociones en detalle",           price: 200, unit: "evento" },
  { id: "cam-gopro",   category: "camara", name: "Cámara de acción",             description: "Perspectivas únicas e íntimas desde ángulos imposibles",         price: 100, unit: "evento" },

  // Entregables
  { id: "vid-teaser",    category: "video", name: "Teaser para redes (60 seg)",      description: "Perfecto para compartir en Instagram y TikTok al instante",    price: 150, unit: "video", popular: true },
  { id: "vid-highlight", category: "video", name: "Highlight reel (3 min)",          description: "Los mejores momentos del evento en un corte dinámico",         price: 200, unit: "video" },
  { id: "vid-sde",       category: "video", name: "Same-day edit",                   description: "Un corte especial revelado en vivo durante la misma fiesta",   price: 400, unit: "evento" },
  { id: "vid-extendida", category: "video", name: "Película extendida (15–20 min)",  description: "Cada detalle y momento preservado en toda su profundidad",     price: 300, unit: "video" },
  { id: "vid-pelicula",  category: "video", name: "Película principal (8–12 min)",   description: "Tu historia narrada de principio a fin — siempre incluida",    price: 0,   unit: "incluido", included: true },

  // Extras
  { id: "ext-preparativos", category: "extras", name: "Preparativos del festejado/a", description: "Los momentos más íntimos de producción antes del evento",     price: 200, unit: "servicio" },
  { id: "ext-civil",         category: "extras", name: "Ceremonia adicional",          description: "¿Tiene iglesia y civil? ¿Pre-show y show? Cubrimos todo",     price: 300, unit: "evento" },
  { id: "ext-usb",           category: "extras", name: "USB premium artesanal",        description: "Tu evento en un pendrive con el nombre personalizado grabado", price: 80,  unit: "unidad" },
  { id: "ext-express",       category: "extras", name: "Entrega express (15 días)",    description: "¿No podés esperar? Recibís tu película en tiempo récord",      price: 250, unit: "servicio" },
  { id: "ext-subtitulos",    category: "extras", name: "Subtítulos y captions",        description: "Para audiencias internacionales o accesibilidad total",        price: 100, unit: "servicio" },
  { id: "ext-videoclip",     category: "extras", name: "Videoclip artístico add-on",   description: "Producción de videoclip profesional para artistas del evento", price: 500, unit: "servicio" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function buildWhatsAppMessage(items: Service[]): string {
  const lines = items.map(
    (s) =>
      `• ${s.name}${s.price > 0 ? ` — USD ${s.price.toLocaleString()}` : " (incluido)"}`
  );
  const total = items.reduce((acc, s) => acc + s.price, 0);
  const msg = [
    "🎬 *Cotización — Gabriel Lucero Films*",
    "",
    "Hola Gabriel! Armé mi paquete de producción y me gustaría recibir información:",
    "",
    "*Servicios seleccionados:*",
    ...lines,
    "",
    `*Total estimado: USD ${total.toLocaleString()}*`,
    "",
    "¿Podríamos coordinar una reunión para hablar de los detalles? 💍",
  ].join("\n");
  return encodeURIComponent(msg);
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Cart({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [activeCategory, setActiveCategory] = useState("cobertura");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        setAddedId(id);
        setTimeout(() => setAddedId(null), 1200);
        if (isMobile) setCartOpen(true);
      }
      return next;
    });
  };

  const visibleServices = SERVICES.filter((s) => s.category === activeCategory);
  const cartItems = useMemo(
    () => SERVICES.filter((s) => selected.has(s.id)),
    [selected]
  );
  const total = cartItems.reduce((acc, s) => acc + s.price, 0);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(cartItems)}`;

  // ── styles ──────────────────────────────────────────────────────────────
  const sectionBg  = isDark ? "var(--bg)"   : "var(--bg-2)";
  const cardBg     = isDark ? "var(--bg-3)" : "var(--bg-3)";
  const subtleText = "var(--text-2)";

  return (
    <section
      id="arma-tu-pack"
      style={{ padding: "120px 0", background: sectionBg, position: "relative" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Header ── */}
        <AnimateIn>
          <div style={{ marginBottom: "4rem", maxWidth: "600px" }}>
            <p style={{
              fontSize: "0.7rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem",
            }}>
              Armá tu paquete
            </p>
            <h2
              className="heading-serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: isDark ? 400 : 300,
                margin: "0 0 1rem",
                lineHeight: 1.1,
                letterSpacing: isDark ? "-0.01em" : "-0.03em",
              }}
            >
              {isDark ? <><em>Tu producción,</em><br />a tu medida</> : <>Tu producción,<br />a tu medida</>}
            </h2>
            <p style={{ fontSize: "0.95rem", color: subtleText, lineHeight: 1.7, margin: 0 }}>
              Seleccioná los servicios que más se ajustan a tu evento — boda, XV o videoclip.
              Cuando termines, te enviamos la cotización directo a WhatsApp.
            </p>
          </div>
        </AnimateIn>

        {/* ── Layout: services + cart ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 340px",
          gap: "32px",
          alignItems: "start",
        }}>

          {/* ── LEFT: service selector ── */}
          <div>
            {/* Category tabs */}
            <AnimateIn>
              <div style={{
                display: "flex", gap: "8px", flexWrap: "wrap",
                marginBottom: "32px",
              }}>
                {CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeCategory;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        padding: "8px 18px",
                        border: isActive ? "1px solid var(--gold)" : "1px solid var(--border-subtle)",
                        background: isActive ? (isDark ? "var(--gold-dim)" : "var(--gold-dim)") : "transparent",
                        color: isActive ? "var(--gold)" : subtleText,
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>{cat.icon}</span> {cat.label}
                    </button>
                  );
                })}
              </div>
            </AnimateIn>

            {/* Service cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
            }}>
              {visibleServices.map((service, i) => {
                const isSelected = selected.has(service.id);
                const justAdded  = addedId === service.id;
                return (
                  <AnimateIn key={service.id} delay={i * 0.05}>
                    <div
                      onClick={() => !service.included && toggle(service.id)}
                      style={{
                        position: "relative",
                        padding: "24px",
                        background: isSelected
                          ? isDark ? "rgba(201,168,92,0.08)" : "rgba(201,168,92,0.05)"
                          : cardBg,
                        border: isSelected
                          ? "1px solid var(--gold)"
                          : "1px solid var(--border-subtle)",
                        cursor: service.included ? "default" : "pointer",
                        transition: "all 0.2s",
                        transform: justAdded ? "scale(0.98)" : "scale(1)",
                      }}
                    >
                      {/* Popular badge */}
                      {service.popular && (
                        <span style={{
                          position: "absolute", top: "12px", right: "12px",
                          background: "var(--gold)", color: isDark ? "#080808" : "#fff",
                          fontSize: "0.6rem", letterSpacing: "0.1em",
                          textTransform: "uppercase", padding: "2px 8px",
                          fontWeight: 700,
                        }}>
                          Popular
                        </span>
                      )}

                      {/* Included badge */}
                      {service.included && (
                        <span style={{
                          position: "absolute", top: "12px", right: "12px",
                          border: "1px solid var(--border)",
                          color: "var(--text-2)",
                          fontSize: "0.6rem", letterSpacing: "0.1em",
                          textTransform: "uppercase", padding: "2px 8px",
                        }}>
                          Incluido
                        </span>
                      )}

                      <div style={{ marginBottom: "8px" }}>
                        <p style={{
                          fontSize: "0.95rem", fontWeight: 500,
                          color: "var(--text)", margin: "0 0 4px",
                          paddingRight: service.popular || service.included ? "64px" : "0",
                        }}>
                          {service.name}
                        </p>
                        <p style={{ fontSize: "0.78rem", color: subtleText, margin: 0, lineHeight: 1.5 }}>
                          {service.description}
                        </p>
                      </div>

                      <div style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", marginTop: "16px",
                      }}>
                        <span style={{
                          fontSize: service.price === 0 ? "0.75rem" : "1rem",
                          fontWeight: 600,
                          color: service.price === 0 ? "var(--text-2)" : "var(--text)",
                          letterSpacing: service.price === 0 ? "0.05em" : "0",
                        }}>
                          {service.price === 0 ? "Siempre incluida" : `USD ${service.price.toLocaleString()}`}
                        </span>

                        {!service.included && (
                          <button
                            onClick={(e) => { e.stopPropagation(); toggle(service.id); }}
                            style={{
                              width: "32px", height: "32px",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              background: isSelected ? "var(--gold)" : "transparent",
                              border: `1px solid ${isSelected ? "var(--gold)" : "var(--border)"}`,
                              cursor: "pointer",
                              transition: "all 0.2s",
                              color: isSelected ? (isDark ? "#080808" : "#fff") : "var(--text-2)",
                              flexShrink: 0,
                            }}
                          >
                            {isSelected ? <Check size={14} /> : <Plus size={14} />}
                          </button>
                        )}
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: sticky cart panel (desktop) ── */}
          {!isMobile && (
            <CartPanel
              items={cartItems}
              total={total}
              onRemove={(id) => toggle(id)}
              whatsappUrl={whatsappUrl}
              isDark={isDark}
            />
          )}
        </div>

        {/* ── Mobile: floating cart button ── */}
        {isMobile && cartItems.length > 0 && (
          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "fixed", bottom: "24px", right: "24px", zIndex: 300,
              background: "var(--gold)", color: isDark ? "#080808" : "#fff",
              border: "none", cursor: "pointer",
              padding: "14px 20px",
              display: "flex", alignItems: "center", gap: "10px",
              fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <ShoppingBag size={18} />
            Ver cotización ({cartItems.length})
            <span style={{ fontWeight: 800 }}>USD {total.toLocaleString()}</span>
          </button>
        )}

        {/* ── Mobile: cart drawer ── */}
        {isMobile && (
          <>
            {/* Backdrop */}
            {cartOpen && (
              <div
                onClick={() => setCartOpen(false)}
                style={{
                  position: "fixed", inset: 0, zIndex: 400,
                  background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
                }}
              />
            )}
            {/* Drawer */}
            <div style={{
              position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500,
              background: isDark ? "var(--bg-2)" : "var(--bg-3)",
              borderTop: "1px solid var(--border)",
              transform: cartOpen ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
              maxHeight: "80vh",
              overflowY: "auto",
              padding: "0 0 32px",
            }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)",
                position: "sticky", top: 0,
                background: isDark ? "var(--bg-2)" : "var(--bg-3)",
              }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>
                  Tu cotización
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-2)" }}
                >
                  <X size={20} />
                </button>
              </div>
              <div style={{ padding: "0 24px" }}>
                <CartPanel
                  items={cartItems}
                  total={total}
                  onRemove={(id) => toggle(id)}
                  whatsappUrl={whatsappUrl}
                  isDark={isDark}
                  inline
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── CART PANEL ──────────────────────────────────────────────────────────────
function CartPanel({
  items, total, onRemove, whatsappUrl, isDark, inline = false,
}: {
  items: Service[];
  total: number;
  onRemove: (id: string) => void;
  whatsappUrl: string;
  isDark: boolean;
  inline?: boolean;
}) {
  const isEmpty = items.length === 0;

  return (
    <div style={
      inline
        ? { paddingTop: "16px" }
        : {
            position: "sticky",
            top: "100px",
            background: isDark ? "var(--bg-2)" : "var(--bg-3)",
            border: "1px solid var(--border)",
            padding: "32px 28px",
          }
    }>
      {/* Header */}
      {!inline && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <ShoppingBag size={18} style={{ color: "var(--gold)" }} />
          <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>
            Tu cotización
          </p>
          {items.length > 0 && (
            <span style={{
              marginLeft: "auto",
              background: "var(--gold)",
              color: isDark ? "#080808" : "#fff",
              fontSize: "0.65rem",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "99px",
            }}>
              {items.length}
            </span>
          )}
        </div>
      )}

      {/* Empty state */}
      {isEmpty ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p style={{ fontSize: "2rem", margin: "0 0 12px" }}>🎬</p>
          <p style={{ fontSize: "0.82rem", color: "var(--text-2)", margin: 0, lineHeight: 1.6 }}>
            Aún no seleccionaste ningún servicio. Elegí los que más te gusten para armar tu paquete ideal.
          </p>
        </div>
      ) : (
        <>
          {/* Items */}
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 500, lineHeight: 1.4 }}>
                    {item.name}
                  </p>
                  <p style={{ margin: "2px 0 0", fontSize: "0.75rem", color: "var(--text-2)" }}>
                    {item.price === 0 ? "Incluido" : `USD ${item.price.toLocaleString()}`}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-3)", padding: "2px", flexShrink: 0,
                    transition: "color 0.2s",
                  }}
                  title="Quitar"
                >
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>

          {/* Divider + total */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: "24px",
          }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-2)" }}>
              Total estimado
            </span>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>
              USD {total.toLocaleString()}
            </span>
          </div>

          {/* Note */}
          <p style={{
            fontSize: "0.72rem", color: "var(--text-2)", lineHeight: 1.6,
            marginBottom: "20px", textAlign: "center",
          }}>
            * El precio es referencial. Gabriel te confirmará la cotización final según fecha, locación y disponibilidad.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              padding: "16px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
              marginBottom: "12px",
            }}
          >
            <Send size={16} />
            Enviar cotización por WhatsApp
          </a>

          {/* Secondary: email / contact */}
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              width: "100%", padding: "13px",
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              cursor: "pointer",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            Preferís por email →
          </button>
        </>
      )}

      {/* Promo note */}
      {isEmpty && (
        <div style={{
          marginTop: "32px",
          padding: "16px",
          background: "var(--gold-dim)",
          border: "1px solid var(--border)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <Sparkles size={13} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>
              Tip
            </span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-2)", margin: 0, lineHeight: 1.6 }}>
            Combiná la cobertura, una segunda cámara y el teaser para redes para el pack más pedido del año.
          </p>
        </div>
      )}
    </div>
  );
}
