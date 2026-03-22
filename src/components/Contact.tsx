"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";

const areas = [
  "Derecho Civil",
  "Derecho Laboral",
  "Derecho Penal",
  "Derecho Comercial",
  "Derecho de Familia",
  "Derecho Inmobiliario",
  "Otro / No sé",
];

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  area: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "", email: "", telefono: "", area: "", mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!formData.email.trim()) {
      e.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Ingresá un email válido.";
    }
    if (!formData.mensaje.trim()) e.mensaje = "Describí tu situación para poder ayudarte.";
    return e;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = encodeURIComponent(
      `Hola! Soy ${formData.nombre}.${formData.area ? `\nÁrea: ${formData.area}` : ""}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\n${formData.mensaje}`
    );
    window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  /* Shared input style */
  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-subtle)",
    color: "var(--text)",
    fontSize: "0.88rem",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    borderRadius: 0,
    transition: "border-color 0.2s, background 0.2s",
    appearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.62rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--text-3)",
    display: "block",
    marginBottom: "7px",
    fontWeight: 600,
  };

  if (submitted) {
    return (
      <section id="contacto" style={{ minHeight: "400px", background: "var(--bg-3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "0 24px" }}>
          <div className="heading-display" style={{ fontSize: "3rem", color: "var(--gold)", marginBottom: "1rem" }}>RECIBIDO.</div>
          <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>Te contactamos a la brevedad.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      style={{
        background: "var(--bg)",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
        minHeight: isMobile ? "auto" : "600px",
      }}
    >
      {/* ─── LEFT — dark info panel ─── */}
      <div
        style={{
          background: "var(--bg-2)",
          padding: isMobile ? "64px 24px" : "80px clamp(32px, 5vw, 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "3rem",
          borderRight: "1px solid var(--border-subtle)",
        }}
      >
        <AnimateIn direction="right">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "var(--gold)" }} />
              <span
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                Contacto
              </span>
            </div>

            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "var(--text)",
                margin: "0 0 1.5rem",
              }}
            >
              HABLEMOS
              <br />
              DE TU CASO.
            </h2>

            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>
              La primera consulta es <strong style={{ color: "var(--text)", fontWeight: 600 }}>gratuita y confidencial</strong>.
              Te decimos honestamente cómo podemos ayudarte.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { icon: <Phone size={15} />, label: "WhatsApp / Teléfono", value: "+54 9 11 0000-0000" },
                { icon: <MapPin size={15} />, label: "Ubicación", value: "San Luis, Argentina" },
                { icon: <Clock size={15} />, label: "Horario de atención", value: "Lun–Vie 9–19 h · Sáb 9–13 h" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "3px" }}>{item.label}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-2)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Social + brand */}
        <AnimateIn delay={0.15}>
          <div>
            <a
              href="https://www.instagram.com/estudiojuridico.gn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-2)",
                textDecoration: "none",
                fontSize: "0.78rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
            >
              <IgIcon />
              @estudiojuridico.gn
            </a>
            <Image
              src="/logo.png"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              style={{ marginTop: "2rem", mixBlendMode: "screen", opacity: 0.35 }}
            />
          </div>
        </AnimateIn>
      </div>

      {/* ─── RIGHT — form panel ─── */}
      <div
        style={{
          padding: isMobile ? "56px 24px" : "80px clamp(32px, 5vw, 64px)",
          background: "var(--bg)",
        }}
      >
        <AnimateIn direction="left" delay={0.1}>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "18px",
                marginBottom: "18px",
              }}
            >
              <div>
                <label htmlFor="nombre" style={labelStyle}>Nombre completo *</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  aria-required="true"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  placeholder="Juan García"
                  value={formData.nombre}
                  onChange={handleChange}
                  style={{ ...inputBase, borderColor: errors.nombre ? "#E05C5C" : undefined }}
                  onFocus={(e) => { e.target.style.borderColor = errors.nombre ? "#E05C5C" : "var(--gold)"; e.target.style.background = "rgba(184,115,42,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.nombre ? "#E05C5C" : "var(--border-subtle)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
                {errors.nombre && <p id="nombre-error" style={{ color: "#E05C5C", fontSize: "0.68rem", margin: "5px 0 0", letterSpacing: "0.02em" }}>{errors.nombre}</p>}
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="juan@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ ...inputBase, borderColor: errors.email ? "#E05C5C" : undefined }}
                  onFocus={(e) => { e.target.style.borderColor = errors.email ? "#E05C5C" : "var(--gold)"; e.target.style.background = "rgba(184,115,42,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.email ? "#E05C5C" : "var(--border-subtle)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
                {errors.email && <p id="email-error" style={{ color: "#E05C5C", fontSize: "0.68rem", margin: "5px 0 0", letterSpacing: "0.02em" }}>{errors.email}</p>}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "18px",
                marginBottom: "18px",
              }}
            >
              <div>
                <label htmlFor="telefono" style={labelStyle}>Teléfono / WhatsApp</label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  placeholder="+54 9 11 ..."
                  value={formData.telefono}
                  onChange={handleChange}
                  style={inputBase}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; e.target.style.background = "rgba(184,115,42,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>
              <div>
                <label htmlFor="area" style={labelStyle}>Área legal</label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  style={{ ...inputBase, cursor: "pointer", colorScheme: "dark" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; e.target.style.background = "rgba(184,115,42,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <option value="">Seleccioná un área</option>
                  {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label htmlFor="mensaje" style={labelStyle}>Describí tu situación *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                aria-required="true"
                aria-invalid={!!errors.mensaje}
                aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                placeholder="Contanos brevemente tu caso o consulta..."
                value={formData.mensaje}
                onChange={handleChange}
                style={{ ...inputBase, minHeight: "150px", resize: "vertical", borderColor: errors.mensaje ? "#E05C5C" : undefined }}
                onFocus={(e) => { e.target.style.borderColor = errors.mensaje ? "#E05C5C" : "var(--gold)"; e.target.style.background = "rgba(184,115,42,0.05)"; }}
                onBlur={(e) => { e.target.style.borderColor = errors.mensaje ? "#E05C5C" : "var(--border-subtle)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
              />
              {errors.mensaje && <p id="mensaje-error" style={{ color: "#E05C5C", fontSize: "0.68rem", margin: "5px 0 0", letterSpacing: "0.02em" }}>{errors.mensaje}</p>}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--gold)",
                  border: "none",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "15px 28px",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
              >
                Enviar por WhatsApp
                <ArrowRight size={14} />
              </button>

              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#25D366",
                  border: "none",
                  color: "#fff",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "15px 22px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Chat directo
              </a>
            </div>

            <p style={{ fontSize: "0.68rem", color: "var(--text-3)", marginTop: "14px", lineHeight: 1.6 }}>
              Tu información es estrictamente confidencial y se utiliza solo para responder tu consulta.
            </p>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
