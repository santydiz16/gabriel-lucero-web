"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { MessageCircle, Send, Calendar } from "lucide-react";

const IgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Contact({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    fecha: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you'd integrate with a form service (Formspree, EmailJS, etc.)
    // For now, open WhatsApp with the message
    const msg = encodeURIComponent(
      `Hola Gabriel! Me llamo ${formData.nombre}.\n\nFecha del evento: ${formData.fecha}\nEmail: ${formData.email}\n\n${formData.mensaje}`
    );
    window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: isDark ? "var(--bg-2)" : "var(--bg-3)",
    border: `1px solid var(--border-subtle)`,
    color: "var(--text)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--text-2)",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "120px 0",
        background: isDark ? "var(--bg)" : "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Urgency banner */}
        <AnimateIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 20px",
              background: "var(--gold-dim)",
              border: "1px solid var(--border)",
              marginBottom: "4rem",
              width: "fit-content",
            }}
          >
            <Calendar size={14} style={{ color: "var(--gold)" }} />
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: "var(--gold)",
                letterSpacing: "0.08em",
              }}
            >
              <strong>Fechas 2026 casi agotadas</strong> — Consultá disponibilidad para tu evento
            </p>
          </div>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Info */}
          <div>
            <AnimateIn>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Contacto
              </p>
              <h2
                className="heading-serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: isDark ? 400 : 300,
                  color: "var(--text)",
                  margin: "0 0 1.5rem",
                  lineHeight: 1.1,
                  letterSpacing: isDark ? "-0.01em" : "-0.03em",
                }}
              >
                {isDark ? (
                  <>
                    Reservá tu
                    <br />
                    <em>fecha hoy</em>
                  </>
                ) : (
                  <>
                    Reservá tu
                    <br />
                    fecha hoy
                  </>
                )}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  margin: "0 0 3rem",
                  maxWidth: "400px",
                }}
              >
                Completá el formulario y me contacto en menos de 24 horas.
                También podés escribirme directamente por WhatsApp o Instagram.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    padding: "16px 20px",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--gold-dim)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                >
                  <MessageCircle size={18} style={{ color: "var(--gold)" }} />
                  <div>
                    <div style={{ fontWeight: 500 }}>WhatsApp</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-2)" }}>
                      Respuesta en minutos
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/gabriellucero.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    padding: "16px 20px",
                    border: "1px solid var(--border-subtle)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                >
                  <IgIcon />
                  <div>
                    <div style={{ fontWeight: 500 }}>@gabriellucero.ph</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-2)" }}>
                      Ver trabajos recientes
                    </div>
                  </div>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Form */}
          <AnimateIn direction="left" delay={0.1}>
            {submitted ? (
              <div
                style={{
                  padding: "60px 40px",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                  background: "var(--gold-dim)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
                <h3
                  className="heading-serif"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    margin: "0 0 0.5rem",
                    fontWeight: 400,
                    fontStyle: isDark ? "italic" : "normal",
                  }}
                >
                  ¡Gracias!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-2)", margin: 0 }}>
                  Te contacto en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+54 9 11 xxxx xxxx"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Fecha del evento *</label>
                    <input
                      type="date"
                      required
                      value={formData.fecha}
                      onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      style={{ ...inputStyle, colorScheme: isDark ? "dark" : "light" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Contame sobre su historia</label>
                  <textarea
                    rows={4}
                    placeholder="¿Qué tipo de evento es? ¿Qué estilo imaginan? ¿Tienen locación en mente?"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "var(--gold)",
                    border: "none",
                    cursor: "pointer",
                    color: isDark ? "#080808" : "#fff",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "16px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
                >
                  <Send size={14} />
                  Enviar consulta
                </button>

                <p style={{ fontSize: "0.72rem", color: "var(--text-3)", textAlign: "center", margin: 0 }}>
                  Te respondo en menos de 24 horas · Sin compromiso
                </p>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
