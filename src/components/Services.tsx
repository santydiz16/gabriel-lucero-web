"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { Plus, Minus } from "lucide-react";

const areas = [
  {
    num: "01",
    title: "Derecho Civil",
    short: "Contratos, daños y sucesiones",
    description:
      "Asesoramiento y representación en conflictos civiles: contratos, daños y perjuicios, responsabilidad civil, sucesiones y herencias. Trabajamos para proteger tu patrimonio y derechos.",
    items: [
      "Redacción y revisión de contratos",
      "Daños y perjuicios",
      "Sucesiones y herencias",
      "Responsabilidad civil extracontractual",
      "Cobro ejecutivo de deudas",
    ],
  },
  {
    num: "02",
    title: "Derecho Laboral",
    short: "Despidos, ART y reclamos salariales",
    description:
      "Defensa de trabajadores y asesoría a empleadores. Actuamos ante Juzgados del Trabajo y en instancias administrativas con profundo conocimiento del mercado laboral argentino.",
    items: [
      "Despidos y liquidaciones",
      "Accidentes de trabajo (ART)",
      "Reclamos salariales",
      "Multas laborales",
      "Asesoría a empresas",
    ],
  },
  {
    num: "03",
    title: "Derecho Penal",
    short: "Defensa técnica en causas penales",
    description:
      "Defensa técnica en todas las instancias del proceso penal. Actuamos con rapidez, estrategia probada y compromiso absoluto con los derechos del imputado o querellante.",
    items: [
      "Defensa en causas penales",
      "Excarcelaciones y exenciones",
      "Recursos y apelaciones",
      "Querellas y denuncias penales",
      "Delitos económicos",
    ],
  },
  {
    num: "04",
    title: "Derecho Comercial",
    short: "Sociedades, contratos y quiebras",
    description:
      "Acompañamiento legal integral a empresas y emprendedores: constitución de sociedades, contratos comerciales, concursos preventivos y quiebras.",
    items: [
      "Constitución de sociedades",
      "Contratos comerciales",
      "Concursos y quiebras",
      "Derecho societario",
      "Resolución de conflictos entre socios",
    ],
  },
  {
    num: "05",
    title: "Derecho de Familia",
    short: "Divorcios, alimentos y tenencia",
    description:
      "Acompañamiento en los momentos más sensibles. Actuamos con tacto, firmeza y eficacia en divorcios, alimentos, tenencia de hijos y todas las cuestiones familiares.",
    items: [
      "Divorcios y separaciones",
      "Alimentos y cuota alimentaria",
      "Tenencia y régimen de visitas",
      "Adopción y tutela",
      "Violencia familiar",
    ],
  },
  {
    num: "06",
    title: "Derecho Inmobiliario",
    short: "Compraventas, alquileres y desalojos",
    description:
      "Toda operación vinculada a bienes inmuebles: compraventas, alquileres, desalojos, propiedad horizontal y conflictos entre consorcio y propietarios.",
    items: [
      "Compraventas y escrituras",
      "Contratos de locación",
      "Desalojos",
      "Propiedad horizontal",
      "Usucapión",
    ],
  },
];

export default function Services({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [open, setOpen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section
      id="areas"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: "var(--bg-2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 clamp(32px, 5vw, 72px)",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: isMobile ? "2.5rem" : "4rem",
          }}
        >
          <AnimateIn>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1rem",
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
                Áreas de práctica
              </span>
            </div>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "var(--text)",
                margin: 0,
              }}
            >
              ¿EN QUÉ
              <br />
              TE AYUDAMOS?
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-2)",
                lineHeight: 1.75,
                maxWidth: "300px",
                margin: 0,
              }}
            >
              Cobertura integral en las principales ramas del derecho argentino.
              Consultanos sin importar el área.
            </p>
          </AnimateIn>
        </div>

        {/* Accordion list */}
        <div>
          {areas.map((area, i) => (
            <AnimateIn key={area.num} delay={i * 0.04}>
              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  ...(i === areas.length - 1 && {
                    borderBottom: "1px solid var(--border-subtle)",
                  }),
                }}
              >
                {/* Row trigger */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: isMobile ? "22px 0" : "28px 0",
                    display: "grid",
                    gridTemplateColumns: isMobile
                      ? "48px 1fr 32px"
                      : "80px 1fr auto 48px",
                    alignItems: "center",
                    gap: isMobile ? "12px" : "24px",
                    fontFamily: "inherit",
                    textAlign: "left",
                    transition: "opacity 0.2s",
                  }}
                >
                  {/* Number */}
                  <div
                    className="heading-display"
                    style={{
                      fontSize: isMobile ? "1rem" : "1.2rem",
                      color: open === i ? "var(--gold)" : "var(--text-3)",
                      transition: "color 0.25s",
                    }}
                  >
                    {area.num}
                  </div>

                  {/* Title */}
                  <div>
                    <div
                      style={{
                        fontSize: isMobile ? "1.05rem" : "1.3rem",
                        fontWeight: 700,
                        color: open === i ? "var(--text)" : "var(--text-2)",
                        letterSpacing: "-0.01em",
                        transition: "color 0.25s",
                        marginBottom: "2px",
                      }}
                    >
                      {area.title}
                    </div>
                    {!isMobile && (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-3)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {area.short}
                      </div>
                    )}
                  </div>

                  {/* Hover indicator — desktop only */}
                  {!isMobile && (
                    <div
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                        opacity: open === i ? 0 : 1,
                        transition: "opacity 0.2s",
                      }}
                    >
                      {open === i ? "" : "Ver más"}
                    </div>
                  )}

                  {/* Plus/minus */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: open === i ? "var(--gold)" : "var(--text-3)",
                      transition: "all 0.25s",
                      background: open === i ? "var(--gold-dim)" : "transparent",
                      borderColor: open === i ? "var(--border)" : "var(--border-subtle)",
                    }}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          paddingBottom: "32px",
                          paddingLeft: isMobile ? "60px" : "104px",
                          display: "grid",
                          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                          gap: isMobile ? "20px" : "48px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-2)",
                            lineHeight: 1.8,
                            margin: 0,
                          }}
                        >
                          {area.description}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {area.items.map((item) => (
                            <li
                              key={item}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "8px 0",
                                fontSize: "0.82rem",
                                color: "var(--text-2)",
                                borderBottom: "1px solid var(--border-subtle)",
                              }}
                            >
                              <span
                                style={{
                                  width: "5px",
                                  height: "5px",
                                  background: "var(--gold)",
                                  flexShrink: 0,
                                  borderRadius: "50%",
                                }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.3}>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.85rem", color: "var(--text-2)" }}>
              ¿Tu caso no encaja en ninguna categoría?
            </span>
            <button
              onClick={() =>
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--gold)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "underline",
                padding: 0,
                fontFamily: "inherit",
              }}
            >
              Consultanos de todas formas →
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
