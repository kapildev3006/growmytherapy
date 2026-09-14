import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AmbientBackground } from "@/components/ambient-background";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesSection } from "@/components/services-section";
import { ApproachGrid } from "@/components/approach-grid";
import { About } from "@/components/about";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { HashCleaner } from "@/components/hash-cleaner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream selection:bg-sage-200">
      <HashCleaner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero>
          <AmbientBackground />
        </Hero>
        <TrustStrip />
        <ServicesSection />
        <ApproachGrid />
        <About />
        <TestimonialsSection />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
