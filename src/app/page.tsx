import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const VARIANT = "dark" as const;

export default function Home() {
  return (
    <div className={`theme-${VARIANT}`}>
      <WhatsAppButton />
      <CookieBanner />
      <Navbar variant={VARIANT} />
      <Hero variant={VARIANT} />
      <Marquee variant={VARIANT} />
      <About variant={VARIANT} />
      <Services variant={VARIANT} />
      <Process variant={VARIANT} />
      <Testimonials variant={VARIANT} />
      <Contact variant={VARIANT} />
      <Footer variant={VARIANT} />
    </div>
  );
}
