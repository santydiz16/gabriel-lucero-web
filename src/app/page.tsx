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
import WhatsAppButton from "@/components/WhatsAppButton";

const VARIANT = "dark" as const;

export default function Home() {
  return (
    <div className={`theme-${VARIANT}`}>
      <WhatsAppButton />
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
