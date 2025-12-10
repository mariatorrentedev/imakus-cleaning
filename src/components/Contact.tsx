"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-muted via-muted/80 to-background text-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <header className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contact Us for More <span className="text-accent">Information</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Contact us today to learn more about our cleaning services and get a personalized
              quote – we&apos;re here to make your space spotless!
            </p>
          </header>

          {/* Contact Cards */}
          <div className={`grid md:grid-cols-2 gap-6 mt-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Email Card */}
            <a
              href="mailto:steam@imakus.com"
              className="group bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Email Imakus Cleaning Solutions"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-accent transition-all">
                <Mail className="w-7 h-7 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground font-body mb-3">Get in touch via email</p>
              <p className="text-accent font-semibold">steam@imakus.com</p>
            </a>

            {/* Phone Card */}
            <a
              href="tel:786-571-7725"
              className="group bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Call Imakus Cleaning Solutions"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-accent transition-all">
                <Phone className="w-7 h-7 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground font-body mb-3">Speak with our team</p>
              <p className="text-accent font-semibold">786-571-7725</p>
            </a>
          </div>

          {/* CTA Button with Shimmer */}
          <div className={`pt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="xl"
              variant="hero"
              className="group shimmer-button"
              asChild
            >
              <a href="mailto:steam@imakus.com" aria-label="Book a visit today with Imakus Cleaning Solutions" data-gtm-cta="book-a-visit-today" data-gtm-location="contact-section">
                Book a Visit Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
