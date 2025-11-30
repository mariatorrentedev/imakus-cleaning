"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const services = [
  {
    title: "Commercial Kitchen Detailing",
    description: "Deep cleaning and sanitization of commercial kitchens, ensuring OSHA and EPA compliance for food safety standards.",
    image: "/images/imakus-cleaning-2.jpg",
  },
  {
    title: "Floor Maintenance",
    description: "Professional floor cleaning, polishing, and maintenance for all surface types, from warehouses to offices.",
    image: "/images/imakus-floors.jpg",
  },
  {
    title: "Ceiling Cleaning",
    description: "Professional ceiling cleaning and restoration for commercial spaces, removing stains and restoring appearance.",
    image: "/images/imakus-ceilings.jpg",
  },
  {
    title: "Escalator & Surface Detailing",
    description: "Specialized cleaning and maintenance of escalators, walkways, and detailed surface work.",
    image: "/images/imakus-detailing.jpg",
  },
  {
    title: "Deep Floor Restoration",
    description: "Complete floor cleaning and restoration services, transforming dirty floors to pristine condition.",
    image: "/images/imakus-before-after.jpg",
  },
  {
    title: "Warehouse & Industrial Cleaning",
    description: "Heavy-duty cleaning services for warehouses, production facilities, and industrial spaces.",
    image: "/images/imakus-cleaning.jpg",
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-muted/30">
      <div className="container px-6 md:px-12">
        {/* Section Header */}
        <header className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Some of Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored for commercial and industrial facilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6" />
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                animationFillMode: 'forwards'
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional commercial cleaning service`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
