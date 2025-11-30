"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Mission = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="text-accent">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto" />
          </header>

          {/* Mission Content */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center font-body">
              At Imakus Cleaning Solutions, our unwavering commitment is to deliver{" "}
              <span className="text-foreground font-semibold">exceptional service</span> tailored to
              the specific requirements of your business.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center font-body">
              Utilizing specialized detailing techniques for all types of surfaces and employing
              professional equipment, we ensure that every job is executed with the utmost attention
              to detail and care. Our team of highly trained professionals is dedicated to providing
              top-quality cleaning services, and we stand behind our work with a comprehensive
              warranty to provide you with peace of mind.
            </p>
          </div>

          {/* Key Features Grid */}
          <div ref={featuresRef} className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Customized Schedules", desc: "Flexible timing to fit your needs", delay: 0 },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Experienced Staff", desc: "Highly trained professionals", delay: 100 },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Detail Oriented", desc: "Meticulous attention to every surface", delay: 200 },
              { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Advanced Equipment", desc: "Professional-grade machinery", delay: 300 }
            ].map((feature) => (
              <article
                key={feature.title}
                className={`text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
