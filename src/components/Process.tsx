"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Primera consulta",
    tag: "Gratuita · Sin compromiso",
    description:
      "Nos contactás y te escuchamos. Analizamos tu situación en una reunión presencial o virtual, te explicamos el panorama legal en términos claros y respondemos todas tus preguntas.",
  },
  {
    num: "02",
    title: "Diagnóstico y estrategia",
    tag: "Análisis · Plan personalizado",
    description:
      "Revisamos documentación, evaluamos antecedentes jurídicos y diseñamos la estrategia más sólida. Te presentamos un plan con objetivos claros, plazos reales y opciones concretas.",
  },
  {
    num: "03",
    title: "Representación activa",
    tag: "Acción · Seguimiento constante",
    description:
      "Actuamos ante juzgados, organismos y contrapartes. Redactamos escritos, presentamos recursos y negociamos en tu nombre, manteniéndote informado en cada paso del proceso.",
  },
  {
    num: "04",
    title: "Resolución",
    tag: "Cierre · Documentación completa",
    description:
      "Trabajamos hasta lograr el mejor resultado posible: sentencia favorable, acuerdo extrajudicial o cierre definitivo. La tranquilidad de nuestros clientes es el objetivo final.",
  },
];

export default function Process({ variant: _variant }: { variant: "dark" | "minimal" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="proceso"
      style={{
        padding: isMobile ? "80px 0" : "120px 0",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 clamp(32px, 5vw, 72px)",
        }}
      >
        {/* Header */}
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
              Nuestro proceso
            </span>
          </div>
          <h2
            className="heading-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--text)",
              margin: "0 0 4rem",
            }}
          >
            CLARO,
            <br />
            PASO A PASO.
          </h2>
        </AnimateIn>

        {/* Steps — alternating layout on desktop */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateIn key={step.num} delay={i * 0.1}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 80px 1fr",
                    gap: 0,
                    paddingBottom: isMobile ? "40px" : "0",
                    marginBottom: isMobile ? "0" : "0",
                    borderBottom: i < steps.length - 1 ? "1px solid var(--border-subtle)" : "none",
                  }}
                >
                  {/* Left content or spacer */}
                  <div
                    style={{
                      padding: isMobile ? "32px 0" : "48px 48px 48px 0",
                      order: isMobile ? 0 : isEven ? 0 : 2,
                      display: isEven || isMobile ? "block" : "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {(isEven || isMobile) ? (
                      <StepCard step={step} isMobile={isMobile} />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center number column — desktop only */}
                  {!isMobile && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        order: 1,
                      }}
                    >
                      {/* Top line */}
                      <div
                        style={{
                          flex: 1,
                          width: "1px",
                          background:
                            i === 0
                              ? "transparent"
                              : "var(--border-subtle)",
                        }}
                      />
                      {/* Number bubble */}
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          background: "var(--bg-2)",
                          border: "1px solid var(--gold)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          zIndex: 1,
                        }}
                      >
                        <span
                          className="heading-display"
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--gold)",
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                      {/* Bottom line */}
                      <div
                        style={{
                          flex: 1,
                          width: "1px",
                          background:
                            i === steps.length - 1
                              ? "transparent"
                              : "var(--border-subtle)",
                        }}
                      />
                    </div>
                  )}

                  {/* Right content or spacer */}
                  <div
                    style={{
                      padding: isMobile ? "0" : isEven ? "48px 0 48px 48px" : "48px 48px 48px 0",
                      order: isMobile ? 0 : isEven ? 2 : 0,
                    }}
                  >
                    {(!isEven && !isMobile) ? (
                      <StepCard step={step} isMobile={isMobile} />
                    ) : (
                      !isMobile && <div />
                    )}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* CTA strip */}
        <AnimateIn delay={0.4}>
          <div
            style={{
              marginTop: isMobile ? "3rem" : "5rem",
              background: "var(--bg-2)",
              border: "1px solid var(--border-subtle)",
              padding: isMobile ? "28px 20px" : "40px 48px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                className="heading-display"
                style={{
                  fontSize: isMobile ? "1.4rem" : "1.8rem",
                  color: "var(--text)",
                  marginBottom: "6px",
                }}
              >
                PRIMERA CONSULTA SIN COSTO.
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-2)", margin: 0 }}>
                Coordinamos una reunión y evaluamos tu caso juntos.
              </p>
            </div>
            <button
              onClick={() =>
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }
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
                flexShrink: 0,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Consultanos ahora
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function StepCard({
  step,
  isMobile,
}: {
  step: (typeof steps)[0];
  isMobile: boolean;
}) {
  return (
    <div style={{ maxWidth: isMobile ? "100%" : "380px" }}>
      {/* Mobile number */}
      {isMobile && (
        <div
          className="heading-display"
          style={{
            fontSize: "1rem",
            color: "var(--gold)",
            marginBottom: "12px",
          }}
        >
          {step.num}
        </div>
      )}

      <div
        style={{
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {step.tag}
      </div>

      <h3
        style={{
          fontSize: isMobile ? "1.1rem" : "1.25rem",
          fontWeight: 700,
          color: "var(--text)",
          margin: "0 0 14px",
          letterSpacing: "-0.01em",
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--text-2)",
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}
