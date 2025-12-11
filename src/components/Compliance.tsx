"use client";

import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import Image from "next/image";

const beforeAfterImages = [
  { src: "/images/imakus-improve-air-quality.jpg", alt: "Before and after commercial cleaning - dusty equipment transformed to spotless condition" },
  { src: "/images/imakus-osha-certified.jpg", alt: "Before and after OSHA certified cleaning - industrial equipment restored to pristine condition" },
  { src: "/images/commercial-tile-floor-grout-cleaning-before-after-imakus.jpg", alt: "Commercial tile floor and grout cleaning before and after - Imakus Cleaning" },
  { src: "/images/food-service-steam-table-detailing-before-after-imakus.jpg", alt: "Food service steam table detailing before and after - Imakus Cleaning" },
  { src: "/images/industrial-stairwell-cleaning-before-after-imakus.jpg", alt: "Industrial stairwell cleaning before and after - Imakus Cleaning" },
  { src: "/images/tile-grout-restoration-before-after-imakus.jpg", alt: "Tile and grout restoration before and after - Imakus Cleaning" },
  { src: "/images/commercial-kitchen-wall-tile-cleaning-before-after-imakus.jpg", alt: "Commercial kitchen wall tile cleaning before and after - Imakus Cleaning" },
  { src: "/images/commercial-kitchen-equipment-floor-cleaning-before-after-imakus.jpg", alt: "Commercial kitchen equipment floor cleaning before and after - Imakus Cleaning" },
  { src: "/images/restroom-tile-floor-deep-cleaning-before-after-imakus.jpg", alt: "Restroom tile floor deep cleaning before and after - Imakus Cleaning" },
  { src: "/images/industrial-staircase-cleaning-before-after-imakus.jpg", alt: "Industrial staircase cleaning before and after - Imakus Cleaning" },
];

export const Compliance = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-accent/10 to-background">
      <div className="container px-6 md:px-12">
        {/* Section Header */}
        <header ref={leftRef} className="mb-6">
          <h2 className={`text-4xl md:text-5xl font-display font-bold leading-tight text-foreground transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            High Areas Dust Removal
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <article className="space-y-8">
            <div className={`inline-block px-4 py-2 bg-accent/10 rounded-full transition-all duration-700 delay-100 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                Compliance & Safety
              </span>
            </div>

            <h3 className={`text-4xl  font-display font-bold leading-tight text-foreground transition-all duration-700 delay-150 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              OSHA Certified Cleaning Standards
            </h3>

            <p className={`text-lg text-muted-foreground leading-relaxed font-body transition-all duration-700 delay-200 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              We understand the significance of maintaining cleanliness in facilities that adhere to
              food safety and quality standards. Our team specializes in cleaning to the
              specifications of OSHA and EPA audits, assisting clients in the food production,
              processing plants, and distribution sectors ensuring compliance and passing critical
              inspections by strictly adhering to hygiene practices.
            </p>

            <div className="space-y-4">
              {[
                { title: "Food Safety Compliant", desc: "Specialized cleaning for food production and processing facilities", delay: 300 },
                { title: "DOH Standards", desc: "Environmentally responsible cleaning methods and products", delay: 400 },
                { title: "OSHA Certified", desc: "Safe working practices ensuring employee and facility safety", delay: 500 }
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Right Content - Air Quality Info Card with Before/After */}
          <article ref={rightRef} className={`bg-card backdrop-blur-sm rounded-3xl p-8 border border-border transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Improved Air Quality</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed font-body">
                Regular cleaning and disinfecting improves air quality by reducing harmful particles,
                dust, and debris that can cause respiratory problems.
              </p>

              <blockquote className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-4 italic">
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  &quot;A dust-free environment is important to maintaining good health, especially for
                  people with respiratory issues, allergies or sensitivities.&quot;
                </p>
              </blockquote>

              {/* Before/After Image Carousel */}
              <div className="relative pt-2">
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-72">
                  <Image
                    src={beforeAfterImages[currentImageIndex].src}
                    alt={beforeAfterImages[currentImageIndex].alt}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-800" />
                </button>

                {/* Before/After Labels */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between pointer-events-none">
                  <span className="bg-neutral-800 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-display font-semibold shadow-lg">
                    Before
                  </span>
                  <span className="bg-accent backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-display font-semibold shadow-lg">
                    After
                  </span>
                </div>

                {/* Dot Indicators */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {beforeAfterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-accent' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-center text-muted-foreground/70 font-body text-xs pt-4">
                Real results from our commercial cleaning services
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
