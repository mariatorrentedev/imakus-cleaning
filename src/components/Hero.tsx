"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display font-bold text-accent">
      {count}{suffix}
    </div>
  );
};

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="/images/hero-cleaning.png"
          alt="Professional commercial cleaning services in South Florida"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-6 left-6 md:left-12 z-20 animate-blur-in">
        <Image
          src="/images/logo-white-imakus.png"
          alt="Imakus Cleaning Solutions"
          width={160}
          height={80}
          className="h-20 md:h-32 lg:h-40 w-auto animate-float-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6 pt-48 pb-16">

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight animate-slide-up">
            Commercial Cleaning
            <br />
            <span className="text-accent">& Detailing Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Exceptional results tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="xl"
              variant="hero"
              className="group"
              asChild
            >
              <a href="mailto:steam@imakus.com" aria-label="Book a visit with Imakus Cleaning Solutions" data-gtm-cta="book-a-visit" data-gtm-location="hero-section">
                Book a Visit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline-light"
              asChild
            >
              <a href="#services" aria-label="View our cleaning services" data-gtm-cta="our-services" data-gtm-location="hero-section">Our Services</a>
            </Button>
          </div>

          {/* Trust Indicators with Animated Counters */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <article className="text-center">
              <AnimatedCounter end={164} suffix="+" />
              <div className="text-sm text-white/80 font-body mt-1">Clients Served</div>
            </article>
            <article className="text-center">
              <AnimatedCounter end={48} />
              <div className="text-sm text-white/80 font-body mt-1">Locations</div>
            </article>
            <article className="text-center">
              <AnimatedCounter end={36} suffix="K+" />
              <div className="text-sm text-white/80 font-body mt-1">Hours of Service</div>
            </article>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2" aria-hidden="true">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
