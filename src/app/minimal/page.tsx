import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Cart from "@/components/Cart";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const VARIANT = "minimal" as const;

export default function MinimalPage() {
  return (
    <div className={`theme-${VARIANT}`}>
      {/* Theme toggle hint */}
      <a
        href="/"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 200,
          background: "rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.12)",
          color: "#888",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "8px 14px",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
      >
        ← Ver versión oscura
      </a>

      <Navbar variant={VARIANT} />
      <Hero variant={VARIANT} />
      <Portfolio variant={VARIANT} />
      <Services variant={VARIANT} />
      <Cart variant={VARIANT} />
      <Process variant={VARIANT} />
      <Testimonials variant={VARIANT} />
      <About variant={VARIANT} />
      <Contact variant={VARIANT} />
      <Footer variant={VARIANT} />
    </div>
  );
}
