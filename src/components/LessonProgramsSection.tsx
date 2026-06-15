import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const LessonProgramsSection: React.FC = () => {
  const { programs } = siteContent;
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
      id="programs"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            data-reveal
            className="text-sm uppercase tracking-wider text-secondary font-medium mb-4 opacity-0 translate-y-8 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {programs.overline}
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight opacity-0 translate-y-8 transition-all duration-700 delay-75 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {programs.heading.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < programs.heading.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.items.map((program, index) => (
            <div
              key={index}
              data-reveal
              className="bg-surface rounded-3xl p-8 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300 relative opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Highlight Badge */}
              {program.highlight && (
                <div className="absolute top-6 right-6">
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {program.highlight}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-muted leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check size={18} className="text-accent" />
                    </div>
                    <span className="text-sm text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
