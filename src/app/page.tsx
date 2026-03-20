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

const VARIANT = "dark" as const;

export default function Home() {
  return (
    <div className={`theme-${VARIANT}`}>
      {/* Theme toggle hint */}
      <a
        href="/minimal"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 200,
          background: "rgba(201,168,92,0.15)",
          border: "1px solid rgba(201,168,92,0.3)",
          color: "#C9A85C",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "8px 14px",
          textDecoration: "none",
          backdropFilter: "blur(8px)",
          transition: "background 0.2s",
        }}
      >
        Ver versión minimal →
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
