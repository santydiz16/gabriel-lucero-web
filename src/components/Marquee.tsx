"use client";

const items = [
  "Derecho Civil",
  "Derecho Laboral",
  "Derecho Penal",
  "Derecho Comercial",
  "Derecho de Familia",
  "Derecho Inmobiliario",
  "Confidencialidad",
  "Estrategia",
  "Resultados",
];

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "var(--gold)",
      margin: "0 28px",
      flexShrink: 0,
      verticalAlign: "middle",
      opacity: 0.7,
    }}
  />
);

export default function Marquee({ variant }: { variant: "dark" | "minimal" }) {
  const isDark = variant === "dark";
  const track = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        background: isDark ? "var(--bg-2)" : "var(--bg-2)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <div className="marquee-track" style={{ alignItems: "center" }}>
        {track.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: i % 3 === 0 ? "var(--gold)" : "var(--text-3)",
                fontWeight: i % 3 === 0 ? 600 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
