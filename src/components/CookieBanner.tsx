"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "gn_privacy_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de privacidad"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "16px clamp(20px, 4vw, 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          fontSize: "0.72rem",
          color: "var(--text-2)",
          margin: 0,
          lineHeight: 1.6,
          maxWidth: "680px",
          letterSpacing: "0.01em",
        }}
      >
        Este sitio recopila datos personales únicamente a través del formulario de contacto, con el fin de responder consultas legales. La información es tratada con estricta confidencialidad conforme a la{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>Ley 25.326</strong>{" "}
        de Protección de Datos Personales de Argentina.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: "var(--gold)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "0.66rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "9px 20px",
            fontWeight: 700,
            fontFamily: "inherit",
            whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
        >
          Entendido
        </button>
        <button
          onClick={accept}
          aria-label="Cerrar aviso de privacidad"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-3)",
            padding: "4px",
            display: "flex",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
