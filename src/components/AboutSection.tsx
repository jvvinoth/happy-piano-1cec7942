import React, { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export const AboutSection: React.FC = () => {
  const { about } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="md:col-span-3">
            {/* Overline */}
            <p
              data-reveal
              className="text-sm uppercase tracking-wider text-secondary font-medium mb-4 opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {about.overline}
            </p>

            {/* Heading */}
            <h2
              data-reveal
              className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-75 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
            >
              {about.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < about.heading.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 max-w-[540px]">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  data-reveal
                  className="text-base md:text-lg text-primary leading-relaxed opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
                  style={{ transitionDelay: `${150 + index * 75}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            data-reveal
            className="md:col-span-2 opacity-0 translate-y-8 transition-all duration-700 delay-300 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-border shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt={about.imageCaption}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic text-center">
              {about.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
